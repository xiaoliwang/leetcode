//因为是个环，所以可以使用指针去追
var digitSquareSum = function(n){
	var  sum = 0;
	n = n.toString();
	var len = n.length;
	while(len--){
		sum += Math.pow(n[len], 2);
	}
	return sum;
};

var isHappy = function(n){
	var slow, fast;
	slow = fast = n;
	do{
		slow = digitSquareSum(slow);
		fast = digitSquareSum(fast);
		fast = digitSquareSum(fast);
		if(fast === 1) return true;
	}while(slow !== fast);
	if(slow == 1) return true;
	else return false
}

module.exports = isHappy;