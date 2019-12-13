import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageSelectorComponent),
    multi: true
  }]
})
export class ImageSelectorComponent implements OnInit, ControlValueAccessor {

  @Input()
  title: string;

  value: string;

  imageSource: Array<string>;

  constructor() { }

  ngOnInit() {
    this.imageSource = [
      'assets/images/boy-image.png',
      'assets/images/freeman-morgan.jpg',
      'assets/images/girl-image.jpg',
      'assets/images/tschaikowsky.jpg',
    ];
    this.title = "Resim seçiniz";
  }

  setValue(newValue) {
    if (this.value === newValue) {
      this.value = null;
    } else {
      this.value = newValue;
    }
    this.onTouched();
    this.onChange(this.value);
  }
  onChange: (_: string) => {}
  onTouched: () => {}
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
