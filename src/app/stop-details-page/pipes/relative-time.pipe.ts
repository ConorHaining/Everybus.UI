import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  constructor() {
    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d mins',
        h: 'an hour',
        hh: '%d hours',
      }
    });
  }

  transform(timestamp: string): string {
    const utc = moment.utc(timestamp);
    return utc.local(true).fromNow();
  }

}
