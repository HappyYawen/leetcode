/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 思路：从边界逆流而上
 * 步骤:
 * 1、创建两个矩阵，记录每个节点是否能流入大西洋/太平洋，默认都为false
 * 2、从四个边界逆流而上，多管齐下，深度遍历矩阵，是否能够流入另一个边界
 */
var pacificAtlantic = function(matrix) {
    if (!matrix || !matrix[0]) {
        return []
    }
    let m = matrix.length, n = matrix[0].length
     //太平洋
    let flow1 = Array.from({length: m}, () => new Array(n).fill(false))
     //大西洋
    let flow2 = Array.from({length: m}, () => new Array(n).fill(false))
    let res = []
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(([nr, nc]) => {
            if (
                //保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                //防止死循环
                !flow[nr][nc] &&
                //保证逆流而上
                matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow)
            }
        })
    }
    for(let r = 0; r < m; r++) {
        dfs(r, 0, flow1)
        dfs(r, n-1, flow2)
    }
    for(let c = 0; c < n; c++) {
        dfs(0, c, flow1)
        dfs(m-1, c, flow2)
    }
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res
};
// @lc code=end

