var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution'),
	h3 = require('./thirdSolution');
var should = chai.should();

describe('is HappyNumber<https://leetcode.com/problems/happy-number/>',function(){
	describe('first solution', function(){
		it('19 is a happy number', function(){
			var result = h1(19);
			result.should.be.true;
		});
		it('20 is not a happy number', function(){
			var result = h1(20);
			result.should.be.false;
		});
	});
	
	describe('second solution', function(){
		it('19 is a happy number', function(){
			var result = h2(19);
			result.should.be.true;
		});
		it('20 is not a happy number', function(){
			var result = h2(20);
			result.should.be.false;
		});
	});
	
	describe('third solution', function(){
		it('19 is a happy number', function(){
			var result = h3(19);
			result.should.be.true;
		});
		it('20 is not a happy number', function(){
			var result = h3(20);
			result.should.be.false;
		});
	});
});
