function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const targetSum = nums[i] + nums[j];

      if (target == targetSum && i !== j) {
        return [i, j];
      }
    }
  }
}
nums = [2, 7, 11, 15];
target = 13;
console.log("Two Sum", twoSum(nums, target));
