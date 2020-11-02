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

const takeUntil = function(array, callback) {
  let result = [];
  for (let arrVal of array) {
    if (callback(arrVal)) {
      return result;
    } else {
      result.push(arrVal);
    }
  }
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = ["ground", "control", "to", "major", "tom",'apple', 'banana', 'pear'];
const expected = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(takeUntil(data3, x => x[0] === 'a'), expected);

console.log('---');

const data4 = ['billy', 'bob', 'jr', 'who', 'lives', 'in ', 'a', 'pineapple'];
const expected1 = ['billy', 'bob', 'jr'];
const results3 = takeUntil(data4, x => x.length === 3 && x[0] === 'w');

assertArraysEqual(results3, expected1);



