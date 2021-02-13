import {Piece} from "./piece";
import { ID } from "../board";
import {Game} from "../game";
//goniec / laufer


class Bishop extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Bishop.png`;

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():string[]{
        //this.removeClassActive();
        const possibleMoves: string[] = [];
        const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
        const coordinateY : number = this.positionY;

        // move by first diagonal
        // top right
        var topRight: number;
        if (9 - coordinateX < 9 - coordinateY) {
            topRight = 9 - coordinateX;
        } else {
            topRight = 9 - coordinateY;
        }
        for(let i=1; i< topRight; i++){
            if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.classList.contains('pieceInside')) {
                if (!(document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.getElementsByTagName("img")[0]!.classList.contains(`${this.color}`))){
                    possibleMoves.push(`${ID[coordinateX+i]}-${coordinateY+i}`);
                };
                break;
            } else {
                possibleMoves.push(`${ID[coordinateX+i]}-${coordinateY+i}`);
            }
        }
        
        // down left
        var downLeft: number;
        if (coordinateY - 1 < coordinateX - 1) {
            downLeft = coordinateY;
        } else {
            downLeft = coordinateX;
        }
        for(let i=1 ; i < downLeft; i++){
            if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                if (!(document.getElementById(`${ID[coordinateX - i]}-${coordinateY - i}`)!.getElementsByTagName("img")[0]!.classList.contains(`${this.color}`))){
                    possibleMoves.push(`${ID[coordinateX - i]}-${coordinateY - i}`);
                };
                break;
            } else {
                possibleMoves.push(`${ID[coordinateX - i]}-${coordinateY - i}`);
            }
        }

        // move by second diagonal
        // top left
        var topLeft: number;
        if (coordinateX < 9 - coordinateY) {
            topLeft = coordinateX;
        } else {
            topLeft = 9 - coordinateY;
        }
        for(let i = 1; i < topLeft; i++){
            if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY+i}`)!.classList.contains('pieceInside')) {
                if (!(document.getElementById(`${ID[coordinateX-i]}-${coordinateY+i}`)!.getElementsByTagName("img")[0]!.classList.contains(`${this.color}`))){
                    possibleMoves.push(`${ID[coordinateX-i]}-${coordinateY+i}`);
                };
                break;
            } else {
                possibleMoves.push(`${ID[coordinateX-i]}-${coordinateY+i}`);
            }
        }
        
        // down right
        var downRight: number;
        if (coordinateY < 9 - coordinateX) {
            downRight = coordinateY;
        } else {
            downRight = 9 - coordinateX;
        }
        for(let i = 1 ; i < downRight ; i++){
            if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                if (!(document.getElementById(`${ID[coordinateX+i]}-${coordinateY-i}`)!.getElementsByTagName("img")[0]!.classList.contains(`${this.color}`))){
                    possibleMoves.push(`${ID[coordinateX+i]}-${coordinateY-i}`);
                };
                break;
            } else {
                possibleMoves.push(`${ID[coordinateX + i]}-${coordinateY - i}`);
            }
        }
        return possibleMoves;
    }
    
    move():void{
        this.removeClassActive();

        const possibleMovesArr:string[] = this.showPossibleMoves();
        // console.log(possibleMovesArr);
        
        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
        
            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    if (square!.innerHTML != '') {
                        Game.beat(square as HTMLElement);
                    }
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    Game.checkingKings();
                }
            },{capture: true});

        });
    }

}

export {Bishop};