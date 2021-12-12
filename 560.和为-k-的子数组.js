/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum1 = function(nums, k) {
    // 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
    // 求某段子集和为k，要多次获取某段子集和，使用前缀和数组来快速求值
    const preSum = [0]
    for (let i = 0; i < nums.length; i++) {
        preSum[i+1] = preSum[i] + nums[i]
    }
    // 然后遍历前缀和数组的所有差值来计算差值为k的出现次数
    let res = 0
    for (let i = 0; i < preSum.length; i++) {
        for (let j = i+1; j < preSum.length; j++) {
            if (preSum[j] - preSum[i] === k) {
                res+=1
            }
        }
        
    }
    return res
};
// 上面的方案能通过校验，可是耗时太高了，可以尝试优化
// 在生成前缀和数组的时候遍历了一次，后面又遍历了一次，这两次可以合起来
// 下方嵌套遍历的作用是遍历所有的前缀和差值，计算某个特定值出现的次数
// preSum[j] - preSum[i] === k这个判断，移项一下，就变成preSum[j] - k === preSum[i]
// 当j>i时，对于特定的preSum[j]，就变成了计算preSum[i]为某个值的次数
// 当j>i时，preSum的0~i这段其实已经是确定的，当j发生变化时，不需要重复遍历查找i为某个值的情况
// 可以使用哈希表来记录
// 而且因为只需要计算次数，所以前缀和数组不需要整个记录，只需要记录i-1的和就可以了
var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0, 1)
    let res = 0
    let curSum = 0
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        if (map.has(curSum - k)) res += map.get(curSum - k)
        map.has(curSum) ? map.set(curSum, map.get(curSum) + 1) : map.set(curSum, 1) 
    }
    return res
};

// @lc code=end

