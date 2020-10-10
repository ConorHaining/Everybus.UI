import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';


@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  constructor() {
    dayjs.extend(relativeTime, {
      rounding: Math.floor
    });
  }

  transform(timestamp: string): string {
    return transform(timestamp);
  }

}

export function transform(timestamp: string): string {
  if (timestamp === null) { return; }
  const time = dayjs(timestamp);
  const difference = Math.abs(dayjs().diff(time, 'minute'));
  if (difference < 0){
    return 'Departed';
  } else if (difference < 2) {
    return 'Very soon';
  }  else if (difference > 45) {
    return time.format('HH:mm');
  } else {
    return time.fromNow();
  }
}
