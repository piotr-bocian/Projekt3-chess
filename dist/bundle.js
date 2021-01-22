/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/board */ \"./src/js-components/board.js\");\n/* harmony import */ var _js_components_pieces_king__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/pieces/king */ \"./src/js-components/pieces/king.js\");\n\r\n\r\n\r\nvar gameBoard = new _js_components_board__WEBPACK_IMPORTED_MODULE_0__.Board();\r\ngameBoard.drawBoard();\r\n\r\nvar kingWhite = new _js_components_pieces_king__WEBPACK_IMPORTED_MODULE_1__.King('white', 7, 4);\r\n//kingWhite.setOnBoard(0, 0);\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/board.js":
/*!************************************!*\
  !*** ./src/js-components/board.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\nclass Board {\r\n    drawBoard() {\r\n        const boardContainer = document.createElement('div');\r\n        boardContainer.classList.add('board-container');\r\n        for (let i = 0; i < 8; i++) {\r\n            for (let j = 0; j < 8; j++) {\r\n                const div = document.createElement('div');\r\n                div.id = `${i}-${j}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych\r\n                if (i % 2 === 0)\r\n                    div.classList.add(`${j % 2 === 0 ? 'light' : 'dark'}`);\r\n                else\r\n                    div.classList.add(`${j % 2 === 0 ? 'dark' : 'light'}`);\r\n                boardContainer.appendChild(div);\r\n            }\r\n        }\r\n        document.querySelector('body').appendChild(boardContainer);\r\n    }\r\n}\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/board.js?");

/***/ }),

/***/ "./src/js-components/pieces/king.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/king.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.King = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\nclass King extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = color === 'white' ? '♔' : '♚'; //<-- w przyszłości bedzie tu ścieżka do img figury\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    showPossibleMoves() {\r\n        //kod odpowiadający za pokazanie możliwych ruchów\r\n    }\r\n}\r\nexports.King = King;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/king.js?");

/***/ }),

/***/ "./src/js-components/pieces/piece.js":
/*!*******************************************!*\
  !*** ./src/js-components/pieces/piece.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Piece = void 0;\r\nclass Piece {\r\n    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...\r\n    constructor(color, positionX, positionY) {\r\n        this.symbol = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol\r\n        this.color = color;\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura\r\n    }\r\n    setOnBoard(pX, pY) {\r\n        this.parentSquare.innerHTML = '';\r\n        this.updatePosition(pX, pY);\r\n        this.parentSquare.appendChild(document.createTextNode(this.symbol));\r\n    }\r\n    updatePosition(pX, pY) {\r\n        this.positionX = pX;\r\n        this.positionY = pY;\r\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);\r\n    }\r\n}\r\nexports.Piece = Piece;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/piece.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;