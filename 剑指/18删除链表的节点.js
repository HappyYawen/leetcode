/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 空间复杂度O(1),时间复杂度最大O(n)最小O(1)
 */
var deleteNode = function(head, val) {
    if(head && head.val === val) {//注意！考虑删除头节点的情况
        return head.next
    } 
    let p = head
    while(p && p.next) {
        if(p.next.val === val) {
            p.next = p.next.next
            break;
        }
        p = p.next
    }
    return head
};