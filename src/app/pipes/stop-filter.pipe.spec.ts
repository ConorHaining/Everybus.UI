import { Stop } from 'src/app/models/Stop';
import { StopFilterPipe } from './stop-filter.pipe';

describe('StopFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new StopFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return stops with a name containing a given string (when not using geolocation)', () => {
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

    const result = pipe.transform(stops, 'at', false);

    expect(result).toEqual(jasmine.arrayContaining([
      {
        name: 'cat'
      },
      {
        name: 'rat'
      }
    ]));
  });

  it('should return exact stops given when using geolocation', () => {
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

    const result = pipe.transform(stops, 'Current Location', true);

    expect(result).toEqual(jasmine.arrayContaining([
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
    ]));
  });

});
