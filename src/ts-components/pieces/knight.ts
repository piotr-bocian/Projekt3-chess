import { Piece } from "./piece";
import { ID } from "../board";
//skoczek / koń
class Knight extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():void{
        document.querySelectorAll('.active')!.forEach((e) => {
            // e.removeEventListener;
            e.classList.remove('active');
        });
        let possibleMovesIds: string[] = [];
        const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
        const coordinateY : number = this.positionY;
        // console.log(coordinateX, coordinateY);

        for (let i = coordinateX -2; i <= coordinateX + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateY -1; j <= coordinateY +1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        possibleMovesIds.push(`${ID[i]}-${j}`);
                    }
                }
            }
        }

        for (let i = coordinateY -2; i <= coordinateY + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateX -1; j <= coordinateX +1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        possibleMovesIds.push(`${ID[j]}-${i}`);
                    }
                }
            }
        }
        console.log(possibleMovesIds);
        possibleMovesIds.forEach((id) => {
            if (!document.querySelector(`#${id}`)!.classList.contains('pieceInside')){
                document.querySelector(`#${id}`)!.classList.add('active');
            }
        });

        // const moveKnight = (e: HTMLElement) => {
        //     if(e.classList.contains('active')){
        //         const coorX = e.id.charAt(0);
        //         const coorY = parseInt(e.id.charAt(2));
        //         // console.log(coordinateX, coordinateY);
        //         this.setOnBoard(coorX, coorY);
        //         document.querySelectorAll('.active')!.forEach(elem => {
        //             elem.classList.remove('active');
        //         });
        //     }
        // }

        document.querySelectorAll('.active')!.forEach((possMove) => {
            possMove.addEventListener('click', () => {
                console.log(possMove);
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if(possMove.classList.contains('active')){
                    // console.log(coordinateX, coordinateY);
                    this.setOnBoard(coorX, coorY);
                    document.querySelectorAll('.active')!.forEach(e => {
                        e.classList.remove('active');
                    });
                }
            });
        });
    }
}




export {Knight};