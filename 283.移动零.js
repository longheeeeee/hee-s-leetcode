/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i=0, j=0
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[j] === 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
      j++
    }
  }
};
// var moveZeroes = function(nums) {
//   for (let i = nums.length-1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] === 0) {
//         [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//       }
//     }
//   }
//   console.log(nums)
// };
// @lc code=end

