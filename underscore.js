const _ = require('underscore');

console.log(`####### NODE UNDERSCORE ARRAY TESTS #######`);


const values = [3, 1, 8, 5];
console.log(`Initial array: [${values}]`);

// => [[1, 3, 5, 8]]
console.log(`Sorted array: [${values.sort()}]`);

const list = [[5, 1, 7], [3, 2, 1]];
console.log(`Initial matrix arrays: [${list[0]}], [${list[1]}]`);

var sorted = _.invoke(list, 'sort'); // invoke is for each sub-array in the matrix
// => [[1, 5, 7], [1, 2, 3]]
console.log(`Sorted matrix arrays: [${sorted[0]}], [${sorted[1]}]`);