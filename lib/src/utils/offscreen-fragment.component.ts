import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  ElementRef, Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'offscreen-fragment',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class OffscreenFragmentComponent implements AfterViewInit, OnDestroy {

  private dummyContainer!: DocumentFragment;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.dummyContainer = this.document.createDocumentFragment();
  }

  ngAfterViewInit() {
    this.dummyContainer.appendChild(this.element.nativeElement)
  }

  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    this.dummyContainer.removeChild(this.element.nativeElement)
  }
}
