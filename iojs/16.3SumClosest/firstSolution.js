/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	function distance(x, y) {
		return Math.abs(x - y);
	}
	
    var max_p1 = nums.length - 2;
	var close_target = Infinity;
	var close_distance = Infinity;
	var p1 = 0;
	
	nums = nums.sort(function(a, b){return a - b});
	
	while (p1 < max_p1) {
		var p2 = p1 + 1,
			p3 = nums.length - 1;
			
		while (p2 < p3) {
			var sum = nums[p1] + nums[p2] + nums[p3];
			
			if (sum === target)
				return target;
			
			sum > target ? --p3 :
				++p2;
				
			if(distance(sum, target) < close_distance){
				close_target = sum;
				close_distance = distance(sum, target);
			}
		}
		++p1;
	}
	
	return close_target;
};

module.exports = threeSumClosest;