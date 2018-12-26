import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private _filterKey: string;
  public get filterKey(): string {
    return this._filterKey;
  }
  public set filterKey(value: string) {
    this._filterKey = value;
  }

  userList: IUser[] = [
    {
      id: 1,
      birthday: "11.12.1991",
      name: "Dilara",
      surname: "ERHALİM",
      imageSource: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      eMailAdress: "dilaraeceozturk@gmail.com",
      phoneNumber: "+905064347521"
    },
    {
      id: 2,
      birthday: "12.11.1992",
      name: "İlker",
      surname: "ERHALİM",
      imageSource: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      eMailAdress: "ilkererhalim@gmail.com",
      phoneNumber: "+905058748787"
    }];
  filteredUserList: IUser[] = null;

  constructor() {
    this.filteredUserList = this.userList;
  }

  ngOnInit() {
  }

}
