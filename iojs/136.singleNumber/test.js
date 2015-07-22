var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should();
	
describe('first solution<https://leetcode.com/problems/single-number/>', function(){
	var tests = [
		{arg: [1,2,3,2,1], expect:3},
		{arg: [4,5,6,6,5,7,4,8,9,9,8], expect:7}
	];
	it('first solution',function(){
		tests.forEach(function(test){
			var singleNum = h1.call(null, test.arg);
			singleNum.should.be.a('Number');
			singleNum.should.equal(test.expect);
		});
	});
	
	it('second solution',function(){
		tests.forEach(function(test){
			var singleNum = h2.call(null, test.arg);
			singleNum.should.be.a('Number');
			singleNum.should.equal(test.expect);
		});
	});
	
});
