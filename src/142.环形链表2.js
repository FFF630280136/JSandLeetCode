var detectCycle = function(head) {
    if (head == null || head.next == null) {
        return null
    }

    let hasObj = new Set()
    while (head != null) {
        if (hasObj.has(head)) {
            return head
        } else {
            hasObj.add(head)
        }
        head = head.next
    }

};
var detectCycle = function(head) {
    while (head) {
        if (head.visited) return head
        head.visited = true
        head = head.next
    }
    return null

};

var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let faster = head;
    let slower = head;
    let isCycle = false;
    while (faster.next && faster.next.next) {
        faster = faster.next.next;
        slower = slower.next;

        if (faster == slower) {
            isCycle = true;
            break;
        }
    }
    if (isCycle) {
        faster = head;
        while (faster != slower) {
            faster = faster.next;
            slower = slower.next;
        }
        return faster;
    } else {
        return null;
    }
};