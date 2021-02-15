import { Game } from './game';
import { endResult } from './end-page/endListener'

type EndType = {
    user1:string, 
    user2:string, 
    winner:string, 
    how:string, 
    finish: boolean
}

enum endGameCases {
    draw = 'remis',
    stalemate = 'pat',
    checkMate = ''
}

function endCase(): EndType {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();
    const whiteKing = Game.getWhiteKing();
    const blackKing = Game.getBlackKing();
    const endGameCase: EndType = {
        user1: 'Białe',
        user2: 'Czarne',
        winner: '',
        how: '',
        finish: false
    }

    if(whites.length === 1 && blacks.length === 1) {
        endGameCase.how = endGameCases.draw;
        endGameCase.finish = true;
    }
    if(!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones()){
        endGameCase.how = endGameCases.stalemate;
        endGameCase.finish = true;        

    } else if(!blackKing.isChecked() && !blackKing.isCheckmated() && blackKing.areAllPossibleMovesInDangerZones()) {
        endGameCase.how = endGameCases.stalemate;
        endGameCase.finish = true;
    }

    if(whiteKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.user2;
        endGameCase.finish = true;

    } else if(blackKing.isCheckmated()) {
        endGameCase.how = endGameCases.checkMate;
        endGameCase.winner = endGameCase.user1;
        endGameCase.finish = true;
    }
    
    return endGameCase;
}

function endGame(): void{
    const theEnd: EndType = endCase();
    
    if(theEnd.finish){
        // setTimeout(() => {
            let endModalResult = new endResult(theEnd.user1, theEnd.user2, theEnd.winner, theEnd.how);
            return endModalResult.showResult();
        // }, 1000);
    }

    return;
}

export { endGame };