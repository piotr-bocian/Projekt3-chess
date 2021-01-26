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
        const diagonalMoves:string[] = [];
        const moves:string[]=[]
        const movesShow=(id:string)=>{
           const movesPossibilities = [...document.querySelectorAll(`#${id}`)]
           movesPossibilities.forEach(el=>el.classList.add('active'))
        }
        const upDown=()=>{for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${this.positionX}-${i}`)
        }}
        const leftRight=()=>{for(let i=1; i<9; i++){
            if (`${ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${ID[i]}-${this.positionY}`)
        }}
        const diagonal=()=>{
            for(let i=1; i<9; i++){
                if (`${ID[i]}-${i}` !== `${this.positionX}-${this.positionY}`)
                moves.push(`${ID[i]}-${i}`)
            }
            // for(let i=7; i>0; i--){
            //     if (`${ID[i]}-${i}` !== `${this.positionX}-${this.positionY}`)
            //     diagonalMoves.push(`${ID[i]}-${i}`)
            // }
        }
        diagonal()
        console.log(diagonalMoves);
        upDown()
        leftRight()
        moves.forEach(id=>{
            movesShow(id)
        })

    }
}

export {Queen};