import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenuTitleText() {
    return element(by.css('#title')).getText();
  }
}
