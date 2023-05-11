/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const res = [];
  let current = 0;
  nums.forEach((n) => {
    let sum = n;
    for (let i = 0; i < current; i++){
      sum += nums[i]
    }
    res.push(sum);
    current++;
  })
  return res;
};