/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	function addingpar(parenthesis, str, n, m){
		if (n == 0 && m ==0) {
			parenthesis.push(str);
			return;
		}
		if (m > 0) {addingpar(parenthesis, str + ')', n, m - 1);}
		if (n > 0) {addingpar(parenthesis, str + '(', n - 1, m + 1);}
	}
	
	var parenthesis = [];
	addingpar(parenthesis, '', n , 0);
	return parenthesis;
};

module.exports = generateParenthesis;