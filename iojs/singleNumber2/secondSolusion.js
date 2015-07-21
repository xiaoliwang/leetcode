/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var ones = 0, twos = 0;
	var len = nums.length;
	for (var i = 0; i < len; i++){
		ones = (ones ^ nums[i]) & ~twos;
		twos = (twos ^ nums[i]) & ~ones;
	}
	return ones;
};

module.exports = singleNumber;