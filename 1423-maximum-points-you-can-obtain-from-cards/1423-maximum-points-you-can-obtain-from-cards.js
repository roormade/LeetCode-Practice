/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const leng = cardPoints.length;
    const w = leng - k;
    let wSum = 0;
    let mSum = Infinity;
    let tSum = 0;
    
    for (let i = 0; i < leng; i++) {
        tSum += cardPoints[i];
        wSum += cardPoints[i];
        
        if (i >= w - 1) {
            if (i >= w) {
                wSum -= cardPoints[i - w];
            }
            mSum = Math.min(mSum, wSum);
        }
    }
    
    return tSum - (mSum === Infinity ? 0 : mSum);
};