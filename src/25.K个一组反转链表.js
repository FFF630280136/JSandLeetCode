var reverseKGroup = function(head, k) {
    if (!head) {
        return null
    }
    let node = head
    let count = 0
    while (node != null && count != k) {
        node = node.next
        count++
    }
    if (count == k) {
        node = reverseKGroup(node, k)
        while (count > 0) {
            let temp = head.next
            head.next = node
            node = head
            head = temp
            count--
        }
        head = node
    }
    return head
};



function resverseGroup(pre, next) {
    let last = pre.next
    let cur = last.next
    while (cur != next) {
        last.next = cur.next
        cur.next = pre.next
        pre.next = cur
        cur = last.next
    }
    return last
}

function reverseKGroupTwo(head, k) {

    let h = new ListNode(-1)
    h.next = head
    pre = h
    cur = head
    let t = 1
    while (cur != null) {
        if (t % k == 0) {
            pre = reverseKGroup(pre, cur.next)
            cur = pre.next
        } else {
            cur = cur.next
        }
        t++
    }
    return h.next


}