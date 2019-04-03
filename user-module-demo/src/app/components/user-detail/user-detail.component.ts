import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.userService.getUserDetail(this.route.snapshot.params.id).subscribe(response => {
      this.user = response;
    });
  }

}
