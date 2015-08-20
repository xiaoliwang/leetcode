/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	var slow = head;
	var quick = head;
	
	while (n--) {
		quick = quick.next;
		if (!quick) {
			if (n) {
				return head;
			} else {
				return head.next;
			}
		}
	}

	while (quick.next) {
		slow = slow.next;
		quick = quick.next;
	}
	
	slow.next = slow.next.next;
	return head;
};

module.exports = removeNthFromEnd;
