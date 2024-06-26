/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

/**
 * https://programmercarl.com/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2.html#%E6%80%9D%E8%B7%AF
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // 用KMT算法求出最大相同前后缀，然后和总长度的差值就是重复子串长度，看是否能整除
  const getNext = (str) => {
    let j = 0
    const next = [0]
    for (let i = 1; i < s.length; i++) {
      while(j > 0 && str[j] !== str[i]) {
        j = next[j - 1]
      }
      if (str[j] === str[i]) {
        j++
      }
      next[i] = j
    }
    return next
  }
  const n = getNext(s)
  // console.log(JSON.stringify(n))
  if (n[n.length - 1] > 0 && (s.length % (s.length - n[n.length - 1])) === 0) {
    return true
  }
  return false
}
// var repeatedSubstringPattern = function(s) {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     let k = 0
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[k] === s[j]) {
//         if (k >= i) {
//           k = 0
//         }
//         else {
//           k++
//         }
//         if (j === s.length - 1) {
//           return true
//         }
//       }
//       else {
//        break
//       }
//     }
//   }
//   return false
// };
// @lc code=end

