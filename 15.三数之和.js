/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E6%80%9D%E8%B7%AF
var threeSum = function(nums) {
  const arr = nums.sort((a, b) => a - b)
    if (arr[0] > 0) {
      return []
    }
  const res = []
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1
    let right = arr.length - 1

    // 对第一个去重，已经比对过了
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }

    while(left < right) {
      // console.log(arr[i] , arr[left] , arr[right])
      const sum = arr[i] + arr[left] + arr[right]
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]) 
        // 去重，跳过重复的
        while(arr[left + 1] === arr[left]) {
          left++
          // console.log('去重，跳过重复的')
        }
        left++
        while(arr[right - 1] === arr[right]) {
          right--
          // console.log('去重，跳过重复的')
        }
        right--
      }
      // 比0小，则left需要右移
      else if (sum < 0) {
        // console.log('// 比0小，则left需要右移')
        // 去重，跳过重复的
        while(arr[left + 1] === arr[left]) {
          left++
          // console.log('去重，跳过重复的')
        }
        left++
      }
      else if (sum > 0) {
        // console.log('// 比0da，则right需要zuo移')
        while(arr[right - 1] === arr[right]) {
          right--
          // console.log('去重，跳过重复的')
        }
        right--
      }
    } 
  }
  return res
};