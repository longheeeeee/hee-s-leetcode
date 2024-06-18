/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const find = (nums, target, start, end) => {
    if (start > end) {
      return start
    }
    if (start === end) {
      return nums[start] > target ? start : nums[start] < target ? start+1 : start
    }
    const midIdx = Math.floor((end - start) / 2) + start
    const midVal = nums[midIdx]
    if (midVal > target) {
      return find(nums, target, start, midIdx - 1)
    }
    else if (midVal < target) {
      return find(nums, target, midIdx + 1, end)
    }
    else {
      return midIdx
    }
  }
  return find(nums, target, 0, nums.length - 1)
};

var searchInsert1 = function(nums, target) {
  if (nums.length === 0) {
    return 0
  }
  let start = 0
  let end = nums.length - 1
  while(start <= end) {
    const curIndex = start + Math.ceil((end - start) / 2)
    const cur = nums[curIndex]
    if (cur === target) {
      return curIndex
    }
    else if (cur < target) {
      start = curIndex + 1
    }
    else if (cur > target) {
      end = curIndex - 1
    }
  }
  return start
};
// @lc code=end

