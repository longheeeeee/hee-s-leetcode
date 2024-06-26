/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = Array.from(s).reduce((map, item) => {
    map[item] = map[item] ? map[item]+1 : 1
    return map 
  }, {})
  for (let i = 0; i < t.length; i++) {
    const item = t[i]
    if (!map[item]) {
      return false
    }
    map[item] -= 1
  }
  return true
};
// @lc code=end

