webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/StatusDot */ \"./components/shared/StatusDot.jsx\");\n/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/userContext */ \"./contexts/userContext.jsx\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/Profile.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      userID = _useContext.userID,\n      storeUserID = _useContext.storeUserID;\n\n  return __jsx(\"div\", {\n    className: \"w-full bg-c1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-2 grid-rows-2 bg-c2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: \"ml-4 mt-1 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"Abbie Roberts\"), __jsx(\"div\", {\n    className: \"flex flex-row-reverse items-center w-full text-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosCloseCircleOutline\"], {\n    onClick: function onClick() {\n      return storeUserID(false);\n    },\n    className: \"w-6 h-6 mr-2 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 22\n    }\n  })), __jsx(\"div\", {\n    className: \"h-3 ml-4 font-thin text-xs text-white flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, \"Online\"), __jsx(_components_shared_StatusDot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"green-400\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"flex items-center justify-center bg-c2 h-40\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"http://www.place-puppy.com/201x201\",\n    className: \"w-32 h-32 mb-6 rounded-full shadow border-2 border-c1 border-opacity-75\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"h-full font-f1 flex flex-col items-center justify-start bg-c4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"my-2 text-sm font-semibold tracking-narrow\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"Project Lead | Chicago (2:30 p.m. CST)\"), __jsx(\"p\", {\n    className: \"ml-2 mt-2 text-black text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"inline text-c1 text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 61\n    }\n  }, \"Top Skills: \"), \"CSM, Python, JavaScript, Ruby on Rails\"), __jsx(\"p\", {\n    className: \"ml-2 mt-2 text-black text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"inline text-c1 text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 61\n    }\n  }, \"Projects I'm working on: \"), \"Intercom\"), __jsx(\"p\", {\n    className: \"ml-2 mt-2 text-black text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"inline text-c1 text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 61\n    }\n  }, \"On the weekends you\\u2019ll find me: \"), \"Biking downtown, visiting the Art Institute of Chicago, or catching up on Netflix\"), __jsx(\"p\", {\n    className: \"ml-2 mt-2 text-black text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"inline text-c1 text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 61\n    }\n  }, \" Why I love working at DataDog:\"), \" The warm and fun environment make me excited to come to work everyday.\")));\n}\n\n_s(Profile, \"CgK7U/b0kqPc+IX5EIpW1KAwtqo=\");\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUuanN4PzFkMTQiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXJJRCIsInN0b3JlVXNlcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFDRUMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEWjtBQUFBLE1BQ3RCQyxNQURzQixlQUN0QkEsTUFEc0I7QUFBQSxNQUNkQyxXQURjLGVBQ2RBLFdBRGM7O0FBRTlCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssTUFBQyxzRUFBRDtBQUF5QixXQUFPLEVBQUU7QUFBQSxhQUFNQSxXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLEtBQWxDO0FBQTRELGFBQVMsRUFBQyx5QkFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyx5REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FMSixDQURKLEVBV0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLG9DQUFUO0FBQThDLGFBQVMsRUFBQyx5RUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosRUFjSTtBQUFLLGFBQVMsRUFBQywrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsNENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FESixFQUVJO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEM7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBNUMsMkNBRkosRUFHSTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTVDLGFBSEosRUFJSTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQTVDLHNGQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QztBQUFHLGFBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUE1Qyw0RUFMSixDQWRKLENBREo7QUF3Qkg7O0dBMUJ1QkosTzs7S0FBQUEsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZmlsZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb0lvc0Nsb3NlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IFN0YXR1c0RvdCBmcm9tICAnLi4vY29tcG9uZW50cy9zaGFyZWQvU3RhdHVzRG90J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy91c2VyQ29udGV4dCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgY29uc3QgeyB1c2VySUQsIHN0b3JlVXNlcklEIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBiZy1jMSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgYmctYzJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWwtNCBtdC0xIHRleHQtd2hpdGVcIj5BYmJpZSBSb2JlcnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdy1yZXZlcnNlIGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICA8SW9Jb3NDbG9zZUNpcmNsZU91dGxpbmUgb25DbGljaz17KCkgPT4gc3RvcmVVc2VySUQoZmFsc2UpfSBjbGFzc05hbWU9XCJ3LTYgaC02IG1yLTIgdGV4dC13aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0zIG1sLTQgZm9udC10aGluIHRleHQteHMgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwPk9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXR1c0RvdCBjb2xvcj0nZ3JlZW4tNDAwJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1jMiBoLTQwJz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cDovL3d3dy5wbGFjZS1wdXBweS5jb20vMjAxeDIwMScgY2xhc3NOYW1lPSd3LTMyIGgtMzIgbWItNiByb3VuZGVkLWZ1bGwgc2hhZG93IGJvcmRlci0yIGJvcmRlci1jMSBib3JkZXItb3BhY2l0eS03NScvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmb250LWYxIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgYmctYzRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctbmFycm93XCI+UHJvamVjdCBMZWFkIHwgQ2hpY2FnbyAoMjozMCBwLm0uIENTVCk8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtMiBtdC0yIHRleHQtYmxhY2sgdGV4dC1zbSc+PHAgY2xhc3NOYW1lPSdpbmxpbmUgdGV4dC1jMSB0ZXh0LXNtJz5Ub3AgU2tpbGxzOiA8L3A+Q1NNLCBQeXRob24sIEphdmFTY3JpcHQsIFJ1Ynkgb24gUmFpbHM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtbC0yIG10LTIgdGV4dC1ibGFjayB0ZXh0LXNtJz48cCBjbGFzc05hbWU9J2lubGluZSB0ZXh0LWMxIHRleHQtc20nPlByb2plY3RzIEknbSB3b3JraW5nIG9uOiA8L3A+SW50ZXJjb208L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtbC0yIG10LTIgdGV4dC1ibGFjayB0ZXh0LXNtJz48cCBjbGFzc05hbWU9J2lubGluZSB0ZXh0LWMxIHRleHQtc20nPk9uIHRoZSB3ZWVrZW5kcyB5b3XigJlsbCBmaW5kIG1lOiA8L3A+QmlraW5nIGRvd250b3duLCB2aXNpdGluZyB0aGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvLCBvciBjYXRjaGluZyB1cCBvbiBOZXRmbGl4PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtMiBtdC0yIHRleHQtYmxhY2sgdGV4dC1zbSc+PHAgY2xhc3NOYW1lPSdpbmxpbmUgdGV4dC1jMSB0ZXh0LXNtJz4gV2h5IEkgbG92ZSB3b3JraW5nIGF0IERhdGFEb2c6PC9wPiBUaGUgd2FybSBhbmQgZnVuIGVudmlyb25tZW50IG1ha2UgbWUgZXhjaXRlZCB0byBjb21lIHRvIHdvcmsgZXZlcnlkYXkuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Profile.jsx\n");

/***/ })

})