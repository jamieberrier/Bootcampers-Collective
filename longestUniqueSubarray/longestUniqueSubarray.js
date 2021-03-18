/*
Longest unique subarray
Given an array of elements, return the length of the longest subarray 
where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], 
return 5, as the longest subarray of distinct elements is [5, 2, 3, 4, 1].
*/

// testing
const assert = require('assert')

/*
Pseudocode
  create an object to track frequency of number/element
  sliding window
    use 2 pointers, left = 0 and right = 1
    maxLength = 0
    move right if not in map, move slow to right of dup
*/

const longestUniqueSubarray = arr => {
  // to track window's trailing edge
  let left = 0
  // to track window's leading edge
  let right = 0
  // to track longest subarray length
  let maxLength = 0
  // to track occurences of num
  let numMap = {}

  // while window's leading edge has NOT reached the end of the array
  while(right < arr.length) {
    // num not in map
    if(!numMap[arr[right]] || numMap[arr[right]] === 0) {
      // add num to map
      numMap[arr[right]] = 1
      // increase maxLength
      ++maxLength
      // move leading edge
      ++right
    } else { // num in map
      numMap[arr[right]] = 0
      --maxLength
      ++left
    }
  }
  return maxLength
};

//console.log(longestUniqueSubarray([5, 1, 3, 5, 2, 3, 4, 1])); // 5
// shouldn't do anything
//assert.strictEqual(1, 2)
// should break
assert.strictEqual(longestUniqueSubarray([5, 1, 3, 5, 2, 3, 4, 1]), 5)
//
//assert.deepStrictEqual(ourFunction([5, 1, 3, 5, 2, 3, 4, 1], 5))
console.log('Passed')