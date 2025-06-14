import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  ElementRef
} from '@angular/core';

const dummyContainer = typeof document !== 'undefined' ? document.createDocumentFragment() : null;

@Component({
  selector: 'offscreen-fragment',
  template: '<ng-content></ng-content>',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class OffscreenFragmentComponent implements AfterViewInit, OnDestroy {
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    if (dummyContainer) {
      dummyContainer.appendChild(this.element.nativeElement)
    }
  }

  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    if (dummyContainer) {
      dummyContainer.removeChild(this.element.nativeElement)
    }
  }
}
