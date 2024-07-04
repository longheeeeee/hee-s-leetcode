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
  const res = []
  // 检查是否可以放置
  const canPlace = (position, path) => {
    for (let i = path.length - 1; i >= 0; i--) {
      const item = path[i]
      // 检查上方
      if (item === position) return false
      // 左上方
      if (item === position - (path.length - i)) return false
      if (item === position + (path.length - i)) return false
    }
    return true
  }
  const track = (path) => {
    if (path.length === n) {
      res.push([...path])
      return
    }
    for (let i = 0; i < n; i++) {
      if (canPlace(i, path)) {
        path.push(i)
        track(path)
        path.pop()
      }
    }
  }
  track([])
  return res.map(resArr => resArr.map(
    (position) => {
      let strArr = new Array(n).fill('.')
      strArr.splice(position, 1, 'Q')
      return strArr.join('')
    }
  ))
  
}
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

