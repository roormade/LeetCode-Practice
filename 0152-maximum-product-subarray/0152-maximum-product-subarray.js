/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prStart = nums[0];
    let prEnd = nums[0];
    let maxPr = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = prEnd;
            prEnd = prStart;
            prStart = temp;
        }
        prEnd = Math.max(nums[i], nums[i] * prEnd);
        prStart = Math.min(nums[i], nums[i] * prStart);
        maxPr = Math.max(maxPr, prEnd);
    }
    return maxPr;
};