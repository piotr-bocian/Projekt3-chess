import {Piece} from "./piece";
import {ID} from "./../board";
import { Game } from "../game";
import { Knight } from "./knight";

class King extends Piece{

    private dangerZones:string[]; //<-- ID pól na które król nie może się przemieścić
    private isChecked:boolean;

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury
        this.dangerZones = this.getKnightDanger();
        this.isChecked = this.getChecked();

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():string[]{ //<-- ta metoda zwraca tablicę ID pól na które może przemieścić się król
        const possibleMoves:string[] = [];

        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        this.dangerZones = this.getKnightDanger();

        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                const square = document.querySelector(`#${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                if(square != null && square.innerHTML == "" && this.dangerZones.indexOf(`${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`) === -1)
                    possibleMoves.push(`${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
            }
        }
        
        return possibleMoves;
    }

    move():void{    //<-- ta metoda oznacza odpowiednie pola klasą css (aby gracz wiedział że można na nie przejść) oraz nadaje im listenery, które po kliknięciu ustawiają figurę na odpowienim polu
        this.removeClassActive();

        const possibleMovesArr:string[] = this.showPossibleMoves();

        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
            
            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                }
            });

        });
    }

    getChecked():boolean{
        if(this.getKnightDanger().indexOf(`#${this.positionX}-${this.positionY}`) !== -1){
            return true;
        }
        else
            return false;
    }

    getKnightDanger():string[]{ //<-- metoda zwracająca pola, na których król mogłby zostać "zbity" przez skoczka
        const dangerArr:string[] = [];

        if(this.color === 'white'){
            for(let p of Game.getBlacks()){
                if(p instanceof Knight){
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    })
                }
            }
        }
        else{
            for(let p of Game.getWhites()){
                if(p instanceof Knight){
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    })
                }
            }
        }

        return dangerArr;
    }
}

export {King};