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

const letterPositions = function(string) {
  const results = {};
  let convertedStr = [];
  for (let i = 0; i < string.length; i++) {
    convertedStr.push(string[i]);
  }
  //console.log(convertedStr)
  let i = 0;
  for (const item of convertedStr) {
    if (item !== ' ') {
      if (results[item]) {
        results[item].push(i);
        //console.log("1st if "+i)
      } else {
        let arrE = [i];
        results[item] = arrE;
        //console.log("2nd if "+i)
      }
    }
    i++;
  }
  //console.log(results);
  return results;
};

module.exports = letterPositions;

//letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);