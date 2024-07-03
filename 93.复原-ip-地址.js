/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = []
  const checkIp = (str) => {
    const num = Number(str) 
    if (String(num) === str && num >= 0 && num <= 255) {
      return true
    }
    return false
  }
  const track = (start, path) => {
    if (start >= s.length) {
      res.push(path.join('.'))
      return
    }
    for (let i = start; i < s.length; index++) {
      // 如果这次切割后剩下未分配的数字比将要分配的ip地址段*3更多，
      // 证明后面会出现4位以上的ip地址，则这次切割位数不足
      const remain = s.length - i
      if ((4 - path.length + 1) * 3 < remain) {
        continue
      }
      // 如果这次切割后剩下的不足分配，则这次切割太多，后面的也不需要切割了
      if ((4 - path.length + 1) * 1 > remain) {
        break
      }
      // 前导0直接去掉
      if (s[start] === '0' && i > start) {
        break
      }
      // 判断当前切割是否合法
      const cut = s.substring(start, i + 1)
      if (checkIp(cut)) {
        path.push(cut)
        track(i, path)
        path.pop()
      }
    }
  }
  track(0, [])
  return res
};
// @lc code=end

