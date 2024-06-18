/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  const target = x
  let start = 0
  let end = target
  while(start < end) {
    const cur = Math.ceil((end - start) / 2 + start)
    const res = cur * cur
    if (res === target) {
      return cur
    }
    else if (res < target) {
      start = cur
    }
    else if (res > target) {
      end = cur - 1
    }
  }
  return start
};
// @lc code=end

