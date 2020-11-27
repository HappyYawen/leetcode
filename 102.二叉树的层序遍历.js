/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    if(!root) {
        return []
    }
    // 方法1，广度优先遍历, 记录层级, 空间复杂度与时间复杂度都是O(n)
    // let p = [[root, 0]], res = []
    // while(p.length) {
    //     let [n, l] = p.shift()
    //     if(!res[l]) {
    //         res[l] = [n.val]
    //     } else {
    //         res[l].push(n.val)
    //     }
    //     n.left && p.push([n.left, l+1])
    //     n.right && p.push([n.right, l+1])
    // }
    //方法2，广度优先遍历，一层一层的记录, 空间复杂度与时间复杂度都是O(n)
    let p = [root], res = []
     while(p.length) {
        let len = p.length
        res.push([])
        let resLen = res.length
        while(len--) {
            let n = p.shift()
            res[resLen - 1].push(n.val)
            n.left && p.push(n.left)
            n.right && p.push(n.right)
        }
    }
    return res
};
// @lc code=end

