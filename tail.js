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
assertArraysEqual(tail([5, 6, 7]), [6, 7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), []);