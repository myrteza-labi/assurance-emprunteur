"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dossier",{

/***/ "./pages/dossier.js":
/*!**************************!*\
  !*** ./pages/dossier.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dossier; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _racine_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../racine.json */ \"./racine.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Dossier() {\n    var test = _racine_json__WEBPACK_IMPORTED_MODULE_1__.map(function(racine) {\n        return racine[\"data\"][8][\"contenu\"];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Consultez le dossier Assurance Emprunteur du courtier en ligne ind\\xe9pendant pour obtenir toutes les informations avant de n\\xe9gocier votre taux d\\\\'assurance emprunteur\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrteza/Desktop/emprunt/pages/dossier.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/myrteza/Desktop/emprunt/pages/dossier.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mainImageHeader mainImageHeaderGuide\"\n            }, void 0, false, {\n                fileName: \"/Users/myrteza/Desktop/emprunt/pages/dossier.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" pageGenerees pageRacine\",\n                dangerouslySetInnerHTML: {\n                    __html: test\n                }\n            }, void 0, false, {\n                fileName: \"/Users/myrteza/Desktop/emprunt/pages/dossier.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myrteza/Desktop/emprunt/pages/dossier.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Dossier;\nvar _c;\n$RefreshReg$(_c, \"Dossier\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb3NzaWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXFDO0FBQ1I7QUFDZCxTQUFTRSxPQUFPLEdBQUc7SUFDaEMsSUFBSUMsSUFBSSxHQUFHSCw2Q0FBVyxDQUFDLFNBQUNLLE1BQU0sRUFBSztRQUNqQyxPQUFPQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDckMsQ0FBQztJQUNGLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFFRiw4REFBQ0wsa0RBQUk7O29CQUVGLEdBQUc7a0NBQ0osOERBQUNNLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLDZLQUFzSzs7Ozs7NEJBQzlLO29CQUFDLEdBQUc7Ozs7OztvQkFDRDswQkFDUCw4REFBQ0gsS0FBRztnQkFBQ0ksU0FBUyxFQUFDLHNDQUFzQzs7Ozs7b0JBQU87MEJBRTVELDhEQUFDSixLQUFHO2dCQUNGSSxTQUFTLEVBQUMsMEJBQTBCO2dCQUNwQ0MsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRVQsSUFBSTtpQkFBRTs7Ozs7b0JBQ3BDOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7QUF2QnVCRCxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rvc3NpZXIuanM/ZDdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFjaW5lcyBmcm9tIFwiLi4vcmFjaW5lLmpzb25cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvc3NpZXIoKSB7XG4gIGxldCB0ZXN0ID0gUmFjaW5lcy5tYXAoKHJhY2luZSkgPT4ge1xuICAgIHJldHVybiByYWNpbmVbXCJkYXRhXCJdWzhdW1wiY29udGVudVwiXTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG4gICAgICA8SGVhZD5cbiAgICAgICAgXG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJDb25zdWx0ZXogbGUgZG9zc2llciBBc3N1cmFuY2UgRW1wcnVudGV1ciBkdSBjb3VydGllciBlbiBsaWduZSBpbmTDqXBlbmRhbnQgcG91ciBvYnRlbmlyIHRvdXRlcyBsZXMgaW5mb3JtYXRpb25zIGF2YW50IGRlIG7DqWdvY2llciB2b3RyZSB0YXV4IGRcXCdhc3N1cmFuY2UgZW1wcnVudGV1clwiXG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluSW1hZ2VIZWFkZXIgbWFpbkltYWdlSGVhZGVyR3VpZGVcIj48L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCIgcGFnZUdlbmVyZWVzIHBhZ2VSYWNpbmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRlc3QgfX1cbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSYWNpbmVzIiwiSGVhZCIsIkRvc3NpZXIiLCJ0ZXN0IiwibWFwIiwicmFjaW5lIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dossier.js\n"));

/***/ })

});