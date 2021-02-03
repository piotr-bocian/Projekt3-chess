interface MovesShow {
   (id:string):void
}

interface QueenMethods {
   showPossibleMoves():void;
   queenMove():void;
   collectAllPossibleMoves():string[];
   removeClassActive():void;

}
export {MovesShow, QueenMethods }