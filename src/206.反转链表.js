function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null
    while (head) {
        let next = head.next
        head.next = pre
        pre = head
        pre.next = next

    }
    return pre
};
var reverseList2 = function(head, prev) {

    if (head.next == null) {
        head.next = prev;
    } else {
        let cur = new ListNode()
        cur = reverseList2(head.next, head)
        head.next = prev;
        return cur
    }
}