/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [[1]]
  for (let i = 0; i < numRows - 1; i++) {
    const arr2 = []
    for (let j = 0; j <= i + 1; j++) {
      arr2[j] = (res[i][j-1] || 0) + (res[i][j] || 0)
    }
    res.push(arr2)
    console.log(arr2)
  }
  return res
};
// @lc code=end

