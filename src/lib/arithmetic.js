'use strict'

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
    if (a === NaN || b === NaN) {
      return null;
    }
    return a + b;
  };

arithmetic.sub = (a, b) => {
if (a === NaN || b === NaN) {
    return null;
}
return a - b;
};