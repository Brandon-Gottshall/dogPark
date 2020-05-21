webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CenterPane.jsx":
/*!***********************************!*\
  !*** ./components/CenterPane.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CenterPane; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ \"./components/SearchBox.jsx\");\n/* harmony import */ var _Dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dash */ \"./components/Dash.jsx\");\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Results */ \"./components/Results.jsx\");\n/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniProfile */ \"./components/MiniProfile.jsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/CenterPane.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction CenterPane() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(search); // debounce( () => console.log('triggered'), 1000)\n  }, [search]);\n  var view = search === '' ? __jsx(_Dash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    search: search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 36\n    }\n  }) : __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    search: search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 62\n    }\n  });\n  return __jsx(\"div\", {\n    className: \"flex flex-wrap flex-column content-start text-left h-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex justify-between h- border border-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setSearch: setSearch,\n    search: search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(_MiniProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  })), view);\n}\n\n_s(CenterPane, \"QlMZ0ipwzaGXI9hX7QmQuwPkUzk=\");\n\n_c = CenterPane;\n\nvar _c;\n\n$RefreshReg$(_c, \"CenterPane\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbnRlclBhbmUuanN4PzA3YWUiXSwibmFtZXMiOlsiQ2VudGVyUGFuZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUMxQkMsTUFEMEI7QUFBQSxNQUNsQkMsU0FEa0I7O0FBRWpDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFEWSxDQUVaO0FBQ0gsR0FIUSxFQUdOLENBQUNBLE1BQUQsQ0FITSxDQUFUO0FBSUEsTUFBTUssSUFBSSxHQUFJTCxNQUFNLEtBQUssRUFBWixHQUFrQixNQUFDLDZDQUFEO0FBQU0sVUFBTSxFQUFFQSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbEIsR0FBNEMsTUFBQyxnREFBRDtBQUFTLFVBQU0sRUFBRUEsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6RDtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQVcsYUFBUyxFQUFFQyxTQUF0QjtBQUFpQyxVQUFNLEVBQUVELE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLS0ssSUFMTCxDQURKO0FBU0g7O0dBaEJ1QlAsVTs7S0FBQUEsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2VudGVyUGFuZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94J1xuaW1wb3J0IERhc2ggZnJvbSAnLi9EYXNoJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJ1xuaW1wb3J0IE1pbmlQcm9maWxlIGZyb20gJy4vTWluaVByb2ZpbGUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlclBhbmUoKSB7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaClcbiAgICAgICAgLy8gZGVib3VuY2UoICgpID0+IGNvbnNvbGUubG9nKCd0cmlnZ2VyZWQnKSwgMTAwMClcbiAgICB9LCBbc2VhcmNoXSlcbiAgICBjb25zdCB2aWV3ID0gKHNlYXJjaCA9PT0gJycpID8gPERhc2ggc2VhcmNoPXtzZWFyY2h9Lz4gOiA8UmVzdWx0cyBzZWFyY2g9e3NlYXJjaH0vPlxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbHVtbiBjb250ZW50LXN0YXJ0IHRleHQtbGVmdCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBoLSBib3JkZXIgYm9yZGVyLWJsYWNrJyA+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzZXRTZWFyY2g9e3NldFNlYXJjaH0gc2VhcmNoPXtzZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICA8TWluaVByb2ZpbGUvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dmlld31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CenterPane.jsx\n");

/***/ })

})