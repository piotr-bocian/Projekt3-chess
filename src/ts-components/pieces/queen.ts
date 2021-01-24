import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = '../../../static/assets/queen.png';

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}

export {Queen};