import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(timestamp: string): string {
    const utc = moment.utc(timestamp);
    return utc.local(true).fromNow();
  }

}
