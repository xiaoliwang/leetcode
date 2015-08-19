var chai = require('chai'),
	h1 = require('./firstSolution');
var should = chai.should();

describe('container with most water<https://leetcode.com/problems/container-with-most-water/>', function(){
	var tests = [
		{arg:1, expected: 'I'},
		{arg:4, expected: 'IV'},
		{arg:7, expected: 'VII'},
		{arg:9, expected: 'IX'},
		{arg:55, expected: 'LV'},
		{arg:65, expected: 'LXV'},
		{arg:93, expected: 'XCIII'},
		{arg:95, expected: 'XCV'},
		{arg:99, expected: 'XCIX'},
		{arg:800, expected: 'DCCC'},
		{arg:999, expected: 'CMXCIX'},
		{arg:1600, expected: 'MDC'},
		{arg:1888, expected: 'MDCCCLXXXVIII'},
		{arg:1984, expected: 'MCMLXXXIV'},
		{arg:3999, expected: 'MMMCMXCIX'},
		
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