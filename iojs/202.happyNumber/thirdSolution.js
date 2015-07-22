var isHappy = function(n) {
    while(n>6){
		var next = 0;
		while(n){
			next += (n%10) * (n%10);
			n = Math.floor(n/10);
		}
		n = next;
	}
	return n === 1;
}
module.exports = isHappy;