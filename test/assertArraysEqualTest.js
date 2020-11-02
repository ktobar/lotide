const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([6, 4, 7], [4, 1, 6]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);