const assertEqual = require('./assertEqual.js')
const eqArrays = require('./eqArrays.js')

function flatten(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

module.exports = flatten;