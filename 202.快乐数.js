/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num = String(n)
  let map = {}
  while(true) {
    const curSum = Array.from(num).reduce((sum, i) => {
      sum += (i ** 2)
      return sum
    }, 0)
    if (curSum === 1) {
      return true
    }
    if (map[curSum]) {
      return false
    }
    map[curSum] = 1
    num = String(curSum)
  }
};
// @lc code=end

