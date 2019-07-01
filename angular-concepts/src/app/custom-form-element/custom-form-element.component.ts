import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form-element',
  template: `
  <form #form="ngForm" (ngSubmit)="logForm(form.value)">
    <app-custom-select
        name="mystate" [ngModel]="mystate"
        displayMember="name"
        valueMember="abbreviation"
        [itemList]="states"
        value="CA">
    </app-custom-select>
    <button type="submit">Submit</button>
  </form>
  `
})
export class CustomFormElementComponent implements OnInit {

  states = [];

  constructor() { }

  ngOnInit() {
    this.states = [
      { name: 'Alabama', abbreviation: 'AL' },
      { name: 'Alaska', abbreviation: 'AK' },
      { name: 'American Samo', abbreviation: 'AS' },
      { name: 'Arizona', abbreviation: 'AZ' },
      { name: 'Arkansas', abbreviation: 'AR' },
      { name: 'California', abbreviation: 'CA' },
      { name: 'Colorado', abbreviation: 'CO' },
      { name: 'Connecticut', abbreviation: 'CT' },
      { name: 'Delaware', abbreviation: 'DE' },
      { name: 'District OfColumbia', abbreviation: 'DC' },
      { name: 'Federated StatesOfMicronesia', abbreviation: 'FM' },
      { name: 'Florida', abbreviation: 'FL' },
      { name: 'Georgia', abbreviation: 'GA' },
      { name: 'Guam', abbreviation: 'GU' },
      { name: 'Hawaii', abbreviation: 'HI' },
      { name: 'Idaho', abbreviation: 'ID' },
      { name: 'Illinois', abbreviation: 'IL' },
      { name: 'Indiana', abbreviation: 'IN' },
      { name: 'Iowa', abbreviation: 'IA' },
      { name: 'Kansas', abbreviation: 'KS' },
      { name: 'Kentucky', abbreviation: 'KY' },
      { name: 'Louisiana', abbreviation: 'LA' },
      { name: 'Maine', abbreviation: 'ME' }
    ];
  }

  logForm(formValue: any): void {
    console.log('formValue => ', formValue);
  }

}
