 /*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const needs = Array.from(s1)
    .reduce((map, c) => {
        map.set(c, (map.get(c) || 0) + 1)
        return map
    }, new Map())
    const window = new Map()
    let curCount = 0
    let left = 0
    let right = 0
    while(right < s2.length) {
        const char1 = s2[right]
        right += 1
        window.set(char1, (window.get(char1) || 0) + 1)
        if (window.get(char1) === needs.get(char1)) curCount += 1
        // console.log('char1', char1)
        // console.log('curCount', curCount)
        while(right - left >= s1.length) {
            if (curCount === needs.size) return true
            const char2 = s2[left]
            left +=1
            // console.log('char2', char2)
            // console.log('curCount', curCount)
            window.set(char2, window.get(char2) - 1)
            if (needs.has(char2) && window.get(char2) < needs.get(char2)) curCount -= 1
        }
    }
    return false
};
// @lc code=end

