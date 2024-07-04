/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const isValid = (_i, _j) => {
    // console.log('isValid', _i, _j)
    const item = board[_i][_j]
    // 检查横向
    for (let j = 0; j < 9; j++) {
      if (j === _j) continue
      if (board[_i][j] === item) {
        // console.log('检查横向', item, j)
        return false
      }
    }
    // 检查竖向
    for (let i = 0; i < 9; i++) {
      if (i === _i) continue
      if (board[i][_j] === item) {
        // console.log('检查竖向', item, i)
        return false
      }
    }
    // 检查当前9宫格
    const starti = Math.floor(_i / 3) * 3
    const startj = Math.floor(_j / 3) * 3
    for (let i = starti; i < starti + 3; i++) {
      for (let j = startj; j < startj + 3; j++) {
        if (i === _i && j === _j) continue
        if (board[i][j] === item) return false
      }
    }
    return true
  }
  const track = () => {
    // 每次进入track目的是找到一个位置，填一个数
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue
        for (let k = 1; k <= 9; k++) {
          board[i][j] = String(k)
          if (isValid(i, j)) {
            // console.log('isValid true', i, j, k)
            if (track()) return true
          }
          board[i][j] = '.'
        }
        // 这里找到位置了，但是9个数都不行
        // console.log('这里找到位置了，但是9个数都不行', i,j)
        return false
      }
    }
    // 找不到能插入的位置了
    // console.log('找不到能插入的位置了')
    return true
  }
  track(0, 0)
  return board
};
// @lc code=end

