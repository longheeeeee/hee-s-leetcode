/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const visited = new Set()
    visited.add(0)
    const finLen = 2 ** n
    const pow = new Set()
    let x = 1
    for (let i = 0; i < n; i++) {
        pow.add(x)
        x = x << 1
    }
    // console.log(pow)
    
    const track = (arr) => {
        if (arr.length === finLen) {
            // console.log('arr[arr.length - 1]', arr[arr.length - 1])
           if (pow.has(arr[arr.length - 1] ^ 0)) return arr
           return false
        }
        for (const i of pow.values()) {
            const newItem = i ^ arr[arr.length - 1]
            // console.log('newItem', newItem)
            if (!visited.has(newItem)) {
                visited.add(newItem)
                arr.push(newItem)
                const res = track(arr)
                if (res) return res
                visited.delete(newItem)
                arr.pop()
            }
        }
    }

    return track([0])
};
// @lc code=end

