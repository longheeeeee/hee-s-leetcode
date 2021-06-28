/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const map = new Map()
  var dp = function(coins, amount) {
    if (amount < 0) return -1
    if (amount === 0) return 0
    if (map.get(amount)) return map.get(amount)
    let childRes = Number.MAX_SAFE_INTEGER
    for (const coin of coins) {
      const res = dp(coins, amount - coin)
      if (res === -1) continue
      childRes = Math.min(childRes, res)
    }
    const finalRes = childRes === Number.MAX_SAFE_INTEGER ? -1 : childRes + 1
    map.set(amount, finalRes)
    return finalRes
  }
  return dp(coins, amount)
};


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

