import { MOBYLISPage } from './app.po';

describe('mobylis App', function() {
  let page: MOBYLISPage;

  beforeEach(() => {
    page = new MOBYLISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
