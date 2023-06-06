/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const leng = customers.length;
    let cMax = 0;
    let cEx = 0;
    for (let i = 0; i < leng; i++) {
        if (grumpy[i] === 0) {
            cMax += customers[i];
            customers[i] = 0;
        }
    }
    
    let wStart = 0;
    let wEnd = 0;
    let curr = 0;
    while (wEnd < leng) {
        curr += customers[wEnd];
        if (wEnd - wStart >= minutes) {
            curr -= customers[wStart];
            wStart++;
        }        
        cEx = Math.max(cEx, curr);
        wEnd++;
    }
    return cMax + cEx;
};