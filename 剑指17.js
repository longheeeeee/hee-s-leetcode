/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const res = []
  const track = (cur, target) => {
    if (cur.length === target) {
      res.push(cur.join(''))
      return
    }
    for (let i = 0; i < 10; i++) {
      cur.push(i)
      track(cur, target)
      cur.pop()
    }
  }
  track([], n)
  res.shift()
  return res
};