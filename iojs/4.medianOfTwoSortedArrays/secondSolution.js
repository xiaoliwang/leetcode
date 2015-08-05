/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var long_len = nums1.length;
	var short_len = nums2.length;
	
	if(long_len < short_len){
		var temp = nums1;
		var nums1 = nums2;
		var nums2 = temp;
	}
	
	var half_len  = ((len1 ^ (len2 + 1)) >> 1) + (len1 & (len2 + 1));
	
	var imax = long_len;
	var imin = 0;
	
	while (imin <= imax) {
		var i = ((imin ^ imax) >> 1) + (imin & imax);
		var j = half_len - i;
		
		if (j > 0 && i < m && nums2[j - 1] > nums1[i])
			imin = i + 1;
		else (i > 0 && j < n && nums)
	}
};

module.exports = findMedianSortedArrays;