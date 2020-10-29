const assertEqual = function(actual, expected) {
  if (actual !==  expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual ===  expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
    const results = {};
    let convertedStr = [];
    for (let i = 0; i < string.length; i++) {
      convertedStr.push(string[i]);
    }
    //console.log(convertedStr)

    for (const item of convertedStr) {
      if (item !== ' '){
        if (results[item]) {
          results[item]++;
        } else {
          results[item] = 1;
        }
      }
    }  
    //onsole.log(results);
   return results; 
}

console.log(countLetters("lighthouse in the house"))

