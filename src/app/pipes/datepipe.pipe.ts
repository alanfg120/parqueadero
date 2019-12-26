import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value)
    return   moment(value).locale('es').format('L hh:mm A');
    else return undefined
  }

}
