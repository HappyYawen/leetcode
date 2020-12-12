/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 递归思路
 * 时间与空间复杂度都是O(n)
 */
// var isSymmetric = function(root) {
//     if(!root) {
//         return true
//     }
//     return bfs(root.left, root.right)
// };
// function bfs(left, right) {
//     if((!left && right) || (!right && left) || (left && right && left.val !== right.val)) {
//         return false
//     } else if(!left && !right){
//         return true
//     } else {
//         return bfs(left.left, right.right) && bfs(left.right, right.left)
//     }
// }

//迭代思路,使用栈
var isSymmetric = function(root) {
    if(!root) return true
    let stack = [root.left,root.right]
    while(stack.length) {
        let left = stack.pop()
        let right = stack.pop()

        if((!left && right) || (!right && left) || (left && right && left.val !== right.val)) {
            return false
        } else if(!left && !right){
            continue
        } else {
            //注意此处的顺序
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right)
            stack.push(right.left)
        }
    }
    return true
}