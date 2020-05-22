webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/ProjectSquare.jsx":
/*!*********************************************!*\
  !*** ./components/shared/ProjectSquare.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectSquare; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/shared/ProjectSquare.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProjectSquare(_ref) {\n  var data = _ref.data,\n      i = _ref.i;\n  var iconStyle = 'w-40 h-40';\n  var icons = [__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosBarcode\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosCash\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosFlask\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosOptions\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosPaw\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosThunderstorm\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosToday\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoIosTrendingUp\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__[\"IoLogoIonic\"], {\n    className: iconStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })];\n  var color = [2, 6, 4];\n  var square = \"projectSquare flex flex-column items-center border-c\".concat(color[i % 3], \" bg-c\").concat(color[i % 3]);\n  return __jsx(\"div\", {\n    className: square,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"w-full font-f1 text-center text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, data.name), icons[i]);\n}\n_c = ProjectSquare;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectSquare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9qZWN0U3F1YXJlLmpzeD9iMjNlIl0sIm5hbWVzIjpbIlByb2plY3RTcXVhcmUiLCJkYXRhIiwiaSIsImljb25TdHlsZSIsImljb25zIiwiY29sb3IiLCJzcXVhcmUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBV0E7QUFDZSxTQUFTQSxhQUFULE9BQWtDO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQUEsTUFBSkMsQ0FBSSxRQUFKQSxDQUFJO0FBQzdDLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUNWLE1BQUMsMkRBQUQ7QUFBbUIsYUFBUyxFQUFFRCxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFUsRUFFVixNQUFDLHdEQUFEO0FBQW1CLGFBQVMsRUFBRUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZVLEVBR1YsTUFBQyx5REFBRDtBQUFtQixhQUFTLEVBQUVBLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIVSxFQUlWLE1BQUMsMkRBQUQ7QUFBbUIsYUFBUyxFQUFFQSxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlUsRUFLVixNQUFDLHVEQUFEO0FBQW1CLGFBQVMsRUFBRUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxVLEVBTVYsTUFBQyxnRUFBRDtBQUFtQixhQUFTLEVBQUVBLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOVSxFQU9WLE1BQUMseURBQUQ7QUFBbUIsYUFBUyxFQUFFQSxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUFUsRUFRVixNQUFDLDhEQUFEO0FBQW1CLGFBQVMsRUFBRUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJVLEVBU1YsTUFBQywwREFBRDtBQUFtQixhQUFTLEVBQUVBLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUVSxDQUFkO0FBV0EsTUFBTUUsS0FBSyxHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWQ7QUFDQSxNQUFJQyxNQUFNLGlFQUEwREQsS0FBSyxDQUFDSCxDQUFDLEdBQUMsQ0FBSCxDQUEvRCxrQkFBNEVHLEtBQUssQ0FBQ0gsQ0FBQyxHQUFDLENBQUgsQ0FBakYsQ0FBVjtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUVJLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx1Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVETCxJQUFJLENBQUNNLElBQTVELENBREosRUFFS0gsS0FBSyxDQUFDRixDQUFELENBRlYsQ0FESjtBQU1IO0tBckJ1QkYsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2hhcmVkL1Byb2plY3RTcXVhcmUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBJb0lvc0JhcmNvZGUsXG4gICAgSW9Jb3NDYXNoLFxuICAgIElvSW9zRmxhc2ssXG4gICAgSW9Jb3NPcHRpb25zLFxuICAgIElvSW9zUGF3LFxuICAgIElvSW9zVGh1bmRlcnN0b3JtLFxuICAgIElvSW9zVG9kYXksXG4gICAgSW9Jb3NUcmVuZGluZ1VwLFxuICAgIElvTG9nb0lvbmljXG59IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTcXVhcmUoe2RhdGEsIGl9KSB7XG4gICAgY29uc3QgaWNvblN0eWxlID0gJ3ctNDAgaC00MCdcbiAgICBjb25zdCBpY29ucyA9IFtcbiAgICAgICAgPElvSW9zQmFyY29kZSAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NDYXNoICAgICAgICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0lvc0ZsYXNrICAgICAgICBjbGFzc05hbWU9e2ljb25TdHlsZX0vPixcbiAgICAgICAgPElvSW9zT3B0aW9ucyAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NQYXcgICAgICAgICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0lvc1RodW5kZXJzdG9ybSBjbGFzc05hbWU9e2ljb25TdHlsZX0vPixcbiAgICAgICAgPElvSW9zVG9kYXkgICAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NUcmVuZGluZ1VwICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0xvZ29Jb25pYyAgICAgICBjbGFzc05hbWU9e2ljb25TdHlsZX0vPlxuICAgIF1cbiAgICBjb25zdCBjb2xvciA9IFsgMiwgNiwgNCBdXG4gICAgbGV0IHNxdWFyZSA9IGBwcm9qZWN0U3F1YXJlIGZsZXggZmxleC1jb2x1bW4gaXRlbXMtY2VudGVyIGJvcmRlci1jJHtjb2xvcltpJTNdfSBiZy1jJHtjb2xvcltpJTNdfWBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3F1YXJlfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1mMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+e2RhdGEubmFtZX08L2gzPlxuICAgICAgICAgICAge2ljb25zW2ldfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/ProjectSquare.jsx\n");

/***/ })

})