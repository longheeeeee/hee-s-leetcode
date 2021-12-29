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
// v1，套用最原始模板，优化deads和visited放在一起
// Your runtime beats 32.98 % of javascript submissions
// Your memory usage beats 9.42 % of javascript submissions (53 MB)
// var openLock = function(deadends, target) {
//     const deads = deadends.reduce((map, i) => {
//         map.set(i, 1)
//         return map
//     }, new Map())
//     const roll = (lockStr, pos, upward) => {
//         let lock = lockStr.split('')
//         if (upward) {
//             lock[pos] === '9' ? lock[pos] = '0' : lock[pos] = +lock[pos] + 1
//         }
//         else {
//             lock[pos] === '0' ? lock[pos] = '9' : lock[pos] = +lock[pos] - 1
//         }
//         return lock.join('')
//     }
//     let depth = 0
//     let queue = ['0000']
//     while(queue.length) {
//         const l = queue.length
//         for (let i = 0; i < l; i++) {
//             const cur = queue.shift()
//             if (cur === target) return depth
//             if (deads.has(cur)){
//                 continue
//             }
//             deads.set(cur, 1)
//             for (let j = 0; j < 4; j++) {
//                 const up = roll(cur, j, 0)
//                 if (!deads.has(up)) {
//                     queue.push(up)
//                 }
//                 const down = roll(cur, j, 1)
//                 if (!deads.has(down)) {
//                     queue.push(down)
//                 }
//             }
//         }
//         depth += 1
//     }
//     return -1
// };

// v2，针对js数组转换成字符串效率低的问题做优化
// Your runtime beats 57.59 % of javascript submissions
// Your memory usage beats 40.31 % of javascript submissions (51.1 MB)
// var openLock = function(deadends, target) {
//     const deads = deadends.reduce((map, i) => {
//         map.set(i, 1)
//         return map
//     }, new Map())
//     const add = (num) => {
//         if (num === '9') return '0'
//         return +num + 1 + ''
//     }
//     const minus = (num) => {
//         if (num === '0') return '9'
//         return +num - 1 + ''
//     }
//     let depth = 0
//     let queue = ['0000']
//     while(queue.length) {
//         const l = queue.length
//         for (let i = 0; i < l; i++) {
//             const cur = queue.shift()
//             if (cur === target) return depth
//             if (deads.has(cur)){
//                 continue
//             }
//             deads.set(cur, 1)
//             const nums = Array.from(cur)
//             for (let j = 0; j < 4; j++) {
//                 const num = nums[j]
//                 nums[j] = add(num)
//                 const up = nums.join('')
//                 if (!deads.has(up)) queue.push(up)

//                 nums[j] = minus(num)
//                 const down = nums.join('')
//                 if (!deads.has(down)) queue.push(down)

//                 nums[j] = num
//             }
//         }
//         depth += 1
//     }
//     return -1
// };

// v3，双向dfs，由起点和终点同时跑，可以加快效率，而且还有一个优化，判断起点终点那一边推进所需
// 比较小，去切换，而不是起点终点轮流走，可是实测效果不好，不清楚
// Your runtime beats 71.2 % of javascript submissions
// Your memory usage beats 96.33 % of javascript submissions (44.7 MB)
var openLock = function(deadends, target) {
    const deads = deadends.reduce((map, i) => {
        map.set(i, 1)
        return map
    }, new Map())
    const add = (num) => {
        if (num === '9') return '0'
        return +num + 1 + ''
    }
    const minus = (num) => {
        if (num === '0') return '9'
        return +num - 1 + ''
    }
    let depth = 0
    let q1 = ['0000']
    let q2 = [target]
    while(q1.length) {
        const l = q1.length
        for (let i = 0; i < l; i++) {
            const cur = q1.shift()
            if (q2.includes(cur)) return depth
            if (deads.has(cur)){
                continue
            }
            deads.set(cur, 1)
            const nums = Array.from(cur)
            for (let j = 0; j < 4; j++) {
                const num = nums[j]
                nums[j] = add(num)
                const up = nums.join('')
                if (!deads.has(up)) q1.push(up)

                nums[j] = minus(num)
                const down = nums.join('')
                if (!deads.has(down)) q1.push(down)

                nums[j] = num
            }
        }
        // if (q2.length < q1.length) {
            let t = q2
            q2 = q1
            q1 = t
        // }
        depth += 1
    }
    return -1
};
// @lc code=end

