/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	var map = {
		0: [' '],
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};
	
	var len = digits.length;
	
	var p1 = 0;
	var letters = map[digits[p1]];
	if (!letters) return [];
	
	while (p1 < len - 1) {
		var q1 = 0;
		var len1 = letters.length;
		var tempLetters = map[digits[++p1]];
		var len2 = tempLetters.length;
		var temp = [];
		while (q1 < len1) {
			var q2 = 0;
			while (q2 < len2) {
				temp.push(letters[q1] + tempLetters[q2++]);
			}
			++ q1;
		}
		letters = temp;
	}
	return letters;
};

module.exports = letterCombinations;
