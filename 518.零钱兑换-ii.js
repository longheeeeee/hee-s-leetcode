/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// var change = function(amount, coins) {
//   // dp[i]代表了使用硬币组合成总价i的组合数
//   // 初始值为：dp[0]代表组合成0元的组合数，dp[0]=1
//   // dp[i] = sum(dp[i-coin])
//   const dp = new Array(amount + 1).fill(0)
//   dp[0] = 1
//   for (let i = 1; i < amount+1; i++) {
//     let sum = 0
//     for (let c = 0; c < coins.length; c++) {
//       (i - coins[c] >= 0) && (sum += dp[i - coins[c]])
//     }
//     dp[i] = sum
//   }
//   console.log('dp', dp)
//   return dp[amount]
// }










var change = function(amount, coins) {
  // dp[i][j]代表了，使用i个硬币能凑成金额j的组合数为dp[i][j]
  // 边界情况 i === 0时，不使用硬币能凑成的金额只有0,组合为1种
  // dp[0][0] === 1 ; dp[0][j] === 0
  // j === 0时，所有硬币组合都可以用0个硬币来凑成0，组合为1种
  // dp[i][0] === 1
  const dp = []
  for (let i = 0; i <= coins.length; i++) {
    dp[i] = new Array(amount + 1).fill(0)
    dp[i][0] = 1
  }
  // 假设coin为前i个硬币的最后一个(从1开始计算的第i个硬币) coin = coins[i-1]
  // 当使用coin时，假如用2种方法凑3块钱，加上一个5元硬币，凑成8块的方法也只有2种
  // dp[i][j] = dp[i - 1][j - coin] (j - coin >= 0)

  // 这里有个问题：因为硬币是无限的，所以跟01背包有一个不一样的地方：
  // 如果在01背包问题中：假设：硬币为[1,2,5]时：
  // dp[3][8]为：下面两者相加
  // 使用5元硬币，凑成8元的组合数为：不使用5元硬币的情况下，凑到3元的组合数dp[i-1][j-coin]
  // 不使用5元硬币，凑成8元的组合数为：不使用5元硬币的情况下，凑到8元的组合数dp[i-1][j]
  // 这样子运算起来是不对的，因为在使用5元硬币的情况下，有可能是使用到了多个5元硬币，这样子就不能
  // 使用"不使用5元硬币的情况下，凑到3元的组合数dp[i-1][j-coin]"来计算，
  // 而是需要使用"使用5元硬币的情况下，凑到3元的组合数dp[i][j-coin]"
  // 所以状态转移方程应该是dp[i][j] = j - coin >= 0 ? dp[i - 1][j - coin] : 0

  // dp[i][j] = 0 (j - coin < 0)
  // 当不使用coin时，
  // dp[i][j] = dp[i - 1][j]
  for (let i = 1; i <= coins.length; i++) {
    const coin = coins[i - 1]
    for (let j = 0; j < amount + 1; j++) {
      dp [i][j] = dp[i - 1][j] + (j - coin < 0 ? 0 : dp[i][j - coin])
    }
  }
  // 最终返回dp[coins.length][mount]
  console.log('dp', dp)
  return dp[coins.length][amount]
}
// @lc code=end

