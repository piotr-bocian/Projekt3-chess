import { Game } from './game';

enum endGameCases {
    draw = 'GAME ENDED BY DRAW',
    stalemate = 'GAME ENDED BY STALEMATE',
}

function isDraw(): string | void {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();

    if (whites.length === 1 && blacks.length === 1) {
        return alert(endGameCases.draw);
    }

    
    return;
}

export { isDraw };