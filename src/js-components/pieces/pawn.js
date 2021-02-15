"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
const queen_1 = require("./queen");
const knight_1 = require("./knight");
const rook_1 = require("./rook");
const bishop_1 = require("./bishop");
const addMoveHistory_1 = require("../addMoveHistory");
const translateFunc_1 = require("../translateFunc");
const endGameCases_1 = require("../endGameCases");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/${this.color}Pawn.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //this.removeClassActive();
        let posXAttack1 = this.nextChar(this.positionX);
        let posXAttack2 = this.previousChar(this.positionX);
        let possibleMovesIds = [];
        let possibleAttackMovesIds = [];
        let possibleEnPassant = [];
        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`);
            let positionY3 = this.positionY + 2;
            let positionY4 = document.getElementById(`${this.positionX}-${positionY3}`);
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
            if (this.positionY === 2 && !(positionY2.matches('.pieceInside')) && !(positionY4.matches('.pieceInside'))) {
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
            let positionY3 = this.positionY - 2;
            let positionY4 = document.getElementById(`${this.positionX}-${positionY3}`);
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
            if (this.positionY === 7 && !(positionY2.matches('.pieceInside')) && !(positionY4.matches('.pieceInside'))) {
                for (let i = 6; i > 4; i--) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            }
            else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }
        }
        let allPossibleMovesIds = possibleMovesIds.concat(possibleAttackMovesIds).concat(possibleEnPassant);
        return allPossibleMovesIds;
    }
    getAttacks() {
        const attacksArr = [];
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX = arrayOfX.indexOf(this.getPositionX());
        if (this.color === 'white') {
            const upLeft = document.querySelector(`#${arrayOfX[indexOfX - 1]}-${this.positionY + 1}`);
            const upRight = document.querySelector(`#${arrayOfX[indexOfX + 1]}-${this.positionY + 1}`);
            if (upLeft !== null)
                attacksArr.push(`${arrayOfX[indexOfX - 1]}-${this.positionY + 1}`);
            if (upRight !== null)
                attacksArr.push(`${arrayOfX[indexOfX + 1]}-${this.positionY + 1}`);
        }
        else {
            const downLeft = document.querySelector(`#${arrayOfX[indexOfX - 1]}-${this.positionY - 1}`);
            const downRight = document.querySelector(`#${arrayOfX[indexOfX + 1]}-${this.positionY - 1}`);
            if (downLeft !== null)
                attacksArr.push(`${arrayOfX[indexOfX - 1]}-${this.positionY - 1}`);
            if (downRight !== null)
                attacksArr.push(`${arrayOfX[indexOfX + 1]}-${this.positionY - 1}`);
        }
        return attacksArr;
    }
    move() {
        this.removeClassActive();
        const showEnPassant = this.enPassant();
        let possibilities = this.showPossibleMoves();
        possibilities = this.defendKing(possibilities);
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`).classList.add('active');
        });
        showEnPassant.forEach((id) => {
            document.querySelector(`#${id}`).classList.add('active');
            document.querySelector(`#${id}`).classList.add('en-pass');
        });
        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                const enPass1 = document.getElementById(`${coorX}-${(coorY - 1)}`);
                const enPass2 = document.getElementById(`${coorX}-${(coorY + 1)}`);
                if (possMove.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    if (possMove.innerHTML != '') {
                        game_1.Game.beat(possMove);
                    }
                    if (possMove.classList.contains('en-pass')) {
                        if (this.color === 'white') {
                            game_1.Game.beat(enPass1);
                            possMove.classList.remove('en-pass');
                            enPass1.classList.remove('pieceInside');
                            //BICIE W PRZELOCIE
                        }
                        else {
                            game_1.Game.beat(enPass2);
                            possMove.classList.remove('en-pass');
                            enPass2.classList.remove('pieceInside');
                            //BICIE W PRZELOCIE
                        }
                    }
                    this.history(possMove);
                    this.historyNotation();
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                    game_1.Game.changeTimerTurn();
                    if (this.color === 'white' && this.positionY === 8 && this.parentSquare.querySelector('img').src.includes('Pawn')) {
                        game_1.Game.blackPlayerTimer.pause();
                        this.parentSquare.appendChild(this.pawnPromotion(this));
                        this.parentSquare.classList.add('promotion');
                    }
                    else if (this.positionY === 1 && this.parentSquare.querySelector('img').src.includes('Pawn')) {
                        game_1.Game.whitePlayerTimer.pause();
                        this.parentSquare.appendChild(this.pawnPromotion(this));
                        this.parentSquare.classList.add('promotion');
                    }
                    endGameCases_1.endGame(game_1.Game.player1Name, game_1.Game.player2Name);
                }
            }, { capture: true });
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
        this.removeClassActive();
        const pieces = [
            { pieceName: queen_1.Queen, name: "Queen" },
            { pieceName: rook_1.Rook, name: "Rook" },
            { pieceName: knight_1.Knight, name: "Knight" },
            { pieceName: bishop_1.Bishop, name: "Bishop" }
        ];
        const modalWindowPawn = document.createElement("div");
        if (this.color === 'white') {
            modalWindowPawn.className = "modal-window-white";
            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../../Projekt3-chess/static/assets/white${piece.name}.png`);
                const { pieceName: PieceName } = piece;
                modalWindowPawn.appendChild(selectableFigure);
                selectableFigure.addEventListener('click', () => {
                    document.querySelector(`#${pawn.getPositionX()}-8`).removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('white', `${pawn.getPositionX()}`, 8);
                    let whites = game_1.Game.getWhites();
                    whites.push(pieceToCreate);
                    this.parentSquare.classList.remove('promotion');
                    const pawnToRemove = whites.indexOf(pawn);
                    whites.splice(pawnToRemove, 1);
                    game_1.Game.changeTurn();
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory(`Pawn promotion to ${pieceToCreate.constructor.name}`, '');
                    }
                    else {
                        addMoveHistory_1.addMoveHistory(`Promocja piona na ${translateFunc_1.getName(pieceToCreate.constructor.name)}`, '');
                    }
                    ;
                    game_1.Game.blackPlayerTimer.start();
                });
            }
        }
        else {
            modalWindowPawn.className = "modal-window-black";
            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../static/assets/black${piece.name}.png`);
                selectableFigure.style.height = '80px';
                const { pieceName: PieceName } = piece;
                modalWindowPawn.appendChild(selectableFigure);
                selectableFigure.addEventListener('click', () => {
                    document.querySelector(`#${pawn.getPositionX()}-1`).removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('black', `${pawn.getPositionX()}`, 1);
                    let blacks = game_1.Game.getBlacks();
                    blacks.push(pieceToCreate);
                    this.parentSquare.classList.remove('promotion');
                    const pawnToRemove = blacks.indexOf(pawn);
                    blacks.splice(pawnToRemove, 1);
                    game_1.Game.changeTurn();
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory(`Pawn promotion to ${pieceToCreate.constructor.name}`, '');
                    }
                    else {
                        addMoveHistory_1.addMoveHistory(`Promocja piona na ${translateFunc_1.getName(pieceToCreate.constructor.name)}`, '');
                    }
                    game_1.Game.whitePlayerTimer.start();
                });
            }
        }
        return modalWindowPawn;
    }
    ;
    //en passant
    enPassant() {
        let pawnPosX1 = this.nextChar(this.positionX);
        let pawnPos1 = document.getElementById(`${pawnPosX1}-${this.positionY}`);
        let pawnPosX2 = this.previousChar(this.positionX);
        let pawnPos2 = document.getElementById(`${pawnPosX2}-${this.positionY}`);
        let positionY1 = this.positionY + 1;
        let positionY2 = this.positionY - 1;
        const enPassant = [];
        const lastMoveArray = piece_1.Piece.movesHistory.slice();
        const lastMovePawn = lastMoveArray.pop();
        if (lastMovePawn) {
            const differenceY = Math.abs(parseInt(lastMovePawn[1]) - parseInt(lastMovePawn[3]));
            const lastX = lastMovePawn[0];
            if (pawnPos1 !== null && pawnPos2 !== null) {
                if (this.color === 'white'
                    && this.positionY === 5
                    && (pawnPos1.querySelector('img')?.src.includes('Pawn') || pawnPos2.querySelector('img')?.src.includes('Pawn'))
                    && differenceY === 2) {
                    if (pawnPos1.querySelector('img')?.src.includes('Pawn') && lastX === pawnPosX1) {
                        enPassant.push(`${pawnPosX1}-${positionY1}`);
                    }
                    else if (pawnPos2.querySelector('img')?.src.includes('Pawn')) {
                        enPassant.push(`${pawnPosX2}-${positionY1}`);
                    }
                }
            }
            if (pawnPos1 !== null && pawnPos2 !== null) {
                if (this.color === 'black'
                    && this.positionY === 4
                    && (pawnPos1.querySelector('img')?.src.includes('Pawn') || pawnPos2.querySelector('img')?.src.includes('Pawn'))
                    && differenceY === 2) {
                    if (pawnPos1.querySelector('img')?.src.includes('Pawn') && lastX === pawnPosX1) {
                        enPassant.push(`${pawnPosX1}-${positionY2}`);
                    }
                    else {
                        enPassant.push(`${pawnPosX2}-${positionY2}`);
                    }
                }
            }
        }
        return enPassant;
    }
}
exports.Pawn = Pawn;
