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
var reverseKGroup = function(head, k) {
	if (k === 1 || !head)
		return head;
	var end = head;
	for (var i = 1; i < k && head.next; i++) {
		head = head.next;
	}
	if (i === k) {
		var current = end;
		var next = end.next;
		end.next = head.next;
		while (next !== head) {
			temp = next.next;
			next.next = current;
			current = next;
			next = temp;
		}
		next.next = current;
		end.next = reverseKGroup(end.next, k);
	} else {
		head = end;
	}
	return head;
}

module.exports = reverseKGroup;