/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 使用动态规划来解题：
  // 设dp[i]为以nums[i]作为结尾的连续子数组最大和
  // 最终的结果就是max dp
  // 如nums = [-2,1,-3,4,-1,2,1,-5,4]
  // dp[0]=-2   dp[1]=1(放弃-2，使用1来做新的子集)   dp[2]=-2(1+-3)...
  let max, pre
  max = pre = nums[0]
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i])
    max = Math.max(pre, max)
  }
  return max
};
// @lc code=end

