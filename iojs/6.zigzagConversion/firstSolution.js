/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows === 1) {
		return s;
	}
	
	var s_len = s.length;
	var arr_str = [];
	var i = 0, j = 0, row = 0,
		longest_step = (numRows << 1) - 2,
		step = (numRows << 1) - 2;
	
	do{
		if(longest_step !== step)
			step = longest_step - step;
		arr_str[i++] = s[j];
		j += step;
		if (j > s_len){
			j = ++row;
			step = 2 * row;
		}
	}while(row < numRows);
	return arr_str.join('');
};

module.exports = convert;