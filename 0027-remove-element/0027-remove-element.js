/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let k = 0;
    let valIndex = nums.findIndex((num) => num === val);
    while (valIndex >= 0) {
        // k++;
        nums.splice(valIndex, 1);
        valIndex = nums.findIndex((num) => num === val);
    }
    // return k;
    return nums.length;
};