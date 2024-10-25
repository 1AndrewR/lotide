// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Assertion Passed
assertEqual("Lighthouse Labs", "Bootcamp"); // Assertion Failed
assertEqual(1, 1); // Assertion Passed
assertEqual(1, 2); // Assertion Failed
