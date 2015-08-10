/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var flag = 1,
		sign = 1,
		number = 0,
		int_max = 2147483647,
		int_min = -2147483648;
		
    for (n in str) {
		var ascii = str.charCodeAt(n);
		
		if(flag && ascii === 32)
			continue;
		
		if (flag && (ascii === 45 || ascii === 43)) {
			flag = 0;
			if (ascii === 45)
				sign = 0;
			continue;
		}
		
		if (ascii > 47 && ascii < 58) {
			flag = 0;
			number = number * 10 + ascii - 48;
			
			if (sign) {
				if (number > int_max)
					return int_max;
			} else {
				if (-number < int_min)
					return int_min;
			}
		} else {
			break;
		}
	}
	if (!sign) {
		number = -number;
	}
	
	return number ? number : 0;
};

module.exports = myAtoi;