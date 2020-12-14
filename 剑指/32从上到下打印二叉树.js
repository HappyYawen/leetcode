/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 广度优先遍历，时间复杂度O(n),空间复杂度O(n)
 */
var levelOrder = function(root) {
    if(!root) {
        return []
    }
    let res = [], stack=[root] 
    //使用队列先进先出
    while(stack.length > 0) {
        let p = stack.pop()
        if(p) {
            res.push(p.val) 
            p.left && stack.unshift(p.left)
            p.right && stack.unshift(p.right)
        }
    }
    return res
};