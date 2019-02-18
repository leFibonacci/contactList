import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    getUsers(): IUser[] {
        return [
            {
                id: 1,
                birthday: "11.12.1991",
                name: "Dilara",
                surname: "ERHALİM",
                imageSource: "assets/images/girl-image.jpg",
                eMailAdress: "dilaraeceozturk@gmail.com",
                phoneNumber: "+905064347521",
                addedDate: "21.12.2018",
            },
            {
                id: 2,
                birthday: "12.11.1992",
                name: "İlker",
                surname: "ERHALİM",
                imageSource: "assets/images/boy-image.png",
                phoneNumber: "+905058748787",
                addedDate: "29.12.2018",
                profession: "Software Specialist"
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
                profession: "Actor"
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
                profession: "Software Specialist"
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
                profession: "Film müziği bestecisi"
            }];
    }

    getById(id: number): IUser {
        console.log(id + " id li kullanıcı çekildi");
        let current: IUser = {
            name: "Andre",
            surname: "Tchaikowsky",
            addedDate: "18.02.2019",
            imageSource: "assets/images/tschaikowsky.jpg",
            birthday: "07.05.1840",
            id: id,
            eMailAdress: "tchaikowsky@gmail.com",
            profession: "Film müziği bestecisi",
            phoneNumber: "4055645645",
            // isFavorite:,
        };
        current.isFavorite = (current.id % 2) == 0;
        current.favIconSrc = current.isFavorite ? "assets/images/favorite.png" : "assets/images/unfavorite.png";
        return current;
    }

    setFavorite(id: number): any {
        let current = this.getById(id);
        current.isFavorite = !current.isFavorite;
    }
}