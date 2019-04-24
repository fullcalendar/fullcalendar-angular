/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, EVENT_NAMES } from './fullcalendar-options';
var FullCalendarComponent = /** @class */ (function () {
    function FullCalendarComponent(element) {
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
        this.loading = new EventEmitter();
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
    FullCalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.buildOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {};
        EVENT_NAMES.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            options[eventName] = (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a;
                (_a = _this[eventName]).emit.apply(_a, tslib_1.__spread(args));
            });
        }));
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        function (inputName) {
            if (_this[inputName] !== undefined) { // unfortunately FC chokes when some props are set to undefined
                options[inputName] = _this[inputName];
            }
        }));
        return options;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            /** @type {?} */
            var updatedInputs = {};
            for (var inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    updatedInputs[inputName] = changes[inputName].currentValue;
                }
            }
            this.calendar.setOptions(updatedInputs);
        }
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.calendar.destroy();
        this.calendar = null;
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.getApi = /**
     * @return {?}
     */
    function () {
        return this.calendar;
    };
    FullCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'full-calendar',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    FullCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
        timeGridEventMinHeight: [{ type: Input }],
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
        loading: [{ type: Output }],
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
    return FullCalendarComponent;
}());
export { FullCalendarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.calendar;
    /** @type {?} */
    FullCalendarComponent.prototype.header;
    /** @type {?} */
    FullCalendarComponent.prototype.footer;
    /** @type {?} */
    FullCalendarComponent.prototype.customButtons;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonIcons;
    /** @type {?} */
    FullCalendarComponent.prototype.themeSystem;
    /** @type {?} */
    FullCalendarComponent.prototype.bootstrapFontAwesome;
    /** @type {?} */
    FullCalendarComponent.prototype.firstDay;
    /** @type {?} */
    FullCalendarComponent.prototype.dir;
    /** @type {?} */
    FullCalendarComponent.prototype.weekends;
    /** @type {?} */
    FullCalendarComponent.prototype.hiddenDays;
    /** @type {?} */
    FullCalendarComponent.prototype.fixedWeekCount;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbers;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbersWithinDays;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumberCalculation;
    /** @type {?} */
    FullCalendarComponent.prototype.businessHours;
    /** @type {?} */
    FullCalendarComponent.prototype.showNonCurrentDates;
    /** @type {?} */
    FullCalendarComponent.prototype.height;
    /** @type {?} */
    FullCalendarComponent.prototype.contentHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.aspectRatio;
    /** @type {?} */
    FullCalendarComponent.prototype.handleWindowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResizeDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimit;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitClick;
    /** @type {?} */
    FullCalendarComponent.prototype.timeZone;
    /** @type {?} */
    FullCalendarComponent.prototype.now;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultView;
    /** @type {?} */
    FullCalendarComponent.prototype.allDaySlot;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayText;
    /** @type {?} */
    FullCalendarComponent.prototype.slotDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelInterval;
    /** @type {?} */
    FullCalendarComponent.prototype.snapDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.scrollTime;
    /** @type {?} */
    FullCalendarComponent.prototype.minTime;
    /** @type {?} */
    FullCalendarComponent.prototype.maxTime;
    /** @type {?} */
    FullCalendarComponent.prototype.slotEventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayAltFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.noEventsMessage;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultDate;
    /** @type {?} */
    FullCalendarComponent.prototype.nowIndicator;
    /** @type {?} */
    FullCalendarComponent.prototype.visibleRange;
    /** @type {?} */
    FullCalendarComponent.prototype.validRange;
    /** @type {?} */
    FullCalendarComponent.prototype.dateIncrement;
    /** @type {?} */
    FullCalendarComponent.prototype.dateAlignment;
    /** @type {?} */
    FullCalendarComponent.prototype.duration;
    /** @type {?} */
    FullCalendarComponent.prototype.dayCount;
    /** @type {?} */
    FullCalendarComponent.prototype.locales;
    /** @type {?} */
    FullCalendarComponent.prototype.locale;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTimeFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeader;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderText;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.titleFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.weekLabel;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventTime;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventEnd;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitText;
    /** @type {?} */
    FullCalendarComponent.prototype.dayPopoverFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinks;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkWeekClick;
    /** @type {?} */
    FullCalendarComponent.prototype.selectable;
    /** @type {?} */
    FullCalendarComponent.prototype.selectMirror;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectAuto;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectCancel;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultAllDayEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultTimedEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.cmdFormatter;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultRangeSeparator;
    /** @type {?} */
    FullCalendarComponent.prototype.selectConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.selectOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.selectAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.editable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventStartEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDurationEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.eventAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassName;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassNames;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBackgroundColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBorderColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTextColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventColor;
    /** @type {?} */
    FullCalendarComponent.prototype.events;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSources;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayDefault;
    /** @type {?} */
    FullCalendarComponent.prototype.startParam;
    /** @type {?} */
    FullCalendarComponent.prototype.endParam;
    /** @type {?} */
    FullCalendarComponent.prototype.lazyFetching;
    /** @type {?} */
    FullCalendarComponent.prototype.nextDayThreshold;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.rerenderDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.dragRevertDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.dragScroll;
    /** @type {?} */
    FullCalendarComponent.prototype.longPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLongPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.droppable;
    /** @type {?} */
    FullCalendarComponent.prototype.dropAccept;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDataTransform;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayMaintainDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizableFromStart;
    /** @type {?} */
    FullCalendarComponent.prototype.timeGridEventMinHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonText;
    /** @type {?} */
    FullCalendarComponent.prototype.views;
    /** @type {?} */
    FullCalendarComponent.prototype.plugins;
    /** @type {?} */
    FullCalendarComponent.prototype.schedulerLicenseKey;
    /** @type {?} */
    FullCalendarComponent.prototype.resources;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceLabelText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.filterResourcesWithEvents;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupField;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceAreaWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceColumns;
    /** @type {?} */
    FullCalendarComponent.prototype.resourcesInitiallyExpanded;
    /** @type {?} */
    FullCalendarComponent.prototype.slotWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.datesAboveResources;
    /** @type {?} */
    FullCalendarComponent.prototype.datesRender;
    /** @type {?} */
    FullCalendarComponent.prototype.datesDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.dateClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseEnter;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseLeave;
    /** @type {?} */
    FullCalendarComponent.prototype.select;
    /** @type {?} */
    FullCalendarComponent.prototype.unselect;
    /** @type {?} */
    FullCalendarComponent.prototype.loading;
    /** @type {?} */
    FullCalendarComponent.prototype.eventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventPositioned;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResize;
    /** @type {?} */
    FullCalendarComponent.prototype.drop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventReceive;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLeave;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonRender;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype._destroyed;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceRender;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBS2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBNEQsTUFBTSxvQkFBb0IsQ0FBQztBQWV4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFO0lBUUUsK0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFvTDdCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENB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QUFvRDs7SUFDcEQsNENBQWdEOztJQUNoRCxxQ0FBeUM7O0lBQ3pDLDZDQUFpRDs7SUFDakQsMkNBQStDOztJQUMvQyxtREFBdUQ7O0lBQ3ZELG9EQUF3RDs7SUFDeEQsMkNBQStDOztJQUUvQywrQ0FBbUQ7Ozs7O0lBL012Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciwgQnVzaW5lc3NIb3Vyc0lucHV0LCBDb25zdHJhaW50SW5wdXQsIEV2ZW50QXBpLCBQbHVnaW5EZWYgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVG9vbGJhcklucHV0LFxuICBDdXN0b21CdXR0b25JbnB1dCxcbiAgQnV0dG9uSWNvbnNJbnB1dCwgQ2VsbEluZm8sXG4gIEJ1dHRvblRleHRDb21wb3VuZElucHV0LFxuICBWaWV3T3B0aW9uc0lucHV0XG59IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS90eXBlcy9pbnB1dC10eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9lbnYnO1xuaW1wb3J0IHsgRHVyYXRpb25JbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2R1cmF0aW9uJztcbmltcG9ydCB7IEZvcm1hdHRlcklucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZm9ybWF0dGluZyc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2RhdGUtcmFuZ2UnO1xuaW1wb3J0IHsgUmF3TG9jYWxlLCBMb2NhbGVTaW5ndWxhckFyZyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2xvY2FsZSc7XG5pbXBvcnQgeyBPdmVybGFwRnVuYywgQWxsb3dGdW5jIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHsgRXZlbnRTb3VyY2VJbnB1dCwgRXZlbnRJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3N0cnVjdHMvZXZlbnQtc291cmNlJztcbmltcG9ydCB7IElOUFVUX05BTUVTLCBFVkVOVF9OQU1FUyB9IGZyb20gJy4vZnVsbGNhbGVuZGFyLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnVpbGRPcHRpb25zKCkpO1xuICAgIHRoaXMuY2FsZW5kYXIucmVuZGVyKCk7XG4gIH1cblxuICBidWlsZE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgRVZFTlRfTkFNRVMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgb3B0aW9uc1tldmVudE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpc1tldmVudE5hbWVdLmVtaXQoLi4uYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgSU5QVVRfTkFNRVMuZm9yRWFjaChpbnB1dE5hbWUgPT4ge1xuICAgICAgaWYgKHRoaXNbaW5wdXROYW1lXSAhPT0gdW5kZWZpbmVkKSB7IC8vIHVuZm9ydHVuYXRlbHkgRkMgY2hva2VzIHdoZW4gc29tZSBwcm9wcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICAgICAgICBvcHRpb25zW2lucHV0TmFtZV0gPSB0aGlzW2lucHV0TmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICBjb25zdCB1cGRhdGVkSW5wdXRzID0ge307XG5cbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaW5wdXROYW1lKSkge1xuICAgICAgICAgIHVwZGF0ZWRJbnB1dHNbaW5wdXROYW1lXSA9IGNoYW5nZXNbaW5wdXROYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxlbmRhci5zZXRPcHRpb25zKHVwZGF0ZWRJbnB1dHMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2FsZW5kYXIuZGVzdHJveSgpO1xuICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEFwaSgpOiBDYWxlbmRhciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXI7XG4gIH1cblxuXG4gIC8qXG4gIFRPRE86IHRoZSBmb2xsb3dpbmcgSW5wdXRzL091dHB1dHMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgcmV3cml0dGVuIGZvciBlYWNoIHZlcnNpb24gYnVtcFxuICBvZiB0aGUgY29yZSBwcm9qZWN0LiBBIHNjcmlwdCB3aWxsIGJlIHdyaXR0ZW4gdG8gb3ZlcndyaXRlIHRoZSBhY3R1YWx5IHNvdXJjZSBjb2RlIGhlcmUuXG4gIEl0IGlzIHVzdWFsbHkgZ29vZCB0byBwdXQgYSBjbGFzcydzIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBCRUZPUkUgdGhlIG1ldGhvZHMsIGJ1dCBpbiB0aGlzIGNhc2UsXG4gIHNpbmNlIHRoZSBwcm9wZXJ0aWVzIHdpbGwgYmUgcHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQsIGJldHRlciB0byBwdXQgdGhlbSBhZnRlci5cbiAgKi9cblxuICBASW5wdXQoKSBoZWFkZXI/OiBib29sZWFuIHwgVG9vbGJhcklucHV0O1xuICBASW5wdXQoKSBmb290ZXI/OiBib29sZWFuIHwgVG9vbGJhcklucHV0O1xuICBASW5wdXQoKSBjdXN0b21CdXR0b25zPzogeyBbbmFtZTogc3RyaW5nXTogQ3VzdG9tQnV0dG9uSW5wdXQgfTtcbiAgQElucHV0KCkgYnV0dG9uSWNvbnM/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgdGhlbWVTeXN0ZW0/OiAnc3RhbmRhcmQnIHwgc3RyaW5nO1xuICBASW5wdXQoKSBib290c3RyYXBGb250QXdlc29tZT86IGJvb2xlYW4gfCBCdXR0b25JY29uc0lucHV0O1xuICBASW5wdXQoKSBmaXJzdERheT86IG51bWJlcjtcbiAgQElucHV0KCkgZGlyPzogJ2x0cicgfCAncnRsJyB8ICdhdXRvJztcbiAgQElucHV0KCkgd2Vla2VuZHM/OiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRkZW5EYXlzPzogbnVtYmVyW107XG4gIEBJbnB1dCgpIGZpeGVkV2Vla0NvdW50PzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnM/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyc1dpdGhpbkRheXM/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyQ2FsY3VsYXRpb24/OiAnbG9jYWwnIHwgJ0lTTycgfCAoKG06IERhdGUpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGJ1c2luZXNzSG91cnM/OiBCdXNpbmVzc0hvdXJzSW5wdXQ7XG4gIEBJbnB1dCgpIHNob3dOb25DdXJyZW50RGF0ZXM/OiBib29sZWFuO1xuICBASW5wdXQoKSBoZWlnaHQ/OiBudW1iZXIgfCAnYXV0bycgfCAncGFyZW50JyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBjb250ZW50SGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgKCgpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICBASW5wdXQoKSBoYW5kbGVXaW5kb3dSZXNpemU/OiBib29sZWFuO1xuICBASW5wdXQoKSB3aW5kb3dSZXNpemVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdD86IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXRDbGljaz86ICdwb3BvdmVyJyB8ICd3ZWVrJyB8ICdkYXknIHwgc3RyaW5nIHwgKChjZWxsaW5mbzogQ2VsbEluZm8sIGpzZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgdGltZVpvbmU/OiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKSBub3c/OiBEYXRlSW5wdXQgfCAoKCkgPT4gRGF0ZUlucHV0KTtcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsbERheVNsb3Q/OiBib29sZWFuO1xuICBASW5wdXQoKSBhbGxEYXlUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBzbG90RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbG90TGFiZWxGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsSW50ZXJ2YWw/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbmFwRHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzY3JvbGxUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgbWluVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1heFRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbG90RXZlbnRPdmVybGFwPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdERheUZvcm1hdD86IEZvcm1hdHRlcklucHV0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdERheUFsdEZvcm1hdD86IEZvcm1hdHRlcklucHV0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm9FdmVudHNNZXNzYWdlPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0RGF0ZT86IERhdGVJbnB1dDtcbiAgQElucHV0KCkgbm93SW5kaWNhdG9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdmlzaWJsZVJhbmdlPzogKChjdXJyZW50RGF0ZTogRGF0ZSkgPT4gRGF0ZVJhbmdlSW5wdXQpIHwgRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIHZhbGlkUmFuZ2U/OiBEYXRlUmFuZ2VJbnB1dDtcbiAgQElucHV0KCkgZGF0ZUluY3JlbWVudD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVBbGlnbm1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGF5Q291bnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxvY2FsZXM/OiBSYXdMb2NhbGVbXTtcbiAgQElucHV0KCkgbG9jYWxlPzogTG9jYWxlU2luZ3VsYXJBcmc7XG4gIEBJbnB1dCgpIGV2ZW50VGltZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyVGV4dD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJIdG1sPzogc3RyaW5nIHwgKChkYXRlOiBEYXRlSW5wdXQpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIHRpdGxlRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHdlZWtMYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzcGxheUV2ZW50VGltZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudEVuZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50TGltaXRUZXh0Pzogc3RyaW5nIHwgKChldmVudENudDogbnVtYmVyKSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBkYXlQb3BvdmVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIG5hdkxpbmtzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbmF2TGlua0RheUNsaWNrPzogc3RyaW5nIHwgKChkYXRlOiBEYXRlLCBqc0V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIG5hdkxpbmtXZWVrQ2xpY2s/OiBzdHJpbmcgfCAoKHdlZWtTdGFydDogYW55LCBqc0V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RNaXJyb3I/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdEF1dG8/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdENhbmNlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdEFsbERheUV2ZW50RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkZWZhdWx0VGltZWRFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgY21kRm9ybWF0dGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0UmFuZ2VTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIHNlbGVjdE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbG93PzogQWxsb3dGdW5jO1xuICBASW5wdXQoKSBlZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50U3RhcnRFZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50RHVyYXRpb25FZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50Q29uc3RyYWludD86IENvbnN0cmFpbnRJbnB1dDtcbiAgQElucHV0KCkgZXZlbnRPdmVybGFwPzogYm9vbGVhbiB8IE92ZXJsYXBGdW5jO1xuICBASW5wdXQoKSBldmVudEFsbG93PzogQWxsb3dGdW5jO1xuICBASW5wdXQoKSBldmVudENsYXNzTmFtZT86IHN0cmluZ1tdIHwgc3RyaW5nO1xuICBASW5wdXQoKSBldmVudENsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50VGV4dENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudHM/OiBFdmVudFNvdXJjZUlucHV0O1xuICBASW5wdXQoKSBldmVudFNvdXJjZXM/OiBFdmVudFNvdXJjZUlucHV0W107XG4gIEBJbnB1dCgpIGFsbERheURlZmF1bHQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBzdGFydFBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSBlbmRQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgbGF6eUZldGNoaW5nPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbmV4dERheVRocmVzaG9sZD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50T3JkZXI/OiBzdHJpbmcgfCBBcnJheTwoKGE6IEV2ZW50QXBpLCBiOiBFdmVudEFwaSkgPT4gbnVtYmVyKSB8IChzdHJpbmcgfCAoKGE6IEV2ZW50QXBpLCBiOiBFdmVudEFwaSkgPT4gbnVtYmVyKSk+O1xuICBASW5wdXQoKSByZXJlbmRlckRlbGF5PzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgZHJhZ1JldmVydER1cmF0aW9uPzogbnVtYmVyO1xuICBASW5wdXQoKSBkcmFnU2Nyb2xsPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9uZ1ByZXNzRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TG9uZ1ByZXNzRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3BwYWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyb3BBY2NlcHQ/OiBzdHJpbmcgfCAoKGRyYWdnYWJsZTogYW55KSA9PiBib29sZWFuKTtcbiAgQElucHV0KCkgZXZlbnREYXRhVHJhbnNmb3JtPzogRXZlbnRJbnB1dFRyYW5zZm9ybWVyO1xuICBASW5wdXQoKSBhbGxEYXlNYWludGFpbkR1cmF0aW9uPzogQm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRSZXNpemFibGVGcm9tU3RhcnQ/OiBCb29sZWFuO1xuICBASW5wdXQoKSB0aW1lR3JpZEV2ZW50TWluSGVpZ2h0PzogbnVtYmVyO1xuICAvLyBjb21wb3VuZCBPcHRpb25zSW5wdXQuLi5cbiAgQElucHV0KCkgYnV0dG9uVGV4dD86IEJ1dHRvblRleHRDb21wb3VuZElucHV0O1xuICBASW5wdXQoKSB2aWV3cz86IHsgW3ZpZXdJZDogc3RyaW5nXTogVmlld09wdGlvbnNJbnB1dCB9O1xuICBASW5wdXQoKSBwbHVnaW5zPzogKFBsdWdpbkRlZiB8IHN0cmluZylbXTtcbiAgLy8gc2NoZWR1bGVyLi4uXG4gIEBJbnB1dCgpIHNjaGVkdWxlckxpY2Vuc2VLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlcz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VMYWJlbFRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlT3JkZXI/OiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlclJlc291cmNlc1dpdGhFdmVudHM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cEZpZWxkPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUdyb3VwVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VBcmVhV2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQ29sdW1ucz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VzSW5pdGlhbGx5RXhwYW5kZWQ/OiBhbnk7XG4gIEBJbnB1dCgpIHNsb3RXaWR0aD86IGFueTtcbiAgQElucHV0KCkgZGF0ZXNBYm92ZVJlc291cmNlcz86IGFueTtcblxuICBAT3V0cHV0KCkgZGF0ZXNSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVzRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF5UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB3aW5kb3dSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRNb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudE1vdXNlTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFBvc2l0aW9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJhZ1N0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemVTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZWNlaXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudExlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB2aWV3U2tlbGV0b25SZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvbkRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIF9kZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gc2NoZWR1bGVyLi4uXG4gIEBPdXRwdXQoKSByZXNvdXJjZVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuIl19