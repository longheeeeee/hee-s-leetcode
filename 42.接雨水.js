/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const stack = []
  let res = 0
  height.forEach((h, idx) => {
    if (!stack.length) {
      stack.push(idx)
      return
    }
    // 新的元素比栈顶元素要大
    // 重复计算
    while(stack.length >= 2 && h > height[stack.at(-1)]) {
      let mid = stack.pop()
      // 左边更大的跟右边更大的高度差
      const smallerHeight = Math.min(height[stack.at(-1)], h)
      // 左右高度差减去当前高度
      const waterHeight = smallerHeight - height[mid]
      // 宽度，右围墙减去左围墙
      const waterWidth = idx - stack.at(-1) - 1
      // console.log('右围墙', h, '当前', height[mid], '左围墙', height[stack.at(-1)], 'smallerHeight', smallerHeight, '高宽', waterHeight, waterWidth)
      // console.log(h, height[mid], waterHeight, waterWidth)
      res += waterHeight * waterWidth
    }
    // 新的元素比栈顶元素要小，则入栈
    if (h <= height[stack.at(-1)]) {
      stack.push(idx)
    }
    // 新的元素比栈顶大（经过while pop后，栈内只剩下一个元素）
    else {
      stack.pop()
      stack.push(idx)
    }
  })
  return res
};
// @lc code=end

