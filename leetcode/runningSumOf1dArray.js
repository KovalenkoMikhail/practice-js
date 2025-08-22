var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
console.log(nums);
    return nums;
};
// nums = [3,1,2,10,1];
//  console.log("Running Sum of 1d Array", runningSum(nums));