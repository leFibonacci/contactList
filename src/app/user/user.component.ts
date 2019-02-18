import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor(private userService: UserService, private readonly router: Router) {

  }

  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['user-detail', { id: this.user.id }]);
  }
  changeFavoriteStatus() {
    this.userService.setFavorite(this.user.id);
  }
}
