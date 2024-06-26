/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = nums1.reduce((m, i) => {
    m[i] = 1
    return m
  }, {})
  const res = nums2.reduce((arr, i) => {
    if (map[i]) {
      arr.push(i)
      map[i] = 0
    }
    return arr
  }, [])
  return res
};
// @lc code=end

