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
	
	var len = short_len + long_len;
	var odd = len & 1;
	var half_len  = (len + 1) >> 1;
	
	nums1[short_len] = Infinity;
	nums2[long_len] = Infinity;
	nums1[-1] = -Infinity;
	nums2[-1] = -Infinity
	
	if (short_len === 0)
		if (odd)
			return nums2[half_len - 1];
		else
			return (nums2[half_len] + nums2[half_len - 1]) / 2;
	
	var imax = long_len;
	var imin = 0;
	
	while (imin < imax){
		var j = (imax + imin + 1) >> 1;
		if ((i = half_len - j) < 1){
			i = 1;
			j = half_len - 1;
		} else if (i > short_len) {
			i = short_len;
			j = half_len - short_len;
		}
		
		if (nums1[i - 1] < nums2[j - 1]){
			if (nums1[i] >= nums2[j - 1] || i === short_len) {
				if (odd){
					return nums2[j - 1];
				} else {
					if (nums2[j] && nums1[i] > nums2[j]) {
						return (nums2[j - 1] + nums2[j]) / 2;
					} else {
						return (nums2[j - 1] + nums1[i]) / 2;
					}
				}
			} else if(nums2[j - 2] < 0){
				if(numsi[i] < nums1[i - 1]){
					return (nums2[j - 1] + nums1[i - 1]) / 2;
				} else {
					return (nums2[j - 1] + nums1[i - 1]) / 2;
				}
			} else {
				imax = (imax > j) ? j : (imax - 1);
			}
		} else if (nums1[i - 1] > nums2[j - 1]){
			if (nums2[j] >= nums1[i - 1]) {
				if (odd) {
					return  nums1[i - 1];
				} else {
					if (nums2[j] > nums1[i]){
						return (nums1[i - 1] + nums1[i]) / 2;
					} else {
						return (nums1[i - 1] + nums2[j]) / 2;
					}
				}
			} else if (i === 1){
				if (odd) {
					return nums2[j];
				} else {
					if (nums2[j + 1] < nums1[0]){
						return (nums2[j + 1] + nums2[j]) / 2;
					} else {
						return (nums1[0] + nums2[j]) / 2
					}
				}
			} else {
				imin = (imin < j) ? j:(imin + 1);
			}
		} else {
			if(odd){
				return nums1[i - 1];
			}else{
				if (nums1[i] > nums2[j]) {
					return (nums2[j] + nums2[j - 1]) /2;
				} else {
					return (nums1[i] + nums2[j - 1]) /2;
				}
			}
			
		}
	}
	return undefined;
};

module.exports = findMedianSortedArrays;

var args = {ones: [1,2], twos: [3,4], expected: 2.5};
console.log(findMedianSortedArrays(args.ones, args.twos));