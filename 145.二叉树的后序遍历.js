/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 利用先序遍历的根左右思路，
 * 后序遍历是左右根，反过来就是根右左
 */
var postorderTraversal = function(root) {
    if(!root) { return []}
    let stack = [root], list = []
    while(stack.length) {
        let node = stack.pop()
        list.unshift(node.val)
        //先进后出
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return list
};
// @lc code=end