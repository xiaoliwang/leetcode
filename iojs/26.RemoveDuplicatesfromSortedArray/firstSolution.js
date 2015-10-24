/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var len = nums.length;
	var current = 0;
	for (var i = 1; i < len; i++) {
		if (nums[current] !== nums[i]) {
			nums[++current] = nums[i];
		}
	}
	return current + 1;
};

module.exports = removeDuplicates;