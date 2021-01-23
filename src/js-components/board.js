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
        const boardWrapper = document.createElement('div');
        boardWrapper.classList.add('board-wrapper');
        const letters = document.createElement('div');
        letters.classList.add('letters');
        const numbers = document.createElement('div');
        numbers.classList.add('numbers');
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');
        for (let i = 1; i < 9; i++) {
            const div = document.createElement('div');
            div.classList.add('notation');
            div.innerText = `${ID[i]}`;
            letters.appendChild(div);
        }
        for (let i = 8; i > 0; i--) {
            const num = document.createElement('div');
            num.innerText = `${i}`;
            numbers.appendChild(num);
        }
        for (let i = 8; i > 0; i--) {
            for (let j = 1; j < 9; j++) {
                const div = document.createElement('div');
                div.id = `${ID[j]}${i}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych
                if (i % 2 === 0)
                    div.classList.add(`${j % 2 === 0 ? 'dark' : 'light'}`);
                else
                    div.classList.add(`${j % 2 === 0 ? 'light' : 'dark'}`);
                boardContainer.appendChild(div);
            }
        }
        document.querySelector('body').appendChild(boardWrapper).appendChild(numbers);
        boardWrapper.appendChild(boardContainer);
        boardWrapper.appendChild(letters);
    }
}
exports.Board = Board;
