/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currI = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[currI - 2]) {
            nums[currI] = nums[i];
            currI++;
        }
    }
    return currI;
};