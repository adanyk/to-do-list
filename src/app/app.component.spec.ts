import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  it('should have a title to-do-app', () => {
    expect(fixture.title).toBe('to-do-app');
  })
});
