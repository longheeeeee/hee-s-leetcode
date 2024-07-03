/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = [
    'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
  ]
  const res = []
  const track = (curDigiIdx, path) => {
    if (path.length === digits.length) {
      path && res.push(path)
      return
    }
    const str = map[Number(digits[curDigiIdx]) - 2]
    // console.log(curDigiIdx, digits[curDigiIdx], str)
    for (let i = 0; i < str.length; i++) {
      track(curDigiIdx + 1, path + str[i])
    }
  }
  track(0, '')
  return res
};
// @lc code=end

