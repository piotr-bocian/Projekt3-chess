import { Game } from './game';
import { endResult } from './end-page/endListener'
import { Pawn } from './pieces/pawn'

type EndType = {
    player1:string, 
    player2:string,
    target: string, 
    winner:string, 
    how:string, 
    finish: boolean
}

enum endGameCases {
    draw = 'remis',
    stalemate = 'pat',
    checkMate = '',
    timeUp = 'czas'
}

function endCase(user1:string, user2: string, target: string): EndType {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();
    const whiteKing = Game.getWhiteKing();
    const blackKing = Game.getBlackKing();
    const whiteTime = Game.getWhiteTimer().seconds;
    const blackTime = Game.getBlackTimer().seconds;
    
    const endGameCase: EndType = {
        player1: user1,
        player2: user2,
        target: target,
        winner: '',
        how: '',
        finish: false
    }

    if(whites.length === 1 && blacks.length === 1) {
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

    if(!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones() && whiteKing.allPossibleMoves() == 0){
        if(endGameCase.target == "PATUJĄCEGO" || endGameCase.target == "LOOSE FOR STALEMATED PLAYER"){
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player2;
            endGameCase.finish = true;   
            return endGameCase;     
        } else if (endGameCase.target == "PATOWANEGO" || endGameCase.target == "WIN FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player1;
            endGameCase.finish = true;   
            return endGameCase;
        }

    } else if(!blackKing.isChecked() && !blackKing.isCheckmated() && blackKing.areAllPossibleMovesInDangerZones() && blackKing.allPossibleMoves() == 0) {
        if(endGameCase.target == "PATUJĄCEGO" || endGameCase.target == "LOOSE FOR STALEMATED PLAYER"){
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player1;
            endGameCase.finish = true;   
            return endGameCase;     
        }else if (endGameCase.target == "PATOWANEGO" || endGameCase.target == "WIN FOR STALEMATED PLAYER") {
            console.log('pat');
            endGameCase.how = endGameCases.stalemate;
            endGameCase.winner = endGameCase.player2;
            endGameCase.finish = true;   
            return endGameCase;
        }
    }

    if(whiteKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.player2;
        endGameCase.finish = true;
        return endGameCase;

    } else if(blackKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.player1;
        endGameCase.finish = true;
        return endGameCase;
    }

    if(whiteTime == 0){
        endGameCase.how = endGameCases.timeUp;
        endGameCase.winner = endGameCase.player2;
        endGameCase.finish = true;
        return endGameCase;
    } else if(blackTime == 0){
        endGameCase.how = endGameCases.timeUp;
        endGameCase.winner = endGameCase.player1;
        endGameCase.finish = true;
        return endGameCase;
    }
    
    return endGameCase;
}

function endGame(user1:string, user2: string, target: string): void{
    const theEnd: EndType = endCase(user1, user2, target);
    
    if(theEnd.finish){
        setTimeout(() => {
            let endModalResult = new endResult(theEnd.player1, theEnd.player2, theEnd.winner, theEnd.how);
            return endModalResult.showResult();
        }, 1000);
    }

    return;
}

export { endGame };