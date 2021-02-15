"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillBoard = void 0;
const king_1 = require("./pieces/king");
const queen_1 = require("./pieces/queen");
const bishop_1 = require("./pieces/bishop");
const knight_1 = require("./pieces/knight");
const rook_1 = require("./pieces/rook");
const pawn_1 = require("./pieces/pawn");
const board_1 = require("./board");
const fillBoard = () => {
    // whites
    const kingWhite = new king_1.King('white', `${board_1.ID[5]}`, 1);
    const queenWhite = new queen_1.Queen('white', `${board_1.ID[4]}`, 1);
    for (let i = 3; i <= 6; i += 3) {
        const bishopWhite = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 1);
    }
    for (let i = 2; i <= 7; i += 5) {
        const knightWhite = new knight_1.Knight('white', `${board_1.ID[i]}`, 1);
    }
    for (let i = 1; i <= 8; i += 7) {
        const rookWhite = new rook_1.Rook('white', `${board_1.ID[i]}`, 1);
    }
    for (let i = 1; i <= 8; i++) {
        const pawnWhite = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 2);
    }
    // blacks
    const kingBlack = new king_1.King('white', `${board_1.ID[5]}`, 8);
    const queenBlack = new queen_1.Queen('white', `${board_1.ID[4]}`, 8);
    for (let i = 3; i <= 6; i += 3) {
        const bishopBlack = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 8);
    }
    for (let i = 2; i <= 7; i += 5) {
        const knightBlack = new knight_1.Knight('white', `${board_1.ID[i]}`, 8);
    }
    for (let i = 1; i <= 8; i += 7) {
        const rookBlack = new rook_1.Rook('white', `${board_1.ID[i]}`, 8);
    }
    for (let i = 1; i <= 8; i++) {
        const pawnBlack = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 7);
    }
};
exports.fillBoard = fillBoard;
