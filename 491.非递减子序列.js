/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = []
  const tarck = (start, path) => {
    if (path.length >= 2) {
      res.push([...path])
    }
    if (start >= nums.length) {
      return 
    }
    const set = new Set()
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      if (nums[i] < path.at(-1)) continue
      if (set.has(nums[i])) continue
      path.push(nums[i])
      tarck(i + 1, path)
      path.pop()
      set.add(nums[i])
    }
  }
  tarck(0, [])
  return res
};
// @lc code=end

