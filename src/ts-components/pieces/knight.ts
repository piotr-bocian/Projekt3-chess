import { Piece } from "./piece";
import { ID } from "../board";
import { Game } from "../game"
//skoczek / koń
class Knight extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves(): string []{
        //this.removeClassActive();
        const allPossibleIds: string[] = []; // przechowuje wszystkie możliwe ID - łącznie z tymi na których stoją inne figury - przyda się do spr. czy stoją figury innego koloru i zbijania
        this.possibleMovesIDs = []; // tu trafiają tylko możliwe ruchy figury
        const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
        const coordinateY : number = this.positionY;

        // wypłenienie tablicy wszystkimi możliwymi ruchami - bez sprawdzenia czy stoją na polach inne bierki
        for (let i = coordinateX -2; i <= coordinateX + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateY -1; j <= coordinateY +1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        allPossibleIds.push(`${ID[i]}-${j}`);
                    }
                }
            }
        }

        for (let i = coordinateY -2; i <= coordinateY + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateX -1; j <= coordinateX +1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        allPossibleIds.push(`${ID[j]}-${i}`);
                    }
                }
            }
        }

        // Sprawdzenie czy na polu nie stoi żadna figura lub czy figura ma taki kolor jak atakująca, jesli nie to dodaję ID do właściwej - zwracanej tablicy.
        allPossibleIds.forEach((id) => {
            if (!(document.querySelector(`#${id}`)!.querySelector('img')?.classList.contains(`${this.color}`)) || document.querySelector(`#${id}`)!.innerHTML == ''){
                this.possibleMovesIDs.push(id);
            }
        });

        return this.possibleMovesIDs;
    }
    
    move(): void {
        this.removeClassActive();
        const possibilities: string[] = this.showPossibleMoves();
        possibilities.forEach((id) => {
            document.querySelector(`#${id}`)!.classList.add('active');
        });
        //adding event listener to each field with active class to perform a figure's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if(possMove.classList.contains('active') && (Game.getLastChosen() === this)){
                    if (possMove.innerHTML != '') {
                        Game.beat(possMove as HTMLElement);
                    }
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                    Game.checkingKings();
                    //console.log(possMove.innerHTML);
                }
            },{capture: true});
        });
    }
}

export {Knight};