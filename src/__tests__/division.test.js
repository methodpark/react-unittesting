function division(dividend, divisor) {
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error('only number allowed');
  }
    
  if (divisor === 0) {
    throw new Error('division by zero');
  }

  return dividend / divisor;
}

describe('division', () => {
  describe('parameters', () => {
    it('should throw if divisor is zero', () => {
      // arrange
      const dividend = 1;
      const divisor = 0;
      const action = () => division(dividend, divisor);

      // act & assert
      const expectedError = 'division by zero';
      expect(action).toThrowError(expectedError);
    });

    it('should throw if dividend is not a number', () => {
      // arrange
      const dividend = 'NaN';
      const divisor = 1;
      const action = () => division(dividend, divisor);

      // act & assert
      const expectedError = 'only number allowed';
      expect(action).toThrowError(expectedError);
    });

    it('should throw if divisor is not a number', () => {
      // arrange
      const dividend = 1;
      const divisor = 'NaN';
      const action = () => division(dividend, divisor);

      // act & assert
      const expectedError = 'only number allowed';
      expect(action).toThrowError(expectedError);
    });
  });

  it('should divide correctly', () => {
    // arrange
    const dividend = 10;
    const divisor = 2;

    // act
    const result = division(dividend, divisor);

    // assert
    const expected = 5;
    expect(result).toEqual(expected);
  });
});