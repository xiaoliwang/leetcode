var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should(),
	expect = chai.expect;

describe("Remove Element<https://leetcode.com/problems/remove-element/>", function(){
	var tests = [
		{arg1: [1, 2, 2, 2, 3, 3, 4, 4, 4], arg2: 2, expect: 6},
		{arg1: [1], arg2: 1, expect: 0},
		{arg1: [1, 3, 3, 3, 5, 5, 10, 12, 14, 14, 14], arg2: 3, expect: 8},
		{arg1: [1, 3, 3, 3, 5, 5, 10, 12, 14, 14, 14], arg2: 14, expect: 8}
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
