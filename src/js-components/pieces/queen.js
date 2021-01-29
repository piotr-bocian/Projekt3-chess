"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
const piece_1 = require("./piece");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        // this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const movesArr = this.collectAllPossibleMoves();
        const queen = document.querySelector('.white-queen');
        const movesShow = (id) => {
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
            movesPossibilities.forEach(el => {
                // console.log(parseInt(el.id.charAt(2), 32), parseInt(id.charAt(2), 32));
                console.log(!el.innerHTML.match(/white/));
                if (el.innerHTML.match(/white/) && el.id.charAt(2) < id.charAt(2))
                    return;
                el.classList.add('active');
            });
        };
        queen.addEventListener('click', () => {
            movesArr.forEach(id => {
                movesShow(id);
                this.queenMove();
            });
        });
    }
    queenMove() {
        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (!((square).classList.contains('pieceInside')) && (square).classList.contains('active')) {
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    squares.forEach(square => {
                        (square).classList.remove('active');
                    });
                }
            });
        });
    }
    collectAllPossibleMoves() {
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd
        const moves = [];
        const upDown = () => {
            for (let i = 1; i < 9; i++) {
                if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${this.positionX}-${i}`);
            }
        };
        const leftRight = () => {
            for (let i = 1; i < 9; i++) {
                if (`${board_1.ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${board_1.ID[i]}-${this.positionY}`);
            }
        };
        const diagonal = () => {
            const regexLetters = /[A-H]+/;
            const regexNumbers = /[1-8]+/;
            for (let i = 1; i <= 8; i++) {
                //x+1,y+1
                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexNumbers) &&
                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexLetters)) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
                }
                // x-1,y-1
                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexNumbers) &&
                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexLetters)) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);
                }
                //x+1,y-1
                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexNumbers) &&
                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexLetters)) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
                }
                //x-1,y+1
                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexNumbers) &&
                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexLetters)) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
                }
            }
        };
        diagonal();
        upDown();
        leftRight();
        return moves;
    }
}
exports.Queen = Queen;
