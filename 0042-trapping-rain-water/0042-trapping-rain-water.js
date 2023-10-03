/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let trppd = 0;
    let lft = 0;
    let rt = height.length - 1;
    let lftMx = 0;
    let rtMx = 0;
    
    while (lft < rt) {
        if (height[lft] < height[rt]) {
            if (height[lft] > lftMx) {
                lftMx = height[lft];
            } else {
                trppd += lftMx - height[lft];
            }
            lft++;
        } else {
            if (height[rt] > rtMx) {
                rtMx = height[rt];
            } else {
                trppd += rtMx - height[rt];
            }
            rt--;
        }
    }
    return trppd;
};