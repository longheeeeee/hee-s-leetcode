/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let left = 0
  let right = nums.length - 1
  let leftRes = nums[left] ** 2
  let rightRes = nums[right] ** 2
  const res = []
  while(left <= right) {
    if (leftRes > rightRes) {
      res.unshift(leftRes)
      left++
      leftRes = nums[left] ** 2
    }
    else {
      res.unshift(rightRes)
      right--
      rightRes = nums[right] ** 2
    }
  }
  return res
};


// var sortedSquares = function(nums) {
//   let left = 0
//   let right = nums.length-1
//   let count = nums.length-1
//   const res = []
//   while(count >= 0) {
//     if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//       res[count--] = Math.pow(nums[right--], 2)
//     }
//     else {
//       res[count--] = Math.pow(nums[left++], 2)
//     }
//   }
//   return res
// };
// @lc code=end

