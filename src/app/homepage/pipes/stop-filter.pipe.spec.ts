import { Stop } from './../../models/Stop';
import { StopFilterPipe } from './stop-filter.pipe';

describe('StopFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new StopFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return stops with a name containing a given string', () => {
    const pipe = new StopFilterPipe();
    const stops = [
      {
        name: 'cat'
      },
      {
        name: 'rat'
      },
      {
        name: 'car'
      },
      {
        name: 'far'
      }
    ] as any[] as Stop[];

    const result = pipe.transform(stops, 'at');

    expect(result).toEqual(jasmine.arrayContaining([
      {
        name: 'cat'
      },
      {
        name: 'rat'
      }
    ]));
  });

});
