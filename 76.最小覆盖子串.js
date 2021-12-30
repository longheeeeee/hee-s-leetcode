/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t) return ''
    const window = new Map()
    const needs = Array.from(t).reduce((map, c) => {
        map.set(c, (map.get(c) || 0) + 1)
        return map
    }, new Map())
    // console.log(needs)
    let curCount = 0
    let left = 0, right = 0
    let start = 0, end = Infinity

    while(right < s.length) {
        const char = s[right]
        // console.log('char1', char)
        right += 1
        window.set(char, (window.get(char) || 0) + 1)
        if (window.get(char) === needs.get(char)) {
            curCount += 1
        }
        // console.log('curCount1', curCount)
        while (curCount === needs.size) {
            if((right - left) < (end - start)){
                start = left
                end = right
            }
            const char2 = s[left]
            // console.log('char2', char2)
            window.set(char2, window.get(char2) - 1)
            if (window.get(char2) < needs.get(char2)) {
                // console.log('curCount2', curCount)
                curCount -= 1
            }
            left +=1
        }
    }
    // console.log(start, end)
    if (end === Infinity) return ''
    return s.slice(start, end)
};
// @lc code=end

 