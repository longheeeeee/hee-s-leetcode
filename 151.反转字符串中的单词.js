/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 用库的话就是很简单，如果不用库，并且不用辅助空间（JS没法直接编辑字符串），那就分成三步
// 去除多余空格，反转整个字符串，逐个单词翻转
// 复杂，不想做
var reverseWords = function(s) {
  const arr = Array.from(s)
  let windowStart = 0
  while(true) {
    let left = windowStart
    let right = left
    while(right < s.length - 1 && arr[right + 1] !== ' ') {
      right++
    }
    console.log('right, ', right)
    windowStart = right + 1
    while(left < right) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
    while(windowStart < arr.length + 1 && arr[windowStart ] === ' ') {
      windowStart++
    }
    console.log('windowStart', windowStart)
    if (windowStart >= arr.length) {
      break
    }
  }
  return arr.join('')
};
// var reverseWords = function(s) {
//   const arr = s.split(' ').filter(a => a)
//   arr.reverse()
//   return arr.join(' ')
// };
// @lc code=end

