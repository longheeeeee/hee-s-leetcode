/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
  this.getRandom = function (map) {
    let res
    do {
      res = Math.floor(Math.random() * nums.length)
    }
    while (map.has(res))
    map.set(res, 1)
    return res
  }
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let i = this.nums.length
  let arr = []
  let map = new Map()
  while(--i >= 0) {
    arr[i] = this.nums[this.getRandom(map)]
  }
  return arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

