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
		console.log('lastRepeatPos', lastRepeatPos);
		if (i - lastRepeatPos > maxLen){
			maxLen = i - lastRepeatPos;
		}
		console.log('maxLen', maxLen);
		m[s[i]] = i;
		console.log(m);
	}
	return maxLen;
};


s = 'abdcabcdbb';
var maxLen = lengthOfLongestSubstring(s);
console.log(maxLen);