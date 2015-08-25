/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	var mergeTwoLists = function(l1, l2) {
		if(l1 === null) return l2;
		if(l2 === null) return l1;
		
		if (l1.val < l2.val) {
			l1.next = mergeTwoLists(l1.next, l2);
			return l1;
		} else {
			l2.next = mergeTwoLists(l2.next, l1);
			return l2;
		}
	};
	
	if (lists.length === 0) return [];
	
	var len = lists.length - 1;
	var i = 0;
	while (i < len) {
		lists[++i] = mergeTwoLists(lists[i - 1], lists[i]);
	}
	return lists[i]
};

module.exports = mergeKLists;