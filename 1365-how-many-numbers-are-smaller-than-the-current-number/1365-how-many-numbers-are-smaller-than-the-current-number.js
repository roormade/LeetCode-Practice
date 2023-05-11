/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const res = [];
  nums.forEach((n, ind) => {
    const filt = nums.filter(numb => numb !== n);
    let cow = 0;
    filt.forEach(numb => {
      if (n > numb) {
        cow++;
      }
    });
    res.push(cow);
  });
  return res;
};