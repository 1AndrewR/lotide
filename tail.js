const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE
const words = ["Hello", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words)[0], "Lighthouse") // first element of returned array should be second element of argument array
assertEqual(tail(words).length, words.length - 1) // tail should have one element less than its input
assertEqual(tail([1]).length, 0) // tail of array with one element only should be empty
assertEqual(tail([]).length, 0) // tail of an empty array should also be empty