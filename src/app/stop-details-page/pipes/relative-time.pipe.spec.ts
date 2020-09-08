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

  it('it should return the relative time from now when over a minute', () => {
    const utcTimestamp = '2020-09-08T13:05:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('in 5 mins');
  });

  it('it should return \'NOW\' when under a minute', () => {
    const utcTimestamp = '2020-09-08T13:01:00+00:00';
    const pipe = new RelativeTimePipe();

    const result = pipe.transform(utcTimestamp);

    expect(result).toEqual('Now');
  });
});
