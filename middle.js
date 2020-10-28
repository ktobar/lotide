// TEST/ASSERTION FUNCTIONS
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
// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  let arrLength = array.length;
  
  if (arrLength > 2) {
    if (arrLength % 2 === 0) {
      let evenVal = ((arrLength / 2) - 1);
      result = [array[evenVal], array[evenVal + 1]];
    } else {
      let oddVal = Math.floor(((arrLength / 2) - 1)) + 1;
      result = [array[oddVal]];
    }
  }
  return result;
};
// TEST CODE;
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
