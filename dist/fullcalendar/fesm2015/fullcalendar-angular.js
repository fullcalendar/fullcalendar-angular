import { Calendar } from '@fullcalendar/core';
import { Component, ElementRef, Input, Output, EventEmitter, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
the docs point to this file as an index of options.
when this files is moved, update the docs.
*/
/** @type {?} */
const INPUT_NAMES = [
    'header',
    'footer',
    'customButtons',
    'buttonIcons',
    'themeSystem',
    'bootstrapFontAwesome',
    'firstDay',
    'dir',
    'weekends',
    'hiddenDays',
    'fixedWeekCount',
    'weekNumbers',
    'weekNumbersWithinDays',
    'weekNumberCalculation',
    'businessHours',
    'showNonCurrentDates',
    'height',
    'contentHeight',
    'aspectRatio',
    'handleWindowResize',
    'windowResizeDelay',
    'eventLimit',
    'eventLimitClick',
    'timeZone',
    'now',
    'defaultView',
    'allDaySlot',
    'allDayText',
    'slotDuration',
    'slotLabelFormat',
    'slotLabelInterval',
    'snapDuration',
    'scrollTime',
    'minTime',
    'maxTime',
    'slotEventOverlap',
    'listDayFormat',
    'listDayAltFormat',
    'noEventsMessage',
    'defaultDate',
    'nowIndicator',
    'visibleRange',
    'validRange',
    'dateIncrement',
    'dateAlignment',
    'duration',
    'dayCount',
    'locales',
    'locale',
    'eventTimeFormat',
    'columnHeader',
    'columnHeaderFormat',
    'columnHeaderText',
    'columnHeaderHtml',
    'titleFormat',
    'weekLabel',
    'displayEventTime',
    'displayEventEnd',
    'eventLimitText',
    'dayPopoverFormat',
    'navLinks',
    'navLinkDayClick',
    'navLinkWeekClick',
    'selectable',
    'selectMirror',
    'unselectAuto',
    'unselectCancel',
    'defaultAllDayEventDuration',
    'defaultTimedEventDuration',
    'cmdFormatter',
    'defaultRangeSeparator',
    'selectConstraint',
    'selectOverlap',
    'selectAllow',
    'editable',
    'eventStartEditable',
    'eventDurationEditable',
    'eventConstraint',
    'eventOverlap',
    'eventAllow',
    'eventClassName',
    'eventClassNames',
    'eventBackgroundColor',
    'eventBorderColor',
    'eventTextColor',
    'eventColor',
    'events',
    'eventSources',
    'allDayDefault',
    'startParam',
    'endParam',
    'lazyFetching',
    'nextDayThreshold',
    'eventOrder',
    'rerenderDelay',
    'dragRevertDuration',
    'dragScroll',
    'longPressDelay',
    'eventLongPressDelay',
    'droppable',
    'dropAccept',
    'eventDataTransform',
    'allDayMaintainDuration',
    'eventResizableFromStart',
    // compound OptionsInput...
    'buttonText',
    'views',
    'plugins',
    // scheduler...
    'schedulerLicenseKey',
    'resources',
    'resourceLabelText',
    'resourceOrder',
    'filterResourcesWithEvents',
    'resourceText',
    'resourceGroupField',
    'resourceGroupText',
    'resourceAreaWidth',
    'resourceColumns',
    'resourcesInitiallyExpanded',
    'slotWidth',
    'datesAboveResources'
];
/** @type {?} */
const EVENT_NAMES = [
    'datesRender',
    'datesDestroy',
    'dayRender',
    'windowResize',
    'dateClick',
    'eventClick',
    'eventMouseEnter',
    'eventMouseLeave',
    'select',
    'unselect',
    'loading',
    'eventRender',
    'eventPositioned',
    'eventDestroy',
    'eventDragStart',
    'eventDragStop',
    'eventDrop',
    'eventResizeStart',
    'eventResizeStop',
    'eventResize',
    'drop',
    'eventReceive',
    'eventLeave',
    'viewSkeletonRender',
    'viewSkeletonDestroy',
    '_destroyed',
    // scheduler...
    'resourceRender'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullCalendarComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.datesRender = new EventEmitter();
        this.datesDestroy = new EventEmitter();
        this.dayRender = new EventEmitter();
        this.windowResize = new EventEmitter();
        this.dateClick = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.eventMouseEnter = new EventEmitter();
        this.eventMouseLeave = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.eventPositioned = new EventEmitter();
        this.eventDestroy = new EventEmitter();
        this.eventDragStart = new EventEmitter();
        this.eventDragStop = new EventEmitter();
        this.eventDrop = new EventEmitter();
        this.eventResizeStart = new EventEmitter();
        this.eventResizeStop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.drop = new EventEmitter();
        this.eventReceive = new EventEmitter();
        this.eventLeave = new EventEmitter();
        this.viewSkeletonRender = new EventEmitter();
        this.viewSkeletonDestroy = new EventEmitter();
        this._destroyed = new EventEmitter();
        // scheduler...
        this.resourceRender = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    }
    /**
     * @return {?}
     */
    buildOptions() {
        /** @type {?} */
        const options = {};
        EVENT_NAMES.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        eventName => {
            options[eventName] = (/**
             * @param {?} info
             * @return {?}
             */
            info => {
                this[eventName].emit(info); // TODO: handle more than one arg?
            });
        }));
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            if (this[inputName] !== undefined) { // unfortunately FC chokes when some props are set to undefined
                options[inputName] = this[inputName];
            }
        }));
        return options;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            /** @type {?} */
            const updatedInputs = {};
            for (const inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    updatedInputs[inputName] = changes[inputName].currentValue;
                }
            }
            this.calendar.setOptions(updatedInputs);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.calendar.destroy();
        this.calendar = null;
    }
    /**
     * @return {?}
     */
    getApi() {
        return this.calendar;
    }
}
FullCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'full-calendar',
                template: ''
            }] }
];
/** @nocollapse */
FullCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
FullCalendarComponent.propDecorators = {
    header: [{ type: Input }],
    footer: [{ type: Input }],
    customButtons: [{ type: Input }],
    buttonIcons: [{ type: Input }],
    themeSystem: [{ type: Input }],
    bootstrapFontAwesome: [{ type: Input }],
    firstDay: [{ type: Input }],
    dir: [{ type: Input }],
    weekends: [{ type: Input }],
    hiddenDays: [{ type: Input }],
    fixedWeekCount: [{ type: Input }],
    weekNumbers: [{ type: Input }],
    weekNumbersWithinDays: [{ type: Input }],
    weekNumberCalculation: [{ type: Input }],
    businessHours: [{ type: Input }],
    showNonCurrentDates: [{ type: Input }],
    height: [{ type: Input }],
    contentHeight: [{ type: Input }],
    aspectRatio: [{ type: Input }],
    handleWindowResize: [{ type: Input }],
    windowResizeDelay: [{ type: Input }],
    eventLimit: [{ type: Input }],
    eventLimitClick: [{ type: Input }],
    timeZone: [{ type: Input }],
    now: [{ type: Input }],
    defaultView: [{ type: Input }],
    allDaySlot: [{ type: Input }],
    allDayText: [{ type: Input }],
    slotDuration: [{ type: Input }],
    slotLabelFormat: [{ type: Input }],
    slotLabelInterval: [{ type: Input }],
    snapDuration: [{ type: Input }],
    scrollTime: [{ type: Input }],
    minTime: [{ type: Input }],
    maxTime: [{ type: Input }],
    slotEventOverlap: [{ type: Input }],
    listDayFormat: [{ type: Input }],
    listDayAltFormat: [{ type: Input }],
    noEventsMessage: [{ type: Input }],
    defaultDate: [{ type: Input }],
    nowIndicator: [{ type: Input }],
    visibleRange: [{ type: Input }],
    validRange: [{ type: Input }],
    dateIncrement: [{ type: Input }],
    dateAlignment: [{ type: Input }],
    duration: [{ type: Input }],
    dayCount: [{ type: Input }],
    locales: [{ type: Input }],
    locale: [{ type: Input }],
    eventTimeFormat: [{ type: Input }],
    columnHeader: [{ type: Input }],
    columnHeaderFormat: [{ type: Input }],
    columnHeaderText: [{ type: Input }],
    columnHeaderHtml: [{ type: Input }],
    titleFormat: [{ type: Input }],
    weekLabel: [{ type: Input }],
    displayEventTime: [{ type: Input }],
    displayEventEnd: [{ type: Input }],
    eventLimitText: [{ type: Input }],
    dayPopoverFormat: [{ type: Input }],
    navLinks: [{ type: Input }],
    navLinkDayClick: [{ type: Input }],
    navLinkWeekClick: [{ type: Input }],
    selectable: [{ type: Input }],
    selectMirror: [{ type: Input }],
    unselectAuto: [{ type: Input }],
    unselectCancel: [{ type: Input }],
    defaultAllDayEventDuration: [{ type: Input }],
    defaultTimedEventDuration: [{ type: Input }],
    cmdFormatter: [{ type: Input }],
    defaultRangeSeparator: [{ type: Input }],
    selectConstraint: [{ type: Input }],
    selectOverlap: [{ type: Input }],
    selectAllow: [{ type: Input }],
    editable: [{ type: Input }],
    eventStartEditable: [{ type: Input }],
    eventDurationEditable: [{ type: Input }],
    eventConstraint: [{ type: Input }],
    eventOverlap: [{ type: Input }],
    eventAllow: [{ type: Input }],
    eventClassName: [{ type: Input }],
    eventClassNames: [{ type: Input }],
    eventBackgroundColor: [{ type: Input }],
    eventBorderColor: [{ type: Input }],
    eventTextColor: [{ type: Input }],
    eventColor: [{ type: Input }],
    events: [{ type: Input }],
    eventSources: [{ type: Input }],
    allDayDefault: [{ type: Input }],
    startParam: [{ type: Input }],
    endParam: [{ type: Input }],
    lazyFetching: [{ type: Input }],
    nextDayThreshold: [{ type: Input }],
    eventOrder: [{ type: Input }],
    rerenderDelay: [{ type: Input }],
    dragRevertDuration: [{ type: Input }],
    dragScroll: [{ type: Input }],
    longPressDelay: [{ type: Input }],
    eventLongPressDelay: [{ type: Input }],
    droppable: [{ type: Input }],
    dropAccept: [{ type: Input }],
    eventDataTransform: [{ type: Input }],
    allDayMaintainDuration: [{ type: Input }],
    eventResizableFromStart: [{ type: Input }],
    buttonText: [{ type: Input }],
    views: [{ type: Input }],
    plugins: [{ type: Input }],
    schedulerLicenseKey: [{ type: Input }],
    resources: [{ type: Input }],
    resourceLabelText: [{ type: Input }],
    resourceOrder: [{ type: Input }],
    filterResourcesWithEvents: [{ type: Input }],
    resourceText: [{ type: Input }],
    resourceGroupField: [{ type: Input }],
    resourceGroupText: [{ type: Input }],
    resourceAreaWidth: [{ type: Input }],
    resourceColumns: [{ type: Input }],
    resourcesInitiallyExpanded: [{ type: Input }],
    slotWidth: [{ type: Input }],
    datesAboveResources: [{ type: Input }],
    datesRender: [{ type: Output }],
    datesDestroy: [{ type: Output }],
    dayRender: [{ type: Output }],
    windowResize: [{ type: Output }],
    dateClick: [{ type: Output }],
    eventClick: [{ type: Output }],
    eventMouseEnter: [{ type: Output }],
    eventMouseLeave: [{ type: Output }],
    select: [{ type: Output }],
    unselect: [{ type: Output }],
    eventRender: [{ type: Output }],
    eventPositioned: [{ type: Output }],
    eventDestroy: [{ type: Output }],
    eventDragStart: [{ type: Output }],
    eventDragStop: [{ type: Output }],
    eventDrop: [{ type: Output }],
    eventResizeStart: [{ type: Output }],
    eventResizeStop: [{ type: Output }],
    eventResize: [{ type: Output }],
    drop: [{ type: Output }],
    eventReceive: [{ type: Output }],
    eventLeave: [{ type: Output }],
    viewSkeletonRender: [{ type: Output }],
    viewSkeletonDestroy: [{ type: Output }],
    _destroyed: [{ type: Output }],
    resourceRender: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullCalendarModule {
}
FullCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FullCalendarComponent],
                imports: [],
                exports: [FullCalendarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FullCalendarComponent, FullCalendarModule };

//# sourceMappingURL=fullcalendar-angular.js.map