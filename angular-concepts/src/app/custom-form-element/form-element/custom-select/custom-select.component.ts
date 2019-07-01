import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() valueMember: string;
  @Input() displayMember: string;
  @Input() name: string;
  @Input() itemList = [];
  @Input()
  get value() {
    return this.val;
  }
  set value(val) {
    console.log('value => ', val);
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  private val: string;

  constructor() { }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(val): void {
    console.log('called writeValue => ', val);
    if (val) {
      this.value = val;
    }
  }
}
