var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('longest palindromic substring<https://leetcode.com/problems/longest-palindromic-substring/>', function(){
	var tests = [
		{arg: '1234212', expected: '212'},
		{arg: '123123444321123', expected: '123444321'},
		{arg: '1', expected: '1'},
		{arg: '', expected:''}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('arg'+index, function(){
				var median = h1(test.arg);
				median.should.equal(test.expected);
			});
		});
	});
});