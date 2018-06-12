'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet.hi', () => {
    test('greet.hello should return Hello Judy', () => {
        expect(greet.hello('Devin')).toEqual('Hello Devin');
    });
});