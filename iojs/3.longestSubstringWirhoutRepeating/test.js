var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('longest substring without repeating<https://leetcode.com/problems/longest-substring-without-repeating-characters/>', function(){
	it('first solution', function(){
		var s = 'abcdefgacdefgbasef';
		var maxLen = h1(s);
		maxLen.should.equal(8);
	});
});
