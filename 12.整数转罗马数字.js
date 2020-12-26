/**
 * @param {number} num
 * @return {string}
 * 复杂度最大是常数
 * 所以时间复杂度O(1),空间复杂度O(1)
 */
var intToRoman = function(num) {
    let numArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let charArr = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let res = '',i = numArr.length - 1
    while(num > 0) {
        while(num >= numArr[i]) {
            res+=charArr[i]
            num-=numArr[i]
        }
        i--
    }
    return res
};