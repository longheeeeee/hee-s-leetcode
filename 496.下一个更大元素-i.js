/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 单调栈，栈底到栈顶大，单调递减，结果输出下标，栈内存放下标
  const stack = []
  const res = {}
  nums2.forEach((item, idx) => {
    if (!stack.length) {
      stack.push(idx)
      return
    }
    while (item > nums2[stack.at(-1)]) {
      const tmp = stack.pop()
      res[nums2[tmp]] = item
    }
    stack.push(idx)
  })
  return nums1.map(item => res[item] || -1)
};
// @lc code=end

