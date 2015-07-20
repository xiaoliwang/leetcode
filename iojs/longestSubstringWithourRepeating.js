/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	    var m = [];
    var maxLen = 0, lastRepeatPos = -1;
	for(var i = 0; i < s.length; i++){
		if (m[s[i]] !== undefined && lastRepeatPos < m[s[i]]){
			lastRepeatPos = m[s[i]];
		}
		if (i - lastRepeatPos > maxLen){
			maxLen = i - lastRepeatPos;
		}
		m[s[i]] = i;
	}
	return maxLen;
};


s = 'abdcabcdbb';
var maxLen = lengthOfLongestSubstring(s);
console.log(maxLen);