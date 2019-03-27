import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCalendarContainer() {
    return element(by.className('fc-view-container'));
  }
  getCalendarHeader() {
    return element(by.className('fc-header-toolbar'));
  }
  getUpdateHeaderButton() {
    return element(by.id('updateHeader'));
  }
  getMonthButton() {
    return element(by.className('fc-dayGridMonth-button'));
  }
}
