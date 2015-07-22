/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsMap = {};
    var indexArr = [];
    
    for (var i = 0; i < nums.length; i++){
        if(i2 = numsMap[target - nums[i]] + 1){
            indexArr.push(i + 1);
            indexArr.push(i2);
            return indexArr;
        }else{
			numsMap[nums[i]] = i;
		}
    }
};

module.exports = twoSum;