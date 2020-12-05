/**
 * @param {string} s
 * @return {string}
 * 暴力解法
 * 时间复杂度O(n^3)
 * 空间复杂度O(1)
 */
var longestPalindrome = function(s) {
    if(s.length < 2) {
        // console.log(s)
        return s || ''
    }
    let res = s[0]
    let l = 0, nexth = 1
    while(l < s.length -1) {
        nexth = l+1
        //如果不相等，且快指针在范围内，快指针移到下一位
        while(nexth < s.length) {
            if(s[l] === s[nexth] && isPalindrome(l, nexth, s)) { 
                let len = nexth - l + 1
                //字串长度大于 已存在的字串 则替换已存在的字串
                res = len > res.length ? s.substring(l,l+len) : res
            }
            nexth ++
        }
        l++
        nexth = l+1
    }
    console.log(res)
    return res
};
//判断回文串
function isPalindrome(templ,temph,s) {
    //如果相等
    while(s[templ] === s[temph] && templ <= temph) {
        //如果最后一位也相等,(注意：奇数位,偶数位)
        if (templ === temph || (templ + 1 === temph)) {
            //返回结果
           return true;
        } 
        //如果不是最后一位，则继续
        else {
            templ++
            temph--
        }
    }
    return false
}
longestPalindrome('abcde')
longestPalindrome('')
longestPalindrome('a')
longestPalindrome('aabfegek')
longestPalindrome('abcdefgfedcba')
longestPalindrome('ccc')
longestPalindrome('aaaa')
longestPalindrome("aacabdkacaa")