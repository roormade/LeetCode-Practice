/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const dObj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (dObj.hasOwnProperty(nums[i])) {
    //         return true;
    //     }
    //     dObj[nums[i]] = true;
    // }
    // return false;
    const dSet = new Set();
    for (let i = 0; i < nums.length; i++) {   
        if (dSet.has(nums[i])) {
            return true;
        }
        dSet.add(nums[i]);
    }
    return false;
};