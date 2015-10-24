var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should(),
	expect = chai.expect;

describe("Remove Duplicates from Sorted Array<https://leetcode.com/problems/remove-duplicates-from-sorted-array/>", function(){
	var tests = [
		{arg: [1, 2, 2, 2, 3, 3, 4, 4, 4], expect:4, expectArray: [1, 2, 3, 4]},
		{arg: [1], expect:1, expectArray: [1]},
		{arg: [1, 3, 3, 3, 5, 5, 10, 12, 14, 14, 14], expect:6, expectArray: [1, 3, 5, 10, 12, 14]}
	]
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var len = h1(test.arg);
				expect(len).to.equal(test.expect);
				for (var i = 0; i < len; i++) {
					expect(test.arg[i]).to.equal(test.expectArray[i]);
				}
			});
		});
	});
});
