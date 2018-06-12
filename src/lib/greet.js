'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
  if (typeof name !== 'string' || name === '') {
    return null;
  }
  return `Hello ${name}`;
};
