/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 1
  let right = 1
  while(right < nums.length) {
    if (nums[right] === nums[left]) {
      right++
      continue
    }
    nums[left] = nums[right]
    left++
    right++
  }
  return left
};
// @lc code=end

