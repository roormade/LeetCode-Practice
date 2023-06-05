/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();
    
    matrix.forEach((m, i) => m.forEach((n, j) => {
        if (n === 0) {
            rows.add(i);
            cols.add(j);
        }
    }));
    
    matrix.forEach((m, i) => m.forEach((n, j) => {
        if (rows.has(i) || cols.has(j)) {
            matrix[i][j] = 0;
        }
    }));
};