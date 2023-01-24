function player1Wins(ticTacToe, dimension) {
    for (let i=0; i<dimension; i++) {
        let cnt = 0;
        for (let j=0; j<dimension; j++) {
            if (ticTacToe[i][j]=='1') {
                cnt++;
            }
        }
        if (cnt==dimension) return true;
    }
    for (let i=0; i<dimension; i++) {
        let cnt = 0;
        for (let j=0; j<dimension; j++) {
            if (ticTacToe[j][i]=='1') {
                cnt++;
            }
        }
        if (cnt==dimension) return true;
    }

    let countOf1inDiagonal1=0, countOf1inDiagonal2=0;
    for (let i=0; i<dimension; i++) {
        for (let j=0; j<dimension; j++) {
            if (i+j==dimension && ticTacToe[i][j]=='1') {
                countOf1inDiagonal2++;
            }
            if (i==j && ticTacToe[i][j]=='1') {
                countOf1inDiagonal1++;
            }
        }
    }
    if (countOf1inDiagonal1==dimension || countOf1inDiagonal2==dimension) return true; 
    return false;
}

export {player1Wins};