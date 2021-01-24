import {Piece} from "./piece";
//pion
class Pawn extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = '../../../static/assets/pawn.png';

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Pawn};