/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) {
        return
    }
    let p = root
    let stack = [], arr = []
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        let node = stack.pop()
        arr.push(node.val)
        p = node.right
    }
    return arr
};
// @lc code=end