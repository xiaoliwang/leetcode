/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	function matchFirst(s, p){
		return (s[0] === p[0] || (p[0] === '.' && s[0]));
	}
	
    if (!p[0]) return s[0] === undefined;
	
	if (p[1] !== '*') {
		if(!matchFirst(s,p)) return false;
		return isMatch(s.substr(1), p.substr(1));
	} else {
		if(isMatch(s, p.substr(2))) return true;
		while (matchFirst(s,p)){
			if (isMatch(s = s.substr(1), p.substr(2)))
				return true;
		} 
		return false;	
	}
};

module.exports = isMatch;