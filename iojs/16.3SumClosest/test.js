var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('3Sum Closest<https://leetcode.com/problems/3sum-closest/>', function(){
	var tests = [ 
		{nums: [-1, 2, 1, -4], target: 1, expected: 2},
		{nums: [1, 1, -1, -1, 3], target: 3, expected: 3}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.nums, test.target);
				code.should.equal(test.expected);
			});
		});
	});
	
});