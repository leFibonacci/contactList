export interface IUser {
    id: number,
    name: string,
    surname: string,
    birthday: string,
    imageSource: string,
    phoneNumber: string,
    eMailAdress?: string,
    addedDate: string,
    profession?: string,
    isFavorite?: boolean,
    favIconSrc?:string,
    // calculateAge():number;
}

// export class User implements IUser{
//     constructor(public id, 
//         public name, 
//         public surname, 
//         public birthday, 
//         public imageSource, 
//         public phoneNumber,
//         public eMailAdress){
//     }
//     calculateAge():number{
//         let birthdayAsMiliSeconds = Date.parse(this.birthday);
//         let dateNow = new Date(); // get currentDate
//         let dateAsMiliSeconds = dateNow.getTime();
//         let minutes = 1000 * 60;
//         let hours = minutes * 60;
//         let days = hours * 24;
//         let years = days * 365;
//         let difference = Math.trunc((dateAsMiliSeconds - birthdayAsMiliSeconds) / years);
//         return difference;
//     }
// }