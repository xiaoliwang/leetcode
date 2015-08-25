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
	var temp = head;
	while (temp && temp.next) {
		temp.val ^= temp.next.val;
		temp.next.val ^= temp.val;
		temp.val ^= temp.next.val;
		temp = temp.next.next;
	}
	return head;
};

module.exports = swapPairs;