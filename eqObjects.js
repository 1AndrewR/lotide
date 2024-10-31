const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  console.log("Keys1:", keys1);
  console.log("Keys2:", keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const shirtObject = { color : "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long"};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);