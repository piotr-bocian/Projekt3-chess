import {King} from "./pieces/king";
import {Queen} from "./pieces/queen";
import {Bishop} from "./pieces/bishop";
import {Knight} from "./pieces/knight";
import {Rook} from "./pieces/rook";
import {Pawn} from "./pieces/pawn";
import {ID} from './board';

const fillBoard = (): void => {
    //whites
    const kingWhite = new King('white', `${ID[5]}`, 1);
    const queenWhite = new Queen('white', `${ID[4]}`, 1);

    for(let i = 3; i <= 6; i+=3) {
        const bishopWhite = new Bishop('white', `${ID[i]}`, 1);
    }

    for(let i = 2; i <= 7; i+=5) {
        const knightWhite = new Knight('white', `${ID[i]}`, 1);
    }

    for(let i = 1; i <= 8; i+=7) {
        const rookWhite = new Rook('white', `${ID[i]}`, 1);
    }

    for(let i = 1; i <= 8; i++) {
        const pawnWhite = new Pawn('white', `${ID[i]}`, 2);
    }

    //blacks
    const kingBlack = new King('white', `${ID[5]}`, 8);
    const queenBlack = new Queen('white', `${ID[4]}`, 8);

    for(let i = 3; i <= 6; i+=3) {
        const bishopBlack = new Bishop('white', `${ID[i]}`, 8);
    }

    for(let i = 2; i <= 7; i+=5) {
        const knightBlack = new Knight('white', `${ID[i]}`, 8);
    }

    for(let i = 1; i <= 8; i+=7) {
        const rookBlack = new Rook('white', `${ID[i]}`, 8);
    }

    for(let i = 1; i <= 8; i++) {
        const pawnBlack = new Pawn('white', `${ID[i]}`, 7);
    }
};

export {fillBoard};