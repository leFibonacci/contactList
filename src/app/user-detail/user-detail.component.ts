import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.userId = parseInt(paramMap.get("id"));
    });

  }

  ngOnInit() {
  }


  goToNextUser() {
    //user-detail/userId+1
    const newUserId = this.userId + 1;
    this.router.navigate([`user-detail`, { id: newUserId }])
  }

}
