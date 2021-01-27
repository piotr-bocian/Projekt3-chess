import {Piece} from "./piece";
//pion
class Pawn extends Piece{

    
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;

        this.setOnBoard(this.positionX, this.positionY);
        
        // this.parentSquare.addEventListener('click', this.showPossibleMoves);
        let $self = this;
        this.parentSquare.addEventListener("click", this.showPossibleMoves.bind(this));
    }


    showPossibleMoves(): void {


        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;

            if (document.getElementById(`${this.positionX}-${positionY1}`)!.classList.contains('pieceInside')) {
                console.log('no possible moves!');
                return;
            }

            if (this.positionY === 2) {
                for(let i=2; i<5; i++){
                    document.getElementById(`${this.positionX}-${i}`)!.classList.add('active');
                }
            } else {
                document.getElementById(`${this.positionX}-${positionY1}`)!.classList.add('active');
            }
        } else {
            let positionY1 = this.positionY - 1;

            if (this.positionY === 7) {
                for(let i=7; i>4; i--){
                    document.getElementById(`${this.positionX}-${i}`)!.classList.add('active');
                }
            } else {
                document.getElementById(`${this.positionX}-${positionY1}`)!.classList.add('active');
            }
        }
    }

    // addEventList() {
        
    // }


}

export {Pawn};