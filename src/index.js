import {Board} from "./js-components/board";
import {King} from "./js-components/pieces/king";
import {Queen} from "./js-components/pieces/queen";
import {Bishop} from "./js-components/pieces/bishop";
import {Knight} from "./js-components/pieces/knight";
import {Rook} from "./js-components/pieces/rook";
import {Pawn} from "./js-components/pieces/pawn";

var gameBoard = new Board();
gameBoard.drawBoard();

var kingWhite = new King('white', 'E', 1);
// kingWhite.setOnBoard('C', 1);

var queenWhite = new Queen('white', 'D', 1);
var bishopWhite = new Bishop('white', 'C', 1);
var bishopWhite2 = new Bishop('white', 'F', 1);
var knightWhite = new Knight('white', 'B', 1);
var knightWhite2 = new Knight('white', 'G', 1);
var rookWhite = new Rook('white', 'A', 1);
var rookWhite2 = new Rook('white', 'H', 1);
var pawnWhite = new Pawn('white', 'A', 2);
var pawnWhite2 = new Pawn('white', 'B', 2);
var pawnWhite3 = new Pawn('white', 'C', 2);
var pawnWhite4 = new Pawn('white', 'D', 2);
var pawnWhite5 = new Pawn('white', 'E', 2);
var pawnWhite6 = new Pawn('white', 'F', 2);
var pawnWhite7 = new Pawn('white', 'G', 2);
var pawnWhite8 = new Pawn('white', 'H', 2);