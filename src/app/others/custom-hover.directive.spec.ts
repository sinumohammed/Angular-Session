import { CustomHoverDirective } from './custom-hover.directive';
import { ElementRef } from '@angular/core';
describe('CustomHoverDirective', () => {
  it('should create an instance', () => {
    let el:ElementRef
    const directive = new CustomHoverDirective(el);
    expect(directive).toBeTruthy();
  });
});
