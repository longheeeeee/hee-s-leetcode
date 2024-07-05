/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  /**
   * 背包的容积变成了两个维度，放1和放0
   * dp[i][j]指的是在i个0和j个1的情况下，能放多少个物品
   * dp数组大小是(m+1)*(n+1)
   * 初始化为0
   */
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  // 物品
  for (let k = 0; k < strs.length; k++) {
    // 先计算物品的空间，分成0和1
    let count0 = 0, count1 = 0
    for (let idx = 0; idx < strs[k].length; idx++) {
      strs[k][idx] === '0' ? count0++ : count1++
    }
    // 滚动数组
    for (let i = m; i >= count0; i--) {
      for (let j = n; j >= count1; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - count0][j - count1] + 1)
      }
    }
  }
  // console.log(dp)
  return dp[m][n]
};
// @lc code=end

