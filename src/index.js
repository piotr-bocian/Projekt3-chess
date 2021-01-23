import {Board} from "./js-components/board";
import {King} from "./js-components/pieces/king";

var gameBoard = new Board();
gameBoard.drawBoard();

var kingWhite = new King('white', 'B', 4);
kingWhite.setOnBoard(0, 0);