/**
 * @param {number[][]} isConnected
 * @return {number}
 * 深度优先遍历，从0开始遍历每一个城市的连接城市，遇到没有连接的城市，则省份数加1
 * 时间复杂度O(n^2),空间复杂度O(n)
 */
var findCircleNum = function(isConnected) {
    let map = new Set(),res = 0
    for(let i = 0; i < isConnected.length; i++){
        if(!map.has(i)) {
            dfs(map,isConnected,i)
            res++
        }
    }
    return res
};
function dfs(map, isConnected, i) {
    for(let j = 0; j < isConnected.length; j++) {
        if(isConnected[i][j] === 1 && !map.has(j)) {
            map.add(j)
            dfs(map, isConnected, j)
        }
    }
}