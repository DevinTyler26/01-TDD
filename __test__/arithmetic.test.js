'use strict';

const arithmetic = require('./../src/lib/arithmetic');

describe('testing #arithmetic.add', () => {
    test('arithmetic.add should return the sum of 4 and 3', () => {
      expect(arithmetic.add(4, 3)).toEqual(7);
    });
});

describe('testing #arithmetic.sub', () => {
    test('arithmetic.sub should return the difference of 4 minus 3', () => {
        expect(arithmetic.sub(4, 3)).toEqual(1);
    });
});