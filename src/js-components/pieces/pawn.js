"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
const queen_1 = require("./queen");
const knight_1 = require("./knight");
const rook_1 = require("./rook");
const bishop_1 = require("./bishop");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        this.removeClassActive();
        let posXAttack1 = this.nextChar(this.positionX);
        let posXAttack2 = this.previousChar(this.positionX);
        let possibleMovesIds = [];
        let possibleAttackMovesIds = [];
        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`);
            let attack1 = document.getElementById(`${posXAttack1}-${positionY1}`);
            let attack2 = document.getElementById(`${posXAttack2}-${positionY1}`);
            // ATTACK
            if (attack1 !== null) {
                if (attack1.classList.contains('pieceInside') && !(attack1.querySelector('img').classList.contains(`${this.color}`))) {
                    possibleAttackMovesIds.push(`${posXAttack1}-${positionY1}`);
                }
            }
            if (attack2 !== null) {
                if (attack2.classList.contains('pieceInside') && !(attack2.querySelector('img').classList.contains(`${this.color}`))) {
                    possibleAttackMovesIds.push(`${posXAttack2}-${positionY1}`);
                }
            }
            // MOVES
            if (this.positionY === 2 && !(positionY2.matches('.pieceInside'))) {
                for (let i = 3; i < 5; i++) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            }
            else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }
        }
        else {
            let positionY1 = this.positionY - 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`);
            let attack1 = document.getElementById(`${posXAttack1}-${positionY1}`);
            let attack2 = document.getElementById(`${posXAttack2}-${positionY1}`);
            // ATTACK
            if (attack1 !== null) {
                if (attack1.classList.contains('pieceInside')) {
                    possibleAttackMovesIds.push(`${posXAttack1}-${positionY1}`);
                }
            }
            if (attack2 !== null) {
                if (attack2.classList.contains('pieceInside')) {
                    possibleAttackMovesIds.push(`${posXAttack2}-${positionY1}`);
                }
            }
            // MOVES
            if (this.positionY === 7 && !(positionY2.matches('.pieceInside'))) {
                for (let i = 6; i > 4; i--) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            }
            else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }
        }
        let allPossibleMovesIds = possibleMovesIds.concat(possibleAttackMovesIds);
        return allPossibleMovesIds;
    }
    move() {
        const possibilities = this.showPossibleMoves();
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`).classList.add('active');
        });
        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if (possMove.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                }
                if (this.color === 'white' && coorY === 8 && this.parentSquare.querySelector('img').src.includes('Pawn')) {
                    this.parentSquare.appendChild(this.pawnPromotion(this));
                }
                else if (coorY === 1 && this.parentSquare.querySelector('img').src.includes('Pawn')) {
                    this.parentSquare.appendChild(this.pawnPromotion(this));
                }
            });
        });
    }
    nextChar(posXRight) {
        return String.fromCharCode(posXRight.charCodeAt(0) + 1);
    }
    previousChar(posXRight) {
        return String.fromCharCode(posXRight.charCodeAt(0) - 1);
    }
    // promotion
    pawnPromotion(pawn) {
        const pieces = [
            { pieceName: queen_1.Queen, name: "Queen", handler: '' },
            { pieceName: rook_1.Rook, name: "Rook", handler: '' },
            { pieceName: knight_1.Knight, name: "Knight", handler: '' },
            { pieceName: bishop_1.Bishop, name: "Bishop", handler: '' }
        ];
        const modalWindowPawn = document.createElement("div");
        const promotionArray = ['Knight', 'Queen', 'Bishop', 'Rook'];
        const parentSquare = document.getElementById(`${pawn.getPositionX}`);
        if (this.color === 'white') {
            modalWindowPawn.className = "modal-window-white";
            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../static/assets/white${piece.name}.png`);
                selectableFigure.style.height = '90px';
                const { handler, pieceName: PieceName } = piece;
                modalWindowPawn.appendChild(selectableFigure);
                selectableFigure.addEventListener('click', () => {
                    console.log(`#${pawn.getPositionX()}-8`);
                    document.querySelector(`#${pawn.getPositionX()}-8`).removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('white', `${pawn.getPositionX()}`, 8);
                    let whites = game_1.Game.getWhites();
                    whites.push(pieceToCreate);
                    const pawnToRemove = whites.indexOf(pawn);
                    whites.splice(pawnToRemove, 1);
                });
            }
        }
        else {
            modalWindowPawn.className = "modal-window-black";
            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../static/assets/black${piece.name}.png`);
                selectableFigure.style.height = '90px';
                const { handler, pieceName: PieceName } = piece;
                modalWindowPawn.appendChild(selectableFigure);
                selectableFigure.addEventListener('click', () => {
                    console.log(`#${pawn.getPositionX()}-1`);
                    document.querySelector(`#${pawn.getPositionX()}-1`).removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('black', `${pawn.getPositionX()}`, 1);
                    let blacks = game_1.Game.getBlacks();
                    blacks.push(pieceToCreate);
                    const pawnToRemove = blacks.indexOf(pawn);
                    blacks.splice(pawnToRemove, 1);
                });
            }
        }
        return modalWindowPawn;
    }
    ;
}
exports.Pawn = Pawn;
