/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  /**
   * O(nlogn)动态规划 + 二分查找法 
   * dp[i] = max(dp[j]) + 1 (0<=j<i && nums[i] > nums[j])
   * dp[i]指的是以i为结尾的最大子序列长度
   * 没写完，大概思路就是dpMinArr是储存相同的dp数中，对应的num[i]最小的那个的index
   */
  const binarySearch = (arr, indexArr, start, end, target) => {
    debugger
    if (end < start || end === start) return start
    const mid = Math.floor(end - start)
    if (arr[indexArr[mid]] < target) return binarySearch(arr, indexArr, mid +1, end, target)
    return binarySearch(arr, indexArr, start, mid-1, target)
  }
  if (nums.length === 1) return 1
  const len = nums.length + 1
  const dp = new Array(len).fill(0)
  const dpMinArr = [-Infinity, 0]
  dp[0] = 0
  dp[1] = 1

  let res = 1
  for (let i = 2; i < len; i++) {
    const dpMinIndex = binarySearch(nums, dpMinArr, 0, dpMinArr.length - 1, nums[i-1])
    console.log(dpMinIndex)
    dp[i] = dpMinIndex ? dp[dpMinArr[dpMinIndex]] + 1 : 1
    if (dp[i] > dpMinArr.length-1) {
      dpMinArr.push(i)
    }
    else if (nums[dpMinArr[dpMinIndex]] > nums[i-1]) {
      dpMinArr[dpMinIndex] = i
    }
    if (dp[i] > res) res = dp[i]
  }
  console.log(dpMinArr)
  console.log(dp)
  return res
};
lengthOfLIS([10,9,2,5,3,7,101,18])
// var lengthOfLIS = function(nums) {
//   /**
//    * O(n^2)动态规划
//    * dp[i] = max(dp[j]) + 1 (0<=j<i && nums[i] > nums[j])
//    * 54/54 cases passed (140 ms)
//    * Your runtime beats 73.01 % of javascript submissions
//    * Your memory usage beats 5 % of javascript submissions (44.2 MB)
//    */
//   if (nums.length === 1) return 1
//   const len = nums.length + 1
//   const dp = new Array(len).fill(0)
//   dp[0] = 0
//   dp[1] = 1
//   let res = 1
//   for (let i = 2; i < len; i++) {
//     let max = 0
//     for (let j = 1; j < i; j++) {
//       if (nums[i-1]>nums[j-1] && dp[j] > max) max = dp[j]
//     }
//     dp[i] = max + 1
//     if (dp[i] > res) res = dp[i]
//   }
//   console.log(dp)
//   return res
// };
// @lc code=end

