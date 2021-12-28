/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const isVaild = (board, i) => {
    const h = board.length
    if (board.length === 0) return true
    for (let j = 0; j < board.length; j++) {
      const row = board[j]
      // 判断上方
      if (row[i] === 'Q') return false
      // 判断左上方
      if (i-(h-j) >= 0 && row[i-(h-j)] === 'Q') return false
      // 判断右上方
      if (i+h-j <= n && row[i+h-j] === 'Q') return false
    }
    return true
  }
  const res = []
  const track = (board) => {
    // 设置终止条件
    if (board.length === n) {
      res.push(JSON.parse(JSON.stringify(board)))
      return
    }
    for (let i = 0; i < n; i++) {
      if (isVaild(board, i)) {
        let newRow = '.'.repeat(i) + 'Q' + '.'.repeat(n-i-1)
        track([...board, newRow])
      }
    }
  }
  track([])
  return res
};
// @lc code=end

