/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    let n1 = 1, n2 = 1
    let tmp
    for (let i = 3; i <= n; i++) {
        tmp = n2
        n2 = n1 + n2
        n1 = tmp
    }
    return n2

};
// @lc code=end

