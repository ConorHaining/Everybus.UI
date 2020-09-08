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
    const local = utc.local(true);
    const difference = local.diff(moment(), 'minute', true);
    if (difference <= 1) {
      return 'Now';
    } else if (difference >= 45) {
      return local.format('HH:mm');
    } else {
      return local.fromNow();
    }

  }

}
