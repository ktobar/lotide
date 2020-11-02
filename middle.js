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

module.exports = middle;

