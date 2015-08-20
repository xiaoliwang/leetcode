var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should()
	expect = chai.expect;

describe('Letter Combinations of a Phone Number<https://leetcode.com/problems/letter-combinations-of-a-phone-number/>', function(){
	var tests = [ 
		{arg: '', expected: []},
		{arg: '5', expected: ['j', 'k', 'l']},
		{arg: '23', expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				expect(code).to.have.members(test.expected);
			});
		});
	});
});