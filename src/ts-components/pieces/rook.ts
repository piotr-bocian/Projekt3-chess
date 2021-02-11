"use stricte"

import {Piece} from "./piece";
import {ID} from "./../board";
import { Game } from "../game";

//wieża
class Rook extends Piece{

    public hasMoved:boolean = false;

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves(): string[]{
        this.removeClassActive();
        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());
        const PossibleMoves:any  = [];

        const rookLineX:string = this.getPositionX();
        const rookLineY:number = this.getPositionY();

        const checkYAxis = ()=>{
            // top
            //console.log(rookLineX,rookLineY)
            for(let i=rookLineY+1;i<=8;i++){
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${rookLineX}-${i}`)
                }
                else{
                    break;
                }
            }
            // bot
            for(let i=rookLineY-1;i>0;i--){
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${rookLineX}-${i}`)
                }
                else{
                    break;
                }
            }
        }
        const checkXAxis = ()=>{
            // right
            const clickedElementIndex = arrayOfX.indexOf(rookLineX)
            for(let i=clickedElementIndex;i<=6;i++){
                let squareY = document.querySelector(`#${arrayOfX[i+1]}-${rookLineY}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${arrayOfX[i+1]}-${rookLineY}`)
                }
                else{
                    break;
                }
            }
            // left
            for(let i=clickedElementIndex;i>0;i--){
                let squareY = document.querySelector(`#${arrayOfX[i-1]}-${rookLineY}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${arrayOfX[i-1]}-${rookLineY}`)
                }
                else{
                    break;
                }
            }
        }
        checkYAxis();
        checkXAxis();
        // const squares:NodeList = document.querySelectorAll('.board-container div');
        // squares.forEach(square => {
        //     square.addEventListener('click', (e) => {
        //         let pickedFigure = e.currentTarget;

        //         if(!((square as HTMLElement).classList.contains('pieceInside')) && (square as HTMLElement).classList.contains('active')   && (Game.getLastChosen() === this)){
        //             this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
        //             squares.forEach(square => (square as HTMLElement).classList.remove('active'));
        //         }
        //     });
        // });
        // console.log(PossibleMoves)
        return PossibleMoves;
    }

    move():void{    //<-- ta metoda oznacza odpowiednie pola klasą css (aby gracz wiedział że można na nie przejść) oraz nadaje im listenery, które po kliknięciu ustawiają figurę na odpowienim polu
        this.removeClassActive();

        const possibleMovesArr:string[] = this.showPossibleMoves();

        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    if (square!.innerHTML != '') {
                        Game.beat(square! as HTMLElement);
                    }
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
                    Game.checkingKings();
                }
            }, {capture: true});

        });
    }
}
export {Rook};