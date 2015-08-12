var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should();

describe('palindrome number<https://leetcode.com/problems/palindrome-number/>', function(){
	var tests = [
		{arg: 1, expected: true},
		{arg: 121, expected: true},
		{arg: 1221, expected: true},
		{arg: 1231, expected: false},
		{arg: 1234321, expected: true},
		{arg: -1234321, expected: false}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				code.should.equal(test.expected);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h2(test.arg);
				code.should.equal(test.expected);
			});
		});
	});
});
