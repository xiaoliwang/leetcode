/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len = s.length;
	var p = -1;
	var stack = [];
	while (++p < len) {
		if (s[p] === '(') {
			stack.push(')');
		} else if (s[p] === '{') {
			stack.push('}')
		} else if (s[p] === '[') {
			stack.push(']')
		} else {
			if (s[p] !== stack.pop())
				return false;
		}
	}

	if (stack.length) {
		return false;
	} else {
		return true;
	}
};

module.exports = isValid;
