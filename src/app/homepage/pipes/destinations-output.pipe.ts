import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinationsOutput'
})
export class DestinationsOutputPipe implements PipeTransform {

  transform(value: string[]): string {

    if (value.length > 2) {
      return value.slice(0, value.length - 1).join(', ') + ', and ' + value.slice(-1);
    } else if (value.length === 2) {
      return `${value[0]} and ${value[1]}`;
    } else {
      return value[0];
    }
  }

}
