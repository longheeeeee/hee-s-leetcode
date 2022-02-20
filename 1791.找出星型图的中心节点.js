/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
    return edges[0][0]
  }
  return edges[0][1]
};
// @lc code=end

