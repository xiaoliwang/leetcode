/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var getNext = function(needle) {
	var i = 0;
	var j = -1;
	next = [-1];
	var len = needle.length - 1;
	while (i < len) {
		if (j === -1 || needle[i] === needle[j]) {
			//KMP改进算法
			if (needle[++i] !== needle[++j]) {
				next[i] = j;
			} else {
				next[i] = next[j];
			}
			//KMP算法
			//next[++i] = ++j;
		} else {
			j = next[j];
		}
	}
	return next;
} 

var strStr = function(haystack, needle) {
    var len1 = haystack.length;
	var len2 = needle.length;
	if (len1 < len2)
		return -1;
	if (len2 === 0)
		return 0;
	var next = getNext(needle);
	var i = 0, j = 0;
	while (i < len1) {
		if (j === -1 || haystack[i] === needle[j]) {
			++i;
			++j;
			if (j === len2)
				return i - len2;
		} else {
			j = next[j];
		}
	}
	return -1;
};

module.exports = strStr;