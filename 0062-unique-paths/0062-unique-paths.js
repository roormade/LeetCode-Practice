/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const board = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        board[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        board[0][j] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1];
        }
    }
    
    return board[m - 1][n - 1];
};