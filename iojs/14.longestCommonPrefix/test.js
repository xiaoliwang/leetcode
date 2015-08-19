var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('longest common prefix<https://leetcode.com/problems/longest-common-prefix/>', function(){
	var tests = [ 
		{ arg: ["flower", "flow", "flight"], expected: 'fl' },
		{ arg: [], expected: '' },
		{ arg: [''], expected: '' },
		{ arg: ['abcdefg','abcdefghi', 'abcdefgh'], expected: 'abcdefg' }
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				code.should.equal(test.expected);
			});
		});
	});
});