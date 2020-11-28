const graph = require('./graph')
/**
 * 步骤：
 * 1、确定一个开始节点，并将开始节点放入队列中
 * 2、抛出队列头节点，并将他未访问过的相邻节点放入队列中
 * 3、重复步骤2，直到节点被访问完
 */
let q = [3]
let visited = new Set()
visited.add(3)
while(q.length) {
    let n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
        if(!visited.has(c)) {
            q.push(c)
            visited.add(c)
        }
    })
}
