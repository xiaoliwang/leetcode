var chai = require('chai'),
	h1 = require('./firstSolution'),
	h2 = require('./secondSolution'),
	h3 = require('./thirdSolution');
var should = chai.should();

describe('is HappyNumber<https://leetcode.com/problems/happy-number/>',function(){
	var tests = [
		{arg: 1, expected: true, info: ''},
		{arg: 20, expected: false, info: 'not'}
	]
	
	describe('first solution', function(){
		tests.forEach(function(test){
			it( test.arg + 'is '+test.info+' a happy number', function(){
				var result = h1(test.arg);
				result.should.equal(test.expected);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test){
			it( test.arg + 'is '+test.info+' a happy number', function(){
				var result = h2(test.arg);
				result.should.equal(test.expected);
			});
		});
	});
	
	describe('third solution', function(){
		tests.forEach(function(test){
			it( test.arg + 'is '+test.info+' a happy number', function(){
				var result = h3(test.arg);
				result.should.equal(test.expected);
			});
		});
	});
});
