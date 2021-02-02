"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const piece_1 = require("./piece");
const board_1 = require("../board");
const game_1 = require("../game");
//skoczek / koń
class Knight extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        this.removeClassActive();
        const allPossibleIds = []; // przechowuje wszystkie możliwe ID - łącznie z tymi na których stoją inne figury - przyda się do spr. czy stoją figury innego koloru i zbijania
        this.possibleMovesIDs = []; // tu trafiają tylko możliwe ruchy figury
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        // wypłenienie tablicy wszystkimi możliwymi ruchami - bez sprawdzenia czy stoją na polach inne bierki
        for (let i = coordinateX - 2; i <= coordinateX + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateY - 1; j <= coordinateY + 1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        allPossibleIds.push(`${board_1.ID[i]}-${j}`);
                    }
                }
            }
        }
        for (let i = coordinateY - 2; i <= coordinateY + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateX - 1; j <= coordinateX + 1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        allPossibleIds.push(`${board_1.ID[j]}-${i}`);
                    }
                }
            }
        }
        // Sprawdzenie czy na polu nie stoi żadna figura lub czy figura ma taki kolor jak atakująca, jesli nie to dodaję ID do właściwej - zwracanej tablicy.
        allPossibleIds.forEach((id) => {
            if (!(document.querySelector(`#${id}`).querySelector('img')?.classList.contains(`${this.color}`)) || document.querySelector(`#${id}`).innerHTML == '') {
                this.possibleMovesIDs.push(id);
            }
        });
        //console.log(this.possibleMovesIDs);
        return this.possibleMovesIDs;
    }
    move() {
        const possibilities = this.showPossibleMoves();
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`).classList.add('active');
        });
        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if (possMove.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    // // próbna implementacja bicia
                    // if (possMove.innerHTML != '') {
                    //     possMove.innerHTML = '';
                    // }
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                }
            });
        });
    }
}
exports.Knight = Knight;
