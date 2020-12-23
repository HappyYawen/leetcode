/**
 * @param {string} s
 * @return {number}
 * 有一个概念，编译原理中的，有限自动机
 */
var myAtoi = function(s) {
    let INT_MAX = 2147483647
    let INT_MIN = -2147483648
    let len = s.length, cur = 0, flag = 1, res = 0
    //先去空格
    while(s[cur] === ' ' && cur < len) {
        cur++
    }
    if(cur >= len) {
        return 0
    }
    //再判断符号
    switch(true) {
        case s[cur] === '+':
            cur++;
            break;
        case s[cur] === '-':
            flag = -1;
            cur++;
            break;
        case s[cur] >= '0' && s[cur] <= '9':
            res = res * 10 + s[cur] * flag
            cur++
            break;
        default :
            return 0
    }
    //再转换数字
    while(cur < len && s[cur] >= '0' && s[cur] <= '9') {
        res = res * 10 + s[cur] * flag
        cur ++ 
        if(res >= INT_MAX || res <= INT_MIN) {
            return flag === 1 ? INT_MAX : INT_MIN
        }
    }
    return res
};