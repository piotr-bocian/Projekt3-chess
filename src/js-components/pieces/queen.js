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
        // this.symbol = `../../../static/assets/${this.color}Queen.png`;
        //this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        //tutaj trzymamy historię;
    }
    queenMove() {
        throw new Error("Method not implemented.");
    }
    showPossibleMoves() {
        const allPossibleMoves = [];
        this.collectAllPossibleMoves().forEach(id => {
            allPossibleMoves.push(id);
        });
        return allPossibleMoves;
    }
    move() {
        this.removeClassActive();
        const movesShow = (id) => {
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
            movesPossibilities.forEach(el => {
                el.classList.add('active');
            });
        };
        //dodaje klase active na legalne ruchy
        this.showPossibleMoves().forEach(id => {
            movesShow(id);
        });
        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (!(square).classList.contains('pieceInside') && (square).classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                }
            });
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
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${this.positionX}-${i}`);
                        return;
                    }
                }
                else {
                    moves.push(`${this.positionX}-${i}`);
                }
            }
        };
        const moveDown = () => {
            for (let j = this.positionY - 1; j > 0; j--) {
                const doc = document.getElementById(`${this.positionX}-${j}`);
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${this.positionX}-${j}`);
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
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[i]}-${this.positionY}`);
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
                if (checker) {
                    if (!colorCheck) {
                        moves.push(`${board_1.ID[i]}-${this.positionY}`);
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
            if (9 - coordinateX < 9 - this.positionY) {
                for (let i = 1; i < 9 - coordinateX; i++) {
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
            }
            else {
                for (let i = 1; i < 9 - this.positionY; i++) {
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
            }
            // down left
            if (this.positionY - 1 < coordinateX - 1) {
                for (let i = 1; i < this.positionY; i++) {
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
            }
            else {
                for (let i = 1; i < coordinateX; i++) {
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
            }
            // top left
            if (coordinateX < 9 - this.positionY) {
                for (let i = 1; i < coordinateX; i++) {
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
            }
            else {
                for (let i = 1; i < 9 - this.positionY; i++) {
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
            }
            // down right
            if (this.positionY < 9 - coordinateX) {
                for (let i = 1; i < this.positionY; i++) {
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
            }
            else {
                for (let i = 1; i < 9 - coordinateX; i++) {
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
            }
        };
        diagonalMoves();
        moveUp();
        moveDown();
        moveLeft();
        moveRight();
        return moves;
    }
    removeClassActive() {
        let elems = [...document.querySelectorAll('.active')];
        for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('active');
        }
    }
}
exports.Queen = Queen;
