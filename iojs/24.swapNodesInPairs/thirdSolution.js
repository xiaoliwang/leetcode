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
	if (!head || !(head.next)) return head;
	var new_head = head.next;
	head.next = swapPairs(head.next.next);
	new_head.next = head;
	return new_head;
}

module.exports = swapPairs;
