/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dct = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
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