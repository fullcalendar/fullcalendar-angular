import { AppPage } from './app.po';
import { protractor, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display calendar component', () => {
    expect(page.getCalendarContainer().isDisplayed()).toBeTruthy();
  });

  it('should display header', () => {
    expect(page.getCalendarHeader().isDisplayed()).toBeTruthy();
  });

  it('should display month button', () => {
    expect(page.getMonthButton().isDisplayed()).toBeTruthy();
  });

  it('should update header', () => {
    page.getUpdateHeaderButton().click();
    expect(page.getMonthButton().isPresent()).toBeFalsy();
  });

});
