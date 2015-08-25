/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var parenthesis = [['']];
	for (var i = 1; i <= n; ++i) {
		var parentheses = [];
		for (var j = 0; j < i; ++j) {
			for (var l in parenthesis[j]) {
				for (var m in parenthesis[i - 1 - j]) {
					parentheses.push('(' + parenthesis[j][l] + ')' + parenthesis[i - 1 - j][m]);
				}
			}
		}
		parenthesis.push(parentheses);
	}
	return parenthesis[parenthesis.length - 1];
};

module.exports = generateParenthesis;