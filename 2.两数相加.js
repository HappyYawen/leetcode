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
 */
var addTwoNumbers = function(l1, l2) {
    let kkkl3 = new ListNode(0)
    let p1 = l1, p2 = l2, p3 = l3, carray = 0
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        const v3 = v1 + v2 + carray
        carray = Math.floor( v3 / 10)
        p3.next = new ListNode(v3 % 10)
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carray) {
        p3.next = new ListNode(carray)
    }
    return l3.next
};