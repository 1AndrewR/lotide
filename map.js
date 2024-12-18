const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;