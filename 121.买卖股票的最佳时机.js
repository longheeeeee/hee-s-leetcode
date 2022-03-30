/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 动态规划
  // dp[i]是前i日的最低价
  let max = 0
  let pre = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    let cur = Math.min(pre, price)
    let gain = price - cur
    gain > max && (max = gain)
    pre = cur
  }
  return max
};
// @lc code=end

