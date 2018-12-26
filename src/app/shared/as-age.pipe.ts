import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'asAge'
})
export class AsAgePipe implements PipeTransform {
    transform(_date: string, ...args: any[]) {
        let birthdayAsMiliSeconds = Date.parse(_date);
        let dateNow = new Date(); // get currentDate
        let dateAsMiliSeconds = dateNow.getTime();
        let minutes = 1000 * 60;
        let hours = minutes * 60;
        let days = hours * 24;
        let years = days * 365;
        let difference = Math.trunc((dateAsMiliSeconds - birthdayAsMiliSeconds) / years);
        return difference;
    }
}

