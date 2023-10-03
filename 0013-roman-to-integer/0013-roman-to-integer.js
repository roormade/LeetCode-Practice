/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dct = {
        M: 1000,
        D: 500,
        C: 100, 
        L: 50,
        X: 10,
        V: 5, 
        I: 1,
    }
    let ttlInt = dct[s[0]];
    for (let i = 1; i < s.length; i++) {
        if (dct[s[i]] > dct[s[i - 1]]) {
            ttlInt -= (2 * dct[s[i - 1]]);
        }
        ttlInt += dct[s[i]];
    }
    return ttlInt;
};