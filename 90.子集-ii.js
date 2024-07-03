/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
	const res = []
	const track = (start, path) => {
		res.push([...path])
		if (start === nums.length) {
			return
		}
		for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
			path.push(nums[i])
			track(i + 1, path)
			path.pop()
		}
	}
	track(0, [])
	return res
};
// @lc code=end

