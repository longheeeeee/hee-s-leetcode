/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = Array(n).fill(null).map(() => [])
  const end = n ** 2
  const getNext = (i, j, toward) => {
    // 根据toward获取下一个
    switch (toward) {
      case 0:
        return [i, j+1]
      case 1:
        return [i+1, j]
      case 2:
        return [i, j-1]
      case 3:
        return [i-1, j]
    }
  }
  const fill = (i, j, toward, target) => {
    // console.log('fill, ', target)
    // 填入
    res[i][j] = target
    if (target === end) {
      return res
    }
    // 获取下一个
    let [_i, _j] = getNext(i, j, toward)
    // console.log('next, ', _i, _j)
    if (_i >= 0 && _j >=0 && _i < n && _j < n && !res[_i][_j]) {
      return fill(_i, _j, toward, target+1)
    }
    // 如果下一个已经有了，则转方向获取
    else {
      const _toward = (toward + 1) % 4
      const [__i, __j] = getNext(i, j, _toward)
      // console.log('regen next, ', __i, __j)
      return fill(__i, __j, _toward, target+1)
    }
  }
  return fill(0, 0, 0, 1)
};
// @lc code=end

