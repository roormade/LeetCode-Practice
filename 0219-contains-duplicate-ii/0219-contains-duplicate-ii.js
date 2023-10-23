/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const dObj = {};
    for (let i = 0; i < nums.length; i++) {
        const dff = Math.abs(dObj[nums[i]] - i);
        if (dff <= k) {
            return true;
        }
        dObj[nums[i]] = i;
    }
    return false;
};