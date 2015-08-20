var chai = require('chai'),
	h1 = require('./firstSolution');
var expect = chai.expect;

describe('4Sum<https://leetcode.com/problems/4sum/>', function(){
	var tests = [ 
		{ arg: [-1, 0, 1, 2, -1, -4], target: 2 ,expected: {len :1, members:[[-1, 0, 1, 2]]}},
		{ arg: [0, 0, 0, 0], target: 0, expected: {len :1, members: [[0, 0, 0, 0]]}},
		{ arg: [3,0,-2,-1,1,2], target: 3, expected: {len: 2, members: [[ -2, 0, 2, 3 ], [ -1, 0, 1, 3 ]]}},
		{ arg: [1,-1,-1,0], target: 13, expected: {len: 0, members: []}}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg, test.target);
				expect(code).to.have.length(test.expected.len);
				expect(code).to.deep.have.members(test.expected.members);
			});
		});
	});
});