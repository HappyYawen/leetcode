/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a-b)
    s = s.sort((a,b) => a-b)
    let i = 0, j = 0, res = 0
    while(i < g.length && j < s.length) {
        //优化项
        if(g[i] > s[s.length-1]) {
            break;
        }
        while(g[i] > s[j] && j < s.length) {
            j++
        }
        if(g[i] <= s[j]) {
            res++
            i++
        }
        j++
    }
    return res
};