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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/board */ \"./src/js-components/board.js\");\n/* harmony import */ var _js_components_fillBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/fillBoard */ \"./src/js-components/fillBoard.js\");\n/* harmony import */ var _js_components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-components/game */ \"./src/js-components/game.js\");\n\n\n\n\n// const gameBoard = new Board();\n// gameBoard.drawBoard();\n// fillBoard();\n\nconst game = new _js_components_game__WEBPACK_IMPORTED_MODULE_2__.Game();\n\ndocument.querySelectorAll('.light').forEach(element => {\n    element.addEventListener('click', selectPiece)\n});\ndocument.querySelectorAll('.dark').forEach(element => {\n    element.addEventListener('click', selectPiece)\n});\n\nfunction selectPiece(e){\n    if(e.target.parentElement.classList.contains('pieceInside'))\n        game.startMove(e.target.parentElement);\n}\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/board.js":
/*!************************************!*\
  !*** ./src/js-components/board.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ID = exports.Board = void 0;\nvar ID;\n(function (ID) {\n    ID[ID[\"A\"] = 1] = \"A\";\n    ID[ID[\"B\"] = 2] = \"B\";\n    ID[ID[\"C\"] = 3] = \"C\";\n    ID[ID[\"D\"] = 4] = \"D\";\n    ID[ID[\"E\"] = 5] = \"E\";\n    ID[ID[\"F\"] = 6] = \"F\";\n    ID[ID[\"G\"] = 7] = \"G\";\n    ID[ID[\"H\"] = 8] = \"H\";\n})(ID || (ID = {}));\nexports.ID = ID;\nclass Board {\n    drawBoard() {\n        const boardWrapper = document.createElement('div');\n        boardWrapper.classList.add('board-wrapper');\n        const letters = document.createElement('div');\n        letters.classList.add('letters');\n        const numbers = document.createElement('div');\n        numbers.classList.add('numbers');\n        const boardContainer = document.createElement('div');\n        boardContainer.classList.add('board-container');\n        for (let i = 1; i < 9; i++) {\n            const div = document.createElement('div');\n            div.classList.add('notation');\n            div.innerText = `${ID[i]}`;\n            letters.appendChild(div);\n        }\n        for (let i = 8; i > 0; i--) {\n            const num = document.createElement('div');\n            num.innerText = `${i}`;\n            numbers.appendChild(num);\n        }\n        for (let i = 8; i > 0; i--) {\n            for (let j = 1; j < 9; j++) {\n                const div = document.createElement('div');\n                div.id = `${ID[j]}-${i}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych\n                if (i % 2 === 0)\n                    div.classList.add(`${j % 2 === 0 ? 'dark' : 'light'}`);\n                else\n                    div.classList.add(`${j % 2 === 0 ? 'light' : 'dark'}`);\n                boardContainer.appendChild(div);\n            }\n        }\n        document.querySelector('body').appendChild(boardWrapper).appendChild(numbers);\n        boardWrapper.appendChild(boardContainer);\n        boardWrapper.appendChild(letters);\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/board.js?");

/***/ }),

/***/ "./src/js-components/fillBoard.js":
/*!****************************************!*\
  !*** ./src/js-components/fillBoard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fillBoard = void 0;\nconst king_1 = __webpack_require__(/*! ./pieces/king */ \"./src/js-components/pieces/king.js\");\nconst queen_1 = __webpack_require__(/*! ./pieces/queen */ \"./src/js-components/pieces/queen.js\");\nconst bishop_1 = __webpack_require__(/*! ./pieces/bishop */ \"./src/js-components/pieces/bishop.js\");\nconst knight_1 = __webpack_require__(/*! ./pieces/knight */ \"./src/js-components/pieces/knight.js\");\nconst rook_1 = __webpack_require__(/*! ./pieces/rook */ \"./src/js-components/pieces/rook.js\");\nconst pawn_1 = __webpack_require__(/*! ./pieces/pawn */ \"./src/js-components/pieces/pawn.js\");\nconst board_1 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\nconst fillBoard = () => {\n    // whites\n    const kingWhite = new king_1.King('white', `${board_1.ID[5]}`, 1);\n    const queenWhite = new queen_1.Queen('white', `${board_1.ID[4]}`, 1);\n    for (let i = 3; i <= 6; i += 3) {\n        const bishopWhite = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 1);\n    }\n    for (let i = 2; i <= 7; i += 5) {\n        const knightWhite = new knight_1.Knight('white', `${board_1.ID[i]}`, 1);\n    }\n    for (let i = 1; i <= 8; i += 7) {\n        const rookWhite = new rook_1.Rook('white', `${board_1.ID[i]}`, 1);\n    }\n    for (let i = 1; i <= 8; i++) {\n        const pawnWhite = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 2);\n    }\n    // blacks\n    const kingBlack = new king_1.King('white', `${board_1.ID[5]}`, 8);\n    const queenBlack = new queen_1.Queen('white', `${board_1.ID[4]}`, 8);\n    for (let i = 3; i <= 6; i += 3) {\n        const bishopBlack = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 8);\n    }\n    for (let i = 2; i <= 7; i += 5) {\n        const knightBlack = new knight_1.Knight('white', `${board_1.ID[i]}`, 8);\n    }\n    for (let i = 1; i <= 8; i += 7) {\n        const rookBlack = new rook_1.Rook('white', `${board_1.ID[i]}`, 8);\n    }\n    for (let i = 1; i <= 8; i++) {\n        const pawnBlack = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 7);\n    }\n};\nexports.fillBoard = fillBoard;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/fillBoard.js?");

