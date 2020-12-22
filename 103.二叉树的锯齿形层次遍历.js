/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (55.21%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    101.3K
 * Total Submissions: 178.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层序遍历如下：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let res = [], direction = 'left'
    let queue = [root]
    while(queue.length) {
        let arr = [], len = queue.length
        while(len > 0) {
            let node = queue.shift()
            if(direction === 'left') {
                arr.push(node.val)
            } else {
                arr.unshift(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            len--
        }
        direction = direction === 'left' ? 'right' : 'left'
        res.push(arr)
    }
    return res
};
// @lc code=end

