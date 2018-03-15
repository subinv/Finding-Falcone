import { FIndingFalconePage } from './app.po';

describe('finding-falcone App', () => {
  let page: FIndingFalconePage;

  beforeEach(() => {
    page = new FIndingFalconePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
