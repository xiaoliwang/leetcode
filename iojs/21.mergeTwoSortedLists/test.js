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
	if (len === 0) return null;
	var start = new ListNode(list[0]);
	if (len === 1) return start;
	var temp = start;
	for(var i = 1; i < len; ++i){
		temp.next = new ListNode(list[i]);
		temp = temp.next;
	}
	return start;
}

describe("Merge Two Sorted Lists<https://leetcode.com/problems/merge-two-sorted-lists/>", function(){
	var tests = [
		{list1:[1, 2, 3, 4, 5], list2:[1, 2, 3, 4, 5], expect: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]},
		{list1:[1, 2, 3,], list2:[1, 2, 3, 4, 5], expect: [1, 1, 2, 2, 3, 3, 4, 5]},
		{list1:[], list2:[1, 2, 3, 4, 5], expect: [1, 2, 3, 4, 5]},
		{list1:[1, 2, 3, 4, 5], list2:[], expect: [1, 2, 3, 4, 5]},
		{list1:[1, 2, 3], list2:[1, 2, 3, 4, 5], expect: [1, 1, 2, 2, 3, 3, 4, 5]}
	]
	
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var list1 = createList(test.list1);
				var list2 = createList(test.list2);
				var exp_list = createList(test.expect);
				var real_list = h1(list1, list2);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list && exp_list);
			});
		});
	});
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var list1 = createList(test.list1);
				var list2 = createList(test.list2);
				var exp_list = createList(test.expect);
				var real_list = h2(list1, list2);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list && exp_list);
			});
		});
	});
	
});
