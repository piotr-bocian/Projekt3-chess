import { Game } from './game';
import { endResult } from './end-page/endListener'

enum endGameCases {
    draw = 'GAME ENDED BY DRAW',
    stalemate = 'pat',
    checkMate = ''
}

function endGame(): string | void {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();
    const whiteKing = Game.getWhiteKing();
    const blackKing = Game.getBlackKing();

    if(whites.length === 1 && blacks.length === 1) {
        return alert(endGameCases.draw);
    }
    if(!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones()){
        let endModalResult = new endResult('Białe', 'Czarne', 'Mateusz', endGameCases.stalemate);
        endModalResult.showResult();
        return;

    } else if(!blackKing.isChecked() && !blackKing.isCheckmated() && blackKing.areAllPossibleMovesInDangerZones()) {
        let endModalResult = new endResult('Białe', 'Czarne', 'Mateusz', endGameCases.stalemate);
        return endModalResult.showResult();
    }

    if(whiteKing.isCheckmated()) {
        let endModalResult = new endResult('Białe', 'Czarne', 'Czarne', endGameCases.checkMate);
        return endModalResult.showResult();
    } else if(blackKing.isCheckmated()) {
        let endModalResult = new endResult('Białe', 'Czarne', 'Białe', endGameCases.checkMate);
        return endModalResult.showResult();
    }
    
    return;
}

export { endGame };