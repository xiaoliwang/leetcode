function ListNode(val) {
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1, l2){
	var sum = 0;
	var returnNode = new ListNode(0);
	var d = returnNode;
	while (l1 != null || l2 != null){
		sum = Math.floor(sum / 10);
		if (l1 != null){
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2 != null){
			sum += l2.val;
			l2 = l2.next;
		}
		d.next = new ListNode(sum % 10);
		d = d.next;
	}
	if(Math.floor(sum / 10) === 1)
		d.next = new ListNode(1);
	return returnNode.next;
}

module.exports = addTwoNumbers;