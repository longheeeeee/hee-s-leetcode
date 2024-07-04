/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0
  const dp = []
  let p1 = 0
  let p2 = 1
  for (let i = 2; i <= n; i++) {
    let temp = p1 + p2
    p1 = p2
    p2 = temp
  }
  return p2
}
var fib = function(n) {
  const dp = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
var fib = function(n) {
    if (n === 0) return 0
    let n1 = 1, n2 = 1
    let tmp
    for (let i = 3; i <= n; i++) {
        tmp = n2
        n2 = n1 + n2
        n1 = tmp
    }
    return n2

};
// @lc code=end

