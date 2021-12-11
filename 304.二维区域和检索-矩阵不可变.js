/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const preSum = Array(matrix.length+1).fill(null).map(() => (Array(matrix[0].length+1).fill(0)))
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            let sum = row[j]
            sum += preSum[i][j+1]
            sum += preSum[i+1][j]
            sum -= preSum[i][j]
            preSum[i+1][j+1] = sum
        }
    }
    this.preSum = preSum
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preSum[row1][col1]
    - this.preSum[row1][col2+1]
    - this.preSum[row2+1][col1]
    + this.preSum[row2+1][col2+1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

