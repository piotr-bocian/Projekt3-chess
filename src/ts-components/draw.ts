import { Game } from './game';

enum endGameCases {
    draw = 'GAME ENDED BY DRAW',
    stalemate = 'GAME ENDED BY STALEMATE',
}

function draw(): string | void {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();
    const whiteKing = Game.getWhiteKing();
    const blackKing = Game.getBlackKing();

    if (whites.length === 1 && blacks.length === 1) {
        return alert(endGameCases.draw);
    }
    console.log(whiteKing.showPossibleMoves());
    console.log(whiteKing.areAllPossibleMovesInDangerZones());
    console.log(whiteKing.getDangerZones());
    if (!whiteKing.isChecked() && !whiteKing.isCheckmated() && whiteKing.areAllPossibleMovesInDangerZones()){
        return alert(endGameCases.stalemate);
    }
    
    return;
}

export { draw };