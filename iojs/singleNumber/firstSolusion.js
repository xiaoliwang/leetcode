/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var map = {};
	var len = nums.length;
	for (var i = 0; i < len; i++){
		if(map[nums[i]]){
			map[nums[i]] = 2;
		}else{
			map[nums[i]] = 1;
		}
	}

	for(var j in map){
		if(map[j] === 1){
			return parseInt(j);
		}
	}
};

module.exports = singleNumber;