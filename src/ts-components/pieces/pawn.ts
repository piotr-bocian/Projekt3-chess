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
        //this.removeClassActive();

        let posXAttack1 = this.nextChar(this.positionX);

        let posXAttack2 = this.previousChar(this.positionX);


        let possibleMovesIds: string[] = [];
        let possibleAttackMovesIds: string[] = [];
        let possibleEnPassant: string[] = [];

        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`)!;

            let positionY3 = this.positionY + 2;
            let positionY4 = document.getElementById(`${this.positionX}-${positionY3}`)!;

            let attack1 = document.getElementById(`${posXAttack1}-${positionY1}`)!;
            let attack2 = document.getElementById(`${posXAttack2}-${positionY1}`)!;

            let pawnPos = document.getElementById(`${posXAttack1}-${this.positionY}`)!;

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
            if (this.positionY === 2 && !(positionY2.matches('.pieceInside')) && !(positionY4.matches('.pieceInside'))) {
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

            let positionY3 = this.positionY - 2;
            let positionY4 = document.getElementById(`${this.positionX}-${positionY3}`)!;

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
            if (this.positionY === 7 && !(positionY2.matches('.pieceInside')) && !(positionY4.matches('.pieceInside'))) {
                for (let i = 6; i > 4; i--) {
                    possibleMovesIds.push(`${this.positionX}-${i}`);
                }
            } else if (!(positionY2.matches('.pieceInside'))) {
                possibleMovesIds.push(`${this.positionX}-${positionY1}`);
            }
        }

        let allPossibleMovesIds: string[] = possibleMovesIds.concat(possibleAttackMovesIds).concat(possibleEnPassant);
        return allPossibleMovesIds;
    }

    getAttacks():string[]{
        const attacksArr:string[] = [];

        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        if(this.color === 'white'){
            const upLeft = document.querySelector(`#${arrayOfX[indexOfX-1]}-${this.positionY + 1}`);
            const upRight = document.querySelector(`#${arrayOfX[indexOfX+1]}-${this.positionY + 1}`);
            if(upLeft !== null)
                attacksArr.push(`${arrayOfX[indexOfX-1]}-${this.positionY + 1}`);
            if(upRight !== null)
            attacksArr.push(`${arrayOfX[indexOfX+1]}-${this.positionY + 1}`);
        }
        else{
            const downLeft = document.querySelector(`#${arrayOfX[indexOfX-1]}-${this.positionY - 1}`);
            const downRight = document.querySelector(`#${arrayOfX[indexOfX+1]}-${this.positionY - 1}`);
            if(downLeft !== null)
                attacksArr.push(`${arrayOfX[indexOfX-1]}-${this.positionY - 1}`);
            if(downRight !== null)
            attacksArr.push(`${arrayOfX[indexOfX+1]}-${this.positionY - 1}`);
        }

        return attacksArr;
    }

    move(): void {
        this.removeClassActive();
        const showEnPassant: string[] = this.enPassant();
        let possibilities: string[] = this.showPossibleMoves();

        possibilities = this.defendKing(possibilities);
        
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`)!.classList.add('active');
        });

        showEnPassant.forEach((id) => {
            document.querySelector(`#${id}`)!.classList.add('active');
            document.querySelector(`#${id}`)!.classList.add('en-pass');
        });

        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                const enPass = document.getElementById(`${coorX}-${(coorY - 1)}`)!;

                if (possMove.classList.contains('active') && (Game.getLastChosen() === this)) {
                    if (possMove.innerHTML != '') {
                        Game.beat(possMove as HTMLElement);
                    }
                    if (possMove.classList.contains('en-pass')) {
                        Game.beat(enPass as HTMLElement);
                        possMove.classList.remove('en-pass');
                        enPass.classList.remove('pieceInside');
                    }
                    this.history(possMove);
                    this.historyNotation();
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                    Game.checkingKings();

                    if (this.color === 'white' && this.positionY === 8 && this.parentSquare.querySelector('img')!.src.includes('Pawn')) {
                        this.parentSquare.appendChild(this.pawnPromotion(this))
                        this.parentSquare.classList.add('promotion');
                    } else if (this.positionY === 1 && this.parentSquare.querySelector('img')!.src.includes('Pawn')){
                        this.parentSquare.appendChild(this.pawnPromotion(this))
                    } 
                }
                
            }, {capture: true})
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
        this.removeClassActive();
        const pieces = [
            {pieceName: Queen, name: "Queen", handler: ''},
            {pieceName: Rook, name: "Rook", handler: ''},
            {pieceName: Knight, name: "Knight", handler: ''},
            {pieceName: Bishop, name: "Bishop", handler: ''}
        ]

        const modalWindowPawn = document.createElement("div");
        
        const parentSquare = document.getElementById(`${pawn.getPositionX}`)!;

        if (this.color === 'white') {

            modalWindowPawn.className = "modal-window-white";

            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../static/assets/white${piece.name}.png`)
                selectableFigure.style.height = '90px';
                const { handler, pieceName: PieceName } = piece;

                modalWindowPawn.appendChild(selectableFigure);

                selectableFigure.addEventListener('click', () => {
                    
                    document.querySelector(`#${pawn.getPositionX()}-8`)!.removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('white', `${pawn.getPositionX()}`, 8);
                    let whites = Game.getWhites();
                    whites.push(pieceToCreate);
                    this.parentSquare.classList.remove('promotion');
                    const pawnToRemove = whites.indexOf(pawn);
                    whites.splice(pawnToRemove, 1);
                    Game.changeTurn();
                })            
            }   
        } else {
            modalWindowPawn.className = "modal-window-black";

            for (const piece of pieces) {
                const selectableFigure = document.createElement("img");
                selectableFigure.setAttribute('src', `../../../static/assets/black${piece.name}.png`)
                selectableFigure.style.height = '90px';
                const { handler, pieceName: PieceName } = piece;

                modalWindowPawn.appendChild(selectableFigure);

                selectableFigure.addEventListener('click', () => {
                    
                    document.querySelector(`#${pawn.getPositionX()}-1`)!.removeChild(modalWindowPawn);
                    const pieceToCreate = new PieceName('black', `${pawn.getPositionX()}`, 1);
                    let blacks = Game.getBlacks();
                    blacks.push(pieceToCreate);
                    this.parentSquare.classList.remove('promotion');
                    const pawnToRemove = blacks.indexOf(pawn);
                    blacks.splice(pawnToRemove, 1);
                    Game.changeTurn();
                })            
            }   
        }

        return modalWindowPawn;
    };

    //en passant
    enPassant() {
        let pawnPosX = this.nextChar(this.positionX) //|| this.previousChar(this.positionX);
        let pawnPos = document.getElementById(`${pawnPosX}-${this.positionY}`)!;

        let positionY1 = this.positionY + 1;
        let emptySquare1 = document.getElementById(`${pawnPosX}-${positionY1}`)!;

        let positionY2 = this.positionY - 1;
        let emptySquare2 = document.getElementById(`${pawnPosX}-${positionY2}`)!;
        const enPassant = [];

        if (this.color === 'white'
        && this.positionY === 5
        && pawnPos.querySelector('img')?.src.includes('Pawn')
        && !(emptySquare1.classList.contains('pieceInside'))) {
            enPassant.push(`${pawnPosX}-${positionY1}`);
        }

        if (this.color === 'black' 
        && this.positionY === 4 
        && pawnPos.querySelector('img')?.src.includes('Pawn')
        && emptySquare1.classList.contains('pieceInside')) {
            enPassant.push(`${pawnPosX}-${positionY1}`);
        }

        return enPassant;
    }



}

export {Pawn};