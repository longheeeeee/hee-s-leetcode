/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deads = deadends.reduce((map, i) => {
        map.set(i, 1)
        return map
    }, new Map())
    const roll = (lockStr, pos, upward) => {
        let lock = lockStr.split('')
        if (upward) {
            lock[pos] === '9' ? lock[pos] = '0' : lock[pos] = +lock[pos] + 1
        }
        else {
            lock[pos] === '0' ? lock[pos] = '9' : lock[pos] = +lock[pos] - 1
        }
        return lock.join('')
    }
    let depth = 0
    let queue = ['0000']
    while(queue.length) {
        const l = queue.length
        for (let i = 0; i < l; i++) {
            const cur = queue.shift()
            if (cur === target) return depth
            if (deads.has(cur)){
                continue
            }
            deads.set(cur, 1)
            for (let j = 0; j < 4; j++) {
                const up = roll(cur, j, 0)
                if (!deads.has(up)) {
                    queue.push(up)
                }
                const down = roll(cur, j, 1)
                if (!deads.has(down)) {
                    queue.push(down)
                }
            }
        }
        depth += 1
    }
    return -1
};
// @lc code=end

