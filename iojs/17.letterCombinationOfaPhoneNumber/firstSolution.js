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
		5: ['k', 'l', 'm'],
		6: ['n', 'p', 'q'],
		7: ['r', 's', 't'],
		8: ['u', 'v', 'w'],
		9: ['x', 'y', 'z']
	};

	var len = digits.length;
	var p1 = 0;
	var letters = map[digits[p1]];
	if (!letters) return '';
	while (p1 < len - 1) {
		var q1 = 0;
		var tempLetters = map[digits[++p1]];
		var len1 = letters.length;
		var len2 = tempLetters.length;
		while (q1 < len1) {
			var q2 = 0;
			var temp = [];
			while (q2 < len2) {
				temp.push(letters[q1] + tempLetters[q2++]);
			}
			++ q1;
		}
		letters = temp;
	}
	return letters;
};

console.log(letterCombinations('23'));
