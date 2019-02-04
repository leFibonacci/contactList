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
    this.filteredUserList = this.filterKey ? this.performFilter(this.filterKey) : this.userList;
  }

  userList: IUser[] = [
    {
      id: 1,
      birthday: "11.12.1991",
      name: "Dilara",
      surname: "ERHALİM",
      imageSource: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      eMailAdress: "dilaraeceozturk@gmail.com",
      phoneNumber: "+905064347521",
      addedDate: "21.12.2018",
      profession:"Doctor",
    },
    {
      id: 2,
      birthday: "12.11.1992",
      name: "İlker",
      surname: "ERHALİM",
      imageSource: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      eMailAdress: "ilkererhalim@gmail.com",
      phoneNumber: "+905058748787",
      addedDate: "29.12.2018",
      profession: "Software Specialist"
    },
    {
      id: 3,
      birthday: "02.05.1989",
      name: "Kutay",
      surname: "Şaşmaz",
      imageSource: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      eMailAdress: "kutaysasmaz@gmail.com",
      phoneNumber: "+905058748780",
      addedDate: "10.01.2019",
      profession : "Actor"
    }];
  filteredUserList: IUser[] = null;

  constructor() {
    this.filteredUserList = this.userList;
  }
  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    let users: IUser[] = this.filteredUserList.filter((user: IUser) => {
      return user.name.toLocaleLowerCase().indexOf(filterBy) > -1
        || user.surname.toLocaleLowerCase().indexOf(filterBy) > -1
    });
    return users;
  }

  ngOnInit() {
  }

}
