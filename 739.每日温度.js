/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  /**
   * 单调栈
   * 从栈底到栈顶，单调递减，意思是比他小的才能push进去
   * 假设数组是12343235
   * 在前半段单调递增的时候，1234，直接就可以计算出来，比他大的就在后面
   * 到递减段，432，没有办法知道后面什么时候出现更大的，所以存起来，栈是[432]
   * 一直到转折点，3出现了，比2大，那就可以计算出来2的结果
   * 然后因为3也是需要计算的，所以入栈[433]
   * 下一个是5，比栈内的都大，就可以全pop出来，计算出433对应的结果，栈是[5]
   * 遍历完成后补0
   */
  const stack = []
  const res = []
  temperatures.forEach((t, idx) => {
    if (!stack.length) {
      stack.push(idx)
      // console.log('没东西', idx, stack)
      return
    }
    // 当前比栈顶更大，出栈，记录
    while (t > temperatures[stack.at(-1)]) {
      const tmp = stack.pop()
      res[tmp] = idx - tmp
      // console.log('记录', t, temperatures[stack.at(-1)], tmp, res)
    }
    stack.push(idx)
  })
  // 补0
  while(stack.length) {
    res[stack.pop()] = 0
  }
  return res
};
// @lc code=end

