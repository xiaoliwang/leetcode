/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var i = 0,
		sign = 1,
		number = 0,
		len = str.length;
		
	var int_max = 2147483647,
		int_min = -2147483648;
	
	while(str[i] === ' ') ++i;
	
	if (str[i] === '+' || str[i] === '-') {
		if (str[i] === '-') sign = -1;
		++i;
	}
	
	while (i < len) {
		if (str[i] < '0' || str[i] > '9') break;
		number = number * 10 + str[i].charCodeAt() - 48;
		if (sign === 1 && number > int_max) 
			return int_max;
		else if(sign === -1 && -number < int_min)
			return int_min;
		++i;
	}
	
	return number * sign;
}

module.exports = myAtoi;