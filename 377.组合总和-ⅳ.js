/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    nums.forEach(n => {
      i >= n && (dp[i] = dp[i] + dp[i - n])
    })
  }
  // console.log(dp)
  return dp[target]
};
// @lc code=end

