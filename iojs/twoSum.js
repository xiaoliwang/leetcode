var chai = require('chai');
var should = chai.should();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a = {};
    var b = [];
    nums.forEach(function(value, index){
        a[value] = index;
    });
    
    for(i=0; i<nums.length; i++){
        if(index2 = a[target - nums[i]]){
            b.push(i + 1);
            b.push(index2 + 1);
            return b;
        }
    }
    
};

describe("Two Sum", function(){
	it('Input: numbers={2, 7, 11, 15}, target=9;\n Output: index1=1,index2=2', function(){
		var numbers = [2,7,11,15];
		var target = 9;
		var indexs = twoSum(numbers, target);
		indexs[0].should.equal(1);
		indexs[1].should.equal(2);
	});
});