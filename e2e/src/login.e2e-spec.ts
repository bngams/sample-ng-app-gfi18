import { LoginPage } from './login.po';

describe('Login module', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.login();
    expect(page.checkMenu()).toEqual(false);
  });
});
