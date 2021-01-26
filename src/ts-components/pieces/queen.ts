import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Queen};