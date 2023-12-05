/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let mx = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        const h = Math.min(height[i], height[j]);
        const wtr = Math.min(height[i], height[j]) * (j - i);
        mx = Math.max(mx, wtr);

       height[i] < height[j] ? i++ : j--;
    }
    return mx;
};