/**
 * @param {number[][]} grid
 * @return {number}
 * 暴力解法超时了（时间复杂度 2^mn）
 * 动态规划，在原有矩阵上计算出每一位置的最大值，这样右下角的值就是最大值了
 * 动态规划时间复杂度O(mn)
 */
var maxValue = function(grid) {
    // let res = grid[0][0], row = 0, col = 0
    // for(let i = 0; i< grid.length;i++) {
    //     let max = dfs(i, 0, grid[0][0], grid.length-1, grid[0].length-1, grid)
    //     res = Math.max(max, res)
    // }
    // return res
    let m = grid.length, n = grid[0].length
     for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j !== 0 ) grid[i][j] += grid[i][j-1];
            if(i !== 0 && j === 0) grid[i][j] += grid[i-1][j]
            if(i !== 0 && j !== 0) grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[m-1][n-1]
};
// function dfs(row, col, res, maxRow, maxCol, grid) {
//     if(row === maxRow && col === maxCol) {
//         return res
//     }
//     if(row >= maxRow && col < maxCol) {
//         while(col < maxCol) {
//             res+=grid[row][++col]
//         }
//         return res
//     }
//     if(col >= maxCol && row < maxRow) {
//         while(row < maxRow) {
//             res+=grid[++row][col]
//         }
//         return res
//     }
//     let bottom = dfs(row+1, col, res+grid[row+1][col], maxRow, maxCol, grid)
//     let right = dfs(row, col+1, res+grid[row][col+1], maxRow, maxCol, grid)
//     return Math.max(bottom, right)
// }