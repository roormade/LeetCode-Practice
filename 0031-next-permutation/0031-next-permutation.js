/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i === -1) {
        return nums.sort((a, b) => a - b);
    }
    
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    
    [nums[i], nums[j]] = [nums[j], nums[i]];
    
    let lft = i + 1;
    let rght = nums.length - 1;
    while (lft < rght) {
        [nums[lft], nums[rght]] = [nums[rght], nums[lft]];
        lft++;
        rght--;
    }
    
    return nums;
};