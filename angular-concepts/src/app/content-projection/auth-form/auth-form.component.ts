import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() selected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  submitted(formValue: any): void {
    this.selected.emit(formValue);
  }
}
