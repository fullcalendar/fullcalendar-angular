import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  ElementRef
} from '@angular/core';

const dummyContainer = document.createDocumentFragment()

@Component({
  selector: 'offscreen-fragment',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class OffscreenFragmentComponent implements AfterViewInit, OnDestroy {
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this.element.nativeElement

    if (el) {
      dummyContainer.appendChild(el)
    }
  }

  ngOnDestroy() {
    const el = this.element.nativeElement

    if (el && el.parentNode === dummyContainer) {
      dummyContainer.removeChild(el)
    }
  }
}
