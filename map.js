const words = ["lets", "make", "our", "own", "map", "function"];
const numbers = [3, 6, 9, 12, 15]

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(numbers, (number) => number * 3);
console.log(results2);

const results3 = map(numbers, (number) => number + " is divisible by 3 ");
console.log(results3);

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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(results1, ["l", "m", "o", "o", "m", "f"]); // pass
assertArraysEqual(results1, ["this", "will", "fail"]); // fail
assertArraysEqual(results2,[9, 18, 27, 36, 45]); //pass
assertArraysEqual(results2, [2, 3, 4, 6, 7]); // fail
assertArraysEqual(results3, ["3 is divisible by 3 ", "6 is divisible by 3 ", "9 is divisible by 3 ", "12 is divisible by 3 ", "15 is divisible by 3 "]); // pass
assertArraysEqual(results3, ["4 is divisible 3 "]); // fail