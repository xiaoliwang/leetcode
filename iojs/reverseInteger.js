var reverse = function(x){
	var y = 0;
	var isPositive = 0;
	if(x > 0) isPositive = 1;
	while(x){
		y = y * 10 + x % 10;
		if (y > 2147483647 || y < -2147483647)
			return 0;
		if(isPositive)
			x = Math.floor(x/10);
		else
			x = Math.ceil(x/10);
	}
	return y;
}

var a = 123;
console.log(reverse(a));