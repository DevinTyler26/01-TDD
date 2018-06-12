'use strict';

const greet = require('../lib/greet');

describe('testing #greet.hi', () => {
  test('greet.hello should return Hello Devin', () => {
    expect(greet.hello('Devin')).toEqual('Hello Devin');
  });
  test('greet.hello should return null', () => {
    expect(greet.hello('')).toEqual(null);
  });
});
