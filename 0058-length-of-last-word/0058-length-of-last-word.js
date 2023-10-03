/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ').filter((w) => w !== '');
    const lst = arr[arr.length - 1];
    return lst.length;
};