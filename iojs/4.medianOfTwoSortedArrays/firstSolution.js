/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;
	var len = len1 + len2;
	
    var half_pos  = ((len1 ^ len2) >> 1) + (len1 & len2);
	len1 = --len1;
	len2 = --len2;
	
	var odd = len & 1;
	var type = 0;

	var median = undefined;
	var temp = undefined;
	var end = 0;

	for (var i = 0; i <= half_pos; ++i){
		if (nums1[len1] > nums2[len2] && nums1[len1]){
			median = nums1[len1];
			end = --len1;
			type = 1;
		} else if (nums2[len2]){
			median = nums2[len2];
			end = --len2;
			type = 2;
		} else {
			median = nums1[len1];
			end = --len1;
			type =1;
		}
		if ( !odd && (i === half_pos - 1)){
			temp = median;	
		}
	}
	
	return temp?(temp + median)/2
		:median;
	
};

module.exports = findMedianSortedArrays;