import {Piece} from "./piece";
import {ID} from "./../board";

class King extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png` //<-- w przyszłości bedzie tu ścieżka do img figury

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                const square = document.querySelector(`#${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                if(square != null && square.innerHTML == "")
                    square.classList.add('active');
            }
        }

        this.move();
    }

    move():void{
        const squares:NodeList = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if((square as HTMLElement).classList.contains('active')){
                    console.log(square);
                    this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
                    squares.forEach(square => (square as HTMLElement).classList.remove('active'));
                }
                    
            });
        });
    }
}

export {King};