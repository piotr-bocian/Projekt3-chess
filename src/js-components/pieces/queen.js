"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
const piece_1 = require("./piece");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY, movesHistory) {
        super(color, positionX, positionY);
        this.movesHistory = movesHistory;
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        //tutaj trzymamy historię;
        this.movesHistory = [];
    }
    showPossibleMoves() {
        const possibleLegalMoves = [];
        this.collectAllPossibleMoves().forEach(id => {
            possibleLegalMoves.push(id);
        });
        console.log(possibleLegalMoves);
        return possibleLegalMoves;
    }
    move() {
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
                if (!(square).classList.contains('pieceInside') && (square).classList.contains('active')) {
                    this.history(square);
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                    this.reverseMove();
                }
            });
        });
    }
    //historia ruchów
    history(square) {
        // w szachowej notacji algebraicznej:
        // K = King	Q = Queen	R = Rook	B = Bishop	N = Knight - dlatego przy skoczku pobieramy drugą literę z nazwy konstruktora
        //jeżeli ruch pionem to podajemy tylko samo pole na które wystąpił ruch
        if (this.constructor.name === 'Pawn') {
            const actualMove = `${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;
            this.movesHistory.push(actualMove);
        }
        const constructorName = this.constructor.name === 'Knight' ? this.constructor.name[1]?.toUpperCase() : this.constructor.name[0]?.toUpperCase();
        const actualMove = `${constructorName}${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;
        this.movesHistory.push(actualMove);
        console.log(actualMove, this.movesHistory);
    }
    //prototyp cofania ruchów
    reverseMove() {
        //tablica ce wszystkimi ruchami pozostaje, działamy na kopii
        const lastMove = this.movesHistory.slice();
        const popLasMove = lastMove.pop();
        //dodanie koloru na pole z możliwym cofnięciem
        document.querySelector(`#${popLasMove[1]?.toUpperCase()}-${parseInt(popLasMove[2])}`)?.classList.add('activeReverse');
        //ustawienie
        this.setOnBoard(popLasMove[1]?.toUpperCase(), parseInt(popLasMove[2]));
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
    removeClassActive() {
        let elems = [...document.querySelectorAll('.active')];
        for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('active');
        }
    }
}
exports.Queen = Queen;
