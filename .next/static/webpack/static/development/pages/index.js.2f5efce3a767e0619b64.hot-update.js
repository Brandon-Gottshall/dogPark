webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/Users.jsx":
/*!*************************************!*\
  !*** ./components/shared/Users.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Users; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/StatusDot */ \"./components/shared/StatusDot.jsx\");\nvar _jsxFileName = \"/Users/brandongottshall/GDrive/dogPark/components/shared/Users.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Users(_ref) {\n  var _this = this;\n\n  var usersData = _ref.usersData;\n  var users = usersData || Array(10).fill({\n    first_name: 'First',\n    last_name: 'Last',\n    role: 'Project Lead',\n    avatar: 'http://place-puppy.com/200x300',\n    city: 'New York'\n  });\n\n  var CardGenerator = function CardGenerator() {\n    var Card = function Card(_ref2) {\n      var user = _ref2.user,\n          id = _ref2.id;\n      return __jsx(\"div\", {\n        className: \"w- pl-4 pt-4\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }\n      }, __jsx(\"img\", {\n        src: users[id].avatar,\n        className: \"w-32 h-32 inline-block rounded-full shadow\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }\n      }), __jsx(\"div\", {\n        className: \"text-left w-24 leading-tight\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }\n      }, __jsx(\"h3\", {\n        className: \"text-lg font-f1\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 25\n        }\n      }, users[id].first_name + ' ' + users[id].last_name), __jsx(\"p\", {\n        className: \"text-xs font-f1 font-thin\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 25\n        }\n      }, users[id].role), __jsx(\"p\", {\n        className: \"text-xs font-f1 font-thin\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }\n      }, users[id].city), __jsx(\"div\", {\n        className: \"font-thin text-xs font-c1 flex items-center\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 25\n        }\n      }, __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 29\n        }\n      }, \"Online\"), __jsx(_shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        color: \"green-400\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 29\n        }\n      }))));\n    };\n\n    var cards = users.map(function (user, i) {\n      return __jsx(Card, {\n        user: user,\n        id: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 47\n        }\n      });\n    });\n    return cards;\n  };\n\n  var grid = \"w-full overflow-x-scroll grid grid-cols-\".concat(users.length, \" grid-flow-col>\");\n  return __jsx(\"div\", {\n    className: grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(CardGenerator, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }));\n}\n_c = Users;\n\nvar _c;\n\n$RefreshReg$(_c, \"Users\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Vc2Vycy5qc3g/OTQ4MyJdLCJuYW1lcyI6WyJVc2VycyIsInVzZXJzRGF0YSIsInVzZXJzIiwiQXJyYXkiLCJmaWxsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJvbGUiLCJhdmF0YXIiLCJjaXR5IiwiQ2FyZEdlbmVyYXRvciIsIkNhcmQiLCJ1c2VyIiwiaWQiLCJjYXJkcyIsIm1hcCIsImkiLCJncmlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsS0FBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUN2QyxNQUFNQyxLQUFLLEdBQUdELFNBQVMsSUFDbkJFLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlO0FBQ1hDLGNBQVUsRUFBRSxPQUREO0FBRVhDLGFBQVMsRUFBRSxNQUZBO0FBR1hDLFFBQUksRUFBRSxjQUhLO0FBSVhDLFVBQU0sRUFBRSxnQ0FKRztBQUtYQyxRQUFJLEVBQUU7QUFMSyxHQUFmLENBREo7O0FBU0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBRXhCLFFBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQWdCO0FBQUEsVUFBZEMsSUFBYyxTQUFkQSxJQUFjO0FBQUEsVUFBUkMsRUFBUSxTQUFSQSxFQUFRO0FBQ3pCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssV0FBRyxFQUFFWCxLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVTCxNQUFwQjtBQUE0QixpQkFBUyxFQUFDLDRDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlDTixLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVUixVQUFWLEdBQXFCLEdBQXJCLEdBQXlCSCxLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVUCxTQUFwRSxDQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDLDJCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMENKLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVOLElBQXBELENBRkosRUFHSTtBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQ0wsS0FBSyxDQUFDVyxFQUFELENBQUwsQ0FBVUosSUFBcEQsQ0FISixFQUlJO0FBQUssaUJBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJLE1BQUMseURBQUQ7QUFBVyxhQUFLLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBSkosQ0FGSixDQURKO0FBY0gsS0FmRDs7QUFnQkEsUUFBTUssS0FBSyxHQUFHWixLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFDSCxJQUFELEVBQU9JLENBQVA7QUFBQSxhQUFjLE1BQUMsSUFBRDtBQUFNLFlBQUksRUFBRUosSUFBWjtBQUFrQixVQUFFLEVBQUVJLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBZDtBQUFBLEtBQVYsQ0FBZDtBQUNBLFdBQU9GLEtBQVA7QUFFSCxHQXJCRDs7QUFzQkEsTUFBTUcsSUFBSSxxREFBOENmLEtBQUssQ0FBQ2dCLE1BQXBELG9CQUFWO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBRUQsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQUtIO0tBdEN1QmpCLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9Vc2Vycy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdHVzRG90IGZyb20gICcuLi9zaGFyZWQvU3RhdHVzRG90J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoe3VzZXJzRGF0YX0pIHtcbiAgICBjb25zdCB1c2VycyA9IHVzZXJzRGF0YSB8fFxuICAgICAgICBBcnJheSgxMCkuZmlsbCh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiAnRmlyc3QnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnTGFzdCcsXG4gICAgICAgICAgICByb2xlOiAnUHJvamVjdCBMZWFkJyxcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly9wbGFjZS1wdXBweS5jb20vMjAweDMwMCcsXG4gICAgICAgICAgICBjaXR5OiAnTmV3IFlvcmsnXG4gICAgICAgIH1cbiAgICApXG4gICAgY29uc3QgQ2FyZEdlbmVyYXRvciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBDYXJkID0gKHt1c2VyLCBpZH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctIHBsLTQgcHQtNCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2Vyc1tpZF0uYXZhdGFyfSBjbGFzc05hbWU9J3ctMzIgaC0zMiBpbmxpbmUtYmxvY2sgcm91bmRlZC1mdWxsIHNoYWRvdycvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCB3LTI0IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtZjFcIj57dXNlcnNbaWRdLmZpcnN0X25hbWUrJyAnK3VzZXJzW2lkXS5sYXN0X25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBmb250LWYxIGZvbnQtdGhpbic+e3VzZXJzW2lkXS5yb2xlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBmb250LWYxIGZvbnQtdGhpbic+e3VzZXJzW2lkXS5jaXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LXRoaW4gdGV4dC14cyBmb250LWMxIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXR1c0RvdCBjb2xvcj0nZ3JlZW4tNDAwJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FyZHMgPSB1c2Vycy5tYXAoKHVzZXIsIGkpID0+ICg8Q2FyZCB1c2VyPXt1c2VyfSBpZD17aX0gLz4pKVxuICAgICAgICByZXR1cm4gY2FyZHNcblxuICAgIH1cbiAgICBjb25zdCBncmlkID0gYHctZnVsbCBvdmVyZmxvdy14LXNjcm9sbCBncmlkIGdyaWQtY29scy0ke3VzZXJzLmxlbmd0aH0gZ3JpZC1mbG93LWNvbD5gXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZH0+XG4gICAgICAgICAgICA8Q2FyZEdlbmVyYXRvciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/Users.jsx\n");

/***/ })

})