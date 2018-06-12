'use strict'

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
    if (a || b === NaN) {
      return null;
    }
    return (a, b) =>  a + b;
  };

arithmetic.sub = (a, b) => {
if (a || b === NaN) {
    return null;
}
return (a, b) =>  a - b;
};