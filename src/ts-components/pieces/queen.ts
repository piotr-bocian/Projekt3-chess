import { ID } from "../board";
import { MovesShow, QueenMethods } from "../interfaces/pieceMethodsInterfaces";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece implements QueenMethods{
    constructor(color:string, positionX:string, positionY:number, public history?:string[]){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves(){
        const movesShow:MovesShow =(id)=>{
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
                movesPossibilities.forEach(el=>{
                    el.classList.toggle('active');
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
                if(!(square).classList.contains('pieceInside') && (square).classList.contains('active')){
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive()
                }
            });
        });
    }

   collectAllPossibleMoves(){
    const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
    const moves:string[]=[];

    const moveUp=()=>{
    for(let i=this.positionY +1; i<9; i++){
        const checkSquare = document.querySelector(`#${this.positionX}-${i}`);
    if (checkSquare?.classList.contains('pieceInside') || checkSquare == null) return
    moves.push(`${this.positionX}-${i}`)
}
}
    const moveDown = ()=>{
        for(let j=this.positionY - 1; j>0; j--){
            const checkSquare = document.querySelector(`#${this.positionX}-${j}`);
        if (checkSquare?.classList.contains('pieceInside') || checkSquare === null) return
        moves.push(`${this.positionX}-${j}`)
        }
    }
    const moveRight=()=>{

        for(let i=coordinateX +1; i<9; i++){
            const checkSquare = document.querySelector(`#${ID[i]}-${this.positionY}`);
        if (checkSquare?.classList.contains('pieceInside') || checkSquare == null) return
        moves.push(`${ID[i]}-${this.positionY}`)
    }
    }
    const moveLeft=()=>{
                for(let i=coordinateX -1; i>0; i--){
                    const checkSquare = document.querySelector(`#${ID[i]}-${this.positionY}`);
                if (checkSquare?.classList.contains('pieceInside') || checkSquare == null) return
                moves.push(`${ID[i]}-${this.positionY}`)
            }
            }
    const diagonalMoves=()=>{
    if (this.color === 'white') {
        // top right
        if (9 - coordinateX < 9 - this.positionY) {
            for(let i=1; i<9 - coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${this.positionY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - this.positionY; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${this.positionY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                }
            }
        }

        // down left
        if (this.positionY - 1 < coordinateX - 1) {
            for(let i=1 ; i < this.positionY; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${this.positionY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                }
            }
        } else {
            for(let i=1 ; i < coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${this.positionY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                }
            }
        }

        // top left
        if (coordinateX < 9 - this.positionY) {
            for(let i = 1; i < coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${this.positionY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX-i]}-${this.positionY+i}`);
                }
            }
        } else {
            for(let i = 1 ; i < 9 - this.positionY; i++) {
                if (document.getElementById(`${ID[coordinateX-i]}-${this.positionY + i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY + i}`);
                }
            }
        }

        // down right
        if (this.positionY < 9 - coordinateX) {
            for(let i = 1 ; i < this.positionY ; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${this.positionY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - coordinateX; i++) {
                if (document.getElementById(`${ID[coordinateX+i]}-${this.positionY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                }
            }
        }
    }}
    diagonalMoves()
    moveUp()
    moveDown()
    moveLeft()
    moveRight()
    return moves;
}
    removeClassActive(){
    let elems= [...document.querySelectorAll('.active')];
    for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('active');
    }
}
}

export {Queen};