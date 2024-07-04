/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  const track = (arr, path) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    const used = new Set()
    for (let i = 0; i < arr.length; i++) {
      if (used.has(arr[i])) continue
      path.push(arr[i])
      const _arr = [...arr]
      _arr.splice(i, 1)
      track(_arr, path)
      path.pop()
      used.add(arr[i])
    }
  }
  track(nums, [])
  return res

};
// @lc code=end

