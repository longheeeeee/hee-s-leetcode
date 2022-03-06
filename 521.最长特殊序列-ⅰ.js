/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a.length !== b.length) return a.length > b.length ? a.length : b.length
  if (a !== b) return a.length
  return -1
};
// @lc code=end
