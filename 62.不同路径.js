/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Array(n).fill(1)
  // dp[0][0] = 0
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[j] = 1
        continue
      }
      dp[j] = dp[j] + dp[j-1]
    }
  }
  // console.log(dp)
  return dp[n - 1]
};
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // dp[0][0] = 0
  // console.log(dp)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1
        continue
      }
      if (i === 0 && j === 0) continue
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end

