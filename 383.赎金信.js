/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = Array.from(magazine).reduce((m, i) => {
    m[i] = m[i] ? m[i] + 1 : 1
    return m
  }, {})
  return Array.from(ransomNote).every((i) => {
    if (!map[i]) {
      return false
    }
    map[i] -= 1
    return true
  })
};
// @lc code=end

