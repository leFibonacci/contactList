import { DigitOnlyDirective } from './digit-only.directive';

describe('DigitOnlyDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.get('div')
    };
    const directive = new DigitOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
