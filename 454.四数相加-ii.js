/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = {}
  let res = 0
  nums1.forEach((i1) => {
    nums2.forEach((i2) => {
      map[i1+i2] = map[i1+i2] ? map[i1+i2] + 1 : 1
    })
  })
  nums3.forEach((i3) => {
    nums4.forEach((i4) => {
      if (map[0-i3-i4]) {
        res += map[0-i3-i4]
      }
    })
  })
  return res
};
// @lc code=end

