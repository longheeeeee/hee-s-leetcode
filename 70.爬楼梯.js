/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let first = 1
  let second = 2
  let tmp
  for (let i = 3; i <= n; i++) {
    tmp = second
    second = first + second
    first = tmp
  }
  return second
};
// @lc code=end

