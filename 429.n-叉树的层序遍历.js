/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = [root]
  while(queue.length) {
    const curLength = queue.length
    const cur = []
    for (let i = 0; i < curLength; i++) {
      const item = queue.shift()
      cur.push(item.val)
      if (item.children) {
        queue.push(...item.children)
      } 
    }
    res.push(cur)
  }
  return res
};
// @lc code=end

