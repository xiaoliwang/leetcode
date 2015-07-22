var chai = require('chai'),
	h1 = require('./firstSolusion'),
	h2 = require('./secondSolusion');
var should = chai.should(),
	expect = chai.expect;

function ListNode(val) {
	this.val = val;
	this.next = null;
}

describe("add Two Numbers<https://leetcode.com/problems/add-two-numbers/>", function(){
	var l1 = new ListNode(2);
		l1.next = new ListNode(4);
		l1.next.next = new ListNode(3);
	
	var l2 = new ListNode(5);
		l2.next = new ListNode(6);
		l2.next.next = new ListNode(4);
	
	var m1 = m2 = new ListNode(0);
	
	it('first solusion', function(){
		var l3 = h1(l1, l2);
		expect(l3.val).to.equal(7);
		expect(l3.next.val).to.equal(0);
		expect(l3.next.next.val).to.equal(8);
		expect(l3.next.next.next).to.equal(null);
		var m3 = h1(m1, m2);
		expect(m3.val).to.equal(0);
		expect(m3.next).to.equal(null);
	});
	
	it('second Solusion', function(){
		var l3 = h2(l1,l2);
		expect(l3.val).to.equal(7);
		expect(l3.next.val).to.equal(0);
		expect(l3.next.next.val).to.equal(8);
		expect(l3.next.next.next).to.equal(null);
		var m3 = h1(m1, m2);
		expect(m3.val).to.equal(0);
		expect(m3.next).to.equal(null);
	});
});