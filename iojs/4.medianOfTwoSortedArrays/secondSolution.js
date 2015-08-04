/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;
	var len = len1 + len2;
	
	var imin = 0;
	var imax = Math.max(len1, len2);
	var half_pos = ((len1 ^ len2) >> 1) + (len1 & len2) + 1;
	
	while (imin < imax){
		var i = ((imin ^ imax) >> 1) + (imin & imax) + 1;
		var j = half_pos - i;
	}
	
};

module.exports = findMedianSortedArrays;