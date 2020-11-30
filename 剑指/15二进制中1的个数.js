/**
 * @param {number} n - a positive integer
 * @return {number}
 * 此题考查了二进制的位运算
 * n&1 = 0表示最右边一位是0
 * n&1 = 1表示最右边一位是1
 * n>>=1表示向右移动一位
 * n<<=1表示向左移动一位
 * (n−1) 解析： 二进制数字 nn 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。
 * n&(n−1) 解析： 二进制数字 n 最右边的 1 变成 0 ，其余不变。
 * 
 */
var hammingWeight = function(n) {
    let res = 0
    while(n!=0) {
        res ++
        n = n&(n-1)
    }
    return res
};