/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let find = false
    while(n !== 0) {
        if (n & 1 === 1) {
            if (find) return false
            find = true
        }
        n = n >> 1
    }
    return find
};

// for  x << 1 if(x > n) 
// @lc code=end

