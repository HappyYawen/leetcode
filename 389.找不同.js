/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (69.47%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    76K
 * Total Submissions: 109.4K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "", t = "y"
 * 输出："y"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "a", t = "aa"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "ae", t = "aea"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 思路1:用数据字典Map结构存储每个字符的数量，遍历t时再逐个减1，找出第一个数量为0的字母，并返回
 * 思路2:用字符串ASCII码求和
 */
var findTheDifference = function(s, t) {
    //思路1
    // let map = new Map()
    // for(let c of s) {
    //     map.set(c, map.has(c) ? map.get(c)+1:1)
    // }
    // for(let c of t) {
    //     if(!map.get(c)) {
    //         return c
    //     }
    //     map.set(c, map.get(c)-1)
    // }
    // return ''
    //思路2
    let sum = 0
    for(let c of t) {
        sum += c.charCodeAt() //字符转化为ascii码
    }
    for(let c of s) {
        sum -= c.charCodeAt()
    }
    //String.fromCharCode将数值转化为对应的字符
    return sum > 0 ? String.fromCharCode(sum) : ''
};
// @lc code=end

