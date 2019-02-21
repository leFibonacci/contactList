import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    readonly favIconPath: string = "assets/images/favorite.png";
    readonly unFavIconPath: string = "assets/images/unfavorite.png";
    users: IUser[] = [
        {
            id: 1,
            birthday: "11.12.1991",
            name: "Dilara",
            surname: "ERHALİM",
            imageSource: "assets/images/girl-image.jpg",
            eMailAdress: "dilaraeceozturk@gmail.com",
            phoneNumber: "+905064347521",
            addedDate: "21.12.2018",
            isFavorite: true,
            favIconSrc: this.favIconPath,
        },
        {
            id: 2,
            birthday: "12.11.1992",
            name: "İlker",
            surname: "ERHALİM",
            imageSource: "assets/images/boy-image.png",
            phoneNumber: "+905058748787",
            addedDate: "29.12.2018",
            profession: "Software Specialist",
            isFavorite: true,
            favIconSrc: this.favIconPath,
        },
        {
            id: 3,
            birthday: "02.05.1989",
            name: "Morgan",
            surname: "Freemon",
            imageSource: "assets/images/freeman-morgan.jpg",
            eMailAdress: "freemon@gmail.com",
            phoneNumber: "+905058748780",
            addedDate: "10.01.2019",
            profession: "Actor",
            isFavorite: true,
            favIconSrc: this.favIconPath,
        },
        {
            id: 4,
            birthday: "11.12.1991",
            name: "Dilara",
            surname: "ERHALİM",
            imageSource: "assets/images/girl-image.jpg",
            eMailAdress: "dilaraeceozturk@gmail.com",
            phoneNumber: "+905064347521",
            addedDate: "21.12.2018",
            profession: "Doctor",
            isFavorite: false,
            favIconSrc: this.unFavIconPath,
        },
        {
            id: 5,
            birthday: "12.11.1992",
            name: "İlker",
            surname: "ERHALİM",
            imageSource: "assets/images/boy-image.png",
            eMailAdress: "ilkererhalim@gmail.com",
            phoneNumber: "+905058748787",
            addedDate: "29.12.2018",
            profession: "Software Specialist",
            isFavorite: false,
            favIconSrc: this.unFavIconPath,
        },
        {
            id: 6,
            birthday: "07.05.1840",
            name: "Andre",
            surname: "Tchaikowsky",
            imageSource: "assets/images/tschaikowsky.jpg",
            eMailAdress: "tchaikowsky@gmail.com",
            phoneNumber: "+905058748780",
            addedDate: "10.01.2019",
            profession: "Film müziği bestecisi",
            isFavorite: true,
            favIconSrc: this.favIconPath,
        }];

    getUsers(): IUser[] {
        return this.users;
    }

    getById(id: number): IUser {
        let current: IUser = this.getUsers().filter(x => x.id == id)[0];
        current.favIconSrc = current.isFavorite ? this.favIconPath : this.unFavIconPath;
        return current;
    }

    setFavorite(id: number): any {
        debugger
        let current = this.getById(id);
        current.isFavorite = !current.isFavorite;
        return current.favIconSrc = current.isFavorite ? this.favIconPath : this.unFavIconPath;
    }
}