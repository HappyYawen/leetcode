/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度O(n+m)
 * 空间复杂度O(1)
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) {
        return l1 || l2
    }
    let l = new ListNode(0)
    let p = l,p1 = l1, p2 = l2
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            p.next = new ListNode(p1.val)
            p1 = p1.next
        } else {
            p.next = new ListNode(p2.val)
            p2 = p2.next
        }
        p = p.next
    } 
    p.next = p2 || p1
    return l.next
};