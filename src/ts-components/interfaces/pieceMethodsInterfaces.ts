interface MovesShow {
   (id:string):void
}

interface QueenMethods {
   showPossibleMoves():string[];
   queenMove():void;
   collectAllPossibleMoves():string[];
   removeClassActive():void;

}
export {MovesShow, QueenMethods }