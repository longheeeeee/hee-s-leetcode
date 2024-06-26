/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0
  let right = 0
  let curSum = nums[0]
  let res = Infinity
  while(right < nums.length) {
    // 左边界收缩
    if (curSum >= target) {
      // 判定结束
      const curLength = right - left + 1
      if (curLength === 1) {
        return curLength
      }
      res = Math.min(curLength, res)
      curSum -= nums[left]
      left++
    }
    // 右边界拓展
    else {
      right++
      curSum += nums[right]
    }
  }
  return res === Infinity ? 0 : res
};
// @lc code=end

