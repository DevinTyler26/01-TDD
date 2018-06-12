'use strict'

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
    const add = (a,b) => a + b; 
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