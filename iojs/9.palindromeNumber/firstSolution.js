/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str_x = x + '';
	var len_x = str_x.length;
	if (len_x === 1) return true;
	
	var half_len = len_x >> 1;
	for (var i = 0; i < half_len; i++)
		if (str_x[i] !== str_x[len_x - i - 1])
			return false
	
	return true;
};

module.exports = isPalindrome;