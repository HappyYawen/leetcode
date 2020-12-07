/**
 * @param {number} x
 * @return {number}
 * 两种方式，1当字符串处理，2直接取模处理
 */
var reverse = function(x) {
    // let str = Math.abs(x)+'', isMinus = x < 0 ? -1 : 1
    // str = str.split('')
    // let len = str.length, mid = Math.floor(len/2)
    // for(let i = 0; i< mid; i++) {
    //     let t = str[i]
    //     str[i] = str[len-1-i]
    //     str[len-1-i] = t
    // }
    // str = parseInt(str.join('')) * isMinus
    // return str > Math.pow(2,31)-1 || str < -1*Math.pow(2,31) ? 0 : str
    let max = Math.pow(2,31)-1, min = -1*Math.pow(2,31)
    let res = 0
    while(x!=0) {
        let mod = x % 10
        x = (x-mod)/10
        res = res * 10 + mod
        if(res > max || res < min) return 0
    }
    return res
};