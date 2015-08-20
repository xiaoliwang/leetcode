/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	var	arr_nums = [],
		len = nums.length;
		
	nums = nums.sort(function(a,b){return a - b});

	var max_p1 = len - 3;
		p1 = 0;	
	
	while (p1 < max_p1) {
		var num1 = nums[p1];
		var target3 = target - num1;
		
		var max_p2 = len - 2;
			p2 = p1 + 1;
			
		while (p2 < max_p2) {
			var num2 = nums[p2];
			var target2 = target3 - num2;
			var p3 = p2 + 1,
				p4 = len - 1;
				
			while (p3 < p4) {
				var num3 = nums[p3],
					num4 = nums[p4];
				if (num3 + num4 === target2) {
					arr_nums.push([num1, num2, num3, num4]);
					do {
						++p3;
					} while (num3 === nums[p3]);
					do {
						--p4
					} while (num4 === nums[p4]);
				} else if (num3 + num4 < target2) {
					do {
						++p3;
					} while (num3 === nums[p3]);
				} else {
					do {
						--p4
					} while (num4 === nums[p4]);
				}
			}
			do {
				++p2;
			} while(num2 === nums[p2]);
		}
		do {
			++p1;
		} while(num1 === nums[p1]);
	}
	return arr_nums;
};

module.exports = fourSum;