/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr1 = [1]
  for (let i = 0; i < rowIndex; i++) {
    const arr2 = []
    for (let j = 0; j <= i + 1; j++) {
      arr2[j] = (arr1[j-1] || 0) + (arr1[j] || 0)
    }
    arr1 = arr2
    console.log(arr2)
  }
  return arr1
};
// @lc code=end

