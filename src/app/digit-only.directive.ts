import { Directive, Inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDigitOnly]'
})
export class DigitOnlyDirective {
  inputElement: HTMLInputElement;
  constructor(ref: ElementRef) { 
    this.inputElement=ref.nativeElement;
  }

}
