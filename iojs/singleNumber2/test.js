var chai = require('chai'),
	h1 = require('./firstSolusion'),
	h2 = require('./secondSolusion');
var should = chai.should();
	
describe('first solusion<https://leetcode.com/problems/single-number/>', function(){
	var tests = [
		{arg: [1,2,1,2,3,2,1], expect:3},
		{arg: [4,5,4,5,9,8,6,6,6,5,7,4,8,9,9,8], expect:7}
	];
		
	it('first solusion',function(){
		tests.forEach(function(test){
			var singleNum = h1.call(null, test.arg);
			singleNum.should.be.a('Number');
			singleNum.should.equal(test.expect);
		});
	});

	it('second solusion',function(){
		tests.forEach(function(test){
			var singleNum = h2.call(null, test.arg);
			singleNum.should.be.a('Number');
			singleNum.should.equal(test.expect);
		});
	});

});