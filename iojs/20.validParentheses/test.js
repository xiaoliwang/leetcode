var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('Valid Parentheses<https://leetcode.com/problems/valid-parentheses/>', function(){
	
	var tests = [
		{arg:'[{()}]', expected: true},
		{arg:'[]{}()', expected: true},
		{arg:'[(])', expected: false},
		{arg:'[', expected: false},
		{arg:'[{}()', expected: false}
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
