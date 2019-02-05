import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor(private readonly router: Router) {

  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['user-detail', { id: this.user.id }]);
  }


}
