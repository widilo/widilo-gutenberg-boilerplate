/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/blocks.js":
/*!**************************!*\
  !*** ./blocks/blocks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boilerplate_block_boilerplate_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerplate-block/boilerplate_block */ \"./blocks/boilerplate-block/boilerplate_block.js\");\n/* harmony import */ var _boilerplate_block_boilerplate_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boilerplate_block_boilerplate_block__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://@widilo/widilo-gutenberg-boilerplate/./blocks/blocks.js?");

/***/ }),

/***/ "./blocks/boilerplate-block/boilerplate_block.js":
/*!*******************************************************!*\
  !*** ./blocks/boilerplate-block/boilerplate_block.js ***!
  \*******************************************************/
/***/ (() => {

eval("const {\n  __\n} = wp.i18n;\nconst {\n  registerBlockType\n} = wp.blocks;\nregisterBlockType('widilo-gutenberg-boilerplate/block-boilerplate-block', {\n  title: __('widilo Boilerplate Block', 'widilo_gutenberg_boilerplate'),\n  icon: 'marker',\n  category: 'common',\n  keywords: [__('widilo Boilerplate Block', 'widilo_gutenberg_boilerplate'), __('boilerplate-block', 'widilo_gutenberg_boilerplate')],\n  edit: function (props) {\n    return wp.element.createElement(\"div\", {\n      className: props.className\n    }, wp.element.createElement(\"p\", null, __(`This is an example Gutenberg Block. Feel free to change it to your needs. Therefore open your plugins folder -> widilo-gutenberg-boilerplate -> blocks -> boilerplate-block -> boilerplate-block.js. You can change the title of your block, the block icon, the category and the block content as you wish. After you have finished your changes, run 'npm run dev' in the plugin folder to make the magic happen.`, 'widilo_gutenberg_boilerplate')));\n  },\n  save: function (props) {\n    return wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, __(`This is an example Gutenberg Block. Feel free to change it to your needs. Therefore open your plugins folder -> widilo-gutenberg-boilerplate -> blocks -> boilerplate-block -> boilerplate-block.js. You can change the title of your block, the block icon, the category and the block content as you wish. After you have finished your changes, run 'npm run dev' in the plugin folder to make the magic happen.`, 'widilo_gutenberg_boilerplate')));\n  }\n});\n\n//# sourceURL=webpack://@widilo/widilo-gutenberg-boilerplate/./blocks/boilerplate-block/boilerplate_block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./blocks/blocks.js");
/******/ 	
/******/ })()
;