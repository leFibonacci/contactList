import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: IUser;
  constructor(private userService: UserService, private readonly activatedRouter: ActivatedRoute, private readonly router: Router) {
    this.activatedRouter.paramMap.subscribe((params) => {
      let userId = parseInt(params.get("id"));
      this.user = userService.getById(userId);
    });
  }

  ngOnInit() {
  }

  goToEditPanel() {
    this.router.navigate(['edit-user', { userId: this.user.id }]);
  }
  changeFavoriteStatus() {
    debugger
    this.user.favIconSrc = this.userService.setFavorite(this.user.id);
  }
}
