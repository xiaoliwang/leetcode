/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = 0;
	var isPositive = 0;
	if(x > 0) isPositive = 1;
	while(x){
		y *= 10;
		var tempnum = x % 10;
		y += tempnum;
		if (y > 2147483647 || y < -2147483647)
			return 0;
		if(isPositive)
			x = Math.floor(x/10);
		else
			x = Math.ceil(x/10);
	}
	return y;
};

module.exports  = reverse;