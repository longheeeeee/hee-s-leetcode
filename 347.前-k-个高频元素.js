/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  class Heap {
    queue
    compareFn
    constructor(compareFn) {
      this.queue = []
      this.compareFn = compareFn
    }
    detail() {
      return JSON.stringify(this.queue)
    }
    getLeftChild (pidx) {
      return pidx * 2 + 1
    }
    getRightChild (pidx) {
      return pidx * 2 + 2
    }
    getParent(idx) {
      return Math.floor((idx - 1) / 2)
    }
    push(x) {
      this.queue.push(x)
      let cur = this.queue.length - 1
      let parent = this.getParent(cur)
      // console.log('inner push', cur, parent, this.compare(parent, cur))
      // 上浮
      while(parent >= 0 && this.compare(parent, cur) > 0) {
        // console.log('push tmp', cur, parent)
        const tmp = this.queue[cur]
        this.queue[cur] = this.queue[parent]
        this.queue[parent] = tmp
        cur = parent
        parent = this.getParent(cur)
      }
      // console.log('push complete', this.detail())
    }
    pop() {
      // console.log('pop')
      if (this.queue.length === 1) {
        return this.queue.pop()
      }
      const res = this.queue[0]
      // 把最后一个元素填入到顶上
      this.queue[0] = this.queue.pop()
      let cur = 0
      let child = this.getLeftChild(cur)
      let targetChild = this.compare(child, child + 1) > 0 ? child + 1 : child
      // 下沉
      while(targetChild !== undefined && this.compare(cur, targetChild) > 0) {
        // console.log('pop tmp', cur, targetChild)
        // 交换
        const tmp = this.queue[cur]
        this.queue[cur] = this.queue[targetChild]
        this.queue[targetChild] = tmp
        // 更新
        cur = targetChild
        child = this.getLeftChild(cur)
        targetChild = this.compare(child, child + 1) > 0 ? child + 1 : child
      }
      // console.log('pop complete ', this.detail())
      return res
    }
    compare(index1, index2) {
      if (this.queue[index1] === undefined) return 1
      if (this.queue[index2] === undefined) return -1
      return this.compareFn(this.queue[index1], this.queue[index2])
    }
    size() {
      return this.queue.length
    }
  }

  const map = nums.reduce((m, i) => {
    m[i] ? (m[i] += 1) : (m[i] = 1)
    return m
  }, {})
  // console.log(JSON.stringify(map))

  const heap = new Heap((a, b) => a[1] - b[1])

  Object.entries(map).forEach(([key, value]) => {
    // console.log('push0', key, value)
    heap.push([key, value])
    if (heap.size() > k) {
      const out = heap.pop()
      // console.log('pop0', out[0], out[1])
    }
    // console.log('after map push', heap.detail())
  })
  const res = []
  while(heap.size() > 0) {
    // console.log('res heap.pop', heap.size(), heap.detail())
    res.push(heap.pop()[0])
  }
  return res
};
// @lc code=end

