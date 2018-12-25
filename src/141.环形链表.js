/**
 * Definition for singly-linked list.
 /*

 


/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }

    let fast = head.next
    let slow = head
    while (fast != slow) {

        if (fast == null || fast.next == null) {
            return false;
        }
        fast = fast.next.next
        slow = slow.next

    }
    return true
};



function hasCycle(head) {
    let nodesSeen = new Set()
    while (head != null) {
        if (nodesSeen.has(head)) {
            return true;
        } else {
            nodesSeen.add(head);
        }
        head = head.next;
    }
    return false;
}