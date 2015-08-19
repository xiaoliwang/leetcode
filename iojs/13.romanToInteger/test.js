var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('container with most water<https://leetcode.com/problems/container-with-most-water/>', function(){
	var tests = [ 
		{ arg: 'I', expected: 1 },
		{ arg: 'IV', expected: 4 },
		{ arg: 'VII', expected: 7 },
		{ arg: 'IX', expected: 9 },
		{ arg: 'LV', expected: 55 },
		{ arg: 'LXV', expected: 65 },
		{ arg: 'XCIII', expected: 93 },
		{ arg: 'XCV', expected: 95 },
		{ arg: 'XCIX', expected: 99 },
		{ arg: 'DCCC', expected: 800 },
		{ arg: 'CMXCIX', expected: 999 },
		{ arg: 'MDC', expected: 1600 },
		{ arg: 'MDCCCLXXXVIII', expected: 1888 },
		{ arg: 'MCMLXXXIV', expected: 1984 },
		{ arg: 'MMMCMXCIX', expected: 3999 } 
	];
	
	describe('first solution', function(){
		tests.forEach(function(test, index){
			it('args'+index, function(){
				var code = h1(test.arg);
				code.should.equal(test.expected);
			});
		});
	});
	
});