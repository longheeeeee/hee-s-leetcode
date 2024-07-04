/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false
  // dp[i]表示在容量为i的背包中能够装下的最大价值
  // 判断背包容量sum/2的时候，装下的价值是否也等于sum/2
  const sum = nums.reduce((s, i) => s + i)
  // 正整数元素和不可能为小数
  if (sum % 2 === 1) return false
  const target = sum / 2
  const dp = new Array(target + 1).fill(0)
  // 是否添加某个数
  for (let i = 0; i < nums.length; i++) {
    // 计算这个数选择/抛弃所得到的价值
    // 滚动数组需要遍历，并且当前因为nums[i]以下，
    // 因为背包放不下，所以固定等于dp[j]，不需要遍历
    for (let j = target; j >= nums[i]; j--) {
      // 抛弃当前数就是dp[j]
      // 公式为dp[j - weight[i]] + value[i]
      // 选择当前数就是dp[j - nums[i]] + nums[i]
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[j] === sum / 2) {
        return true
      }
    }
  }
  // console.log(dp)
  if (dp[target] === target) {
    return true
  }
  return false
};
// @lc code=end

