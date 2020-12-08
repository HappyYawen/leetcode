/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(0) , p = res
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    if (l1 || l2) {
        p.next = l1 || l2
    }
    return res.next
    //递归版
    // if(l1 === null) {
    //     return l2
    // }
    // if(l2 === null) {
    //     return l1
    // }
    // if(l1.val <= l2.val) {
    //     l1.next = mergeTwoLists(l1.next,l2)
    // } else {
    //     return mergeTwoLists(l2,l1)
    // }
    // return l1
};