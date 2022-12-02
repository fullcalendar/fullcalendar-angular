
export const OPTION_IS_DEEP: { [optionName: string]: boolean } = {
  headerToolbar: true,
  footerToolbar: true,
  events: true,
  eventSources: true,
  resources: true
};

/*
NOTE: keep synced with component
*/
export const OPTION_INPUT_NAMES: string[] = [
  'events',
  'eventSources',
  'resources',
];

/*
NOTE: keep synced with component
*/
export const OPTION_TEMPLATE_NAMES: string[] = [
  'dayHeaderContent',
  'dayCellContent',
  'weekNumberContent',
  'nowIndicatorContent',
  'eventContent',
  'slotLaneContent',
  'slotLabelContent',
  'allDayContent',
  'moreLinkContent',
  'noEventsContent',
  'resourceAreaHeaderContent',
  'resourceGroupLabelContent',
  'resourceLabelContent',
  'resourceLaneContent',
  'resourceGroupLaneContent',
];
