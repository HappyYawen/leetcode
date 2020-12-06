/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    //先遍历拿到总长度，再遍历走n-k步
    // let len = 0, p = head, p1 = head
    // while(p) {
    //     len++
    //     p = p.next
    // }
    // while(p1 && len > k) {
    //     len--
    //     p1 = p1.next
    // }
    // return p1
    //双指针，快指针先走k步，然后在同时移动，当快指针到最后一个节点时，返回慢指针即可
    let s = head, f = head, len = 0
    while(f) {
        if(len < k) {
            len++
            f = f.next
        } else {
            s = s.next
            f = f.next
        }
    }
    return s
};