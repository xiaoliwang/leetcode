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
	var curr = head;
	var count = 0;
	while (curr) {
		curr = curr.next;
		++count;
		
		if (count === k) {
			while (count --) {
				var temp = head.next;
				head.next = curr;
				curr = head;
				head = temp;
			}
		} 
	}
}