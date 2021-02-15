"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifPromotion = void 0;
const board_1 = require("./board");
function ifPromotion() {
    const possiblePromotion = [];
    for (var i = 1; i < 9; i++) {
        let idPossiblePromotion1 = `${board_1.ID[i]}-1`;
        let idPossiblePromotion2 = `${board_1.ID[i]}-8`;
        possiblePromotion.push(idPossiblePromotion1, idPossiblePromotion2);
    }
    const promotion = [];
    possiblePromotion.forEach((possibility) => {
        if (document.getElementById(possibility).classList.contains('promotion')) {
            promotion.push(possibility);
        }
    });
    return promotion.length > 0;
}
exports.ifPromotion = ifPromotion;
