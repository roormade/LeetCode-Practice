/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const cow = {};
    let result = 0;
    nums.forEach(num => cow[num] ? result = num : cow[num] = 1);
    return result;
};