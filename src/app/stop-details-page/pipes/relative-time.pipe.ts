import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';


@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  constructor() {
    dayjs.extend(relativeTime);
    dayjs.extend(utc);
  }

  transform(timestamp: string): string {
    return transform(timestamp);
  }

}

export function transform(timestamp: string): string {
  const time = dayjs.utc(timestamp).subtract(1, 'hour');
  const difference = Math.abs(dayjs.utc().diff(time, 'minute'));
  if (difference < 2) {
    return 'Due';
  }  else if (difference > 45) {
    return time.format('HH:mm');
  } else {
    return time.fromNow();
  }
}
