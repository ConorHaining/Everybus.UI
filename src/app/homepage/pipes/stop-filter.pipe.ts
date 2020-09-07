import { Pipe, PipeTransform } from '@angular/core';
import { Stop } from 'src/app/models/Stop';

@Pipe({
  name: 'stopFilter'
})
export class StopFilterPipe implements PipeTransform {

  transform(value: ReadonlyArray<Stop>, filterValue: string): Stop[] {
    return value.filter(stop => stop.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
