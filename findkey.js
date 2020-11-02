const assertEqual = function(actual, expected) {
  if (actual !==  expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual ===  expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result;

  for (let key in object) {
    let currentKey = object[key];
  
    if (callback(currentKey)) {
      result = key;
      return result;
    }
  }
  return;
};

module.exports = findKey;

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

let data = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

assertEqual(data, undefined);

let arrData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Billy":     { stars: 5 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(arrData, x => x.stars === 5), 'Billy');

