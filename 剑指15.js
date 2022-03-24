/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let res = 0
  let j = 1
  for (let i = 0; i < 32; i++) {
    if ((n & j) !== 0) res += 1
    j = j << 1
  }
  return res
};

hammingWeight(24)