/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // 单调队列，从大到小
  // 一个数，左边如果是比它小的会更快退出滑动窗口，不需要记录
  class Queue {
    constructor() {
      this.q = []
    }
    shift () {
      this.q.shift()
    }
    push(x) {
      if (x > this.q[0]) {
        this.q = [x]
      }
      else {
        this.q,push(x)
      }
    }
    check() {
      return this.q[0]
    }
  }
  const queue = new Queue()
  const res = []
  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i])
    if (i >= k - 1) {
      res.push(queue.check)
    }
  }
  return res
};
// @lc code=end

