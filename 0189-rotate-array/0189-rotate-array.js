/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (k > nums.length) {
        k = Math.abs(k - nums.length);
    };
    const tail = nums.splice(nums.length - k, k);
    nums.splice(0, 0, ...tail);
};