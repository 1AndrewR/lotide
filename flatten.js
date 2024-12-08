const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

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

// test
console.log(flatten([1, 2, [3, 4], 5, [6]]));