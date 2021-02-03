import {Piece} from "./piece";
import {Game} from "../game";
import {Queen} from "./queen";
import {Knight} from "./knight";
import {Rook} from "./rook";
import {Bishop} from "./bishop";


//pion
class Pawn extends Piece {
    
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.setOnBoard(this.positionX, this.positionY);      
        
    }


    showPossibleMoves(): string[] {
        this.removeClassActive();

        let posXAttack1 = this.nextChar(this.positionX);
        console.log(posXAttack1);
        let posXAttack2 = this.previousChar(this.positionX);
        console.log(posXAttack2);

        let possibleMovesIds: string[] = [];
        let possibleAttackMovesIds: string[] = [];

        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`)!;

            let attack1 = document.getElementById(`${posXAttack1}-${positionY1}`)!;
            let attack2 = document.getElementById(`${posXAttack2}-${positionY1}`)!;

            // ATTACK
            if (attack1 !== null) {
                if (attack1.classList.contains('pieceInside') && !(attack1.querySelector('img')!.classList.contains(`${this.color}`))) {
                    possibleAttackMovesIds.push(`${posXAttack1}-${positionY1}`);
                }
            }

            if (attack2 !== null) {
                if (attack2.classList.contains('pieceInside') && !(attack2.querySelector('img')!.classList.contains(`${this.color}`))) {
                    possibleAttackMovesIds.push(`${posXAttack2}-${positionY1}`);
                }
            }

            // MOVES
            if (this.positionY === 2 && !(positionY2.matches('.pieceInside'))) {
                for (let i = 3; i < 5; i++) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            } else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }

        } else {
            let positionY1 = this.positionY - 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`)!;
            let attack1 = document.getElementById(`${posXAttack1}-${positionY1}`)!;
            let attack2 = document.getElementById(`${posXAttack2}-${positionY1}`)!;

             // ATTACK
             if (attack1 !== null) {
                if (attack1.classList.contains('pieceInside')) {
                    possibleAttackMovesIds.push(`${posXAttack1}-${positionY1}`);
                }
            }

            if (attack2 !== null) {
                if (attack2.classList.contains('pieceInside')) {
                    possibleAttackMovesIds.push(`${posXAttack2}-${positionY1}`);
                }
            }

            // MOVES
            if (this.positionY === 7 && !(positionY2.matches('.pieceInside'))) {
                for (let i = 6; i > 4; i--) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            } else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }
        }

        let allPossibleMovesIds: string[] = possibleMovesIds.concat(possibleAttackMovesIds);
        return allPossibleMovesIds;
    }

    move(): void {
        const possibilities: string[] = this.showPossibleMoves();
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`)!.classList.add('active');
        });

        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if (possMove.classList.contains('active') && (Game.getLastChosen() === this)) {
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                }
                if (this.color === 'white' && coorY === 8 && this.parentSquare.querySelector('img')!.src.includes('Pawn')) {
                    this.parentSquare.appendChild(this.pawnPromotion(this))
                } 
            })
        })
    }

    nextChar(posXRight: string): string {
        return String.fromCharCode(posXRight.charCodeAt(0) + 1);
    }

    previousChar(posXRight: string): string {
        return String.fromCharCode(posXRight.charCodeAt(0) - 1);
    }

    // promotion

    pawnPromotion (pawn:Pawn) {
        console.log(Game.getWhites());
        const modalWindowPawn = document.createElement("div");
        modalWindowPawn.className = "modal-window";
    
        const promotionArray = ['Knight', 'Queen', 'Bishop', 'Rook'];
        const parentSquare = document.getElementById(`${pawn.getPositionX}`)!;
    
    
        const pieces = [
            {pieceName: Queen, name: "Queen", handler: ''},
            {pieceName: Rook, name: "Rook", handler: ''},
            {pieceName: Knight, name: "Knight", handler: ''},
            {pieceName: Bishop, name: "Bishop", handler: ''}
        ]
    
         
        for (const piece of pieces) {
            const { handler, pieceName: PieceName } = piece;

            const selectableFigure = document.createElement("img");
            selectableFigure.setAttribute('src', `../../../static/assets/white${piece.name}.png`)
            selectableFigure.style.height = '90px';
            modalWindowPawn.appendChild(selectableFigure);

            selectableFigure.addEventListener('click', () => {
                console.log(`#${pawn.getPositionX()}-8`);
                document.querySelector(`#${pawn.getPositionX()}-8`)!.removeChild(modalWindowPawn);
                const pieceToCreate = new PieceName('white', `${pawn.getPositionX()}`, 8);
                let whites = Game.getWhites();
                whites.push(pieceToCreate);
                const pawnToRemove = whites.indexOf(pawn);
                whites.splice(pawnToRemove, 1);
            })            
        }    
    
        return modalWindowPawn;
    };

}

export {Pawn};