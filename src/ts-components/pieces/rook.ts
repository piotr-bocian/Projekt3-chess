"use stricte"

import {Piece} from "./piece";
import {ID} from "./../board";

//wieża
class Rook extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        this.removeClassActive();
        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        const rookLineX:string = this.getPositionX();
        const rookLineY:number = this.getPositionY();

        for(let i=-1; i<=8; i++){
            const squareY:HTMLElement = document.querySelector(`#${rookLineX}-${i}`);
            if(squareY != null)
            squareY.classList.add('active');

            arrayOfX.map((letter) => {
                const squareX: HTMLElement = document.querySelector(`#${letter}-${rookLineY}`);
                if (squareX != null)
                    squareX.classList.add('active');
            })
        }

        const squares:NodeList = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if(!((square as HTMLElement).classList.contains('pieceInside')) && (square as HTMLElement).classList.contains('active')){
                    this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
                    squares.forEach(square => (square as HTMLElement).classList.remove('active'));
                }
            });
        });
    }
    removeClassActive(): void {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i]!.classList.remove('active');
        }
    }
}

export {Rook};