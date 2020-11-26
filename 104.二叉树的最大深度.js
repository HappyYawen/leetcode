/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
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
 * 深度优先遍历
 * 每遍历一层标记一下层级
 * 时间复杂度O(n)因为每个节点都遍历了一遍
 * 空间复杂度：
 *  最好的情况,标准二叉树O(logn)，
 *  最差的情况，只有左子树或者右子树O(n)
 */
var maxDepth = function(root) {
    let res = 0
    const dfs = (n, l) => {
        if(!n){ return }
        if(!n.left && !n.right) {
            res = Math.max(res, l)
        }
        dfs(n.left, l+1)
        dfs(n.right, l+1)
    }
    dfs(root, 1)
    return res
};
// @lc code=end

