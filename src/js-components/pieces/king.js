"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
const pawn_1 = require("./pawn");
const rook_1 = require("./rook");
const addMoveHistory_1 = require("../addMoveHistory");
const endGameCases_1 = require("../endGameCases");
class King extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.hasMoved = false;
        this.symbol = `./../../../Projekt3-chess/static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury
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
                    else if (!square.querySelector('img').classList.contains(this.color)) {
                        possibleMoves.push(`${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                    }
                }
            }
        }
        return possibleMoves;
    }
    move() {
        this.removeClassActive();
        let possibleMovesArr = this.showPossibleMoves();
        const dangerZones = this.getDangerZones();
        possibleMovesArr = this.defendKing(possibleMovesArr);
        if (game_1.Game.isQueensideCastlingPossible())
            this.queensideCastling();
        if (game_1.Game.isKingsideCastlingPossible())
            this.kingsideCastling();
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            if (dangerZones.indexOf(`${square.id.charAt(0)}-${parseInt(square.id.charAt(2))}`) !== -1) {
                return;
            }
            // if(square!.innerHTML !== '' && !this.isPositonSafe(square!.id.charAt(0), parseInt(square!.id.charAt(2)))){
            //     return;
            // }
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        game_1.Game.beat(square);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square);
                    this.historyNotation();
                    //
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
                    game_1.Game.changeTimerTurn();
                    endGameCases_1.endGame(game_1.Game.player1Name, game_1.Game.player2Name);
                }
            }, { capture: true });
        });
    }
    queensideCastling() {
        if (this.color === 'white') {
            const position = document.querySelector('#C-1');
            position.classList.add('active');
            //console.log('nadalem klase active na skrzydle hetmanskim')
            console.log(document.querySelector('#C-1'));
            let rook;
            for (let p of game_1.Game.getWhites()) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'A' && p.getPositionY() === 1)
                    rook = p;
            }
            position.addEventListener('click', () => {
                if (game_1.Game.getLastChosen() === this) {
                    this.setOnBoard('C', 1);
                    rook.setOnBoard('D', 1);
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory('Queen side castling', this.color);
                    }
                    else {
                        addMoveHistory_1.addMoveHistory('Roszada hetmańska', 'Biały');
                    }
                    this.removeClassActive();
                    game_1.Game.changeTurn();
                    game_1.Game.changeTimerTurn();
                }
            });
        }
        else {
            const position = document.querySelector('#C-8');
            position.classList.add('active');
            let rook;
            for (let p of game_1.Game.getBlacks()) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'A' && p.getPositionY() === 8) {
                    rook = p;
                }
            }
            position.addEventListener('click', () => {
                if (game_1.Game.getLastChosen() === this) {
                    this.setOnBoard('C', 8);
                    rook.setOnBoard('D', 8);
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory('Queen side castling', this.color);
                    }
                    else {
                        addMoveHistory_1.addMoveHistory('Roszada hetmańska', 'Czarny');
                    }
                    this.removeClassActive();
                    game_1.Game.changeTurn();
                    game_1.Game.changeTimerTurn();
                }
            });
        }
    }
    kingsideCastling() {
        if (this.color === 'white') {
            const position = document.querySelector('#G-1');
            position.classList.add('active');
            //console.log('nadalem klase active na skrzydle krolweskim')
            console.log(document.querySelector('#G-1'));
            let rook;
            for (let p of game_1.Game.getWhites()) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'H' && p.getPositionY() === 1)
                    rook = p;
            }
            position.addEventListener('click', () => {
                if (game_1.Game.getLastChosen() === this) {
                    this.setOnBoard('G', 1);
                    rook.setOnBoard('F', 1);
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory('King side castling', this.color);
                    }
                    else {
                        addMoveHistory_1.addMoveHistory('Roszada na skrzydle królewskim', 'Biały');
                    }
                    this.removeClassActive();
                    game_1.Game.changeTurn();
                    game_1.Game.changeTimerTurn();
                }
            });
        }
        else {
            const position = document.querySelector('#G-8');
            position.classList.add('active');
            let rook;
            for (let p of game_1.Game.getBlacks()) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'H' && p.getPositionY() === 8)
                    rook = p;
            }
            position.addEventListener('click', () => {
                if (game_1.Game.getLastChosen() === this) {
                    this.setOnBoard('G', 8);
                    rook.setOnBoard('F', 8);
                    if (document.documentElement.lang === 'en') {
                        addMoveHistory_1.addMoveHistory('King side castling', this.color);
                    }
                    else {
                        addMoveHistory_1.addMoveHistory('Roszada na skrzydle królewskim', 'Czarny');
                    }
                    this.removeClassActive();
                    game_1.Game.changeTurn();
                    game_1.Game.changeTimerTurn();
                }
            });
        }
    }
    isChecked() {
        if (this.getDangerZones().indexOf(`${this.positionX}-${this.positionY}`) !== -1) {
            return true;
        }
        else
            return false;
    }
    isKingCheckedByThisPiece(piece) {
        let moves = piece.showPossibleMoves();
        if (moves.indexOf(`${this.positionX}-${this.positionY}`) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    isCheckmated() {
        //const possibleMovesArr = this.showPossibleMoves().filter(id => {
        //    const dangerArr = this.getDangerZones();
        //    return (dangerArr.indexOf(id) === -1);
        //});
        //return (this.isChecked() && possibleMovesArr.length === 0);
        const possMoves = [];
        for (let p of (this.color === 'white' ? game_1.Game.getWhites() : game_1.Game.getBlacks())) {
            p.defendKing(p.showPossibleMoves()).forEach(id => possMoves.push(id));
        }
        if (this.isChecked() && possMoves.length === 0) {
            return true;
        }
        return false;
    }
    areAllPossibleMovesInDangerZones() {
        const possibleMoves = this.showPossibleMoves();
        const dangerZones = this.getDangerZones();
        let dangerZonesCounter = 0;
        if (possibleMoves.length > 0) {
            possibleMoves.forEach(move => {
                if (dangerZones.includes(move)) {
                    dangerZonesCounter += 1;
                }
            });
            if (dangerZonesCounter === possibleMoves.length) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    isPositonSafe(posX, posY) {
        let safe;
        const square = document.querySelector(`#${posX}-${posY}`);
        let originalPiece;
        for (let p of (square.querySelector('img').classList.contains('white') ? game_1.Game.getWhites() : game_1.Game.getBlacks())) {
            if (p.getPositionX() === posX && p.getPositionY() === posY) {
                originalPiece = p;
            }
        }
        const originalPieceX = originalPiece.getPositionX();
        const originalPieceY = originalPiece.getPositionY();
        const originalKingX = this.positionX;
        const originalKingY = this.positionY;
        const tempPositions = Array.from(document.querySelectorAll('.board-container div')).filter(square => {
            return (square.innerHTML == '');
        });
        const tempPieceX = tempPositions[0].id.charAt(0);
        const tempPieceY = parseFloat(tempPositions[0].id.charAt(2));
        //console.log(originalPiece!);
        //console.log(tempPieceX, tempPieceY);
        originalPiece.setOnBoard(tempPieceX, tempPieceY);
        game_1.Game.changeTurn();
        console.log(originalPiece);
        this.setOnBoard(originalPieceX, originalPieceY);
        if (this.isChecked()) {
            safe = false;
        }
        else {
            safe = true;
        }
        this.setOnBoard(originalKingX, originalKingY);
        game_1.Game.changeTurn;
        originalPiece.setOnBoard(originalPieceX, originalPieceY);
        game_1.Game.changeTurn();
        return safe;
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
    allPossibleMoves() {
        const allMoves = [];
        if (this.color === 'white') {
            for (let p of game_1.Game.getWhites()) {
                if (!(p instanceof pawn_1.Pawn)) {
                    if (!(p instanceof King)) {
                        const possibleMoves = p.showPossibleMoves();
                        possibleMoves.forEach(id => {
                            allMoves.push(id);
                        });
                    }
                }
                else {
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => allMoves.push(attack));
                }
            }
        }
        else {
            for (let p of game_1.Game.getBlacks()) {
                if (!(p instanceof pawn_1.Pawn)) {
                    if (!(p instanceof King)) {
                        const possibleMoves = p.showPossibleMoves();
                        possibleMoves.forEach(id => {
                            allMoves.push(id);
                        });
                    }
                }
                else {
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => allMoves.push(attack));
                }
            }
        }
        return allMoves.length;
    }
}
exports.King = King;
