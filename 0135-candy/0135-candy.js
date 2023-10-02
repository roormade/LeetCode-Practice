/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const lng = ratings.length;
    const alCnd = new Array(lng).fill(1);
    for (let i = 1; i < lng; i++) {
        if (ratings[i] > ratings[i - 1]) {
            alCnd[i] = alCnd[i - 1] + 1;
        }
    }
    for (let i = lng - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            alCnd[i] = Math.max(alCnd[i], alCnd[i + 1] + 1);
        }
    }
    console.log(alCnd);
    return alCnd.reduce((a, b) => a + b);
};