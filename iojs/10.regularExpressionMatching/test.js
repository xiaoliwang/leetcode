var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('regular expression matching<https://leetcode.com/problems/regular-expression-matching/>', function(){
	var tests = [
		{string:'aa', match:'aa', expected: true},
		{string:'aa', match:'a.', expected: true},
		{string:'aa', match:'ab', expected: false},
		{string:'aaa', match:'ab*aa', expected: true},
		{string:'aaa', match:'a*', expected: true},
		{string:'aaaa', match:'.*', expected: true},
		{string:'abcdefg', match:'a.*g', expected: true},
		{string:'abcdefgh', match:'a.*g', expected: false},
		{string:'abcdefgh', match:'a.*gh', expected: true},
		{string:'abcgefg', match:'a.*g', expected: true},
		{string:'aab', match:'c*a*b', expected: true}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.string, test.match);
				code.should.equal(test.expected);
			});
		});
	});
});