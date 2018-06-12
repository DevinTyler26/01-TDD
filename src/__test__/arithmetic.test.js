'use strict';

const arithmetic = require('../lib/arithmetic');

describe('testing #arithmetic.add', () => {
  test('arithmetic.add should return the sum of 4 and 3', () => {
    expect(arithmetic.add(4, 3)).toEqual(7);
  });
  test('arithmetic.add should return null if anything but a number is given', () => {
    expect(arithmetic.add('')).toEqual(null);
  });
});

describe('testing #arithmetic.sub', () => {
  test('arithmetic.sub should return the difference of 4 minus 3', () => {
    expect(arithmetic.sub(4, 3)).toEqual(1);
  });
  test('arithmetic.add should return null if anything but a number is given', () => {
    expect(arithmetic.sub('')).toEqual(null);
  });
});
