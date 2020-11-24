/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 使用快慢指针的思路，快指针每一次走2步，慢指针每一次走1步。
 * 当快指针与慢指针相逢，则表示有环；如果快指针走到结束，还没相遇，则没有环
 */
var hasCycle = function(head) {
    let p1 = head
    let p2 = head
    while(p1 && p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2) {
            return true
        }
    }
    return false
};
// @lc code=end

