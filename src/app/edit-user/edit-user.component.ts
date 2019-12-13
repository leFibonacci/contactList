import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../shared/user';
import { MatSnackBar } from '@angular/material';
import { ImageSelectorComponent } from '../components/image-selector/image-selector.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: IUser;

  @ViewChild('selector')
  mySelector: ImageSelectorComponent;

  constructor(private userService: UserService,
    private readonly activetedRouter: ActivatedRoute,
    private readonly router: Router,
    private _snackBar: MatSnackBar) {
    this.activetedRouter.paramMap.subscribe(params => {
      let userId = parseInt(params.get("userId"));
      this.user = userService.getById(userId);
    })
  }

  ngOnInit() {
  }

  editUser() {
    console.log(this.mySelector);
    console.log(this.user);
    this._snackBar.open("Kişi güncelleme başarılı.", "OK", {
      duration: 2000,
    });
    this.router.navigate(['']);
  }
}
