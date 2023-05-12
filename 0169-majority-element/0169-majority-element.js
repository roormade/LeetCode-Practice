/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let res = 1;
  const target = nums.length / 2;
  const counter = {};
  nums.forEach(n => {
    if (counter[n]) {
      counter[n]++;
      if (counter[n] > target) {
        res = n;
        // return res;
      }
    } else {
      counter[n] = 1;
    }
  })
  return res;
};