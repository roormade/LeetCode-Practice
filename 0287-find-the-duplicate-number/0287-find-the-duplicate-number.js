/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const cow = {};
    for (let i = 0; i < nums.length; i++) {
        if (cow[nums[i]]) {
            return nums[i];
        } else {
            cow[nums[i]] = 1;
        }
    }
    // let result = 0;
    // nums.forEach(num => cow[num] ? result = num : cow[num] = 1);
    // return result;
};