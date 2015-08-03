var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('median of two sorted arrays<https://leetcode.com/problems/median-of-two-sorted-arrays/>', function(){
	it('first solution', function(){
		var ones = [1,2,3,4,5,6,7];
		var twos = [1,2,3,4,5,6];
		var median = h1(ones, twos);
		median.should.equal(4);
	});
});
