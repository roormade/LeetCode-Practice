/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const objS = {};
    const objT = {};
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (!objS.hasOwnProperty(charS)) {
            objS[charS] = charT;
        } else {
            if (objS[charS] !== charT) return false;
        }
        
        if (!objT.hasOwnProperty(charT)) {
            objT[charT] = charS;
        } else {
            if (objT[charT] !== charS) return false;
        }
    }
    
    return true;
};