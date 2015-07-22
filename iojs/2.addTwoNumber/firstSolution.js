/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function ListNode(val) {
	this.val = val;
	this.next = null;
}
 
var addTwoNumbers = function(l1, l2) {
    var p = l1, q = l2;
	var tempSum1 = 0, tempSum2 = 0, tempSum = 0;
	var temp = 1;
	while(p){
		tempSum1 += p.val * temp;
		temp = temp * 10;
		p = p.next;
	}
	temp = 1;
	while(q){
		tempSum2 += q.val * temp;
		temp = temp * 10;
		q = q.next;
	}
	tempSum = tempSum1 + tempSum2;
	var l3 = new ListNode(0);
	var l4 = l3;
	while(tempSum){
		var val = tempSum % 10;
		l3.next = new ListNode(val);
		l3 = l3.next;
		tempSum = Math.floor(tempSum / 10);
	}
	return l4.next?l4.next:l4;
};

module.exports = addTwoNumbers;