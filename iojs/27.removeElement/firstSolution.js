/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
	var current = 0;
	for (var i = 0; i < len; i++) {
		if (nums[i] !== val) {
			nums[current++] = nums[i];
		}
	}
	return current;
};

module.exports = removeElement;