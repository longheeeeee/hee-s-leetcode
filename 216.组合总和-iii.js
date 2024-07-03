/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = []
  const track = (start, path) => {
    let sum = path.reduce((s, item) => s+item, 0)
    if (path.length === k) {
      if (sum === n) {
        res.push([...path])
      }
      return
    }

    for (let i = start + 1; i <= 9; i++) {
      // 剪枝，判断是否前面几个的和已经超出n
      if (sum + i <= n) {
        path.push(i)
        track(i, path)
        path.pop()
      }
    }
  }
  track(0, [])
  return res
};
// @lc code=end

