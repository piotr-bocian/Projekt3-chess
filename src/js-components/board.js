"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var ID;
(function (ID) {
    ID[ID["A"] = 1] = "A";
    ID[ID["B"] = 2] = "B";
    ID[ID["C"] = 3] = "C";
    ID[ID["D"] = 4] = "D";
    ID[ID["E"] = 5] = "E";
    ID[ID["F"] = 6] = "F";
    ID[ID["G"] = 7] = "G";
    ID[ID["H"] = 8] = "H";
})(ID || (ID = {}));
class Board {
    drawBoard() {
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                const div = document.createElement('div');
                div.id = `${i}-${ID[j]}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych
                if (i % 2 === 0)
                    div.classList.add(`${j % 2 === 0 ? 'light' : 'dark'}`);
                else
                    div.classList.add(`${j % 2 === 0 ? 'dark' : 'light'}`);
                boardContainer.appendChild(div);
            }
        }
        document.querySelector('body').appendChild(boardContainer);
    }
}
exports.Board = Board;
