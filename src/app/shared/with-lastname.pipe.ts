import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'withLastName'
})
export class WithLastnamePipe implements PipeTransform{
    transform(_value: string, _character: string) {
        return _value + ' ' + _character.toUpperCase();
    }
}