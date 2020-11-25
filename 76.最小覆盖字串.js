/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 利用字典，记录需要符合条件的每个字符串个数
 * 先找到所有符合的字串
 * 然后选出最短的字串
 * 利用双指针的滑动，两个指针中间的字符串就是符合条件的字符串
 */
var minWindow = function (s, t) {
    //时间复杂度O(m+n) (m为t的长度，n为的s的长度)
    //空间复杂度O(m)
    let l = 0;
    let r = 0
    let map = new Map()
    let res = ''
    for (let k of t) {
        map.set(k, map.has(k) ? map.get(k) + 1 : 1)
    }
    let needType = map.size
    while (r < s.length) {
        if (map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1)
        }
        if (map.get(s[r]) === 0) {
            needType -= 1
        }
        while (needType === 0) {
            const newRes = s.substring(l, r + 1)
            if (!res || res.length > newRes.length) res = newRes
            if (map.has(s[l])) {
                map.set(s[l], map.get(s[l]) + 1)
            }
            if (map.get(s[l]) === 1) {
                needType += 1
            }
            l++
        }
        r++
    }
    return res
};
// @lc code=end