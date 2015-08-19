/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = 0;
	var roman_digit = {
		I : 1,
		V : 5,
		X : 10,
		L : 50,
		C : 100,
		D : 500,
		M : 1000
	};
	
	var p = 0;
	var len = s.length;
	
	while (p < len) {
		var current = roman_digit[s[p]];
		var next = roman_digit[s[p + 1]];
		if (next && next > current ) {
			number = number - current;
		} else {
			number = number + current;
		}
		++p;
	}
	
	return number;
};

module.exports = romanToInt;