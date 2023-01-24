// to start the game on terminal : $node game

import { createRequire } from 'module';
import { player1Wins } from "./Player1.js";
import { player0Wins } from './Player2.js';
import { warning, instructions, enterValue, draw, startGameConst } from './Constants.js';

const require = createRequire(import.meta.url);
const prompt=require("prompt-sync")({sigint:true}); 


// change the name of this function
function creatingBoardFromUser(dimension) {
    let arr = [];
    for (let i = 0; i< dimension; i++) {
        for(let j = 0; j< dimension; j++) {
            arr[i] = [];
        }
    }
    for (let i = 0; i< dimension; i++) {
        for(let j = 0; j< dimension; j++) {
            arr[i][j] = '.';
        }
    }
    return arr;
}

let dimension = prompt("What dimension of tic-tac-toe would you like to play today? ");
let ticTacToe = creatingBoardFromUser(dimension);

function checkIfAnyBoxIsEmpty(ticTacToe, dimension) {
    for (let i=0; i<dimension; i++) {
        for (let j=0; j<dimension; j++) {
            if (ticTacToe[i][j]=='.') return true;
        }
    }
    return false;
}

function showTicTacToeBoard(ticTacToe, dimension) {
    for (let i=0; i<dimension; i++) {
        console.log(ticTacToe[i]);
    }
}


function startGame(ticTacToe, dimension) {
    for (let i=0; i<(5*dimension); i++) {

        // this is the user whose input is 1 only
        console.log(instructions);
        let newInput1 = prompt("Input from player 1 (Your input is '1') : ");
        let splitInput1 = newInput1.split(" ");
        while (splitInput1[0]<0 || splitInput1[0]>dimension || splitInput1[1]<0 || splitInput1[1]>dimension || ticTacToe[splitInput1[0]][splitInput1[1]]!='.') {
            console.log(warning);
            let inp = prompt(enterValue);
            let inptmp = inp.split(" ");
            splitInput1 = inptmp;
        }
        ticTacToe[splitInput1[0]][splitInput1[1]] = '1';
        showTicTacToeBoard(ticTacToe, dimension);
        if (checkIfAnyBoxIsEmpty(ticTacToe, dimension)==false && (player0Wins(ticTacToe, dimension)==false && player1Wins(ticTacToe, dimension)==false)) {
            console.log(draw); return;
        }
        else {
            if (player1Wins(ticTacToe, dimension)) {
                console.log("Player 1 is the winner");
                return;
            }
        }

        // this is the user whose input is 0 only
        let newInput2 = prompt("Input from player 2 (Your input is '0') : ");
        let splitInput2 = newInput2.split(" ");
        while (splitInput2[0]<0 || splitInput2[1]>dimension || splitInput2[1]<0 || splitInput2[1]>dimension || ticTacToe[splitInput2[0]][splitInput2[1]]!='.') {
            console.log(warning);
            let inp = prompt(enterValue);
            let inptmp = inp.split(" ");
            splitInput2 = inptmp;
        }
        ticTacToe[splitInput2[0]][splitInput2[1]] = '0';
        showTicTacToeBoard(ticTacToe, dimension);
        if (checkIfAnyBoxIsEmpty(ticTacToe, dimension)==false && (player0Wins(ticTacToe, dimension)==false && player1Wins(ticTacToe, dimension)==false)) {
            console.log(draw); return;
        }
        else {
            if (player0Wins(ticTacToe, dimension)) {
                console.log("Player 2 is the winner!");
                return;
            }
        }
    }
}

console.log(startGameConst);
console.log("Here is your board : ");
showTicTacToeBoard(ticTacToe, dimension);
startGame(ticTacToe, dimension);