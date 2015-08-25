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
	while (head && head.next) {
		//以下为节点交换
		var node = head.next;
		head.next = node.next;
		node.next = head;
		//如果节点存在，则预处理数据
		if (!head.next || !head.next.next) break;
		node = head.next;
		head.next = node.next;
		head = node;
	}
	return new_head;
};

module.exports = swapPairs;
