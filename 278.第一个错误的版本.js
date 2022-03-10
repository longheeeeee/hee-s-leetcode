/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const find = (start, end) => {
            console.log(start, end)
            if (start > end) return start
            if (start === end) {
                return isBadVersion(start) ? start : start + 1
            }
            const mid = Math.floor((end-start) / 2) + start
            if (isBadVersion(mid)) {
                return find(start, mid -1)
            }
            else {
                return find(mid + 1, end)
            }
        }
        return find(1, n)
    };
};
// @lc code=end

