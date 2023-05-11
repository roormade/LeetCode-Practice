/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let cow = 0;
  nums.forEach((n) => {
    if (n.toString().split('').length % 2 === 0) {
      cow++;
    }
  })
  return cow;
};