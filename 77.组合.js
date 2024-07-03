/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  /**
   * 
   * @param {*} start 待选区
   * @param {*} path 路径
   */
  const track = (start, path) => {
    if (path.length === k) {
      res.push([...path])
      return
    }
    // 后面会出现不足以填满path的情况
    // 当前已选是path.length
    // 当前还需要选是k - path.length
    for (let i = start + 1; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      track(i, path)
      // 回溯完成后再退出一层
      path.pop()
    }
  }
  track(0, [])
  return res

};
// @lc code=end

