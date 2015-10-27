var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should(),
	expect = chai.expect;

describe("Implement strStr<https://leetcode.com/problems/implement-strstr/>", function(){
	var tests = [
		{arg1: '' , arg2: '', expect: 0},
		{arg1: 'abcdabcx', arg2: 'abcx', expect: 4},
		{arg1: 'abbaaba', arg2: 'aa', expect: 3},
		{arg1: 'abc', arg2: 'abcd', expect: -1},
		{arg1: 'a', arg2: '', expect: 0}
	]
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var len = h1(test.arg1, test.arg2);
				expect(len).to.equal(test.expect);
			});
		});
	});
});
