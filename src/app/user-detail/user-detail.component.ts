import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;

  constructor(private readonly activatedRouter: ActivatedRoute, private readonly router: Router) {
    this.activatedRouter.paramMap.subscribe((params) => {
      this.userId = parseInt(params.get("id"));
    });
  }

  ngOnInit() {
  }

}
