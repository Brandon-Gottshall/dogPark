webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/StatusDot */ \"./components/shared/StatusDot.jsx\");\n/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/userContext */ \"./contexts/userContext.jsx\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/Profile.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      userID = _useContext.userID,\n      storeUserID = _useContext.storeUserID;\n\n  return __jsx(\"div\", {\n    className: \"w-full bg-c1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-2 grid-rows-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: \"text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"Abbie Roberts\"), __jsx(\"div\", {\n    className: \"flex flex-row-reverse items-center w-full border text-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosCloseCircleOutline\"], {\n    className: \"w-8 h-8 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 22\n    }\n  })), __jsx(\"div\", {\n    className: \"font-thin text-xs font-white flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, \"Online\"), __jsx(_components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"green-400\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(Profile, \"CgK7U/b0kqPc+IX5EIpW1KAwtqo=\");\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUuanN4PzFkMTQiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXJJRCIsInN0b3JlVXNlcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFDRUMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEWjtBQUFBLE1BQ3RCQyxNQURzQixlQUN0QkEsTUFEc0I7QUFBQSxNQUNkQyxXQURjLGVBQ2RBLFdBRGM7O0FBRTlCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxNQUFDLHNFQUFEO0FBQXlCLGFBQVMsRUFBQyxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FMSixDQURKLENBREo7QUFjSDs7R0FoQnVCSixPOztLQUFBQSxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9maWxlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElvSW9zQ2xvc2VDaXJjbGVPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgU3RhdHVzRG90IGZyb20gICcuLi9jb21wb25lbnRzL3NoYXJlZC9TdGF0dXNEb3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0J1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICBjb25zdCB7IHVzZXJJRCwgc3RvcmVVc2VySUQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGJnLWMxJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+QWJiaWUgUm9iZXJ0czwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3ctcmV2ZXJzZSBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlciB0ZXh0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Nsb3NlQ2lyY2xlT3V0bGluZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtd2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtdGhpbiB0ZXh0LXhzIGZvbnQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8cD5PbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNEb3QgY29sb3I9J2dyZWVuLTQwMCcvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Profile.jsx\n");

/***/ })

})