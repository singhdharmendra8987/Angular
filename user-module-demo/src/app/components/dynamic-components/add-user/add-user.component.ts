import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() formValue = new EventEmitter();

  userForm = this.fb.group({
    id: [0],
    firstName: [''],
    lastName: [''],
    age: [0],
    address: [''],
    designation: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCancel() {
    this.formValue.emit(null);
  }

  onSave() {
    this.formValue.emit(this.userForm.value);
  }

}
