/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //使用字符串
    // x = String(x)
    // let len = x.length
    // for(let i = 0; i < Math.floor(len/2); i++) {
    //     if(x[i] !== x[len-i-1]) {
    //         return false
    //     }
    // }
    //不使用字符串
    let y = 0 , m = x
    while(m > 0) {
        let mod = m % 10
        m = (m - mod) / 10
        y = y * 10 + mod
    }
    return y === x
};