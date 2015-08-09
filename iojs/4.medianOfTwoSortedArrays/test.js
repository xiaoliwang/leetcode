var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var should = chai.should();

describe('median of two sorted arrays<https://leetcode.com/problems/median-of-two-sorted-arrays/>', function(){
	var tests = [
		{ones: [1,2,3,4,5,6,7], twos: [1,2,3,4,5,6,7], expected: 4},
		{ones: [1,2,3,4,5,6], twos: [1,2,5,6], expected: 3.5},
		{ones: [1,2,3,4,5,6], twos: [1,1,2,2,5,5,6,6], expected: 3.5},
		{ones: [1,2,3,4,5,6,7], twos: [1,2,3,4,5,6,7,8], expected: 4},
		{ones: [1,2,3,4,6,7,8,13], twos: [1,2,3,4,5,7,8,9,10,11,12], expected: 6},
		{ones: [], twos: [1], expected: 1},
		{ones: [1], twos: [1], expected: 1},
		{ones: [100000], twos: [100001], expected: 100000.5},
		{ones: [1,2], twos: [3,4], expected: 2.5},
		{ones: [1,3], twos: [2,4], expected: 2.5},
		{ones: [1,4], twos: [2,3], expected: 2.5},
		{ones: [3,4], twos: [1,2], expected: 2.5},
		{ones: [2,4], twos: [1,3], expected: 2.5},
		{ones: [2,3], twos: [1,4], expected: 2.5},
		{ones: [1,2,3,4,5,6], twos: [], expected:3.5},
		{ones: [1,2,3,4,5,6,7], twos: [], expected:4},
		{ones: [1,2,3,4,5], twos: [6,7,8,9,10,11,12,13,14,15], expected: 8},
		{ones: [1,2,3,4,8], twos: [5,6,7,9,10,11,12,13,14,15], expected: 8},
		{ones: [1,2,3,4,5], twos: [6,7,8,9,10,11,12,13,14,15,16], expected: 8.5},
		{ones: [1,2,3,8,9], twos: [4,5,6,7,10,11,12,13,14,15,16], expected: 8.5},
		{ones: [1,2,3,4,8], twos: [5,6,7,9,10,11,12,13,14,15,16], expected: 8.5},
		{ones: [1,2,3,4,9], twos: [5,6,7,8,10,11,12,13,14,15,16], expected: 8.5},
		{ones: [11,12,13,14,15], twos: [1,2,3,4,5,6,7,8,9,10], expected: 8},
		{ones: [8,12,13,14,15], twos: [1,2,3,4,5,6,7,9,10,11], expected: 8},
		{ones: [11,12,13,14,15,16], twos: [1,2,3,4,5,6,7,8,9,10], expected: 8.5},
		{ones: [8,9,13,14,15,16], twos: [1,2,3,4,5,6,7,11,12,10], expected: 8.5},
		{ones: [9,12,13,14,15,16], twos: [1,2,3,4,5,6,7,8,10,11], expected: 8.5},
		{ones: [8,12,13,14,15,16], twos: [1,2,3,4,5,6,7,9,10,11], expected: 8.5},
		{ones: [1,1], twos: [1,2], expected: 1},
		{ones: [1,2], twos: [1,2], expected: 1.5},
		{ones: [2,3], twos: [1,4,5], expected: 3},
		{ones: [2,3,6], twos: [1,4,5], expected: 3.5},
		{ones: [2,3,4], twos: [1,5,6], expected: 3.5},
		{ones: [2], twos: [1,2,3], expected: 2},
		{ones: [5], twos: [1,2,3,4,6,7], expected: 4},
		{ones: [5], twos: [3,4,6,7,8,9], expected: 6}
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
