/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPri = prices[0];
    let maxPro = 0;
    for (let i = 0; i < prices.length; i++) {
        minPri = Math.min(minPri, prices[i]);
        maxPro = Math.max(maxPro, prices[i] - minPri);
    }
    return maxPro;
};