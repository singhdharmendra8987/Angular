import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { Router } from '@angular/router';
import { AddUserComponent } from '../dynamic-components/add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild('componentContainer', { read: ViewContainerRef }) container;
  users: User[];
  containerRef: any;

  constructor(
    private userService: UsersService,
    private router: Router,
    private resolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
    this.loadUsers();
  }

  clickOnUser(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

  showAddUser() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(AddUserComponent);
    this.containerRef = this.container.createComponent(factory);

    (this.containerRef.instance as AddUserComponent).formValue.subscribe(formValue => {
      if (formValue) {
        this.addUser(formValue);
      }

      this.container.clear();
    });
  }

  private loadUsers(): void {
    this.userService.getUsersList().subscribe(response => {
      this.users = response;
    });
  }

  private addUser(user: User) {
    this.userService.addUser(user).subscribe(res => {
      this.loadUsers();
    });
  }

}
