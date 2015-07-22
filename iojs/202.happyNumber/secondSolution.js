var isHappy = function(n) {
    var all_result = {};
	while(n !==1 ){
		n = n.toString();
		var arr = [];
		var temp = 0;
		for (var i = 0; i < n.length; i++){
			arr.push(n[i]);
			temp += Math.pow(n[i], 2);
		}
		arr.sort();
		var str_arr = arr.join("");
		if(str_arr in all_result){
			return false;
		}else{
			all_result[str_arr] = temp;
		}
		n = temp;
	}
	return true;
}
module.exports = isHappy;