/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arr = Array.from(s)
  let windowStart = 0
  while(windowStart < s.length - 1) {
    let left = windowStart
    let right = (s.length - windowStart) < k ? s.length - 1 : windowStart + k - 1
    while(left < right) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
    windowStart += 2 * k
  }
  return arr.join('')
};
// @lc code=end

