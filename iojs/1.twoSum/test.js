var chai = require('chai'),
	h1 = require('./firstSolusion');
var should = chai.should(),
	expect = chai.expect;

describe("Two Sum<https://leetcode.com/problems/two-sum/>", function(){
	var numbers = [2,7,11,15];
	var target = 9;
	it('first solusion', function(){
		var indexs = h1(numbers, target);
		expect(indexs).to.be.a('Array');
		expect(indexs).to.have.length(2);
	});
});