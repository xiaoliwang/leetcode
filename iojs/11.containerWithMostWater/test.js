var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('container with most water<https://leetcode.com/problems/container-with-most-water/>', function(){
	var tests = [
		{arg:[1,2,2,3,2,1], expected: 6},
		{arg:[2,1,3,4,1], expected: 6}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				code.should.equal(test.expected);
			});
		});
	});
	
});