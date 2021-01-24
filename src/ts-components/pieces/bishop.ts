import {Piece} from "./piece";
//goniec / laufer
class Bishop extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = '../../../static/assets/bishop.png';

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Bishop};