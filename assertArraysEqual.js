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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([6, 4, 7], [4, 1, 6]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
