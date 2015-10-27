var test = function(lwords, str) {
	if (lwords.length === 1) {
		str += lwords[0];
		substringStore[str] = 1;
	} else {
		for (var i = 0; i < lwords.length; i++) {
			var tstr = str;
			twords = lwords.slice(0);
			tstr += twords.splice(i , 1)[0];
			test(twords, tstr);
		}
	}
}

var findSubstring = function(s, words) {
	var len = s.length;
	var wc = words.length;
	var indices = [];
	if (!len || !wc)
		return indices;
	
	var wl = words[0].length;
	var strl = wl * wc;
	if (len < strl)
		return indices;
	
	var last_index = len - strl;
	
	substringStore = {};
	var word;
	test(words, '');

	console.log(substringStore);

	for (var i = 0; i <= last_index; ++i) {
		var substr = s.substr(i, strl);
		if (substringStore[substr])
			indices.push(i);
	}
	return indices;
}
var time1 = new Date().getTime();
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
console.log(new Date().getTime() - time1);

