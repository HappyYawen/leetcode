/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 时间复杂度O(log(n)以2为底)
 * 也可使用递归思路
 */
var myPow = function(x, n) {
    if(n === 0) {
        return 1
    }
    let res = 1.0, isMinus = false
    if(n < 0) {
        isMinus = true
        n = -n
    }
    while(n != 0) {
        if(n % 2 !== 0) {
            res *= x
            n--
        }
        x *= x
        n >>>= 1 //无符号向右移动
        // 或者可以
        // n = n/2
    }

    return isMinus ? 1 / res : res
};