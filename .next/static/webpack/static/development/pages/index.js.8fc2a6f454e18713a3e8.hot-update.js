webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/StatusDot */ \"./components/shared/StatusDot.jsx\");\n/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/userContext */ \"./contexts/userContext.jsx\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/Profile.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      userID = _useContext.userID,\n      storeUserID = _useContext.storeUserID;\n\n  return __jsx(\"div\", {\n    className: \"w-full bg-c1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-2 grid-rows-2 bg-c2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: \"ml-4 mt-1 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"Abbie Roberts\"), __jsx(\"div\", {\n    className: \"flex flex-row-reverse items-center w-full text-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosCloseCircleOutline\"], {\n    onClick: function onClick() {\n      return storeUserID(false);\n    },\n    className: \"w-6 h-6 mr-2 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 22\n    }\n  })), __jsx(\"div\", {\n    className: \"h-3 ml-4 font-thin text-xs text-white flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, \"Online\"), __jsx(_components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"green-400\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"flex items-center justify-center bg-c2 h-40\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"http://www.place-puppy.com/201x201\",\n    className: \"w-32 h-32 mb-4 rounded-full shadow border-2 border-c1 border-opacity-75\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Profile, \"CgK7U/b0kqPc+IX5EIpW1KAwtqo=\");\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUuanN4PzFkMTQiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXJJRCIsInN0b3JlVXNlcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFDRUMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEWjtBQUFBLE1BQ3RCQyxNQURzQixlQUN0QkEsTUFEc0I7QUFBQSxNQUNkQyxXQURjLGVBQ2RBLFdBRGM7O0FBRTlCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssTUFBQyxzRUFBRDtBQUF5QixXQUFPLEVBQUU7QUFBQSxhQUFNQSxXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLEtBQWxDO0FBQTRELGFBQVMsRUFBQyx5QkFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyx5REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FMSixDQURKLEVBV0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLG9DQUFUO0FBQThDLGFBQVMsRUFBQyx5RUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FESjtBQWlCSDs7R0FuQnVCSixPOztLQUFBQSxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9maWxlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElvSW9zQ2xvc2VDaXJjbGVPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgU3RhdHVzRG90IGZyb20gICcuLi9jb21wb25lbnRzL3NoYXJlZC9TdGF0dXNEb3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0J1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICBjb25zdCB7IHVzZXJJRCwgc3RvcmVVc2VySUQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGJnLWMxJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBiZy1jMlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtbC00IG10LTEgdGV4dC13aGl0ZVwiPkFiYmllIFJvYmVydHM8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93LXJldmVyc2UgaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Nsb3NlQ2lyY2xlT3V0bGluZSBvbkNsaWNrPXsoKSA9PiBzdG9yZVVzZXJJRChmYWxzZSl9IGNsYXNzTmFtZT1cInctNiBoLTYgbXItMiB0ZXh0LXdoaXRlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMgbWwtNCBmb250LXRoaW4gdGV4dC14cyB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+T25saW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzRG90IGNvbG9yPSdncmVlbi00MDAnLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWMyIGgtNDAnPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwOi8vd3d3LnBsYWNlLXB1cHB5LmNvbS8yMDF4MjAxJyBjbGFzc05hbWU9J3ctMzIgaC0zMiBtYi00IHJvdW5kZWQtZnVsbCBzaGFkb3cgYm9yZGVyLTIgYm9yZGVyLWMxIGJvcmRlci1vcGFjaXR5LTc1Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Profile.jsx\n");

/***/ })

})