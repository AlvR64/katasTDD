const { StringCalculator } = require('./myStringCalculator');

describe('StringCalculator', () => {
  const uut = new StringCalculator();

  describe('add', () => {
    it('zero for empty string ', () => {
      expect(uut.add('')).toEqual(0);
    });

    it('number for single number string', () => {
      expect(uut.add('2')).toEqual(2);
      expect(uut.add('1')).toEqual(1);
    });

    it('sum of 2 numbers', () => {
      expect(uut.add('1,2')).toEqual(3);
      expect(uut.add('3,4')).toEqual(7);
    });

    it('newline delimited returns the sum', () => {
      expect(uut.add('1\n2')).toEqual(3);
    });

    it('three numbers delimited either way returns the sum', () => {
      expect(uut.add('2\n3,4')).toEqual(9);
    });
    
  });
});
