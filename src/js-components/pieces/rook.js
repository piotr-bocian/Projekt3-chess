"use strict";
"use stricte";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
//wieża
class Rook extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.hasMoved = false;
        this.symbol = `./../../../Projekt3-chess/static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //this.removeClassActive();
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());
        const PossibleMoves = [];
        const rookLineX = this.getPositionX();
        const rookLineY = this.getPositionY();
        const checkYAxis = () => {
            // top
            //console.log(rookLineX,rookLineY)
            for (let i = rookLineY + 1; i <= 8; i++) {
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if (!(squareY?.querySelector('img')) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${rookLineX}-${i}`);
                }
                else {
                    if (!(squareY?.querySelector('img')?.classList.contains(this.color))) {
                        PossibleMoves.push(`${rookLineX}-${i}`);
                        break;
                    }
                    break;
                }
            }
            // bot
            for (let i = rookLineY - 1; i > 0; i--) {
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if (!(squareY?.querySelector('img')) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${rookLineX}-${i}`);
                }
                else {
                    if (!(squareY?.querySelector('img')?.classList.contains(this.color))) {
                        PossibleMoves.push(`${rookLineX}-${i}`);
                        break;
                    }
                    break;
                }
            }
        };
        const checkXAxis = () => {
            // right
            const clickedElementIndex = arrayOfX.indexOf(rookLineX);
            for (let i = clickedElementIndex; i <= 7; i++) {
                let squareY = document.querySelector(`#${arrayOfX[i + 1]}-${rookLineY}`);
                if (!(squareY?.querySelector('img')) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${arrayOfX[i + 1]}-${rookLineY}`);
                }
                else {
                    if (!(squareY?.querySelector('img')?.classList.contains(this.color))) {
                        PossibleMoves.push(`${arrayOfX[i + 1]}-${rookLineY}`);
                        break;
                    }
                    break;
                }
            }
            // left
            for (let i = clickedElementIndex; i > 0; i--) {
                let squareY = document.querySelector(`#${arrayOfX[i - 1]}-${rookLineY}`);
                if (!(squareY?.querySelector('img')) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${arrayOfX[i - 1]}-${rookLineY}`);
                }
                else {
                    if (!(squareY?.querySelector('img')?.classList.contains(this.color))) {
                        PossibleMoves.push(`${arrayOfX[i - 1]}-${rookLineY}`);
                        break;
                    }
                    break;
                }
            }
        };
        checkYAxis();
        checkXAxis();
        // const squares:NodeList = document.querySelectorAll('.board-container div');
        // squares.forEach(square => {
        //     square.addEventListener('click', (e) => {
        //         let pickedFigure = e.currentTarget;
        //         if(!((square as HTMLElement).classList.contains('pieceInside')) && (square as HTMLElement).classList.contains('active')   && (Game.getLastChosen() === this)){
        //             this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
        //             squares.forEach(square => (square as HTMLElement).classList.remove('active'));
        //         }
        //     });
        // });
        return PossibleMoves;
    }
    move() {
        this.removeClassActive();
        let possibleMovesArr = this.showPossibleMoves();
        possibleMovesArr = this.defendKing(possibleMovesArr);
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        game_1.Game.beat(square);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square);
                    this.historyNotation();
                    //
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                    game_1.Game.changeTimerTurn();
                }
            }, { capture: true });
        });
    }
}
exports.Rook = Rook;
