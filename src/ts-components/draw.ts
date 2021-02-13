import { Game } from './game';

function isDraw(): boolean {
    const whites = Game.getWhites();
    const blacks = Game.getBlacks();

    if (whites.length === 1 && blacks.length === 1) {
        return true;
    }
    return false;
}

export { isDraw };