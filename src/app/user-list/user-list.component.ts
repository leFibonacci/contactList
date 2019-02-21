import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
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

  userList: IUser[] = this._userService.getUsers();
  filteredUserList: IUser[] = null;

  constructor(private _userService: UserService) {
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
