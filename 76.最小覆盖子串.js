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
    const window = new Map() // 窗口所包含的字符和其出现次数
    const needs = Array.from(t).reduce((map, c) => { // 需要的字符及其所需的个数
        map.set(c, (map.get(c) || 0) + 1)
        return map
    }, new Map())
    // console.log(needs)
    let curCount = 0 // 当前窗口中有多少个字符已符合个数条件
    let left = 0, right = 0 // 窗口左右界限指针
    let start = 0, end = Infinity // 结果

    // 右边界往右拓展，结束条件是窗口右边界到字符串最右方
    while(right < s.length) {
        // 窗口新增的字符
        const char = s[right]
        // console.log('char1', char)
        // 指针右移
        right += 1
        // 更新到窗口中
        window.set(char, (window.get(char) || 0) + 1)
        // 每次窗口内字符发生变化的时候判断当前变化的字符是否已经符合结果个数
        if (window.get(char) === needs.get(char)) {
            curCount += 1
        }
        // console.log('curCount1', curCount)
        // 如果当前窗口已经囊括了所有需要的字符和数量
        while (curCount === needs.size) {
            // 跟当前结果做对比，取最小的
            if((right - left) < (end - start)){
                start = left
                end = right
            }
            // 左界限往左拓展
            const char2 = s[left]
            // console.log('char2', char2)
            window.set(char2, window.get(char2) - 1)
            if (needs.has(char2) && window.get(char2) < needs.get(char2)) {
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

 