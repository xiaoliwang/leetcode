var chai = require('chai'),
	h1 = require('./firstSolution');
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

describe("Merge k Sorted Lists<https://leetcode.com/problems/merge-k-sorted-lists/>", function(){
	var tests = [
		{lists: [], expect:[]},
		{lists: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1 , 2, 3, 4, 5]], expect: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]},
		{lists: [[1, 2], [4, 5], [4, 6]], expect: [1, 2, 4, 4, 5, 6]},
		{lists: [[], [1, 2, 3, 4, 5], []], expect: [1, 2, 3, 4, 5]},
		{lists: [[1, 2, 3, 4, 5],[],[],[]], expect: [1, 2, 3, 4, 5]},
		{lists: [[1, 2, 3], [1, 2], [], [4,5], [7, 8, 9]], expect: [1, 1, 2, 2, 3, 4, 5, 7, 8, 9]}
	]
	
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var lists = [];
				for(var i in test.lists) {
					lists.push(createList(test.lists[i]));
				}
				var exp_list = createList(test.expect);
				var real_list = h1(lists);
				if (test.expect.length === 0) {
					real_list.length.should.equal(0);
				} else {
					do {
						expect(real_list.val).to.equal(exp_list.val);
						real_list = real_list.next;
						exp_list = exp_list.next;
					} while (real_list || exp_list);
				}
			});
		});
	});
});
