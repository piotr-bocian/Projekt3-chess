import { ID } from "../board";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{
protected possibleMoves:void;
    constructor(color:string, positionX:string, positionY:number, possibleMoves:void ){
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        this.possibleMoves = this.collectPossibleMoves();
    }

    showPossibleMoves():void{
        const moves = document.querySelector('.white-queen');
        moves!.addEventListener('click', ()=>{
            this.collectPossibleMoves();
        })
    }

    collectPossibleMoves():void{
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd
        //RUCHY PO PRZEKĄTNEJ DZIAŁAJĄ JEDNAK DO TABLICY DODAWANE SĄ DZIWNE WYNKI
        const diagonalMoves:string[] = [];
        const moves:string[]=[]
        const movesShow=(id:string)=>{
           const movesPossibilities = [...document.querySelectorAll(`#${id}`)]
           movesPossibilities.forEach(el=>el.classList.toggle('active'))
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
            for(let i=1; i<=8; i++){
                //x+1,y+1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.includes('undefined')){
        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
    }
    // x-1,y-1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.includes('undefined')){
        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);
    }
    //x+1,y-1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.includes('undefined')){
        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
    }
    //x-1,y+1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.includes('undefined')){
        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
    }
            }
        }

////////////////////////////////tu się dzieją dziwy//////////////////
        const diagonalWeird=()=>{
            for(let i=1; i<=8; i++){
                //x+1,y+1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.includes('undefined')){
        diagonalMoves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
    }
    // x-1,y-1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.includes('undefined')){
        diagonalMoves.push(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);
    }
    //x+1,y-1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.includes('undefined')){
        diagonalMoves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
    }
    //x-1,y+1
    if(!`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.includes('undefined')){
        diagonalMoves.push(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
    }
            }
        }
        diagonalWeird()
console.log(diagonalMoves);
////////////////////////////////////////////////////////////////////
        diagonal()
        upDown()
        leftRight()
        moves.forEach(id=>{
            movesShow(id)
        })
    }
}

export {Queen};