/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var len = s.length;
	if (len === 1 || len ===0) return s;
	
	var start = 0, max_len = 1, len_m1 = len - 1;
	
	for (var i = 0; i < len;) {
		if ((len - i) <= (max_len >> 1)) break;
		var j = i, k = i;
		while (k < len_m1 && s[k + 1] === s[k]) ++k;
		i = k + 1;
		while (k < len_m1 && j > 0 && s[k + 1] === s[j-1]) {
			++k;
			--j;
		}
		var new_len = k - j + 1;
		if (new_len > max_len) {
			start = j;
			max_len = new_len;
		}
	}
	return s.substr(start, max_len);
};

module.exports = longestPalindrome;