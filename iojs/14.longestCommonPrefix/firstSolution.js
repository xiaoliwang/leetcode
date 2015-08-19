/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var prefix = strs[0];
	var p = 1;
	var str_len = strs.length;
	while (p < str_len) {
		str = strs[p];
		var q = 0;
		var len1 = prefix.length;
			len2 = strs[p].length;
		var len = Math.min(len1, len2);
		while (q < len) {
			if (prefix[q] !== str[q]) {
				break;
			} else {
				++q;
			}
		}
		++p;
		prefix = prefix.substr(0, q);
	}
	
	return prefix || '';
};

module.exports = longestCommonPrefix;

var test = ["flower", "flow", "flight"];
//var test = [];
console.log(longestCommonPrefix(test));