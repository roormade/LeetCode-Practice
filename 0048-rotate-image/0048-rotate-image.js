/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const leng = matrix.length
    // for (let row = 0; row < Math.floor(leng / 2); row++) {
    //     const r1 = row;
    //     const rn = leng - 1 - row;
    //     for (let i = r1; i < rn; i++) {
    //         const offset = i - r1;
    //         const top = matrix[r1][i];
    //         matrix[r1][i] = matrix[rn - offset][r1];
    //         matrix[rn - offset][r1] = matrix[rn][rn - offset];
    //         matrix[rn][rn - offset] = matrix[i][rn];
    //         matrix[i][rn] = top;
    //     }
    // }
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
    return matrix
};