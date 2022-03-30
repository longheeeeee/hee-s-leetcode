/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]

  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};
// @lc code=end

