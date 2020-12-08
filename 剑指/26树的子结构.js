/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 先递归，拿到根节点与B节点值相同的子树
 * 然后再遍历每一颗子树
 */
var isSubStructure = function(A, B) {
    let p = A, stack = []
    const bfs = (p, B) => {
        if(p && B && p.val === B.val) {
            console.log(p)
            stack.push(p)
        }
        p.left && bfs(p.left, B)
        p.right && bfs(p.right, B)
    }
    bfs(p, B)
    while(stack.length) {
        let root = stack.pop()
        if(help(root, B)) {
            return true
        }
    }
    return false
};

function help(t1,t2) {
    //终止条件, t2为空返回true, t1为空返回false
    if(t1 && t2 && t1.val === t2.val) {
        let res1 = t2.left ? help(t1.left, t2.left) : true
        let res2 = t2.right ? help(t1.right, t2.right): true
        return res1 && res2
    } else if(!t2) {
        return true
    } else {
        return false
    }
}