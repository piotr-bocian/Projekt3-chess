"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
const piece_1 = require("./piece");
const game_1 = require("../game");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY, history) {
        super(color, positionX, positionY);
        this.history = history;
        //this.symbol = `../../../static/assets/${this.color}Queen.png`;
        //this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        // const movesShow:MovesShow =(id)=>{
        //     const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
        //         movesPossibilities.forEach(el=>{
        //             el.classList.toggle('active');
        //         })
        //  }
        //  this.collectAllPossibleMoves().forEach(id=>{
        //         movesShow(id)
        //         this.queenMove()
        //     })
        return [];
    }
    queenMove() {
        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (!(square).classList.contains('pieceInside') && (square).classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                }
            });
        });
    }
    collectAllPossibleMoves() {
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const moves = [];
        const moveUp = () => {
            for (let i = this.positionY + 1; i < 9; i++) {
                const checkSquare = document.querySelector(`#${this.positionX}-${i}`);
                if (checkSquare?.classList.contains('pieceInside') || checkSquare == null)
                    return;
                moves.push(`${this.positionX}-${i}`);
            }
        };
        const moveDown = () => {
            for (let j = this.positionY - 1; j > 0; j--) {
                const checkSquare = document.querySelector(`#${this.positionX}-${j}`);
                if (checkSquare?.classList.contains('pieceInside') || checkSquare === null)
                    return;
                moves.push(`${this.positionX}-${j}`);
            }
        };
        const moveRight = () => {
            for (let i = coordinateX + 1; i < 9; i++) {
                const checkSquare = document.querySelector(`#${board_1.ID[i]}-${this.positionY}`);
                if (checkSquare?.classList.contains('pieceInside') || checkSquare == null)
                    return;
                moves.push(`${board_1.ID[i]}-${this.positionY}`);
            }
        };
        const moveLeft = () => {
            for (let i = coordinateX - 1; i > 0; i--) {
                const checkSquare = document.querySelector(`#${board_1.ID[i]}-${this.positionY}`);
                if (checkSquare?.classList.contains('pieceInside') || checkSquare == null)
                    return;
                moves.push(`${board_1.ID[i]}-${this.positionY}`);
            }
        };
        const diagonalMoves = () => {
            if (this.color === 'white') {
                // top right
                if (9 - coordinateX < 9 - this.positionY) {
                    for (let i = 1; i < 9 - coordinateX; i++) {
                        if (document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`).classList.contains('pieceInside')) {
                            break;
                        }
                        else {
                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);
                        }
                    }
                }
                else {
                    for (let i = 1; i < 9 - this.positionY; i++) {
                        if (document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`).classList.contains('pieceInside')) {
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
                        if (document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`).classList.contains('pieceInside')) {
                            break;
                        }
                        else {
                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);
                        }
                    }
                }
                else {
                    for (let i = 1; i < coordinateX; i++) {
                        if (document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`).classList.contains('pieceInside')) {
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
                        if (document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`).classList.contains('pieceInside')) {
                            break;
                        }
                        else {
                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);
                        }
                    }
                }
                else {
                    for (let i = 1; i < 9 - this.positionY; i++) {
                        if (document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`).classList.contains('pieceInside')) {
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
                        if (document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`).classList.contains('pieceInside')) {
                            break;
                        }
                        else {
                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);
                        }
                    }
                }
                else {
                    for (let i = 1; i < 9 - coordinateX; i++) {
                        if (document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`).classList.contains('pieceInside')) {
                            break;
                        }
                        else {
                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);
                        }
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
    move() {
    }
}
exports.Queen = Queen;
