/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    function sorter(n1, n2) {
        return n1 - n2
    }
    nums1.splice(m, n);
    nums2.forEach((num) => {
        nums1.push(num);
    });
    nums1.sort(sorter);
};