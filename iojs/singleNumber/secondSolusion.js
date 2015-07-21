/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var result = 0;
	var len = nums.length;
	for (var i = 0; i < len; i++){
		result ^= nums[i];
	}
	return result;
};

module.exports = singleNumber;