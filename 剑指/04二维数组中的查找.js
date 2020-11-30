/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 空间复杂度O(1)
 * 时间复杂度O(n+m)
 */
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix || !matrix[0]) { return false }
    let rows = matrix.length - 1
    let r = 0, c = matrix[0].length - 1
    while(r <= rows && c >= 0) {
        let num = matrix[r][c]
        if(num === target) {
            return true
        } else if(num > target) {
            c--
        } else {
            r++
        }
    }
    return false
};