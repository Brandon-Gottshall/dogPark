webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MiniProfile.jsx":
/*!************************************!*\
  !*** ./components/MiniProfile.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MiniProfile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/StatusDot */ \"./components/shared/StatusDot.jsx\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/MiniProfile.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction MiniProfile(_ref) {\n  var userData = _ref.userData;\n  var user = userData || {\n    first_name: 'Sam',\n    avatar: 'http://place-puppy.com/201x300',\n    city: 'New York'\n  };\n  return __jsx(\"div\", {\n    className: \"hidden sm:flex justify-end self-center h-12 w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \"w-12 h-12 mr-2 rounded-full\",\n    src: user.avatar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"grid grid-cols-1 grid-rows-3 h-10 font-f1 text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"text-c1 w-32 no-wrap\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, \"Welcome, \", user.first_name, \"!\"), __jsx(\"p\", {\n    className: \"font-thin font-c1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, user.city), __jsx(\"div\", {\n    className: \"font-thin font-c1 mt-2 flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"font-thin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, \"Online\"), __jsx(_shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: \"green-400\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }))));\n}\n_c = MiniProfile;\n\nvar _c;\n\n$RefreshReg$(_c, \"MiniProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pbmlQcm9maWxlLmpzeD80ODQxIl0sIm5hbWVzIjpbIk1pbmlQcm9maWxlIiwidXNlckRhdGEiLCJ1c2VyIiwiZmlyc3RfbmFtZSIsImF2YXRhciIsImNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxXQUFULE9BQWlDO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQzVDLE1BQU1DLElBQUksR0FBR0QsUUFBUSxJQUFJO0FBQ3JCRSxjQUFVLEVBQUUsS0FEUztBQUVyQkMsVUFBTSxFQUFFLGdDQUZhO0FBR3JCQyxRQUFJLEVBQUU7QUFIZSxHQUF6QjtBQUtBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsb0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQTZDLE9BQUcsRUFBRUgsSUFBSSxDQUFDRSxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxtREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBOENGLElBQUksQ0FBQ0MsVUFBbkQsTUFESixFQUVJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NELElBQUksQ0FBQ0csSUFBdkMsQ0FGSixFQUdJO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMseURBQUQ7QUFBVyxTQUFLLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBSEosQ0FGSixDQURKO0FBYUg7S0FuQnVCTCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NaW5pUHJvZmlsZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdHVzRG90IGZyb20gJy4vc2hhcmVkL1N0YXR1c0RvdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbmlQcm9maWxlKHt1c2VyRGF0YX0pIHtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEgfHwge1xuICAgICAgICBmaXJzdF9uYW1lOiAnU2FtJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cDovL3BsYWNlLXB1cHB5LmNvbS8yMDF4MzAwJyxcbiAgICAgICAgY2l0eTogJ05ldyBZb3JrJ1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXgganVzdGlmeS1lbmQgc2VsZi1jZW50ZXIgaC0xMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LTEyIGgtMTIgbXItMiByb3VuZGVkLWZ1bGwnIHNyYz17dXNlci5hdmF0YXJ9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMyBoLTEwIGZvbnQtZjEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jMSB3LTMyIG5vLXdyYXAnPldlbGNvbWUsIHt1c2VyLmZpcnN0X25hbWV9ITwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbiBmb250LWMxJz57dXNlci5jaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC10aGluIGZvbnQtYzEgbXQtMiBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5PbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNEb3QgY29sb3I9J2dyZWVuLTQwMCcvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MiniProfile.jsx\n");

/***/ })

})