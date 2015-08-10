var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('zigzag conversion<https://leetcode.com/problems/zigzag-conversion/>', function(){
	var tests = [
		{args: ['PAYPALISHIRING', 3], expected: 'PAHNAPLSIIGYIR'},
		{args: ['ABCDEF', 2], expected: 'ACEBDF'},
		{args: ['A', 1], expected: 'A'},
		{args: ['ABCD', 4], expected: 'ABCD'}
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.args[0], test.args[1]);
				code.should.equal(test.expected);
			});
		});
	});
});
