/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var container = 0; 
	var p1 = 0,
		p2 = height.length - 1;
    while (p1 < p2) {
		var temp;
		if (height[p1] < height[p2]) {
			temp = (p2 - p1) * height[p1];
			++p1;
		} else {
			temp = (p2 - p1) * height[p2];
			--p2;
		}
		container = Math.max(temp, container);
	}
	return container;
};

module.exports = maxArea;