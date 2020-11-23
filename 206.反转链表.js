/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let slow = null, fast = head
    while(fast) {
        let tmp = fast.next
        fast.next = slow
        slow = fast
        fast = tmp
    }
    return slow
}