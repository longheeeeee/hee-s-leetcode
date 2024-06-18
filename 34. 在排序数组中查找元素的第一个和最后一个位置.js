/**
  给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target，返回 [-1, -1]。
  你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。



  示例 1：

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4]
  示例 2：

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]
  示例 3：

  输入：nums = [], target = 0
  输出：[-1,-1]


  提示：

  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums 是一个非递减数组
  -109 <= target <= 109
 */

  /*
  1. 二分法
  2. 在匹配的时候，如果匹配中了，不是直接返回，而是缩短窗口，计算左边界的时候缩短窗口右边界
  3. 左边界和右边界分开计算
  4. 注意的是，这里需要分开使用Math.floor和Math.ceil，防止[2,2], 2的时候计算左边界/右边界卡住
   */

  function findLeft (nums, target) {
    let start = 0
    let end = nums.length -1
    while (start < end) {
      const curIndex = start + Math.floor((end - start) / 2)
      const cur = nums[curIndex]
      if (cur === target) {
        end = curIndex
      }
      else if (cur < target) {
        start = curIndex + 1
      }
      else if (cur > target) {
        end = curIndex - 1
      }
    }
    if (nums[start] === target) {
      return start
    }
    return -1
  }
  function findRight (_start, nums, target) {
    let start  = _start
    let end = nums.length - 1
    while(start < end) {
      const curIndex = start + Math.ceil((end - start) / 2)
      const cur = nums[curIndex]
      if (cur === target) {
        start = curIndex
      }
      else if (cur > target) {
        end = curIndex - 1
      }
      else if (cur > target) {
        start = curIndex + 1
      }
    }
    if (nums[start] === target) {
      return start
    }
    return -1
  }
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var searchRange = function(nums, target) {
    if (nums.length === 0) {
      return [-1, -1]
    }
    const left = findLeft(nums, target)
    if (left === -1) {
      return [-1, -1]
    }
    const right = findRight(left, nums, target)
    return [left, right]
  };