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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/starting_page/logo */ \"./src/js-components/starting_page/logo.js\");\n/* harmony import */ var _js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_end_page_endPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/end-page/endPage */ \"./src/js-components/end-page/endPage.js\");\n/* harmony import */ var _js_components_end_page_endPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_end_page_endPage__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.body.appendChild(_js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0___default()());\r\ndocument.body.appendChild(_js_components_end_page_endPage__WEBPACK_IMPORTED_MODULE_1___default()());\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/end-page/endPage.js":
/*!***********************************************!*\
  !*** ./src/js-components/end-page/endPage.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\r\nfunction endPage() {\r\n    const testObj = {\r\n        user1: \"Kamil\",\r\n        user2: \"Maciek\",\r\n        winner: \"Maciek\",\r\n        how: \"czas\"\r\n    };\r\n    function title() {\r\n        const titleDiv = document.createElement(\"div\");\r\n        titleDiv.className = \"menuTitle\";\r\n        const title = document.createElement(\"h1\");\r\n        title.innerHTML = \"KONIEC GRY\";\r\n        titleDiv.appendChild(title);\r\n        return title;\r\n    }\r\n    function gameResult() {\r\n        const nameDiv = document.createElement(\"div\");\r\n        nameDiv.className = \"menuNames\";\r\n        const title = document.createElement(\"h2\");\r\n        const title2 = document.createElement(\"h3\");\r\n        title.className = \"title-result\";\r\n        title2.className = \"title-result\";\r\n        if (testObj.how === 'pat') {\r\n            title.innerHTML = `PAT (REMIS)`;\r\n            title2.innerHTML = `Gracz ${testObj.user1} zremisował z graczem ${testObj.user2}`;\r\n        }\r\n        else if (testObj.how == 'czas') {\r\n            title2.innerHTML = `Koniec Czasu Przeciwnika`;\r\n            title.innerHTML = `Wygrał gracz ${testObj.winner}`;\r\n        }\r\n        else {\r\n            title.innerHTML = `Wygrał gracz ${testObj.winner}`;\r\n            title2.innerHTML = `SZACH-MAT`;\r\n        }\r\n        const inputDiv = document.createElement(\"div\");\r\n        nameDiv.appendChild(title);\r\n        nameDiv.appendChild(title2);\r\n        nameDiv.appendChild(inputDiv);\r\n        return nameDiv;\r\n    }\r\n    function startButton() {\r\n        const startButtonContainer = document.createElement(\"div\");\r\n        startButtonContainer.className = \"start-button\";\r\n        const startButtonText = document.createElement(\"p\");\r\n        startButtonText.innerHTML = \"ROZPOCZNIJ GRĘ!\";\r\n        startButtonContainer.appendChild(startButtonText);\r\n        return startButtonContainer;\r\n    }\r\n    const menu = document.createElement(\"div\");\r\n    menu.className = \"menuContainer\";\r\n    menu.appendChild(title());\r\n    menu.appendChild(gameResult());\r\n    menu.appendChild(startButton());\r\n    return menu;\r\n}\r\nmodule.exports = endPage;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/end-page/endPage.js?");

/***/ }),

/***/ "./src/js-components/starting_page/logo.js":
/*!*************************************************!*\
  !*** ./src/js-components/starting_page/logo.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\r\nfunction logo() {\r\n    const divLogo = document.createElement(\"div\");\r\n    divLogo.className = \"logo\";\r\n    const imgLogo = document.createElement(\"img\");\r\n    const src = \"../../../static/assets/CodersChess.png\";\r\n    imgLogo.setAttribute('src', src);\r\n    imgLogo.addEventListener(\"click\", function () {\r\n        location.reload();\r\n    });\r\n    divLogo.appendChild(imgLogo);\r\n    return divLogo;\r\n}\r\nmodule.exports = logo;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/starting_page/logo.js?");

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