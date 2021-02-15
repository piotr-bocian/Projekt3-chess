"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
const pawn_1 = require("./pawn");
class King extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.hasMoved = false;
        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const possibleMoves = [];
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX = arrayOfX.indexOf(this.getPositionX());
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const square = document.querySelector(`#${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                if (square !== null) {
                    if (square.innerHTML === '')
                        possibleMoves.push(`${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                    else if (!square.querySelector('img').classList.contains(this.color))
                        possibleMoves.push(`${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                }
            }
        }
        return possibleMoves;
    }
    move() {
        this.removeClassActive();
        const possibleMovesArr = this.showPossibleMoves();
        const dangerZones = this.getDangerZones();
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            if (dangerZones.indexOf(`${square.id.charAt(0)}-${parseInt(square.id.charAt(2))}`) !== -1) {
                return;
            }
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        game_1.Game.beat(square);
                    }
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
                }
            }, { capture: true });
        });
    }
    isChecked() {
        if (this.getDangerZones().indexOf(`${this.positionX}-${this.positionY}`) !== -1) {
            return true;
        }
        else
            return false;
    }
    isCheckmated() {
        const possibleMovesArr = this.showPossibleMoves().filter(id => {
            const dangerArr = this.getDangerZones();
            return (dangerArr.indexOf(id) === -1);
        });
        return (this.isChecked() && possibleMovesArr.length === 0);
    }
    getDangerZones() {
        const dangerArr = [];
        if (this.color === 'white') {
            for (let p of game_1.Game.getBlacks()) {
                if (!(p instanceof pawn_1.Pawn)) {
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    });
                }
                else {
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => dangerArr.push(attack));
                }
            }
        }
        else {
            for (let p of game_1.Game.getWhites()) {
                if (!(p instanceof pawn_1.Pawn)) {
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    });
                }
                else {
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => dangerArr.push(attack));
                }
            }
        }
        return dangerArr;
    }
}
exports.King = King;
