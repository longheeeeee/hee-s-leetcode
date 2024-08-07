/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const track = (arr, path) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i])
      const _arr = [...arr]
      _arr.splice(i, 1)
      track(_arr, path)
      path.pop()
    }
  }
  track(nums, [])
  return res
}
var permute = function(nums) {
    const res = [] // 结果
    const visited = [] // 已访问

    const track = (nums, visited) => {
        if (visited.length === nums.length) {
            res.push(JSON.parse(JSON.stringify(visited)))
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited.includes(nums[i])) continue
            visited.push(nums[i])
            track(nums, visited)
            visited.pop()
        }
    }
    track(nums, visited)
    return res

};

// @lc code=end

