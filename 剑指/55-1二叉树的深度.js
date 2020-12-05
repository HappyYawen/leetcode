/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 深度优先遍历dfs
 */
var maxDepth = function(root) {
    if(!root) {return 0}
    const dp = (node,l) => {
        if(!node) {
            return l
        }
        return Math.max(dp(node.left, l+1), dp(node.right, l+1))
    }
    return dp(root,0)
};