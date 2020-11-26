/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 * 记录层级，只要找到叶子结点，就直接返回该层级
 */
var minDepth = function (root) {
    if(!root) {
        return 0
    }
    //先写出层序遍历，并打印
    // let p = [root]
    // while(p.length) {
    //     const n = p.shift()
    //     console.log(n.val)
    //     n.left && p.push(n.left)
    //     n.right && p.push(n.right)
    // }
    //再改造层序遍历，记录每个节点的层级
    let p = [[root, 1]]
    while(p.length) {
        const [n, l] = p.shift()
        if(!n.left && !n.right) {
            return l
        }
        n.left && p.push([n.left, l+1])
        n.right && p.push([n.right, l+1])
    }
};
// @lc code=end