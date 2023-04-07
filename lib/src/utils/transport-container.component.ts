import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  ElementRef,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

const dummyContainer = document.createDocumentFragment();

@Component({
  selector: 'transport-container',
  templateUrl: './transport-container.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TransportContainerComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  @Input() inPlaceOf!: HTMLElement; // required
  @Input() reportEl!: (el: HTMLElement | null) => void; // required
  @Input() elTag!: string; // required
  @Input() elClasses?: string[];
  @Input() elStyle?: Record<string, unknown>;
  @Input() elAttrs?: Record<string, unknown>;
  @Input() template!: TemplateRef<any>; // required
  @Input() renderProps?: any;

  @ViewChild('rootEl') rootElRef?: ElementRef;

  ngAfterViewInit() {
    const rootEl: Element = this.rootElRef?.nativeElement; // assumed defined

    replaceEl(rootEl, this.inPlaceOf);
    applyElAttrs(rootEl, undefined, this.elAttrs);

    // insurance for if Preact recreates and reroots inPlaceOf element
    this.inPlaceOf.style.display = 'none';

    this.reportEl(rootEl as HTMLElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    const rootEl: Element | undefined = this.rootElRef?.nativeElement;

    // ngOnChanges is called before ngAfterViewInit (and before DOM initializes)
    // so make sure rootEl is defined before doing anything
    if (rootEl) {
      // If the ContentContainer's tagName changed, it will create a new DOM element in its
      // original place. Detect this and re-replace.
      if (this.inPlaceOf.parentNode !== dummyContainer) {
        replaceEl(rootEl, this.inPlaceOf);
        applyElAttrs(rootEl, undefined, this.elAttrs);
        this.reportEl(rootEl as HTMLElement);
      } else {
        const elAttrsChange = changes['elAttrs'];

        if (elAttrsChange) {
          applyElAttrs(
            rootEl,
            elAttrsChange.previousValue,
            elAttrsChange.currentValue
          );
        }
      }
    }
  }

  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    // protect against Preact recreating and rerooting inPlaceOf element
    if (this.inPlaceOf.parentNode === dummyContainer) {
      dummyContainer.removeChild(this.inPlaceOf);
    }

    this.reportEl(null);
  }
}

function replaceEl(subject: Element, inPlaceOf: Element): void {
  inPlaceOf.parentNode?.insertBefore(subject, inPlaceOf.nextSibling);
  dummyContainer.appendChild(inPlaceOf);
}

function applyElAttrs(
  el: Element,
  previousAttrs: Record<string, any> = {},
  currentAttrs: Record<string, any> = {}
): void {
  // these are called "attributes" but they manipulate DOM node *properties*

  for (const attrName in previousAttrs) {
    if (!(attrName in currentAttrs)) {
      (el as any)[attrName] = null;
    }
  }

  for (const attrName in currentAttrs) {
    (el as any)[attrName] = currentAttrs[attrName];
  }
}
