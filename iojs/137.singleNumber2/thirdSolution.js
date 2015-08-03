/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var ones = 0, twos = 0,mask = 0;
	var len = nums.length;
	for (var i = 0; i < len; i++){
		twos ^= ones & nums[i];
		ones ^= nums[i];
		mask = ~(twos & ones);
		twos &= mask;
		ones &= mask;
	}
	return ones;
};

module.exports = singleNumber;