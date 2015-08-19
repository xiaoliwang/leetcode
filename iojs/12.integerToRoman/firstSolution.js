/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	var roman_digit = [['I', 'V'], ['X', 'L'], ['C','D'], ['M']];
	var roman_number = '',
		p = 0;
		
	while (num) {
		var digit = num % 10;
		var tr_number = '';
		if (digit < 5) {
			if(digit < 4)
				while(digit--)
					tr_number += roman_digit[p][0];
			else
				tr_number = roman_digit[p][0] + roman_digit[p][1];
		} else {
			if (digit < 9) {
				tr_number = roman_digit[p][1];
				digit = digit - 5;
				while(digit--)
					tr_number += roman_digit[p][0];
			} else
				tr_number = roman_digit[p][0] + roman_digit[p + 1][0];	
		}
		roman_number = tr_number + roman_number;
		++p;
		num = Math.floor(num / 10);
	}
	return roman_number;
};

module.exports = intToRoman;