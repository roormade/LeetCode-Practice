/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dSet = {};
    for (let i = 0; i < nums.length; i++) {
        if (dSet.hasOwnProperty(nums[i])) {
            return true;
        }
        dSet[nums[i]] = true;
    }
    return false;
};