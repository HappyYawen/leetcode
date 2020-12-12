/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 空间复杂度O(1)
 * 时间复杂度O(m*n)
 */
var spiralOrder = function(matrix) {
    if(!matrix || !matrix[0]) {
        return []
    }
    let r = matrix.length, c = matrix[0].length
    let res = []
    //cycle记录圈数,nr与nc是当前的行总数、列总数，每一轮循环后，行数与列数都会减2
    let cycle = 0, nr = r, nc = c
    while(res.length < r*c) {
        res = res.concat(matrix[cycle].slice(cycle, nc))
        if(res.length < r*c){
            for(let i = cycle+1; i<nr; i++) {
                res.push(matrix[i][nc-1])
            }
        }
        if(nr > 1 && res.length < r*c) {
            for(let i = nc-2; i >= cycle; i-- ) {
                res.push(matrix[nr-1][i])
            }
        }
        if(nc > 1 && res.length < r*c) {
            for(let i = nr-2; i > cycle; i--) {
                res.push(matrix[i][cycle])
            }
        }
        cycle++
        nr--
        nc--
    }
    return res
};