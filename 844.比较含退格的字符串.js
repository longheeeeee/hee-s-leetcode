/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sPointer = s.length - 1
  let sBackCount = 0
  let tPointer = t.length - 1
  let tBackCount = 0
  const mark = '#'

  while(sPointer >= 0 || tPointer >= 0) {

    // 这里先while分开计算s和t，会快很多，估计是CPU优化，分支预测之类的
    while (sPointer >= 0 && (s[sPointer] === mark || sBackCount > 0)) {
    // console.log('s', s[sPointer])
      if (s[sPointer] === mark) {
        sBackCount++
      }
      else {
        sBackCount--
      }
      sPointer--
    }
    // 从后往前遍历t，直到第一个不是退格符并且退格符计数为0的字符
    while (tPointer >= 0 && (t[tPointer] === mark || tBackCount > 0)) {
        // console.log('t', t[tPointer])
      if (t[tPointer] === mark) {
        tBackCount++
      }
      else {
        tBackCount--
      }
      tPointer--
    }
    // 对比当前是否一致
    // console.log('compare, ', s[sPointer], t[tPointer])
    if (s[sPointer] !== t[tPointer]) {
      return false
    }
    sPointer--
    tPointer--
  } 
  return true
};
// var backspaceCompare = function(s, t) {
//   let sPointer = s.length - 1
//   let sBackCount = 0
//   let tPointer = t.length - 1
//   let tBackCount = 0
//   const mark = '#'

//   while(sPointer >= 0 || tPointer >= 0) {
//     // 从后往前遍历s，直到第一个不是退格符并且退格符计数为0的字符
//     if (sPointer >= 0 && (s[sPointer] === mark || sBackCount > 0)) {
//     // console.log('s', s[sPointer])
//       if (s[sPointer] === mark) {
//         sBackCount++
//       }
//       else {
//         sBackCount--
//       }
//       sPointer--
//       continue
//     }
//     // 从后往前遍历t，直到第一个不是退格符并且退格符计数为0的字符
//     if (tPointer >= 0 && (t[tPointer] === mark || tBackCount > 0)) {
//         // console.log('t', t[tPointer])
//       if (t[tPointer] === mark) {
//         tBackCount++
//       }
//       else {
//         tBackCount--
//       }
//       tPointer--
//       continue
//     }
//     // 对比当前是否一致
//     // console.log('compare, ', s[sPointer], t[tPointer])
//     if (s[sPointer] !== t[tPointer]) {
//       return false
//     }
//     sPointer--
//     tPointer--
//   } 
//   return true
// };
// @lc code=end

