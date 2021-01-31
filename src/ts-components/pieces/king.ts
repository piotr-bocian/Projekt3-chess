import {Piece} from "./piece";
import {ID} from "./../board";
import { Game } from "../game";

class King extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png` //<-- w przyszłości bedzie tu ścieżka do img figury

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        this.removeClassActive();
        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                const square = document.querySelector(`#${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                if(square != null && square.innerHTML == "")
                    square.classList.add('active');
            }
        }

        // const squares:NodeList = document.querySelectorAll('.board-container div');
        // squares.forEach(square => {
        //     square.addEventListener('click', this.move.bind(this, square as HTMLElement));
        // });
        this.move();
    }

    // move(square:HTMLElement):void{
    //     const x = Game.lastChosen.getPositionX();
    //     const y = Game.lastChosen.getPositionY();


    //     if((square as HTMLElement).classList.contains('active') && this.getPositionX() === x && this.getPositionY() === y){
    //         this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
    //     }
    // }

    move():void{
        const squares:NodeList = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                const x = Game.lastChosen.getPositionX();
                const y = Game.lastChosen.getPositionY();


                if((square as HTMLElement).classList.contains('active') && this.getPositionX() === x && this.getPositionY() === y){
                    this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
                }
            });
        });
    }

    removeClassActive():void {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i]!.classList.remove('active');
        }
    }
}

export {King};