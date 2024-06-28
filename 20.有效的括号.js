/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    switch(item) {
      case '(':
      case '[':
      case '{':
        stack.push(item);
        break;
      case ')': 
      case ']': 
      case '}': 
      {
        const tmp = stack.pop()
        // console.log(tmp, item, map[item])
        if (tmp !== map[item]) {
          return false
        }
        break;
      }
      default:
    }
  }
  return !stack.length
};
// @lc code=end

