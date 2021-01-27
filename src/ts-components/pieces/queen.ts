import { ID } from "../board";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece{
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        console.log(this.parentSquare);

        const movesArr = this.collectPossibleMoves()
        const movesShow=(id:string)=>{
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)]
                movesPossibilities.forEach(el=>{
                    el.classList.add('active');
                })
         }
        const queen = document.querySelector('.white-queen');
        queen!.addEventListener('click', ()=>{
            movesArr.forEach(id=>{
                movesShow(id)
                this.queenMove()
            })
        })
    }

    queenMove(){
        const squares:NodeList = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if(!((square as HTMLElement).classList.contains('pieceInside')) && (square as HTMLElement).classList.contains('active')){
                    this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
                    squares.forEach(square => (square as HTMLElement).classList.remove('active'));
                }
            });
        });
    }

    collectPossibleMoves():string[]{
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd
        const moves:string[]=[];
        const upDown=()=>{for(let i=1; i<9; i++){
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
            moves.push(`${this.positionX}-${i}`)
        }}
        const leftRight=()=>{for(let i=1; i<9; i++){
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

    removeClassActive(): void {
        let elems = [...document.querySelectorAll('.active')];
        for (let i = 0; i < elems.length; i++) {
            elems[i]!.classList.remove('active');
          }
    }
}

export {Queen};