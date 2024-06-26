/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = nums1.reduce((m, i) => {
    m[i] = m[i] ? m[i] + 1 : 1
    return m
  }, {})
  return nums2.reduce((arr, i) => {
    if (map[i]) {
      map[i] = map[i] - 1
      arr.push(i)
    }
    return arr
  }, [])
};
// @lc code=end