/***/ }),

/***/ "./src/js-components/game.js":
/*!***********************************!*\
  !*** ./src/js-components/game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst board_1 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\nconst queen_1 = __webpack_require__(/*! ./pieces/queen */ \"./src/js-components/pieces/queen.js\");\nconst pawn_1 = __webpack_require__(/*! ./pieces/pawn */ \"./src/js-components/pieces/pawn.js\");\nconst board_2 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\nclass Game {\n    constructor() {\n        //private whoNext:string;\n        this.whites = [];\n        this.gameBoard = new board_1.Board;\n        this.gameBoard.drawBoard();\n        this.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));\n        // this.whites.push(new King('white', `${ID[5]}`, 1));\n        // for(let i = 3; i <= 6; i+=3) {\n        //     this.whites.push(new Bishop('white', `${ID[i]}`, 1));\n        // }\n        // for(let i = 2; i <= 7; i+=5) {\n        //     this.whites.push(new Knight('white', `${ID[i]}`, 1));\n        // }\n        // for(let i = 1; i <= 8; i+=7) {\n        //     this.whites.push(new Rook('white', `${ID[i]}`, 1));\n        // }\n        for (let i = 1; i <= 3; i++) {\n            this.whites.push(new pawn_1.Pawn('black', `${board_2.ID[i]}`, 2));\n        }\n    }\n    startMove(square) {\n        const x = square.id.charAt(0);\n        const y = parseInt(square.id.charAt(2));\n        for (let p of this.whites) {\n            if (p.getPositionX() == x && p.getPositionY() == y)\n                p.move();\n        }\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/game.js?");

/***/ }),

/***/ "./src/js-components/pieces/bishop.js":
/*!********************************************!*\
  !*** ./src/js-components/pieces/bishop.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bishop = void 0;\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\n//goniec / laufer\nclass Bishop extends piece_1.Piece {\n    constructor(color, positionX, positionY) {\n        super(color, positionX, positionY);\n        this.symbol = `../../../static/assets/${this.color}Bishop.png`;\n        this.setOnBoard(this.positionX, this.positionY);\n    }\n    showPossibleMoves() {\n        //kod odpowiadający za pokazanie możliwych ruchów\n    }\n}\nexports.Bishop = Bishop;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/bishop.js?");

/***/ }),

/***/ "./src/js-components/pieces/king.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/king.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.King = void 0;\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\nclass King extends piece_1.Piece {\n    constructor(color, positionX, positionY) {\n        super(color, positionX, positionY);\n        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury\n        this.setOnBoard(this.positionX, this.positionY);\n    }\n    showPossibleMoves() {\n        //kod odpowiadający za pokazanie możliwych ruchów\n    }\n}\nexports.King = King;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/king.js?");

/***/ }),

/***/ "./src/js-components/pieces/knight.js":
/*!********************************************!*\
  !*** ./src/js-components/pieces/knight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Knight = void 0;\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\n//skoczek / koń\nclass Knight extends piece_1.Piece {\n    constructor(color, positionX, positionY) {\n        super(color, positionX, positionY);\n        this.symbol = `../../../static/assets/${this.color}Knight.png`;\n        this.setOnBoard(this.positionX, this.positionY);\n    }\n    showPossibleMoves() {\n        //kod odpowiadający za pokazanie możliwych ruchów\n    }\n}\nexports.Knight = Knight;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/knight.js?");

/***/ }),

/***/ "./src/js-components/pieces/pawn.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/pawn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pawn = void 0;\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\n//pion\nclass Pawn extends piece_1.Piece {\n    constructor(color, positionX, positionY) {\n        super(color, positionX, positionY);\n        this.symbol = `../../../static/assets/${this.color}Pawn.png`;\n        // this.symbol = `../../../../Projekt3-chess/static/assets/whitePawn.png`;\n        this.setOnBoard(this.positionX, this.positionY);\n    }\n    showPossibleMoves() {\n        //kod odpowiadający za pokazanie możliwych ruchów\n    }\n}\nexports.Pawn = Pawn;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/pawn.js?");

