/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  const track = (start, path, sum) => {
    // console.log(start, path, sum)
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) {
        break
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

