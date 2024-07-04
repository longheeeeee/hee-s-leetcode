/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  // 把石头尽可能的分成两堆，跟平均值的差值就是剩下的石头的重量
  // 问题就转变成：求总重量n以下，使用石头能够组成的最大重量
  const sum = stones.reduce((s, i) => s + i)
  const target = Math.floor(sum / 2)
  const dp = new Array(target + 1).fill(0)

  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return sum - dp[target] * 2
};
// @lc code=end

