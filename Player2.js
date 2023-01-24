function player0Wins(ticTacToe, dimension) {
    // columns
    for (let i=0; i<dimension; i++) {
        let cnt = 0;
        for (let j=0; j<dimension; j++) {
            if (ticTacToe[i][j]=='0') {
                cnt++;
            }
        }
        if (cnt==dimension) return true;
    }
    for (let i=0; i<dimension; i++) {
        let cnt = 0;
        for (let j=0; j<dimension; j++) {
            if (ticTacToe[j][i]=='0') {
                cnt++;
            }
        }
        if (cnt==dimension) return true;
    }

    let countOf0inDiagonal1=0, countOf0inDiagonal2=0;
    for (let i=0; i<dimension; i++) {
        for (let j=0; j<dimension; j++) {
            if (i+j==dimension && ticTacToe[i][j]=='0') {
                countOf0inDiagonal2++;
            }
            if (i==j && ticTacToe[i][j]=='0') {
                countOf0inDiagonal1++;
            }
        }
    }
    if (countOf0inDiagonal1==dimension || countOf0inDiagonal2==dimension) return true; 
    return false;
}

export {player0Wins};