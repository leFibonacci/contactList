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
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtzdZLJlcT4O-_Hx_dRe619WBjt_3XhqCP1tnh03e8cZCuyAs",
      eMailAdress: "dilaraeceozturk@gmail.com",
      phoneNumber: "+905064347521",
      addedDate: "21.12.2018",
      profession: "Doctor",
    },
    {
      id: 2,
      birthday: "12.11.1992",
      name: "İlker",
      surname: "ERHALİM",
      imageSource: "https://www.clipartmax.com/png/small/137-1370210_resting-vector-relax-icon-transparent-background.png",
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
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMk4ZtdazONutGwRjHShtBMtyRm-zo0A7PFuxQdASM0aCMAe39fg",
      eMailAdress: "kutaysasmaz@gmail.com",
      phoneNumber: "+905058748780",
      addedDate: "10.01.2019",
      profession: "Actor"
    },
    {
      id: 1,
      birthday: "11.12.1991",
      name: "Dilara",
      surname: "ERHALİM",
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtzdZLJlcT4O-_Hx_dRe619WBjt_3XhqCP1tnh03e8cZCuyAs",
      eMailAdress: "dilaraeceozturk@gmail.com",
      phoneNumber: "+905064347521",
      addedDate: "21.12.2018",
      profession: "Doctor",
    },
    {
      id: 2,
      birthday: "12.11.1992",
      name: "İlker",
      surname: "ERHALİM",
      imageSource: "https://www.clipartmax.com/png/small/137-1370210_resting-vector-relax-icon-transparent-background.png",
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
      imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMk4ZtdazONutGwRjHShtBMtyRm-zo0A7PFuxQdASM0aCMAe39fg",
      eMailAdress: "kutaysasmaz@gmail.com",
      phoneNumber: "+905058748780",
      addedDate: "10.01.2019",
      profession: "Actor"
    }];
  filteredUserList: IUser[] = null;

  constructor() {
    this.filteredUserList = this.userList;
  }
  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLowerCase();
    let users: IUser[] = this.userList.filter((user: IUser) => {
      return user.name.toLowerCase().indexOf(filterBy) > -1
        || user.surname.toLowerCase().indexOf(filterBy) > -1
    });
    return users;
  }

  ngOnInit() {
  }

}
