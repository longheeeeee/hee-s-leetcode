/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	const res = []
	const track = (start, path) => {
		res.push([...path])
		if (start === nums.length) {
			return
		}
		for (let i = start; i < nums.length; i++) {
			path.push(nums[i])
			track(i + 1, path)
			path.pop()
		}
	}
	track(0, [])
	return res
}
var subsets = function(nums) {
    if (nums.length === 1) return [[], [nums[0]]]
    const n = nums.pop()
    const sum = subsets(nums)
    console.log(sum)
    return sum
    .map((item) => [...item, n])
    .concat(sum)
};
// @lc code=end

