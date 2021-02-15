"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endGame = void 0;
const game_1 = require("./game");
const endListener_1 = require("./end-page/endListener");
var endGameCases;
(function (endGameCases) {
    endGameCases["draw"] = "remis";
    endGameCases["stalemate"] = "pat";
    endGameCases["checkMate"] = "";
})(endGameCases || (endGameCases = {}));
function endCase() {
    const whites = game_1.Game.getWhites();
    const blacks = game_1.Game.getBlacks();
    const whiteKing = game_1.Game.getWhiteKing();
    const blackKing = game_1.Game.getBlackKing();
    const endGameCase = {
        user1: 'Białe',
        user2: 'Czarne',
        winner: '',
        how: '',
        finish: false
    };
    if (whites.length === 1 && blacks.length === 1) {
        endGameCase.how = endGameCases.draw;
        endGameCase.finish = true;
    }
    if (!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones()) {
        endGameCase.how = endGameCases.stalemate;
        endGameCase.finish = true;
    }
    else if (!blackKing.isChecked() && !blackKing.isCheckmated() && blackKing.areAllPossibleMovesInDangerZones()) {
        endGameCase.how = endGameCases.stalemate;
        endGameCase.finish = true;
    }
    if (whiteKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.user2;
        endGameCase.finish = true;
    }
    else if (blackKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.user1;
        endGameCase.finish = true;
    }
    return endGameCase;
}
function endGame() {
    const theEnd = endCase();
    if (theEnd.finish) {
        // setTimeout(() => {
        let endModalResult = new endListener_1.endResult(theEnd.user1, theEnd.user2, theEnd.winner, theEnd.how);
        return endModalResult.showResult();
        // }, 1000);
    }
    return;
}
exports.endGame = endGame;
