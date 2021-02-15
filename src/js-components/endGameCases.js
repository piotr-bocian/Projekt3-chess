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
    endGameCases["timeUp"] = "czas";
})(endGameCases || (endGameCases = {}));
function endCase(user1, user2, target) {
    const whites = game_1.Game.getWhites();
    const blacks = game_1.Game.getBlacks();
    const whiteKing = game_1.Game.getWhiteKing();
    const blackKing = game_1.Game.getBlackKing();
    const whiteTime = game_1.Game.getWhiteTimer().seconds;
    const blackTime = game_1.Game.getBlackTimer().seconds;
    const endGameCase = {
        player1: user1,
        player2: user2,
        target: target,
        winner: '',
        how: '',
        finish: false
    };
    if (whites.length === 1 && blacks.length === 1) {
        endGameCase.how = endGameCases.draw;
        endGameCase.finish = true;
        return endGameCase;
    }
    console.log(!whiteKing.isChecked());
    console.log(!whiteKing.isCheckmated());
    console.log(whiteKing.areAllPossibleMovesInDangerZones());
    console.log(blackKing.areAllPossibleMovesInDangerZones());
    console.log(whiteKing.allPossibleMoves());
    console.log(blackKing.allPossibleMoves());
    if (!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones() && whiteKing.allPossibleMoves() == 0) {
        if (endGameCase.target == "PATUJĄCEGO" || endGameCase.target == "LOOSE FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player2;
            endGameCase.finish = true;
            return endGameCase;
        }
        else if (endGameCase.target == "PATOWANEGO" || endGameCase.target == "WIN FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player1;
            endGameCase.finish = true;
            return endGameCase;
        }
    }
    else if (!blackKing.isChecked() && !blackKing.isCheckmated() && blackKing.areAllPossibleMovesInDangerZones() && blackKing.allPossibleMoves() == 0) {
        if (endGameCase.target == "PATUJĄCEGO" || endGameCase.target == "LOOSE FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player1;
            endGameCase.finish = true;
            return endGameCase;
        }
        else if (endGameCase.target == "PATOWANEGO" || endGameCase.target == "WIN FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player2;
            endGameCase.finish = true;
            return endGameCase;
        }
    }
    if (whiteKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.player2;
        endGameCase.finish = true;
        return endGameCase;
    }
    else if (blackKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.player1;
        endGameCase.finish = true;
        return endGameCase;
    }
    if (whiteTime == 0) {
        endGameCase.how = endGameCases.timeUp;
        endGameCase.winner = endGameCase.player2;
        endGameCase.finish = true;
        return endGameCase;
    }
    else if (blackTime == 0) {
        endGameCase.how = endGameCases.timeUp;
        endGameCase.winner = endGameCase.player1;
        endGameCase.finish = true;
        return endGameCase;
    }
    return endGameCase;
}
function endGame(user1, user2, target) {
    const theEnd = endCase(user1, user2, target);
    if (theEnd.finish) {
        setTimeout(() => {
            let endModalResult = new endListener_1.endResult(theEnd.player1, theEnd.player2, theEnd.winner, theEnd.how);
            return endModalResult.showResult();
        }, 1000);
    }
    return;
}
exports.endGame = endGame;
