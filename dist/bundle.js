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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/timeHistoryContainer */ \"./src/js-components/timeHistoryContainer.js\");\n/* harmony import */ var _js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/timer */ \"./src/js-components/timer.js\");\n/* harmony import */ var _js_components_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_timer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.body.appendChild(_js_components_timeHistoryContainer__WEBPACK_IMPORTED_MODULE_0___default()());\r\nvar TimerTry = new (_js_components_timer__WEBPACK_IMPORTED_MODULE_1___default())(60, 'timer-white');\r\nif (true) {TimerTry.start()};\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/timeHistoryContainer.js":
/*!***************************************************!*\
  !*** ./src/js-components/timeHistoryContainer.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\r\nfunction timeHistoryContainer() {\r\n    var timeHistoryContainer = document.createElement(\"div\");\r\n    timeHistoryContainer.className = \"time-history-container\";\r\n    var timeHeader = document.createElement(\"div\");\r\n    timeHeader.className = \"time-div\";\r\n    timeHeader.innerHTML = \"CZAS GRY\";\r\n    var timer1 = document.createElement(\"div\");\r\n    timer1.id = \"timer-white\";\r\n    var timer2 = document.createElement(\"div\");\r\n    timer2.id = \"timer-black\";\r\n    timeHeader.appendChild(timer1);\r\n    timeHeader.appendChild(timer2);\r\n    timeHistoryContainer.appendChild(timeHeader);\r\n    return timeHistoryContainer;\r\n}\r\nmodule.exports = timeHistoryContainer;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/timeHistoryContainer.js?");

/***/ }),

/***/ "./src/js-components/timer.js":
/*!************************************!*\
  !*** ./src/js-components/timer.js ***!
  \************************************/
/***/ ((module) => {

eval("\r\nvar Timer = /** @class */ (function () {\r\n    function Timer(minutes, player) {\r\n        this.start = this.start.bind(this);\r\n        this.stop = this.stop.bind(this);\r\n        this.player = player;\r\n        this.seconds = minutes * 60;\r\n        this.timerHandler = document.querySelector(\"#\" + this.player);\r\n    }\r\n    Timer.prototype.start = function () {\r\n        var _this = this;\r\n        var interval = setInterval(function () { return _this.timedown(); }, 1000);\r\n    };\r\n    ;\r\n    Timer.prototype.stop = function () {\r\n        clearInterval();\r\n    };\r\n    ;\r\n    Timer.prototype.timedown = function () {\r\n        this.timerHandler.innerHTML = this.convertSeconds(this.seconds);\r\n        if (this.seconds > 0) {\r\n            this.seconds--;\r\n            return this.seconds;\r\n        }\r\n        else\r\n            this.stop();\r\n    };\r\n    Timer.prototype.convertSeconds = function (s) {\r\n        var min = Math.floor(s / 60);\r\n        var sec = s % 60;\r\n        min = min < 10 ? parseInt('0' + min) : min;\r\n        sec = sec < 10 ? parseInt('0' + sec) : sec;\r\n        return min + ':' + sec;\r\n    };\r\n    return Timer;\r\n}());\r\nmodule.exports = Timer;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/timer.js?");

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