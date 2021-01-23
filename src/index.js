import {Board} from "./js-components/board";
import {King} from "./js-components/pieces/king";

var gameBoard = new Board();
gameBoard.drawBoard();

var kingWhite = new King('white', 'C', 4);
kingWhite.setOnBoard('C', 1);