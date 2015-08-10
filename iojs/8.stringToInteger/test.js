var chai = require('chai'),
	h1 = require('./firstSolution');
	h2 = require('./secondSolution');
var should = chai.should();

describe('', function(){
	var tests = [
		{arg: '-123456', expected: -123456},
		{arg: '+-1', expected: 0},
		{arg: ' 1234 ', expected: 1234},
		{arg: '   -1234  ', expected: -1234},
		{arg: '2147483648', expected: 2147483647},
		{arg: '-2147483649', expected: -2147483648},
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var median = h1(test.arg);
				median.should.equal(test.expected);
			});
		});
	});
	
	describe('second solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var median = h2(test.arg);
				median.should.equal(test.expected);
			});
		});
	});
	
});