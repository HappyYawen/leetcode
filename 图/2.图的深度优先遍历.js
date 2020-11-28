const graph = require('./graph')
/**
 * 步骤：
 * 1、先从初始节点开始访问
 * 2、初始节点的相邻节点，按顺序尽可能深的遍历未访问过的节点
 */
let visited = new Set()
const dfs = (n) => {
    visited.add(n)
    console.log(n)
    graph[n].forEach(c => {
        if(!visited.has(c)) {
            dfs(c)
        }
    })
}
dfs(3)