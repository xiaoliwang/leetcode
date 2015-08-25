var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution'),
	h3 = require('./thirdSolution');
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

describe("Swap Nodes in Pairs<https://leetcode.com/problems/swap-nodes-in-pairs/>", function(){
	var tests = [
		{arg: [1], expect:[1]},
		{arg: [1, 2], expect:[2, 1]},
		{arg: [1, 2, 3], expect:[2, 1, 3]},
		{arg: [1, 2, 3, 4], expect: [2, 1, 4, 3]},
		{arg: [1, 2, 3, 4, 5], expect: [2, 1, 4, 3, 5]},
		{arg: [1, 2, 3, 4, 5, 6], expect: [2, 1, 4, 3, 6, 5]}
	]
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var arg_list = createList(test.arg);
				var exp_list = createList(test.expect);
				var real_list = h1(arg_list);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list && exp_list);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var arg_list = createList(test.arg);
				var exp_list = createList(test.expect);
				var real_list = h2(arg_list);
				do {
					expect(real_list.val).to.equal(exp_list.val);
					real_list = real_list.next;
					exp_list = exp_list.next;
				} while (real_list || exp_list);
			});
		});
	});
	
	describe('third solution', function(){
        tests.forEach(function(test, index){
            it('args'+index, function(){
                var arg_list = createList(test.arg);
                var exp_list = createList(test.expect);
                var real_list = h3(arg_list);
                do {
                    expect(real_list.val).to.equal(exp_list.val);
                    real_list = real_list.next;
                    exp_list = exp_list.next;
                } while (real_list || exp_list);
            });
        });
    });
});
