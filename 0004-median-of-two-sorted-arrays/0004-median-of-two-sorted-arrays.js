/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const srtd = [...nums1, ...nums2].sort((a, b) => a - b);
    const lng = srtd.length;
    if (lng % 2 === 0) {
        const nHi = lng/2;
        const nLo = nHi - 1;
        return (srtd[nHi] + srtd[nLo]) / 2;
    } else {
        return srtd[Math.floor(lng / 2)];
    }
};