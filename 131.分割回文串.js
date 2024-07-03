/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = []
  const isBackWriting = (str) => {
    let left = 0
    let right = str.length - 1
    while(left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
  const track = (total, start, path) => {
    // console.log(total, start, path)
    if (start >= total.length) {
      res.push([...path])
      return
    }
    // 选择当前切割的子串
    for (let i = start; i < total.length; i++) {
      // 如果当前切割的子串是回文串，则继续切割
      if (isBackWriting(total.substring(start, i + 1))) {
        path.push(total.substring(start, i + 1))
        track(total, i+1, path)
        path.pop()
      }
    }
  }
  track(s, 0, [])
  return res
};
// @lc code=end

