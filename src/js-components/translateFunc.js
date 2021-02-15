"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const getName = (constructorName) => {
    switch (constructorName) {
        case 'Queen':
            return 'Królowa';
        case 'Rook':
            return 'Wieża';
        case 'Knight':
            return 'Skoczek';
        case 'Bishop':
            return 'Goniec';
        case 'King':
            return 'Król';
        case 'white':
            return 'Biały';
        case 'black':
            return 'Czarny';
        default:
            return 'Pion';
    }
};
exports.getName = getName;
