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
        const movesUpDown:string[] = [];
        const movesleftRight:string[] = [];
        const diagonalMoves:string[] = [];
        const upDown=()=>{for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
            movesUpDown.push(`${this.positionX}-${i}`)
        }}
        const leftRight=()=>{for(let i=1; i<9; i++){
            if (`${ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
            movesleftRight.push(`${ID[i]}-${this.positionY}`)
        }}
        // const diagonal()=>{

        // }


        upDown()
        leftRight()
        console.log(movesUpDown,movesleftRight);

    }
}

export {Queen};