var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution');
var expect = chai.expect;

describe('3 Sum<https://leetcode.com/problems/3sum/>', function(){
	var tests = [ 
		{ arg: [-1, 0, 1, 2, -1, -4], expected: {len :2, members: [[-1, 0, 1],[-1, -1, 2]]}},
		{ arg: [0, 0, 0, 0], expected: {len :1, members: [[0, 0, 0]]}},
		{ arg: [3,0,-2,-1,1,2], expected: {len: 3, members: [[-2,-1,3],[-2,0,2],[-1,0,1]]}},
		{ arg: [1,-1,-1,0], expected: {len: 1, members: [[-1,0,1]]}}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				expect(code).to.have.length(test.expected.len);
				expect(code).to.deep.have.members(test.expected.members);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h2(test.arg);
				expect(code).to.have.length(test.expected.len);
				expect(code).to.deep.have.members(test.expected.members);
			});
		});
	});
});