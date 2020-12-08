/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 深度遍历之前序遍历
 * 递归版本: 空间复杂度O(n)(函数也占用内存的),时间复杂度O(n)
 * 广度优先遍历：迭代版本，空间复杂度O(n),时间复杂度O(n)
 */
var mirrorTree = function(root) {
    if(!root) return root;
    let stack = [root]
    //广度优先遍历
    while(stack.length) {
        let p = stack.pop()
        if(p) {
            let left = p.left
            p.left = p.right
            p.right = left
            stack.push(p.left)
            stack.push(p.right)
        }
    }
    return root
};

// var mirrorTree = function(root) {
//     if(!root) return root;
//     dfs(root)
//     return root
// };
// function dfs (root) {
//     let temp = root.left
//     root.left = root.right
//     root.right = temp
//     root.left && mirrorTree(root.left)
//     root.right && mirrorTree(root.right)
// }