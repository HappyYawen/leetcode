/**
 * @param {string} s
 * @return {character}
 * 时间复杂度O(n)空间复杂度O(n)
 */
var firstUniqChar = function(s) {
    //经过此题发现Map和Set都是按顺序存储元素的，不会出现自动按字母重新排序的问题
    let map = new Map()
    for(let c of s) {
        if(!map.has(c)) {
            map.set(c,1)
        } else {
            map.set(c, map.get(c)+1)
        }
    }
    for(let [key,value] of map) {
        if(value === 1) {
            return key
        }
    }
    return ' '
};