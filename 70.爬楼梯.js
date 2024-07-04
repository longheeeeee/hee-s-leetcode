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
  if (n === 0) return 0
  if (n === 1) return 1
  let p1 = 1
  let p2 = 2
  for (let i = 3; i <= n; i++) {
    const temp = p1 + p2
    p1 = p2
    p2 = temp
  }
  return p2
}
var climbStairs = function(n) {
  if (n === 0) return 0
  // if (n < 3) return 1
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] 
  }
  return dp[n]
}
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

