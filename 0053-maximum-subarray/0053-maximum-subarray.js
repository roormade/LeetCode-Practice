/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let mxInd = nums[0];
    let mxSm = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        mxInd = Math.max(nums[i], mxInd + nums[i]);
        mxSm = Math.max(mxSm, mxInd);
    }
    return mxSm;
};