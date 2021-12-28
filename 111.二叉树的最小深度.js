/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0
    let depth = 1
    let queue = [root]
    while(queue.length) {
        let l = queue.length
        for (let i = 0; i < l; i++) {
            let cur = queue.shift()
            if (!cur.left && !cur.right) return depth
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        depth += 1
    }
};
// @lc code=end

