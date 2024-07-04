/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
/**
 * 能跑，但是超时了，估计是数组splice耗时比较大
 */
var findItinerary = function(tickets) {
  let res = ['JFK']
  /**
   * {
   *   'JFK': {
   *     'MFC': 1
   *   }
   * }
   * 用map更快，但是需要重新排序，保证Object.keys遍历的时候能正确返回
   */
  let canUse = {}
  tickets.forEach(([from, to]) => {
    if (!canUse[from]) {
      canUse[from] = {}
    }
    if (!canUse[from][to]) {
      canUse[from][to] = 0
    }
    canUse[from][to] += 1
  })
  const sortObject = (obj) => {
    const _obj = {}
    const keys = Object.keys(obj)
    keys.sort()
    keys.forEach(k => {
      if (obj[k] !== null && typeof obj[k] === 'object') {
        _obj[k] = sortObject(obj[k])
      }
      else {
        _obj[k] = obj[k]
      }
    })
    return _obj
  }
  canUse = sortObject(canUse)

  // console.log('canUse', canUse)
  const track = () => {
    // console.log('track', cur, path)
    if (res.length === tickets.length + 1) {
      // console.log('命中', res)
      return true
    }
    // 检查还能去的机场
    const curCanUse = canUse[res.at(-1)]
    const avaliableTarget = Object.keys(curCanUse || {})
    if (!avaliableTarget?.length) {
      return false
    }
    for (let i = 0; i < avaliableTarget.length; i++) {
      const target = avaliableTarget[i]
      if (curCanUse[target] <= 0) {
        continue
      }
      // 减去可用次数
      curCanUse[target]--
      res.push(target)
      if (track()) return true
      // 加回来
      curCanUse[target]++
      res.pop()
    }
  }
  track()
  // console.log('res', res)
  return res
};
/**
 * 能跑，但是超时了，估计是数组splice耗时比较大
 */
var findItinerary = function(tickets) {
  let res = ['JFK']
  /**
   * {
   *   'JFK': ['MFC']
   * }
   */
  const canUse = {}
  tickets.forEach((t) => {
    if (!canUse[t[0]]) {
      canUse[t[0]] = []
    }
    canUse[t[0]].push(t[1])
  })
  Object.values(canUse).forEach((arr) => {
    arr.sort()
  })

  // console.log('canUse', canUse)
  const track = () => {
    // console.log('track', cur, path)
    if (res.length === tickets.length + 1) {
      // console.log('命中', res)
      return true
    }
    // 检查还能去的机场
    if (!canUse[res.at(-1)]?.length) {
      return false
    }
    const avaliableTarget = canUse[res.at(-1)]
    for (let i = 0; i < avaliableTarget.length; i++) {
      const target = avaliableTarget[i]
      // 减去可用次数
      avaliableTarget.splice(i, 1)
      res.push(target)
      if (track()) return true
      // 加回来
      avaliableTarget.splice(i, 0, target)
      res.pop()
    }
  }
  track()
  // console.log('res', res)
  return res
};
// @lc code=end

