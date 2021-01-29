import { ID } from "../board";
import { MovesShow, FunctionsVoid } from "../interfaces/pieceMethodsInterfaces";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        // this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        const movesArr = this.collectAllPossibleMoves();
        const queen = document.querySelector('.white-queen')!;
        const movesShow:MovesShow =(id)=>{
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
                movesPossibilities.forEach(el=>{
                    // console.log(parseInt(el.id.charAt(2), 32), parseInt(id.charAt(2), 32));
                    console.log(!el.innerHTML.match(/white/));
                     if(el.innerHTML.match(/white/) && el.id.charAt(2) < id.charAt(2)) return
                    el.classList.add('active');
                })
         }
        queen.addEventListener('click', ()=>{
            movesArr.forEach(id=>{
                movesShow(id)
                this.queenMove()
            })
        })
    }

    queenMove(){
        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {

            square.addEventListener('click', () => {
                if(!((square).classList.contains('pieceInside')) && (square).classList.contains('active')){
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    squares.forEach(square => {
                        (square).classList.remove('active');
                    });
                }
            });
        });
    }

    collectAllPossibleMoves():string[]{
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd
        const moves:string[]=[];
        const upDown:FunctionsVoid=()=>{for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${this.positionX}-${i}`)
        }}
        const leftRight:FunctionsVoid=()=>{for(let i=1; i<9; i++){
            if (`${ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${ID[i]}-${this.positionY}`)
        }}
        const diagonal:FunctionsVoid=()=>{
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
}

export {Queen};