/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro = 0;
    for (let i = 0; i < prices.length; i++) {
        const currPro = prices[i] - prices[i - 1];
        if (currPro > 0) {
            maxPro += currPro;
        }
    }
    return maxPro;
};