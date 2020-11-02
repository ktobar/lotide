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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne,arrayTwo);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ['apple', 'banana', 'pear'];
const words2 = ["ground", "control", "to", "major", "tom",'apple', 'banana', 'pear'];

const map = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
//console.log(results1);

const expectedOutput = ['g', 'c', 't', 'm', 't'];
const expectedOutput2 = ['p', 'a', 'e'];
const expectedOutput3 = ["ground", "control", "to", "major", "tom",'apple', 'banana', 'pear'];

assertArraysEqual(results1, expectedOutput);
assertArraysEqual(map(words1, word => word[1]), expectedOutput2);
assertArraysEqual(map(words2, word => word), expectedOutput3);
