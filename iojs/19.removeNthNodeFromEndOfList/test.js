var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should(),
	expect = chai.expect;

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function createList(list) {
	var len = list.length;
	var start = new ListNode(list[0]);
	if (len === 1) return start;
	var temp = start;
	for(var i = 1; i < len; ++i){
		temp.next = new ListNode(list[i]);
		temp = temp.next;
	}
	return start;
}

describe("Remove Nth Node From End of List<https://leetcode.com/problems/remove-nth-node-from-end-of-list/>", function(){
	var tests = [
		{list:[1, 2, 3, 4, 5], node: 2, expect: [1, 2, 3, 5]},
		{list:[1, 2, 3, 4, 5], node: 3, expect: [1, 2, 4, 5]},
		{list:[1], node: 2, expect: [1]},
		{list:[1, 2, 3, 4, 5], node: 5, expect: [2, 3, 4, 5]}
	]
	
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var list = createList(test.list);
				var exp_list = createList(test.expect);
				var real_list = h1(list, test.node);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list || exp_list);
			});
		});
	});
	
	describe('second Solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var list = createList(test.list);
				var exp_list = createList(test.expect);
				var real_list = h2(list, test.node);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list || exp_list);
			});
		});
	});
	
});
