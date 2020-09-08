import { DestinationsOutputPipe } from './destinations-output.pipe';

describe('DestinationsOutputPipe', () => {
  it('create an instance', () => {
    const pipe = new DestinationsOutputPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('should return just one destination when one is given', () => {
      const pipe = new DestinationsOutputPipe();

      const result = pipe.transform(['Destination 1']);

      expect(result).toEqual('Destination 1');
    });

    it('should return both destinations with an \'and\' between when two is given', () => {
      const pipe = new DestinationsOutputPipe();

      const result = pipe.transform(['Destination 1', 'Destination 2']);

      expect(result).toEqual('Destination 1 and Destination 2');
    });

    it('should comma seperate destinations when many are given between when many is given', () => {
      const pipe = new DestinationsOutputPipe();

      const result = pipe.transform(['Destination 1', 'Destination 2', 'Destination 3']);

      expect(result).toEqual('Destination 1, Destination 2, and Destination 3');
    });

  });

});
