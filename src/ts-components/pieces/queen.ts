import { ID } from "../board";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{
protected possibleMoves:void;
    constructor(color:string, positionX:string, positionY:number, possibleMoves:void ){
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        this.possibleMoves = this.showPossibleMoves()
    }

    showPossibleMoves():void{
        const moves = [];
        for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
                moves.push(`${this.positionX}-${i}`)
        }
        console.log(moves);

    }
}

export {Queen};