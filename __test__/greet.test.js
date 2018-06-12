'use strict';

const greet = require('./../src/lib/greet');


  describe('testing #greet.hi', () => {
    test('greet.hi should return Hello Judy', () => {
      expect(greet.hi('Devin')).toEqual('Hello Devin');
    });
  });