var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should()
	expect = chai.expect;

describe('generate parentheses<https://leetcode.com/problems/generate-parentheses/>', function(){
	var tests = [ 
		{arg: 0, expected: ['']},
		{arg: 1, expected: ['()']},
		{arg: 2, expected: ['()()', '(())']},
		{arg: 3, expected: ['()()()', '(()())', '((()))', '()(())', '(())()']},
		{arg: 4, expected: ['()()()()', '(()()())', '()(()())', '((()()))', '(()())()', '()((()))', '((()))()',
			'(((())))', '(()(()))','()()(())', '()(())()', '((())())', '(())()()', '(())(())']}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				expect(code).to.have.members(test.expected);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h2(test.arg);
				expect(code).to.have.members(test.expected);
			});
		});
	});
});