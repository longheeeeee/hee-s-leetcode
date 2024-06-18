/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let start = 0
  let end = num
  while(start < end) {
    const curIndex = start + Math.floor((end - start) / 2)
    const target = curIndex * curIndex
    // console.log(start, end, curIndex)
    if (target === num) {
      return true
    }
    if (target > num) {
      end = curIndex - 1
    }
    else {
      start = curIndex + 1
    }
  }
  return start * start === num ? true : false
};
// @lc code=end
console.log(isPerfectSquare(16))
