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


const without = function(array1,array2) {
  
  const inside = function(element, array) {
    for (let i = 0; i < array.length; i++) {
      if (element === array[i]) {
        return true;
      }
    }
  
    return false;
  };
  let remain = [];
  
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (!inside(element, array2)) {
      remain.push(element);
    }
    // attemp 20
    // let j =0
    // while(j < array2.length){
    //   if (array1[i] !== array2[j]){
    //   console.log("IM IN!" + array1[i])
    //   remain.push(array1[i])
    // }
    // console.log(remain)
    //   console.log(j)
    //     j++
        
    // }
  }

  //console.log (remain);
  return remain;
};

assertArraysEqual(without(["4", "G", "3"], ["3", "G"]), [ "4" ]);

const answer =  without([1, 2, 3], [1]); // => [2, 3];
assertArraysEqual(answer, [2, 3]);

const ans2 = without(["1", "2", "3"], ["3", 1, 2]); // => ["1", "2"];
assertArraysEqual(ans2, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);