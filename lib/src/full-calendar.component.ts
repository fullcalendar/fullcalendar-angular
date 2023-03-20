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
import { OPTION_INPUT_NAMES, OPTION_IS_DEEP } from './options';
import { CalendarOption, CalendarTemplateRef } from './private-types';
import { deepCopy, mapHash } from './utils/obj';
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
  @Input() events?: CalendarOption<'events'> | null | undefined;
  @Input() eventSources?: CalendarOption<'eventSources'> | null | undefined;
  @Input() resources?: CalendarOption<'resources'> | null | undefined;

  /*
  Templates
  */
  @ContentChild('dayHeaderContent', { static: true }) dayHeaderContent?: CalendarTemplateRef<'dayHeaderContent'>;
  @ContentChild('dayCellContent', { static: true }) dayCellContent?: CalendarTemplateRef<'dayCellContent'>;
  @ContentChild('weekNumberContent', { static: true }) weekNumberContent?: CalendarTemplateRef<'weekNumberContent'>;
  @ContentChild('nowIndicatorContent', { static: true }) nowIndicatorContent?: CalendarTemplateRef<'nowIndicatorContent'>;
  @ContentChild('eventContent', { static: true }) eventContent?: CalendarTemplateRef<'eventContent'>;
  @ContentChild('slotLaneContent', { static: true }) slotLaneContent?: CalendarTemplateRef<'slotLaneContent'>;
  @ContentChild('slotLabelContent', { static: true }) slotLabelContent?: CalendarTemplateRef<'slotLabelContent'>;
  @ContentChild('allDayContent', { static: true }) allDayContent?: CalendarTemplateRef<'allDayContent'>;
  @ContentChild('moreLinkContent', { static: true }) moreLinkContent?: CalendarTemplateRef<'moreLinkContent'>;
  @ContentChild('noEventsContent', { static: true }) noEventsContent?: CalendarTemplateRef<'noEventsContent'>;
  @ContentChild('resourceAreaHeaderContent', { static: true }) resourceAreaHeaderContent?: CalendarTemplateRef<'resourceAreaHeaderContent'>;
  @ContentChild('resourceGroupLabelContent', { static: true }) resourceGroupLabelContent?: CalendarTemplateRef<'resourceGroupLabelContent'>;
  @ContentChild('resourceLabelContent', { static: true }) resourceLabelContent?: CalendarTemplateRef<'resourceLabelContent'>;
  @ContentChild('resourceLaneContent', { static: true }) resourceLaneContent?: CalendarTemplateRef<'resourceLaneContent'>;
  @ContentChild('resourceGroupLaneContent', { static: true }) resourceGroupLaneContent?: CalendarTemplateRef<'resourceGroupLaneContent'>;

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

    const calendarEl = this.element.nativeElement
    const calendar = this.calendar = new Calendar(calendarEl, {
      ...options,
      ...this.buildExtraOptions(),
    });

    // Ionic dimensions hack
    // https://github.com/fullcalendar/fullcalendar/issues/4976
    const ionContent = calendarEl.closest('ion-content')
    if (ionContent && ionContent.componentOnReady) {
      ionContent.componentOnReady().then(() => {
        window.requestAnimationFrame(() => {
          calendar.render()
        })
      })
    } else {
      calendar.render()
    }
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
      const changedOptionNames: string[] = []

      // detect adds and updates (and update snapshot)
      for (const optionName in newOptions) {
        if (newOptions.hasOwnProperty(optionName)) {
          let optionVal = newOptions[optionName as keyof CalendarOptions];

          if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
            if (!deepEqual(optionSnapshot[optionName], optionVal)) {
              optionSnapshot[optionName] = deepCopy(optionVal);
              changedOptionNames.push(optionName);
            }
          } else {
            if (optionSnapshot[optionName] !== optionVal) {
              optionSnapshot[optionName] = optionVal;
              changedOptionNames.push(optionName);
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
          changedOptionNames.push(optionName);
        }
      }

      if (changedOptionNames.length) {
        this.calendar.pauseRendering();
        this.calendar.resetOptions({
          ...newProcessedOptions,
          ...this.buildExtraOptions(),
        }, changedOptionNames);
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

      if (inputValue != null) { // exclude both null and undefined
        (options as any)[inputName] = inputValue;
      }
    }

    return options;
  }

  private buildExtraOptions(): CalendarOptions {
    return {
      handleCustomRendering: this.handleCustomRendering,
      customRenderingMetaMap: this.templateMap,
      customRenderingReplacesEl: true,
    };
  }

  // for `trackBy` in loop
  trackCustomRendering(index: number, customRendering: CustomRendering<any>): any {
    return customRendering.id
  }
}
