/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0
  let i = nums.length-1
  while(i >= 0) {
    res ^= nums[i--]
  }
  return res
};
// @lc code=end

