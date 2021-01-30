import {Piece} from "./piece";
import { ID } from "../board";
//goniec / laufer


class Bishop extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Bishop.png`;

        this.setOnBoard(this.positionX, this.positionY);
        let $self = this;
    }

    showPossibleMoves():void{
        this.removeClassActive();
        const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
        const coordinateY : number = this.positionY;
        if (this.color === 'white') {

            // move by one diagonal

            if (9 - coordinateX < 9 - coordinateY) {
                for(let i=1; i<9 - coordinateX; i++){
                    document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.classList.add('active');
                }
            } else {
                for(let i=1; i < 9 - coordinateY; i++){
                    document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.classList.add('active');
                }
            }

            if (coordinateY - 1 < coordinateX - 1) {
                for(let i=coordinateY -1 ; i > 0 ; i--){
                    document.getElementById(`${ID[coordinateX - i]}-${coordinateY - i}`)!.classList.add('active');
                }
            } else {
                for(let i=coordinateX -1 ; i > 0 ; i--){
                    document.getElementById(`${ID[coordinateX - i]}-${coordinateY - i}`)!.classList.add('active');
                }
            }

            // move by second diagonal

            if (coordinateX - 1 < 9 - coordinateY) {
                for(let i=coordinateX - 1; i>0; i--){
                    document.getElementById(`${ID[coordinateX-i]}-${coordinateY+i}`)!.classList.add('active');
                }
            } else {
                for(let i=1; i < 9-coordinateY; i++) {
                    document.getElementById(`${ID[coordinateX - i]}-${coordinateY + i}`)!.classList.add('active');
                }
            }
            
            if (coordinateY - 1 < 9 - coordinateX) {
                for(let i=coordinateY -1 ; i > 0 ; i--){
                    document.getElementById(`${ID[coordinateX + i]}-${coordinateY - i}`)!.classList.add('active');
                }
            } else {
                for(let i=1; i < 9-coordinateX; i++) {
                    document.getElementById(`${ID[coordinateX + i]}-${coordinateY - i}`)!.classList.add('active');
                }
            }
        } 
        
        document.querySelectorAll('.active').forEach((possibleMove) => {                 
            possibleMove.addEventListener('click', () => {
                const posX = possibleMove.id.charAt(0);
                const posY = parseInt(possibleMove.id.charAt(2));
                if(possibleMove.classList.contains('active')){
                    this.setOnBoard(posX, posY);
                    this.removeClassActive();
                }                
            });      
        })
    }

    moveBishop(possibleMove:HTMLElement):void {
        const posX = possibleMove.id.charAt(0);
        const posY = parseInt(possibleMove.id.charAt(2));
        this.setOnBoard(posX, posY);
    }

    removeClassActive(): void {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i]!.classList.remove('active');
        }
    }

}

export {Bishop};