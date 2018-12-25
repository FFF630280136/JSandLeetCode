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
var swapPairs = function(head) {
    let pre = new ListNode();
    pre.next = head;
    while (pre.next & pre.next.next) {
        let a = pre.next;
        let b = a.next
        pre.next = b
        b.next = a
        a.next = b.next
        pre = a
    }
    return pre.next

};