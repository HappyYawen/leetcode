/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 每个节点都找一遍
 * 从四个方向进行深度遍历
 */
var exist = function(board, word) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++ ) {
            if(dfs(board, word, i, j, 0)) {
                return true
            }
        }
    }
    return false
};
dfs = (board, word, i, j, k) => {
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[k]) {
        return false
    }   
    if(k === word.length - 1) return true;
    board[i][j] = '.'
    let res = dfs(board, word, i+1, j, k+1) || 
            dfs(board, word, i-1, j, k+1) || 
            dfs(board, word, i, j+1, k+1) || 
            dfs(board, word, i, j-1, k+1)
    board[i][j] = word[k]  
    return res      
}