/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let start = 0
  let end = s.length - 1
  while(start < end) {
    const tmp = s[start]
    s[start] = s[end]
    s[end] = tmp
    start++
    end--
  }
  return s
}
var reverseString = function(s) {
  let i=0, j=s.length-1
  while(i < j) {
    if (s[i] !== s[j]) {
      [s[i], s[j]] = [s[j], s[i]]
    }
    i++
    j--
  }
};
// @lc code=end

