interface MovesShow {
   (id:string):void
}

interface QueenMethods {
   showPossibleMoves():string[];
   move():void;
   collectAllPossibleMoves():string[];
   removeClassActive():void;
}
export {MovesShow, QueenMethods }