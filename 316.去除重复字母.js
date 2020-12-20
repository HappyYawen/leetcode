/**
 * @param {string} s
 * @return {string}
 * 时间复杂度：O(N)，其中 NN 为字符串长度。代码中虽然有双重循环，但是每个字符至多只会入栈、出栈各一次。
 * 空间复杂度：O(m), m为出现的不同字母的数量
 */
var removeDuplicateLetters = function(s) {
    let map = new Map(), cur = 1 //cur为当前排好序的位置
    //先记录每个字母出现的次数
    for(let c of s) {
        map.set(c, map.has(c) ? map.get(c)+1 : 1)
    }
    let stack = [s[0]], set = new Set() //标记已经排好序的字母
    map.set(s[0], map.get(s[0]) - 1)
    set.add(s[0])
    while(cur < s.length) {
        let str = stack[stack.length-1]
        if(s[cur] < str && !set.has(s[cur])) {
            //如果栈顶元素大于当前元素，且字典中还存在栈顶元素，则出栈
            while(s[cur] < str && map.get(str) > 0 && stack.length > 0) {
                set.delete(stack.pop())
                str = stack[stack.length-1]
            }
        }
        //如果栈中不存在当前元素，则入栈，并标记
        if(!set.has(s[cur])) {
            stack.push(s[cur])
            set.add(s[cur])
        }
        //字典中，当前元素的次数减1
        map.set(s[cur], map.get(s[cur]) - 1)
        cur++
    }
    return stack.join('')
};