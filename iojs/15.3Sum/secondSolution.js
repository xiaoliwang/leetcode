/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var	arr_nums = [],
		len = nums.length;
		
	nums = nums.sort(function(a,b){return a - b});

	var max_p1 = len - 2;
		p1 = 0;	
	
	while (p1 < max_p1) {
		var num1 = nums[p1];
		var twoSum = 0 - num1;
		var p2 = p1 + 1,
			p3 = len - 1;
		while (p2 < p3) {
			var num2 = nums[p2],
				num3 = nums[p3];
			if (num2 + num3 === twoSum) {
				arr_nums.push([num1, num2, num3]);
				do {
					++p2;
				} while (num2 === nums[p2]);
				do {
					--p3
				} while (num3 === nums[p3]);
			} else if (num2 + num3 < twoSum) {
				do {
					++p2;
				} while (num2 === nums[p2]);
			} else {
				do {
					--p3
				} while (num3 === nums[p3]);
			}
		}
		
		do {
			++p1;
		} while(num1 === nums[p1]);
	}
	
	return arr_nums;
};

module.exports = threeSum;