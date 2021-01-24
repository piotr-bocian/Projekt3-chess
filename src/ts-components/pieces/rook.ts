import {Piece} from "./piece";
//wieża
class Rook extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = '../../../static/assets/rook.png';

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Rook};