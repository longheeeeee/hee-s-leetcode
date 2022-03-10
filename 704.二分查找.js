/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  const half = (nums, target, start, end) => {
    if (start > end) {
      // console.log('start > end', start, end)
      return -1
    }
    if (start === end) {
      // console.log('start === end', start, end)
      return target === nums[start] ? start : -1
    }
    const midIdx = Math.floor((end - start) / 2) + start
    const midVal = nums[midIdx]
    if (midVal > target) {
      return half(nums, target, start, midIdx-1)
    }
    else if (midVal < target) {
      return half(nums, target, midIdx +1, end)
    }
    else {
      return midIdx
    }
  }

  if (nums.length) return half(nums, target, 0, nums.length - 1)
  return -1
};
// @lc code=end

