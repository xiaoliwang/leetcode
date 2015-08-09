/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var short_len = nums1.length;
	var long_len = nums2.length;
	
	if (long_len < short_len){
		var temp = nums1;
		nums1 = nums2;
		nums2 = temp;
		
		long_len ^= short_len;
		short_len ^= long_len;
		long_len ^= short_len;
	}
	
	if (short_len === 0)
		if (odd)
			return nums2[half_len - 1];
		else
			return (nums2[half_len] + nums2[half_len - 1]) / 2;
	
	var len = short_len + long_len;
	var odd = len & 1;
	var half_len  = (len + 1) >> 1;
	
	nums1[short_len] = Infinity;
	nums2[long_len] = Infinity;
	nums1[-1] = -Infinity;
	nums2[-1] = -Infinity
	
	var imax = long_len;
	var imin = 0;
	
	while (imin <= imax){
		var j = (imax + imin + 1) >> 1;
		var i = half_len - j;
		if (i < 0){
			i = 0;
			j = half_len;
		}
		
		if (i > short_len + 1){
			i = short_len + 1;
			j = half_len - short_len - 1;
		}
		
		if (nums1[i - 1] <= nums2[j - 1]){
			if (nums1[i] >= nums2[j - 1]) {
				if (odd) {
					return nums2[j - 1];
				} else {
					if (nums2[j] && nums1[i] > nums2[j]) {
						return (nums2[j - 1] + nums2[j]) / 2;
					} else {
						return (nums2[j - 1] + nums1[i]) / 2;
					}
				}
			} else {
				imax = (imax > j) ? j : (imax - 1);
			}
		} else if (nums1[i - 1] > nums2[j - 1]) {
			if (nums2[j] >= nums1[i - 1]) {
				if (odd) {
					return nums1[i - 1];
				} else {
					if (nums2[j] > nums1[i]){
						return (nums1[i - 1] + nums1[i]) / 2;
					} else {
						return (nums1[i - 1] + nums2[j]) / 2;
					}
				}
			} else {
				imin = (imin < j) ? j:(imin + 1);
			}
		} 
	}
};

module.exports = findMedianSortedArrays;