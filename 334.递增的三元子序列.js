/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false
    let a = 0, b = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[a] > nums[i]){
            a = i
        }
        else if (b !== 0 && nums[i] > nums[b]) {
            return true
        }
        else if (nums[i] > nums[a]) {
            b = i
        }
    }
    return false
};
// @lc code=end

