import {Piece} from "./piece";
//goniec / laufer
class Bishop extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = color === 'white' ? '♔' : '♚'; //<-- w przyszłości bedzie tu ścieżka do img figury

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Bishop};