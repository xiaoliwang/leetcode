var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('reverse integer<https://leetcode.com/discuss/questions/oj/reverse-integer>', function(){
	it('first solution', function(){
		var a = 12345;
		var reverseNumber = h1(a);
		reverseNumber.should.equal(54321);
	});
});
