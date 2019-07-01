import {Component} from '@angular/core';

@Component({
    template: `
        <app-auth-form (selected)="createUser($event)">
            <h3 class="header">Registration</h3>
            <button class="submit" type="submit">Create</button>
        </app-auth-form>

        <app-auth-form (selected)="loginUser($event)">
            <h3 class="header">Login</h3>
            <button class="submit" type="submit">Login</button>
        </app-auth-form>
    `
})
export class ShowContentProjectionComponent {

    createUser(formValue: any): void {
        console.log(`create User form value:  ${JSON.stringify(formValue)}`);
    }

    loginUser(formValue: any): void {
        console.log(`login User form value:  ${JSON.stringify(formValue)}`);
    }
}
