import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';

@Injectable()
export class ConfigService {
    readonly userListUrl: string = "";
    readonly userDetailUrl: string = "";
    readonly addUserUrl: string = "";
    readonly changeFavoriteStatusUrl: string = "";

    constructor(private http: HttpClient) {

    }

    getUsers() {
        this.http.get(this.userListUrl)
            .subscribe((userList: IUser[]) => { },
                error => { });
    }
}