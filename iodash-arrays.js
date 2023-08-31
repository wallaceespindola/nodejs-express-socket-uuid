const _ = require("lodash");

console.log(`####### NODE IODASH ARRAY TESTS #######`);

const nums = _.range(1, 10); // from 1 until before 10 (=9)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(`Range from 1 to 9 : ${nums}`);

const chunks = _.chunk(nums, 3);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(`3 chunks in the range : [${chunks[0]}], [${chunks[1]}], [${chunks[2]}]`);

const right = _.takeRight(nums, 2);
// => [8, 9]
console.log(`TakeRight 2 - two positions on the right side of range : ${right}`);

const left = _.take(nums, 2);
// => [1, 2]
console.log(`Take 2 - two positions on the left side of range (beginning) : ${left}`);