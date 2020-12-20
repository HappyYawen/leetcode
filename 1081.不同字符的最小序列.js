/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let map = new Map(), cur = 1
    for(let c of s) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let stack = [s[0]], set = new Set()
    map.set(s[0], map.get(s[0]) - 1)
    set.add(s[0])

    while(cur < s.length) {
        let str = stack[stack.length -1]
        if(s[cur] < str && !set.has(s[cur])) {
            while(stack.length > 0 && s[cur] < str && map.get(str) > 0) {
                set.delete(stack.pop())
                str = stack[stack.length -1]
            }
        }
        if(!set.has(s[cur])) {
            set.add(s[cur])
            stack.push(s[cur])
        }
        map.set(s[cur],  map.get(s[cur]) - 1)
        cur++
    }
    return stack.join('')
};