/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const leng = matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        const n = leng - 1 - i;
        for (let j = i; j < n; j++) {
            const shifted = j - i;
            const top = matrix[i][j];
            matrix[i][j] = matrix[n - shifted][i];
            matrix[n - shifted][i] = matrix[n][n - shifted];
            matrix[n][n - shifted] = matrix[j][n];
            matrix[j][n] = top;
        }
    }
    return matrix;
};