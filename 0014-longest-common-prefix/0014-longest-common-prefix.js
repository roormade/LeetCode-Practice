/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let cmmn = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(cmmn) !== 0) {
            cmmn = cmmn.slice(0, -1);
        }
    }
    return cmmn;
};