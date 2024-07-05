/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  /**
   * 题目转成：把集合分成两份，一份正的一份负的，使得正-负=traget
   * add + minus = target
   * add - minus = sum
   * add = (sum + target) / 2
   * 问题就转变成，有多少种不同的集合方法可以使得容量为traget的容器刚好装满
   * dp[i][j] 对于当前第i个物品，装满容量为j的背包，有几种方法
   * 有两种情况，取这个数/不取这个数
   * 不取这个数，直接就是dp[i - 1]，意思是使用之前的数已经满足了
   * 取这个数，背包容量就得减去当前值，dp[i-1][j-nums[i]]
   * dp[i][j] = dp[i - 1] + dp[i-1][j-nums[i]]
   * 在滚动数组里面，dp[j] = dp[j] + dp[j-nums[i]]
   */
  const sum =  nums.reduce((s, i) => s + i)
  const addTarget = (sum + Math.abs(target)) / 2
  // console.log(addTarget)
  // 判断非整数，证明无法得出
  if (addTarget >> 0 !== addTarget) {
    return 0
  }
  const dp = new Array(addTarget + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = dp.length - 1; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]]
    }
  }
  // console.log(dp)
  return dp[addTarget]
};
// @lc code=end

