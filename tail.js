const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
  } else {
    let empty = [];
    return empty;
  }
};

module.exports = tail;