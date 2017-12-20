interface Window {
    CustomEvent: CustomEvent;
}

(function () {
  function CustomEvent ( event: any, params: any ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt:CustomEvent = <any>document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   };

  CustomEvent.prototype = Event.prototype;

  window.CustomEvent = <any>CustomEvent;
})();