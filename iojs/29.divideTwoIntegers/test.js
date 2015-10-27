var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should(),
	expect = chai.expect;

describe("Divide Two Integers<https://leetcode.com/problems/divide-two-integers/>", function(){
	var tests = [
		{arg1: 1 , arg2: 0, expect: 2147483647},
		{arg1: 1, arg2: -1, expect: -1},
		{arg1: 27, arg2: 9, expect: 3},
		{arg1: 28, arg2: 9, expect: 3},
		{arg1: -28, arg2: 9, expect: -3},
		{arg1: -2147483648, arg2: -1, expect: 2147483647},
		{arg1: 2147483647, arg2: 2, expect: 1073741823}
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
