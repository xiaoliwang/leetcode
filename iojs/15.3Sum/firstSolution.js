/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var map = {},
		arr_nums = [],
		len = nums.length;
		
	nums = nums.sort(function(a,b){return a - b});
    nums.forEach(function(num, index){
		map[num] = index;
	});

	var p1 = 0;
	while (p1 < len - 2) {
		var num1 = nums[p1];
		var twoSum = 0 - num1;
		var p2 = p1 + 1;
		var max_p2 = len - 1;
		while ( p2 < max_p2) {
			var num2 = nums[p2];
			var num3 = 0 - num1 - num2;
			if (map[num3] && map[num3] > p2) 
				arr_nums.push([num1, num2, num3]);
			do {
				++p2;
			} while( num2 === nums[p2]);
		}
		
		do{
			++p1;
		}while(num1 === nums[p1]);
	}
	
	return arr_nums;
};

module.exports = threeSum;