import { Piece } from "./piece";
import { ID } from "../board";
//skoczek / koń
class Knight extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():string[]{
        const canMoveToSquare: string[] = [];

        const targetDiv = document.getElementById(`${this.positionX}-${this.positionY + 1}`) !as HTMLElement;
        targetDiv.classList.add('active');
        // targetDiv.classList.remove('active');
        return canMoveToSquare;
    }
}



export {Knight};