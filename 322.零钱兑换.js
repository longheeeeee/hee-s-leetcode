/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start

// dp[n]为凑成金额为n的最少硬币个数
// 设i为coins的其中一个
// dp[n-i] = dp[n] -1
// 边界条件
// dp[0] = 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for(let n = 1; n <= amount; n++) {
    coins.forEach(coin => {
      if (n - coin < 0) return
      const nCount = dp[n - coin] +1
      dp[n] > nCount  && (dp[n] = nCount)
    })
  }
  console.log(dp)
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};


// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//   const map = new Map()
//   var dp = function(coins, amount) {
//     if (amount < 0) return -1
//     if (amount === 0) return 0
//     if (map.get(amount)) return map.get(amount)
//     let childRes = Number.MAX_SAFE_INTEGER
//     for (const coin of coins) {
//       const res = dp(coins, amount - coin)
//       if (res === -1) continue
//       childRes = Math.min(childRes, res)
//     }
//     const finalRes = childRes === Number.MAX_SAFE_INTEGER ? -1 : childRes + 1
//     map.set(amount, finalRes)
//     return finalRes
//   }
//   return dp(coins, amount)
// };


// 自顶向下递归解法

// /**
//  * 加上备忘录
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//   const map = new Map()
//   var dp = function(coins, amount) {
//     if (amount < 0) return -1
//     if (amount === 0) return 0
//     if (map.get(amount)) return map.get(amount)
//     let childRes = Number.MAX_SAFE_INTEGER
//     for (const coin of coins) {
//       const res = dp(coins, amount - coin)
//       if (res === -1) continue
//       childRes = Math.min(childRes, res)
//     }
//     const finalRes = childRes === Number.MAX_SAFE_INTEGER ? -1 : childRes + 1
//     map.set(amount, finalRes)
//     return finalRes
//   }
//   return dp(coins, amount)
// };

// /**
//  * 暴力破解
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//   if (amount < 0) return -1
//   if (amount === 0) return 0
//   let childRes = Number.MAX_SAFE_INTEGER
//   for (const coin of coins) {
//     const res = coinChange(coins, amount - coin)
//     if (res === -1) continue
//     childRes = Math.min(childRes, res)
//   }
//   if (childRes === Number.MAX_SAFE_INTEGER) return -1
//   return childRes + 1
// };
// @lc code=end

