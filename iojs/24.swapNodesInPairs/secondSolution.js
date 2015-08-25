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
	if (!head || !head.next) return head;
	var new_head = head.next;
	var temp = head;
	while (temp && temp.next && temp.next.next) {
		var node = temp.next;
		temp.next = node.next;
		node.next = temp;
		node = temp.next;
		temp.next = temp.next.next;
		temp = node;
	}
	return new_head;
};

module.exports = swapPairs;