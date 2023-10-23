/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (dSet.has(nums[i])) {
            return true;
        }
        dSet.add(nums[i]);
    }
    return false;
};