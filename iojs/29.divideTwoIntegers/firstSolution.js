/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (!divisor || (dividend == -2147483648 && divisor == -1))
		return 2147483647;
	
	var diff = ((dividend ^ divisor) < 0) ?
		1 : 0;
		
	divisor = Math.abs(divisor);
	dividend = Math.abs(dividend);
	if (divisor === 1)
		return diff ? -dividend : dividend;
	
	var quotient = 0;
	var res = 0;
	while (divisor <= dividend) {
		var temp = divisor;
		res = 1;
		while ((temp << 1) > 0 && dividend >= (temp << 1)) {
			temp <<= 1;
			res <<= 1;
		}
		dividend -= temp;
		quotient += res;
	}
	
	if (diff)
		return -quotient;
	return quotient;	
};

module.exports = divide;