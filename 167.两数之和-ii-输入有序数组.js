/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i=0, j=numbers.length-1
  while(i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum > target) {
      j--
    }
    else if (sum < target) {
      i++
    }
    else {
      return [i+1, j+1]
    }
  }

};
// var twoSum = function(numbers, target) {
//   for (let i = 0; i < numbers.length-1; i++) {
//     for (let j = i+1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] > target) break
//       if (numbers[i] + numbers[j] === target) return [i+1, j+1]
//     }
//   }
// };
// @lc code=end

