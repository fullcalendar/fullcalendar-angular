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
    dummyContainer.appendChild(this.element.nativeElement)
  }

  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    dummyContainer.removeChild(this.element.nativeElement)
  }
}
