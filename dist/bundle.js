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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/timeHistoryContainer */ \"./src/js-components/timeHistoryContainer.js\");\n/* harmony import */ var _js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/timer */ \"./src/js-components/timer.js\");\n/* harmony import */ var _js_components_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_timer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.body.appendChild(_js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0___default()());\r\nvar TimerTry = new (_js_components_timer__WEBPACK_IMPORTED_MODULE_1___default())(1, 'timer-white');\r\nvar TimerTry1 = new (_js_components_timer__WEBPACK_IMPORTED_MODULE_1___default())(1, 'timer-black');\r\n\r\n// TEST:\r\nif (true) {TimerTry.start()};\r\nlet el = document.getElementById('timer-black');\r\nif (true) {TimerTry1.start()};\r\n\r\n// el.addEventListener('mouseenter', function() {TimerTry.stop() });\r\n// el.addEventListener('mouseleave', function() {TimerTry.start() });\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/timeHistoryContainer.js":
/*!***************************************************!*\
  !*** ./src/js-components/timeHistoryContainer.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\r\nfunction timeHistoryContainer() {\r\n    const timeHistoryContainer = document.createElement(\"div\");\r\n    timeHistoryContainer.className = \"time-history-container\";\r\n    const timeHeader = document.createElement(\"div\");\r\n    timeHeader.className = \"time-div\";\r\n    const gameTime = document.createElement(\"h4\");\r\n    gameTime.innerHTML = \"CZAS GRY\";\r\n    timeHeader.appendChild(gameTime);\r\n    const timer1 = document.createElement(\"div\");\r\n    timer1.id = \"timer1\";\r\n    const timerWhite = document.createElement(\"div\");\r\n    timerWhite.id = \"timer-white\";\r\n    const white = document.createElement(\"h5\");\r\n    white.innerHTML = \"BIAŁE\";\r\n    timer1.appendChild(white);\r\n    timer1.appendChild(timerWhite);\r\n    const timer2 = document.createElement(\"div\");\r\n    timer2.id = \"timer2\";\r\n    const timerBlack = document.createElement(\"div\");\r\n    timerBlack.id = \"timer-black\";\r\n    const black = document.createElement(\"h5\");\r\n    black.innerHTML = \"CZARNE\";\r\n    timer2.appendChild(black);\r\n    timer2.appendChild(timerBlack);\r\n    timeHeader.appendChild(timer1);\r\n    timeHeader.appendChild(timer2);\r\n    timeHistoryContainer.appendChild(timeHeader);\r\n    return timeHistoryContainer;\r\n}\r\nmodule.exports = timeHistoryContainer;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/timeHistoryContainer.js?");

/***/ }),

/***/ "./src/js-components/timer.js":
/*!************************************!*\
  !*** ./src/js-components/timer.js ***!
  \************************************/
/***/ ((module) => {

eval("\r\nclass Timer {\r\n    constructor(minutes, player) {\r\n        this.start = this.start.bind(this);\r\n        this.pause = this.pause.bind(this);\r\n        this.player = player;\r\n        this.seconds = minutes * 60;\r\n        this.timerHandler = document.querySelector(`#${this.player}`);\r\n        this.interval = 0;\r\n    }\r\n    start() {\r\n        this.interval = window.setInterval(() => this.timedown(), 1000);\r\n    }\r\n    ;\r\n    pause() {\r\n        window.clearInterval(this.interval);\r\n    }\r\n    ;\r\n    stop() {\r\n    }\r\n    timedown() {\r\n        this.timerHandler.innerHTML = this.convertSeconds(this.seconds);\r\n        if (this.seconds > 0) {\r\n            this.seconds--;\r\n            return this.seconds;\r\n        }\r\n        else\r\n            this.stop();\r\n        return;\r\n    }\r\n    convertSeconds(s) {\r\n        let min = Math.floor(s / 60);\r\n        let sec = s % 60;\r\n        min = min < 10 ? '0' + min : min;\r\n        sec = sec < 10 ? '0' + sec : sec;\r\n        return min + ':' + sec;\r\n    }\r\n}\r\nmodule.exports = Timer;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/timer.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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