/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map[target - element] !== undefined) {
      return [i, map[target - element]]
    }
    map[element] = i 
  }
  return false
}
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };
var twoSum = function(nums, target) {
  let map = {
    [nums[0]]: 0
  }
  for (let i = 1; i< nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    }
    map[nums[i]] = i
  }
};
// @lc code=end

