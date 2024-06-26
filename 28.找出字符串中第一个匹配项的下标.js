/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

/**
 * https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E6%80%9D%E8%B7%AF
 * https://www.bilibili.com/video/BV1M5411j7Xx/?spm_id_from=333.788&vd_source=1eba8722483d59c3af62938c51a8bda2
 * https://www.bilibili.com/video/BV1AY4y157yL/?spm_id_from=333.337.search-card.all.click&vd_source=1eba8722483d59c3af62938c51a8bda2
 * 这题使用KMT算法
 * 1. 构建NEXT数组 
 * 2. 使用NEXT快速匹配
 * 
 * 难点在于几个
 * 1. 快速匹配的原理是什么
 * 2. 为什么可以直接跳过？模拟一下就知道，中间一块都是在00比较然后跳过
 * 3. next数组是什么？如何手算next数组
 * 4. 如何代码计算next数组
 * 
 * 其中到第3点都比较简单，第4点很多地方都没有说清楚
 * 在计算next数组的时候，实际上是套娃了，在生成NEXT阶段就利用了已生成的next数组，把目前能最长的前缀作为模式串
 * 比如needle字符串 ABABCABABX
 * 0 0 1 2 0 1 2 3 4
 * A B A B C A B A B X
 *         j         i
 * 在这个时候，实际上是拿ABABC和ABABX进行对比，那ABABC就可以看作是模式串，去跟整串needle进行对比
 * 当模式串匹配失败的时候，就可以跳到已经匹配过的AB进行对比
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const getNext = (str) => {
    const next = []
    let j = 0
    next[0] = 0
    for (let i = 1; i < str.length; i++) {
      while(j > 0 && str[i] !== str[j]) {
        j = next[j - 1]
      }
      if (str[i] === str[j]) {
        j++
      }
      next[i] = j
    }
    return next
  }
  const next = getNext(needle)
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    // console.log(i, j)
    while(j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) {
      j++
    }
    if (j === needle.length) {
      return i - j + 1
    }
  }
  return -1
};

// var strStr = function(haystack, needle) {
//   const match = (startIndex, str, target) => {
//     let i = 0
//     while(i < target.length && str[i + startIndex] === target[i]) {
//       i++
//     }
//     return i + startIndex
//   }
//   let index = 0
//   while(index < haystack.length) {

//     const stopIndex = match(index, haystack, needle)
//     // console.log(index, stopIndex)
//     if (stopIndex === index + needle.length) {
//       return index
//     }
//     index = index + 1
//   }
//   return -1 
// };
// @lc code=end

