const eqArrays = function(arrayOne, arrayTwo) {
  let trueCount = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      trueCount++;
    }
  }
  if (trueCount === arrayOne.length && trueCount === arrayTwo.length) {
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let pullKey1 = Object.keys(object1);
  let pullKey2 = Object.keys(object2);
  let result;
  // console.log(pullKey1);
  // console.log(pullKey2);
  if (pullKey1.length === pullKey2.length) {
    for (let key1 of pullKey1) {
      if (object2[key1].length === 1) {
        if (object2[key1] === object1[key1]) {
          // console.log("in 1st "+object2[key1] + object1[key1]);
          result = true;
        } else {
          // console.log(object2[key1] + object1[key1])
          return false;
        }
      } else {
        let arrCheck1 = object1[key1];
        let arrCheck2 = object2[key1];
        
        result = eqArrays(arrCheck1,arrCheck2);
        //console.log("in 2nd "+object2[key1] + object1[key1])
        /*if (arrCheck2.length === arrCheck1.length) {
          for (let i = 0; i < arrCheck1.length; i++) {
            if (arrCheck1[i] === arrCheck2[i]) {
              result = true;
            } else {
              return false;
            }
          }
        } else {
          return false;
        }*/
      }
    }
  } else {
    return false;
  }
  //console.log("rr " + result);
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const ab = { a: "1", b: "3" };
const ba = { b: "3", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false*/c