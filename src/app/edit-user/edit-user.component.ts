import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService,
    private readonly activetedRouter: ActivatedRoute,
    private readonly router: Router) {
    this.activetedRouter.paramMap.subscribe(params => {
      let userId = parseInt(params.get("userId"));
      this.user = userService.getById(userId);
    })
  }

  ngOnInit() {
  }

  editUser() {
    console.log(this.user);
  }
}
