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
        this.symbol = `../../../static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        this.removeClassActive();
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
                if (!(squareY?.querySelector('img')?.classList.contains(`${this.color}`)) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${rookLineX}-${i}`);
                }
                else {
                    break;
                }
            }
            // bot
            for (let i = rookLineY - 1; i > 0; i--) {
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if (!(squareY?.querySelector('img')?.classList.contains(`${this.color}`)) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${rookLineX}-${i}`);
                }
                else {
                    break;
                }
            }
        };
        const checkXAxis = () => {
            // right
            const clickedElementIndex = arrayOfX.indexOf(rookLineX);
            for (let i = clickedElementIndex; i <= 6; i++) {
                let squareY = document.querySelector(`#${arrayOfX[i + 1]}-${rookLineY}`);
                if (!(squareY?.querySelector('img')?.classList.contains(`${this.color}`)) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${arrayOfX[i + 1]}-${rookLineY}`);
                }
                else {
                    break;
                }
            }
            // left
            for (let i = clickedElementIndex; i > 0; i--) {
                let squareY = document.querySelector(`#${arrayOfX[i - 1]}-${rookLineY}`);
                if (!(squareY?.querySelector('img')?.classList.contains(`${this.color}`)) || squareY.innerHTML === "") {
                    if (squareY != null)
                        // squareY.classList.add('active');
                        PossibleMoves.push(`${arrayOfX[i - 1]}-${rookLineY}`);
                }
                else {
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
        // console.log(PossibleMoves)
        return PossibleMoves;
    }
    move() {
        this.removeClassActive();
        const possibleMovesArr = this.showPossibleMoves();
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                }
            });
        });
    }
}
exports.Rook = Rook;
