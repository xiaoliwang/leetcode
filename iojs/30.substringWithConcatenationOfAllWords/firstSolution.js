/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var i;
	var indices = [];
	var len = s.length;
	var wc = words.length;
	if (!len || !wc)
		return indices;
	var wl = words[0].length;
	var strl = wl * wc;
	if (len < strl)
		return indices;
	
	var last_index = len - strl;
	var detective = {}; 
	words.forEach(function(word){
		if (detective[word]) {
			++detective[word];
		} else {
			detective[word] = 1;
		}
	});
	
	for (i = 0; i <= last_index; ++i) {
		var left = i;
		var last_left = i + strl - wl;
		var tdec = {};
		tdec.__proto__ = detective;
		while (left <= last_left) {
			var substr = s.substr(left, wl);
			if (tdec[substr] && tdec[substr] > 0) {
				if (left === last_left) {
					indices.push(i);
					break;
				} else {
					tdec[substr]--;
					left = left + wl;
				}
			} else {
				break;
			}
		}
	}
	
	return indices;
};
var time1 = new Date().getTime();
console.log(findSubstring("aaaaaaaaaa", ["a", "a"]));
console.log(new Date().getTime() - time1);