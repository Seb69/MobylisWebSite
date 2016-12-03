import { MobylisPage } from './app.po';

describe('mobylis App', function() {
  let page: MobylisPage;

  beforeEach(() => {
    page = new MobylisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