/***/ }),

/***/ "./src/js-components/pieces/piece.js":
/*!*******************************************!*\
  !*** ./src/js-components/pieces/piece.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Piece = void 0;\nclass Piece {\n    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...\n    constructor(color, positionX, positionY) {\n        this.symbol = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol\n        this.color = color;\n        this.positionX = positionX;\n        this.positionY = positionY;\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura\n    }\n    setOnBoard(pX, pY) {\n        this.parentSquare.innerHTML = '';\n        this.parentSquare.classList.remove('pieceInside');\n        const img = document.createElement('img');\n        img.classList.add(`${this.color}`);\n        img.setAttribute('src', this.symbol);\n        this.updatePosition(pX, pY);\n        this.parentSquare.appendChild(img);\n        const imgContainer = img.parentElement;\n        imgContainer.classList.add('pieceInside');\n    }\n    updatePosition(pX, pY) {\n        this.positionX = pX;\n        this.positionY = pY;\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);\n    }\n    getPositionX() {\n        return this.positionX;\n    }\n    getPositionY() {\n        return this.positionY;\n    }\n}\nexports.Piece = Piece;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/piece.js?");

/***/ }),

/***/ "./src/js-components/pieces/queen.js":
/*!*******************************************!*\
  !*** ./src/js-components/pieces/queen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Queen = void 0;\nconst board_1 = __webpack_require__(/*! ../board */ \"./src/js-components/board.js\");\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\n//królowa / hetman\nclass Queen extends piece_1.Piece {\n    constructor(color, positionX, positionY, movesHistory, lastMove) {\n        super(color, positionX, positionY);\n        this.movesHistory = movesHistory;\n        this.lastMove = lastMove;\n        // this.symbol = `../../../static/assets/${this.color}Queen.png`;\n        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;\n        this.setOnBoard(this.positionX, this.positionY);\n        //tutaj trzymamy historię;\n        this.movesHistory = [];\n        this.lastMove;\n    }\n    showPossibleMoves() {\n        const allPossibleMoves = [];\n        this.collectAllPossibleMoves().forEach(id => {\n            allPossibleMoves.push(id);\n        });\n        return allPossibleMoves;\n    }\n    move() {\n        //TESTOWO WYWOLUJE TUTAJ\n        this.reverseMove();\n        ////\n        const movesShow = (id) => {\n            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];\n            movesPossibilities.forEach(el => {\n                el.classList.add('active');\n            });\n        };\n        //dodaje klase active na legalne ruchy\n        this.showPossibleMoves().forEach(id => {\n            movesShow(id);\n        });\n        const squares = [...document.querySelectorAll('.board-container div')];\n        squares.forEach(square => {\n            square.addEventListener('click', () => {\n                if (!(square).classList.contains('pieceInside') && (square).classList.contains('active')) {\n                    this.history(square);\n                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));\n                    this.removeClassActive();\n                }\n            });\n        });\n    }\n    //historia ruchów\n    history(square) {\n        const fromPositionX = this.getPositionX().toLowerCase();\n        const fromPositionY = this.getPositionY().toString();\n        //długa notacja algebraiczna dla piona\n        // if (this.constructor.name === 'Pawn'){\n        //     const actualMove = `${fromPositionX}${fromPositionY}-${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;\n        //     this.movesHistory.push(actualMove)\n        // }\n        // const constructorName = this.constructor.name === 'Knight' ? this.constructor.name[1]?.toUpperCase() : this.constructor.name[0]?.toUpperCase();\n        //długa notacja algebraiczna\n        // const actualMove = `${constructorName}${fromPositionX}${fromPositionY}-${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;\n        // this.movesHistory.push(actualMove)\n        ///////////////////////////////////////////////////////////\n        const opisowo = `${this.color} ${this.constructor.name} moved from ${fromPositionX}-${fromPositionY} to ${(square).id.charAt(0).toLowerCase()}-${parseInt((square).id.charAt(2))}`;\n        // this.movesHistory.push(opisowo);\n        this.lastMove = opisowo;\n        // console.log(this.movesHistory);\n        console.log(this.lastMove);\n    }\n    // prototyp cofania ruchów\n    reverseMove() {\n        //tablica ce wszystkimi ruchami pozostaje, działamy na kopii\n        const lastMove = this.movesHistory.slice();\n        //ponieważ usuwamy coś z tablicy mamy unie string|undefined, tworzymny więc type guard by wyeliminować undefined\n        document.querySelector('.btn')?.addEventListener('click', () => {\n            if (lastMove.length === 0) {\n                return;\n            }\n            ;\n            const popLasMove = lastMove.pop();\n            this.movesHistory.length = lastMove.length;\n            if (popLasMove) {\n                console.log(lastMove.length);\n                const positionX = popLasMove[4];\n                const positionY = popLasMove[5];\n                if (positionX && positionY) {\n                    this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));\n                }\n            }\n            else {\n                return;\n            }\n        });\n    }\n    collectAllPossibleMoves() {\n        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;\n        const moves = [];\n        const moveUp = () => {\n            for (let i = this.positionY + 1; i < 9; i++) {\n                const doc = document.getElementById(`${this.positionX}-${i}`);\n                const checker = doc.classList.contains('pieceInside');\n                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);\n                if (checker) {\n                    if (!colorCheck) {\n                        moves.push(`${this.positionX}-${i}`);\n                        return;\n                    }\n                }\n                else {\n                    moves.push(`${this.positionX}-${i}`);\n                }\n            }\n        };\n        const moveDown = () => {\n            for (let j = this.positionY - 1; j > 0; j--) {\n                const doc = document.getElementById(`${this.positionX}-${j}`);\n                const checker = doc.classList.contains('pieceInside');\n                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);\n                if (checker) {\n                    if (!colorCheck) {\n                        moves.push(`${this.positionX}-${j}`);\n                        return;\n                    }\n                }\n                else {\n                    moves.push(`${this.positionX}-${j}`);\n                }\n            }\n        };\n        const moveRight = () => {\n            for (let i = coordinateX + 1; i < 9; i++) {\n                const doc = document.getElementById(`${board_1.ID[i]}-${this.positionY}`);\n                const checker = doc.classList.contains('pieceInside');\n                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);\n                if (checker) {\n                    if (!colorCheck) {\n                        moves.push(`${board_1.ID[i]}-${this.positionY}`);\n                        return;\n                    }\n                }\n                else {\n                    moves.push(`${board_1.ID[i]}-${this.positionY}`);\n                }\n            }\n        };\n        const moveLeft = () => {\n            for (let i = coordinateX - 1; i > 0; i--) {\n                const doc = document.getElementById(`${board_1.ID[i]}-${this.positionY}`);\n                const checker = doc.classList.contains('pieceInside');\n                const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);\n                if (checker) {\n                    if (!colorCheck) {\n                        moves.push(`${board_1.ID[i]}-${this.positionY}`);\n                        return;\n                    }\n                }\n                else {\n                    moves.push(`${board_1.ID[i]}-${this.positionY}`);\n                }\n            }\n        };\n        const diagonalMoves = () => {\n            // top right\n            if (9 - coordinateX < 9 - this.positionY) {\n                for (let i = 1; i < 9 - coordinateX; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                    }\n                }\n            }\n            else {\n                for (let i = 1; i < 9 - this.positionY; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY + i}`);\n                    }\n                }\n            }\n            // down left\n            if (this.positionY - 1 < coordinateX - 1) {\n                for (let i = 1; i < this.positionY; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                    }\n                }\n            }\n            else {\n                for (let i = 1; i < coordinateX; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY - i}`);\n                    }\n                }\n            }\n            // top left\n            if (coordinateX < 9 - this.positionY) {\n                for (let i = 1; i < coordinateX; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                    }\n                }\n            }\n            else {\n                for (let i = 1; i < 9 - this.positionY; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX - i]}-${this.positionY + i}`);\n                    }\n                }\n            }\n            // down right\n            if (this.positionY < 9 - coordinateX) {\n                for (let i = 1; i < this.positionY; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                    }\n                }\n            }\n            else {\n                for (let i = 1; i < 9 - coordinateX; i++) {\n                    const doc = document.getElementById(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                    const checker = doc.classList.contains('pieceInside');\n                    const colorCheck = doc.querySelector(\"img\")?.classList.contains(`${this.color}`);\n                    if (checker) {\n                        if (!colorCheck) {\n                            moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                        }\n                        break;\n                    }\n                    else {\n                        moves.push(`${board_1.ID[coordinateX + i]}-${this.positionY - i}`);\n                    }\n                }\n            }\n        };\n        diagonalMoves();\n        moveUp();\n        moveDown();\n        moveLeft();\n        moveRight();\n        return moves;\n    }\n    removeClassActive() {\n        let elems = [...document.querySelectorAll('.active')];\n        for (let i = 0; i < elems.length; i++) {\n            elems[i]?.classList.remove('active');\n        }\n    }\n}\nexports.Queen = Queen;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/queen.js?");

/***/ }),

/***/ "./src/js-components/pieces/rook.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/rook.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rook = void 0;\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\n//wieża\nclass Rook extends piece_1.Piece {\n    constructor(color, positionX, positionY) {\n        super(color, positionX, positionY);\n        this.symbol = `../../../static/assets/${this.color}Rook.png`;\n        this.setOnBoard(this.positionX, this.positionY);\n    }\n    showPossibleMoves() {\n        //kod odpowiadający za pokazanie możliwych ruchów\n    }\n}\nexports.Rook = Rook;\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/rook.js?");

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