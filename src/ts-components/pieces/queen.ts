import { ID } from "../board";
import { MovesShow, QueenMethods } from "../interfaces/pieceMethodsInterfaces";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece implements QueenMethods{
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves(){
        const movesShow:MovesShow =(id)=>{
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
                movesPossibilities.forEach(el=>{
                    el.classList.toggle('queenMove');
                })
         }
         this.collectAllPossibleMoves().forEach(id=>{
                movesShow(id)
                this.queenMove()
            })
    }

    queenMove(){
        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if ((square).classList.contains('pieceInside')) return
                if(!((square).classList.contains('pieceInside')) && (square).classList.contains('queenMove')){
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive()
                }
            });
        });
    }
    collectAllPossibleMoves(){
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery a=1,b=2 itd, używam do enuma ID
        const moves:string[]=[];

        const upDown=()=>{
            for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${this.positionX}-${i}`)
        }}

        const leftRight=()=>{
            for(let i=1; i<9; i++){
            if (`${ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${ID[i]}-${this.positionY}`)
        }}

        const diagonal=()=>{
            const regexLetters = /[A-H]+/;
            const regexNumbers = /[1-8]+/;
            for(let i=1; i<=8; i++){
                //x+1,y+1
    if(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexNumbers) &&
    `${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexLetters)){

        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
    }
                // x-1,y-1
    if(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexNumbers) &&
    `${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexLetters)){

        moves.push(`${ID[(parseInt(this.positionX, 36) - 9)-i]}-${this.positionY-i}`);
    }
                //x+1,y-1
    if(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexNumbers) &&
    `${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexLetters)){

        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
    }
                //x-1,y+1
    if(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexNumbers) &&
    `${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexLetters)){

        moves.push(`${ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
    }
            }
        }
        diagonal()
        upDown()
        leftRight()
        return moves;
   }
    removeClassActive(){
    let elems= [...document.querySelectorAll('.queenMove')];
    for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('queenMove');
    }
}
}

export {Queen};