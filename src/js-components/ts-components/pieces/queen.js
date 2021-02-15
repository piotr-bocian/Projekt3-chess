"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
const piece_1 = require("./piece");
const game_1 = require("../game");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const allPossibleMoves = [];
        this.collectAllPossibleMoves().forEach(id => {
            allPossibleMoves.push(id);
        });
        console.log(allPossibleMoves);
        return allPossibleMoves;
    }
    move() {
        // const movesShow:MovesShow =(id:string)=>{
        //     const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
        //         movesPossibilities.forEach(el=>{
        //                 el.classList.add('active');
        //         })
        //  }
        this.showPossibleMoves().forEach(id => {
            document.querySelector(`#${id}`).classList.add('active');
            // movesShow(id)
        });
        const squares = [...document.querySelectorAll('.active')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if ((square).classList.contains('active')
                    && (game_1.Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        game_1.Game.beat(square);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square);
                    //PL
                    const lang = document.documentElement.lang;
                    if (lang === 'pl') { //zmieniłem tu kolory na white i black jak zmieniały się klasy w DOM to biecie źle działało dla królowej.
                        (this.color === 'white' || this.color === 'Biały') ? this.color = 'white' : this.color = 'black';
                        this.historyNotation('poruszył/a się z pola', 'na pole', 'Królowa');
                    }
                    else {
                        this.color = this.color;
                        this.historyNotation();
                    }
                    //
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                }
            }, { capture: true });
        });
    }
    collectAllPossibleMoves() {
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const moves = [];
        const moveUp = () => {
            for (let i = this.positionY + 1; i < 9; i++) {
                const doc = document.getElementById(`${this.positionX}-${i}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
                // if(checker) return; <- z tego powodu nie dochodziło do sprawdzania koloru
                // to samo zrobiłem dla down, left i right
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${this.positionX}-${i}`);
                        return;
                    }
                    else {
                        return; //dlatego przeniosłem to tutaj, dzięki temu działa bicie
                    }
                }
                else {
                    moves.push(`${this.positionX}-${i}`);
                    // return;
                }
            }
        };
        const moveDown = () => {
            for (let j = this.positionY - 1; j > 0; j--) {
                const doc = document.getElementById(`${this.positionX}-${j}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
                // if(checker) return;
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${this.positionX}-${j}`);
                        return;
                    }
                    else {
                        return;
                    }
                }
                else {
                    moves.push(`${this.positionX}-${j}`);
                }
            }
        };
        const moveRight = () => {
            for (let i = coordinateX + 1; i < 9; i++) {
                const doc = document.getElementById(`${board_1.ID[i]}-${this.positionY}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
                // if(checker) return;
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[i]}-${this.positionY}`);
                        return;
                    }
                    else {
                        return;
                    }
                }
                else {
                    moves.push(`${board_1.ID[i]}-${this.positionY}`);
                }
            }
        };
        const moveLeft = () => {
            for (let i = coordinateX - 1; i > 0; i--) {
                const doc = document.getElementById(`${board_1.ID[i]}-${this.positionY}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
                // if(checker) return;
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[i]}-${this.positionY}`);
                        return;
                    }
                    else {
                        return;
                    }
                }
                else {
                    moves.push(`${board_1.ID[i]}-${this.positionY}`);
                }
            }
        };
        const diagonalMoves = () => {
            // top right
            let position;
            if (9 - coordinateX < 9 - this.positionY) {
                position = 9 - coordinateX;
            }
            else {
                position = 9 - this.positionY;
            }
            for (let i = 1; i < position; i++) {
                const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);
                    }
                    break;
                }
                else {
                    moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);
                }
            }
            // down left
            if (this.positionY - 1 < coordinateX - 1) {
                position = this.positionY;
            }
            else {
                position = coordinateX;
            }
            for (let i = 1; i < position; i++) {
                const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);
                    }
                    break;
                }
                else {
                    moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);
                }
            }
            // top left
            if (coordinateX < 9 - this.positionY) {
                position = coordinateX;
            }
            else {
                position = 9 - this.positionY;
            }
            for (let i = 1; i < position; i++) {
                const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);
                    }
                    break;
                }
                else {
                    moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);
                }
            }
            // down right
            if (this.positionY < 9 - coordinateX) {
                position = this.positionY;
            }
            else {
                position = 9 - coordinateX;
            }
            for (let i = 1; i < position; i++) {
                const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);
                    }
                    break;
                }
                else {
                    moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);
                }
            }
        };
        diagonalMoves();
        moveUp();
        moveDown();
        moveLeft();
        moveRight();
        return moves;
    }
}
exports.Queen = Queen;
