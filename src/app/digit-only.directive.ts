import { Directive , HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appDigitOnly]'
})
export class DigitOnlyDirective {

  constructor(private model: NgModel) {
  }

  @HostListener("keyup")
  checkifInputIsDigit() {
    const newValue = this.model.value.replace(/\D/g, '');
      this.model.valueAccessor.writeValue(newValue);   
  }

}
