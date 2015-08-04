var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should();

describe('median of two sorted arrays<https://leetcode.com/problems/median-of-two-sorted-arrays/>', function(){
	var tests = [
		{ones: [1,2,3,4,5,6,7], twos: [1,2,3,4,5,6], expected: 4},
		{ones: [], twos: [1], expected: 1},
		{ones: [1,2,3,4,5,6], twos: [], expected:3.5}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var median = h1(test.ones, test.twos);
				median.should.equal(test.expected);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var median = h2(test.ones, test.twos);
				median.should.equal(test.expected);
			});
		});
	});
});
