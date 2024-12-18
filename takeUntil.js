const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;