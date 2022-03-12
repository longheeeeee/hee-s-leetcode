/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.split('')
  let ws=0, we=0, w=0
  while(w<=s.length) {
    if (s[w] === ' ' || s[w] === void 0) {
      // console.log('reverse')
      we--
      while(ws < we) {
        if(s[ws] !== s[we]) {
          console.log(s[ws], s[we]);
          [s[ws], s[we]] = [s[we], s[ws]]
          console.log(s[ws], s[we]);
        }
        ws++
        we--
      }
      ws = we = ++w
    }
    else {
      we++
      w++
    }
  }
  return s.join('')
};
// @lc code=end

