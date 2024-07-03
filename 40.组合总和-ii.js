/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  const track = (start, path, sum) => {
    // console.log(start, path, sum)
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = start + 1; i < candidates.length; i++) {
      if (sum + candidates[i] > target) {
        break
      }
      if (candidates[i - 1] === candidates[i]) {
        continue
      }
      path.push(candidates[i])
      track(i, path, sum + candidates[i])
      path.pop(candidates[i])
    }
  }
  track(0, [], 0)
  return res

};
// @lc code=end

