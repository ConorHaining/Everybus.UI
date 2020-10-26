import { RelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {

  beforeEach(() => {
    const utcTimestamp = '2020-09-08T12:00:00+00:00';
    jasmine.clock().mockDate(new Date(utcTimestamp));
  });

  it('create an instance', () => {
    const pipe = new RelativeTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('it should return when null is supplied', () => {
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(null);

    expect(result).toBeUndefined();
  });

  it('it should return the relative time from now when over a minute', () => {
    const utcTimestamp = '2020-09-08T13:05:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('in 5 minutes');
  });

  it('it should return \'Very soon\' when under two minutes', () => {
    const utcTimestamp = '2020-09-08T13:01:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('Very soon');
  });

  it('it should return \'Departed\' when it after the current time', () => {
    const utcTimestamp = '2020-09-08T12:55:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('Departed');
  });

  it('it should return the absolute time from now when in 45 minutes or more', () => {
    const utcTimestamp = '2020-09-08T14:05:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('14:05');
  });
});
