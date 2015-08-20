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
	q = 0;
	var temp1 = head;
	while (temp1) {
		temp1 = temp1.next;
		++q;
	}

	n = q - n + 1;
	
	if (n === 1) {
		return head.next;
	}
	
	var p = 1;
	var temp = head;
    while(p < n && temp.next) {
		if (p === n - 1) {
			temp.next = temp.next.next;
		}
		temp = temp.next;
		++p;
	}
	return head;
};

module.exports = removeNthFromEnd;
