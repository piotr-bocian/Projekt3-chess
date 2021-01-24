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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/starting_page/logo */ \"./src/js-components/starting_page/logo.js\");\n/* harmony import */ var _js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_starting_page_menuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/starting_page/menuContainer */ \"./src/js-components/starting_page/menuContainer.js\");\n/* harmony import */ var _js_components_starting_page_menuContainer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_starting_page_menuContainer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.body.appendChild(_js_components_starting_page_logo__WEBPACK_IMPORTED_MODULE_0___default()());\r\ndocument.body.appendChild(_js_components_starting_page_menuContainer__WEBPACK_IMPORTED_MODULE_1___default()());\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/starting_page/logo.js":
/*!*************************************************!*\
  !*** ./src/js-components/starting_page/logo.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\r\nfunction logo() {\r\n    const divLogo = document.createElement(\"div\");\r\n    divLogo.className = \"logo\";\r\n    const imgLogo = document.createElement(\"img\");\r\n    const src = \"../../../static/assets/CodersChess.png\";\r\n    imgLogo.setAttribute('src', src);\r\n    imgLogo.addEventListener(\"click\", function () {\r\n        location.reload();\r\n    });\r\n    divLogo.appendChild(imgLogo);\r\n    return divLogo;\r\n}\r\nmodule.exports = logo;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/starting_page/logo.js?");

/***/ }),

/***/ "./src/js-components/starting_page/menuContainer.js":
/*!**********************************************************!*\
  !*** ./src/js-components/starting_page/menuContainer.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\r\nfunction title() {\r\n    const titleDiv = document.createElement(\"div\");\r\n    titleDiv.className = \"menuTitle\";\r\n    const title = document.createElement(\"h2\");\r\n    title.innerHTML = \"USTAWIENIA GRY\";\r\n    titleDiv.appendChild(title);\r\n    return title;\r\n}\r\nfunction menuNames() {\r\n    const nameDiv = document.createElement(\"div\");\r\n    nameDiv.className = \"menuNames\";\r\n    const title = document.createElement(\"h4\");\r\n    title.innerHTML = \"IMIONA GRACZY\";\r\n    const inputDiv = document.createElement(\"div\");\r\n    const field1 = document.createElement(\"fieldset\");\r\n    const legend1 = document.createElement(\"legend\");\r\n    legend1.innerHTML = \"Białe | nazwa gracza\";\r\n    const player1 = document.createElement(\"input\");\r\n    player1.type = \"text\";\r\n    player1.minLength = 2;\r\n    player1.maxLength = 20;\r\n    player1.id = \"player1-input\";\r\n    player1.required = true;\r\n    player1.placeholder = \"Brajan\";\r\n    field1.appendChild(legend1);\r\n    field1.appendChild(player1);\r\n    const field2 = document.createElement(\"fieldset\");\r\n    const legend2 = document.createElement(\"legend\");\r\n    legend2.innerHTML = \"Czarne | nazwa gracza\";\r\n    const player2 = document.createElement(\"input\");\r\n    player2.type = \"text\";\r\n    player2.minLength = 2;\r\n    player2.maxLength = 20;\r\n    player2.id = \"player2-input\";\r\n    player2.required = true;\r\n    player2.placeholder = \"Jessica\";\r\n    field2.appendChild(legend2);\r\n    field2.appendChild(player2);\r\n    inputDiv.appendChild(field1);\r\n    inputDiv.appendChild(field2);\r\n    nameDiv.appendChild(title);\r\n    nameDiv.appendChild(inputDiv);\r\n    return nameDiv;\r\n}\r\nfunction time() {\r\n    const timeDiv = document.createElement(\"div\");\r\n    timeDiv.className = \"menuTime\";\r\n    const title = document.createElement(\"h4\");\r\n    title.className = \"title-time\";\r\n    title.innerHTML = \"CZAS GRY\";\r\n    const inMinutes = document.createElement(\"span\");\r\n    inMinutes.innerHTML = \"[W MINUTACH]\";\r\n    title.appendChild(inMinutes);\r\n    const rangeSlider = document.createElement(\"div\");\r\n    rangeSlider.className = \"range-slider\";\r\n    const span = document.createElement(\"span\");\r\n    span.className = \"rs-label\";\r\n    span.innerHTML = \"60\";\r\n    const range = document.createElement(\"input\");\r\n    range.type = \"range\";\r\n    range.className = \"rs-range\";\r\n    range.min = \"60\";\r\n    range.max = \"180\";\r\n    range.step = \"10\";\r\n    rangeSlider.addEventListener(\"input\", showSliderValue, false);\r\n    function showSliderValue() {\r\n        span.innerHTML = range.value;\r\n    }\r\n    rangeSlider.appendChild(range);\r\n    rangeSlider.appendChild(span);\r\n    timeDiv.appendChild(title);\r\n    timeDiv.appendChild(rangeSlider);\r\n    return timeDiv;\r\n}\r\nfunction patCheckList() {\r\n    const titleDiv = document.createElement(\"div\");\r\n    titleDiv.className = \"menuCheckList\";\r\n    const title = document.createElement(\"h4\");\r\n    title.innerHTML = \"PAT JAKO WYGRANA\";\r\n    const label1 = document.createElement(\"label\");\r\n    const input1 = document.createElement(\"input\");\r\n    input1.type = \"radio\";\r\n    input1.id = \"pat1\";\r\n    input1.name = \"pat\";\r\n    const inputSpan1 = document.createElement(\"span\");\r\n    inputSpan1.innerHTML = \"PATUJĄCEGO\";\r\n    label1.appendChild(input1);\r\n    label1.appendChild(inputSpan1);\r\n    const label2 = document.createElement(\"label\");\r\n    const input2 = document.createElement(\"input\");\r\n    input2.type = \"radio\";\r\n    input2.id = \"pat2\";\r\n    input2.name = \"pat\";\r\n    const inputSpan2 = document.createElement(\"span\");\r\n    inputSpan2.innerHTML = \"PATOWANEGO\";\r\n    label2.appendChild(input2);\r\n    label2.appendChild(inputSpan2);\r\n    titleDiv.appendChild(title);\r\n    titleDiv.appendChild(label1);\r\n    titleDiv.appendChild(label2);\r\n    return titleDiv;\r\n}\r\nfunction startButton() {\r\n    const startButtonContainer = document.createElement(\"div\");\r\n    startButtonContainer.className = \"start-button\";\r\n    const startButtonText = document.createElement(\"p\");\r\n    startButtonText.innerHTML = \"ROZPOCZNIJ GRĘ!\";\r\n    startButtonContainer.appendChild(startButtonText);\r\n    return startButtonContainer;\r\n}\r\nfunction menuContainer() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.className = \"menuContainer\";\r\n    menu.appendChild(title());\r\n    menu.appendChild(menuNames());\r\n    menu.appendChild(time());\r\n    menu.appendChild(patCheckList());\r\n    menu.appendChild(startButton());\r\n    return menu;\r\n}\r\nmodule.exports = menuContainer;\r\n// document.body.appendChild(menuContainer());\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/starting_page/menuContainer.js?");

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