import { Directive, Inject, ElementRef, HostListener, Self, EventEmitter, Output, OnInit, NgZone } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appDigitOnly]'
})
export class DigitOnlyDirective {

  constructor(private model: NgModel) {
  }

  @HostListener("keyup", ['$event'])
  checkifInputIsDigit(event) {
    const newValue = this.model.value.replace(/\D/g, '');
      this.model.valueAccessor.writeValue(newValue);   
  }

}
