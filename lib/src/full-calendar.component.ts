import {
  Component,
  ContentChild,
  TemplateRef,
  ElementRef,
  Input,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { CustomRendering, CustomRenderingStore } from '@fullcalendar/core/internal';
import { OPTION_INPUT_NAMES, OPTION_TEMPLATE_NAMES, OPTION_IS_DEEP } from './options';
import { CalendarOption, CalendarTemplateRef } from './private-types';
import { deepCopy, shallowCopy, mapHash } from './utils/obj';
import { deepEqual } from './utils/fast-deep-equal';

@Component({
  selector: 'full-calendar',
  templateUrl: './full-calendar.component.html',
  encapsulation: ViewEncapsulation.None // the styles are root-level, not scoped within the component
})
export class FullCalendarComponent implements AfterViewInit, DoCheck, AfterContentChecked, OnDestroy {
  @Input() options?: CalendarOptions;
  @Input() deepChangeDetection?: boolean;

  /*
  Options as individual Inputs
  NOTE: keep in sync with OPTION_INPUT_NAMES
  */
  @Input() events?: CalendarOption<'events'>;
  @Input() eventSources?: CalendarOption<'eventSources'>;
  @Input() resources?: CalendarOption<'resources'>;

  /*
  NOTE: keep in sync with OPTION_TEMPLATE_NAMES
  */
  @ContentChild('allDayContent', { static: true }) allDayContent?: CalendarTemplateRef<'allDayContent'>;
  @ContentChild('noEventsContent', { static: true }) noEventsContent?: CalendarTemplateRef<'noEventsContent'>;
  @ContentChild('eventContent', { static: true }) eventContent?: CalendarTemplateRef<'eventContent'>;

  private calendar: Calendar | null = null;
  private optionSnapshot: Record<string, any> = {}; // for diffing
  private handleCustomRendering: (customRendering: CustomRendering<any>) => void
  private customRenderingMap = new Map<string, CustomRendering<any>>()
  private customRenderingArray?: CustomRendering<any>[]
  public templateMap: { [templateName: string]: TemplateRef<any> } = {}

  constructor(
    private element: ElementRef,
    changeDetector: ChangeDetectorRef
  ) {
    const customRenderingStore = new CustomRenderingStore();

    customRenderingStore.subscribe((customRenderingMap) => {
      this.customRenderingMap = customRenderingMap;
      this.customRenderingArray = undefined; // clear cache
      changeDetector.detectChanges();
    });

    this.handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore);
    this.templateMap = this as any; // alias to this
  }

  ngAfterViewInit() {
    const { deepChangeDetection } = this;
    const options = {
      ...this.options,
      ...this.buildInputOptions(),
    };

    // initialize snapshot
    this.optionSnapshot = mapHash(options, (optionVal: any, optionName: string) => (
      (deepChangeDetection && OPTION_IS_DEEP[optionName])
        ? deepCopy(optionVal)
        : optionVal
    ));

    this.calendar = new Calendar(this.element.nativeElement, {
      ...options,
      ...this.buildExtraOptions(),
    });
    this.calendar.render();
  }

  /*
  allows us to manually detect complex input changes, internal mutations to certain options.
  called before ngOnChanges. called much more often than ngOnChanges.
  */
  ngDoCheck() {
    if (this.calendar) { // not the initial render
      const { deepChangeDetection, optionSnapshot } = this;
      const newOptions = {
        ...this.options,
        ...this.buildInputOptions(),
      };
      const newProcessedOptions: Record<string, any> = {};
      let anyChanges = false;

      // detect adds and updates (and update snapshot)
      for (const optionName in newOptions) {
        if (newOptions.hasOwnProperty(optionName)) {
          let optionVal = newOptions[optionName as keyof CalendarOptions];

          if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
            if (!deepEqual(optionSnapshot[optionName], optionVal)) {
              optionSnapshot[optionName] = deepCopy(optionVal);
              anyChanges = true;

              // trick FC into knowing about a nested change.
              // TODO: future versions won't need this.
              // can't use the previously-made deep copy because it blows away prototype-association.
              optionVal = shallowCopy(optionVal);
            }
          } else {
            if (optionSnapshot[optionName] !== optionVal) {
              optionSnapshot[optionName] = optionVal;
              anyChanges = true;
            }
          }

          newProcessedOptions[optionName] = optionVal;
        }
      }

      const oldOptionNames = Object.keys(optionSnapshot);

      // detect removals (and update snapshot)
      for (const optionName of oldOptionNames) {
        if (!(optionName in newOptions)) { // doesn't exist in new options?
          delete optionSnapshot[optionName];
          anyChanges = true;
        }
      }

      if (anyChanges) {
        this.calendar.pauseRendering();
        this.calendar.resetOptions({
          ...newProcessedOptions,
          ...this.buildExtraOptions(),
        });
      }
    }
  }

  ngAfterContentChecked() {
    if (this.calendar) { // too defensive?
      this.calendar.resumeRendering();
    }
  }

  ngOnDestroy() {
    if (this.calendar) { // too defensive?
      this.calendar.destroy();
      this.calendar = null;
    }
  }

  get customRenderings(): CustomRendering<any>[] {
    return this.customRenderingArray ||
      (this.customRenderingArray = [...this.customRenderingMap.values()]);
  }

  public getApi(): Calendar {
    return this.calendar!;
  }

  private buildInputOptions(): CalendarOptions {
    const options: CalendarOptions = {}

    for (const inputName of OPTION_INPUT_NAMES) {
      const inputValue = (this as any)[inputName];

      if (inputValue !== undefined) {
        (options as any)[inputName] = inputValue;
      }
    }

    return options;
  }

  private buildExtraOptions(): CalendarOptions {
    const customRenderingMetaMap: { [templateName: string]: boolean } = {};

    for (const templateName of OPTION_TEMPLATE_NAMES) {
      customRenderingMetaMap[templateName] = Boolean((this as any)[templateName]);
    }

    return {
      customRenderingMetaMap,
      handleCustomRendering: this.handleCustomRendering,
    };
  }
}
