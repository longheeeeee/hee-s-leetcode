/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const nums = []
  const marks = ['+', '-', '*', '/']
  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    if (marks.includes(cur)) {
      const b = nums.pop()
      const a = nums.pop()
      let res
      switch (cur) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = Math.trunc(a / b);
          // a | 0
          // a >> 0
          // 都可以，可读性很差
          break;
      }
      console.log(a, b, res)
      nums.push(res)
    }
    else {
      nums.push(Number(cur))
    }
  }
  return nums[0]
};
// @lc code=end

