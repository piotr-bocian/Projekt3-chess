"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
const knight_1 = require("./knight");
const rook_1 = require("./rook");
const bishop_1 = require("./bishop");
class King extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury
        this.dangerZones = this.getDangerZones();
        this.checked = this.isChecked();
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const possibleMoves = [];
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX = arrayOfX.indexOf(this.getPositionX());
        this.dangerZones = this.getDangerZones();
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const square = document.querySelector(`#${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                if (square != null && square.innerHTML == "" && this.dangerZones.indexOf(`${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`) === -1)
                    possibleMoves.push(`${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
            }
        }
        return possibleMoves;
    }
    move() {
        this.removeClassActive();
        const possibleMovesArr = this.showPossibleMoves();
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                }
            });
        });
    }
    isChecked() {
        if (this.getDangerZones().indexOf(`${this.positionX}-${this.positionY}`) !== -1) {
            return true;
        }
        else
            return false;
    }
    getDangerZones() {
        const dangerArr = [];
        if (this.color === 'white') {
            for (let p of game_1.Game.getBlacks()) {
                if (p instanceof knight_1.Knight || p instanceof rook_1.Rook || p instanceof bishop_1.Bishop) {
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    });
                }
            }
        }
        else {
            for (let p of game_1.Game.getWhites()) {
                if (p instanceof knight_1.Knight || p instanceof rook_1.Rook || p instanceof bishop_1.Bishop) {
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    });
                }
            }
        }
        return dangerArr;
    }
}
exports.King = King;
