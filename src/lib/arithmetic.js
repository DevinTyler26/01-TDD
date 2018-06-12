'use strict'

const arithmetic = module.exports = {};

add.numbers = (a, b) => {
    if (a || b === NaN) {
      return null;
    }
    return (a, b) =>  a + b;
  };

  sub.numbers = (a, b) => {
    if (a || b === NaN) {
      return null;
    }
    return (a, b) =>  a - b;
  };