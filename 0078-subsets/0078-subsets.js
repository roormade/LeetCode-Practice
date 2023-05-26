/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return nums.reduce((p, c) => p.concat(p.map(k => k.concat(c))), [[]])
};