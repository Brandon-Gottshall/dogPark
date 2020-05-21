module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/CenterPane.jsx":
/*!***********************************!*\
  !*** ./components/CenterPane.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenterPane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ "./components/SearchBox.jsx");
/* harmony import */ var _Dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dash */ "./components/Dash.jsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Results */ "./components/Results.jsx");
/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniProfile */ "./components/MiniProfile.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/CenterPane.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CenterPane() {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(search); // debounce( () => console.log('triggered'), 1000)
  }, [search]);
  const view = search === '' ? __jsx(_Dash__WEBPACK_IMPORTED_MODULE_2__["default"], {
    search: search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 36
    }
  }) : __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 62
    }
  });
  return __jsx("div", {
    className: "flex flex-wrap flex-column overflow-y-scroll overflow-x-hidden content-start text-left h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "grid grid-cols-2 grid-rows-1 h-36 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setSearch: setSearch,
    search: search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(_MiniProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), view);
}

/***/ }),

/***/ "./components/Dash.jsx":
/*!*****************************!*\
  !*** ./components/Dash.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Users */ "./components/shared/Users.jsx");
/* harmony import */ var _shared_Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Feed */ "./components/shared/Feed.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/Dash.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Dash() {
  return __jsx("div", {
    className: "w-full mt-6 h-full text-center text-black font-f1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "font-f1 text-left ml-4 tracking-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "My Team"), __jsx(_shared_Users__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "font-f1 text-left mt-6 ml-4 tracking-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Latest News"), __jsx(_shared_Feed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/MiniProfile.jsx":
/*!************************************!*\
  !*** ./components/MiniProfile.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/StatusDot */ "./components/shared/StatusDot.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/MiniProfile.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function MiniProfile({
  userData
}) {
  const user = userData || {
    first_name: 'Sam',
    avatar: 'http://place-puppy.com/201x300',
    city: 'New York'
  };
  return __jsx("div", {
    className: "hidden sm:flex justify-end self-center h-12 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-12 h-12 mr-2 shadow border border-c1 border-opacity-50 rounded-full",
    src: user.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "grid grid-cols-1 grid-rows-3 h-10 font-f1 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-c1 w-32 no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Welcome, ", user.first_name, "!"), __jsx("p", {
    className: "font-thin font-c1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, user.city), __jsx("div", {
    className: "font-thin font-c1 mt-2 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Online"), __jsx(_shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./components/Results.jsx":
/*!********************************!*\
  !*** ./components/Results.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/Results.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Results({
  search
}) {
  return __jsx("div", {
    className: "w-full h-full bg-c4 text-center font-white font-f1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "Results Here: Query is ", search);
}

/***/ }),

/***/ "./components/SearchBox.jsx":
/*!**********************************!*\
  !*** ./components/SearchBox.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/SearchBox.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SearchBox({
  search,
  setSearch
}) {
  const {
    0: tempSearch,
    1: setTempSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleChange = e => {
    setTempSearch(e.target.value);
  };

  const handleSubmit = () => {
    setSearch(tempSearch);
  };

  return __jsx("div", {
    className: "w-48 flex no-wrap h-8 mr-56 border border-black m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosSearch"], {
    className: "w-8 my-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: "w-full h-full outline-none",
    type: "text",
    name: "search",
    placeholder: "Search Everywhere",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/SideNav.jsx":
/*!********************************!*\
  !*** ./components/SideNav.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/SideNav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SideNav() {
  const style = {
    buttonContainer: 'column-widthself-start flex border border-c1 flex-column flex-wrap items-start justify-center',
    navButton: 'w-9/12 ml-1/4 mr-1/4 h-auto leading-tight my-0 font-thin tracking-wide text-2xl text-white font-f1 text-left transform hover:translate-x-5 transition-all duration-200 ease-in-out'
  };
  return __jsx("div", {
    className: "flex flex-wrap flex-column content-start text-center h-full bg-c1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-white font-f1 text-5xl w-full my-12 h-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "dogPark"), __jsx("div", {
    className: style.buttonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: style.navButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "My Team"), __jsx("button", {
    className: style.navButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Latest News"), __jsx("button", {
    className: style.navButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Project Teams"), __jsx("button", {
    className: style.navButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Directory")));
}

/***/ }),

/***/ "./components/shared/Feed.jsx":
/*!************************************!*\
  !*** ./components/shared/Feed.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedCard */ "./components/shared/FeedCard.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/Feed.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Feed() {
  return __jsx(_FeedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/shared/FeedCard.jsx":
/*!****************************************!*\
  !*** ./components/shared/FeedCard.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeedCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/FeedCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function FeedCard({
  update
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/shared/StatusDot.jsx":
/*!*****************************************!*\
  !*** ./components/shared/StatusDot.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusDot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/StatusDot.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function StatusDot({
  color
}) {
  let fillHelper = `fill-current text-${color} stroke-0.1`;
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "10",
    height: "10",
    className: "w-10px h-auto ml-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("circle", {
    r: "4",
    cx: "4",
    cy: "4",
    className: fillHelper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/shared/Users.jsx":
/*!*************************************!*\
  !*** ./components/shared/Users.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/StatusDot */ "./components/shared/StatusDot.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/Users.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Users({
  usersData
}) {
  const users = usersData || Array(20).fill({
    first_name: 'First',
    last_name: 'Last',
    role: 'Project Lead',
    avatar: `http://place-puppy.com/200x300`,
    city: 'New York'
  });

  const CardGenerator = () => {
    const Card = ({
      user,
      id
    }) => {
      return __jsx("div", {
        className: "w-40 pl-4 mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: users[id].avatar,
        className: "w-32 h-32 rounded-full shadow border-2 border-c1 border-opacity-75",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "text-left w-24 mx-auto leading-tight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }
      }, __jsx("h3", {
        className: "text-lg font-f1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }
      }, users[id].first_name + ' ' + users[id].last_name), __jsx("p", {
        className: "text-xs font-f1 font-thin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      }, users[id].role), __jsx("p", {
        className: "text-xs font-f1 font-thin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }
      }, users[id].city), __jsx("div", {
        className: "font-thin text-xs font-c1 flex items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }
      }, "Online"), __jsx(_shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: "green-400",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }))));
    };

    const cards = users.map((user, i) => __jsx(Card, {
      user: user,
      id: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 47
      }
    }));
    return cards;
  };

  const grid = `w-full overflow-x-scroll grid grid-cols-${users.length} col-gap-0 no-scrollbar grid-flow-col no-wrap`;
  return __jsx("div", {
    className: grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(CardGenerator, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav.jsx");
/* harmony import */ var _components_CenterPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CenterPane */ "./components/CenterPane.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "grid grid-cols-mobileHome sm:grid-cols-home grid-rows-1 h-screen overflow-y-hidden",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_components_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_components_CenterPane__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})));

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandongottshall/GDrive/dogPark/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbnRlclBhbmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaW5pUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9GZWVkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9GZWVkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvU3RhdHVzRG90LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJDZW50ZXJQYW5lIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwidmlldyIsIkRhc2giLCJNaW5pUHJvZmlsZSIsInVzZXJEYXRhIiwidXNlciIsImZpcnN0X25hbWUiLCJhdmF0YXIiLCJjaXR5IiwiUmVzdWx0cyIsIlNlYXJjaEJveCIsInRlbXBTZWFyY2giLCJzZXRUZW1wU2VhcmNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiU2lkZU5hdiIsInN0eWxlIiwiYnV0dG9uQ29udGFpbmVyIiwibmF2QnV0dG9uIiwiRmVlZCIsIkZlZWRDYXJkIiwidXBkYXRlIiwiU3RhdHVzRG90IiwiY29sb3IiLCJmaWxsSGVscGVyIiwiVXNlcnMiLCJ1c2Vyc0RhdGEiLCJ1c2VycyIsIkFycmF5IiwiZmlsbCIsImxhc3RfbmFtZSIsInJvbGUiLCJDYXJkR2VuZXJhdG9yIiwiQ2FyZCIsImlkIiwiY2FyZHMiLCJtYXAiLCJpIiwiZ3JpZCIsImxlbmd0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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QUFOLENBQWFqVSxHQUFiLEVBQWtCbUYsT0FBbEIsQ0FBUDtBQUNIOztBQUNEN0YsT0FBTyxDQUFDd0Isb0JBQVIsR0FBK0JBLG9CQUEvQjtBQUNBeEIsT0FBTyxDQUFDNFUsRUFBUixHQUFhLE9BQU92RixXQUFQLEtBQXVCLFdBQXBDO0FBQ0FyUCxPQUFPLENBQUNvUCxFQUFSLEdBQWFwUCxPQUFPLENBQUM0VSxFQUFSLElBQ1QsT0FBT3ZGLFdBQVcsQ0FBQ0MsSUFBbkIsS0FBNEIsVUFEbkIsSUFFVCxPQUFPRCxXQUFXLENBQUN3RixPQUFuQixLQUErQixVQUZuQyxDOzs7Ozs7Ozs7OztBQ3RHQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNlLHFFQUVYO0FBQUssV0FBUyxFQUFDLG9GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLENBRkosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94J1xuaW1wb3J0IERhc2ggZnJvbSAnLi9EYXNoJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJ1xuaW1wb3J0IE1pbmlQcm9maWxlIGZyb20gJy4vTWluaVByb2ZpbGUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlclBhbmUoKSB7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaClcbiAgICAgICAgLy8gZGVib3VuY2UoICgpID0+IGNvbnNvbGUubG9nKCd0cmlnZ2VyZWQnKSwgMTAwMClcbiAgICB9LCBbc2VhcmNoXSlcbiAgICBjb25zdCB2aWV3ID0gKHNlYXJjaCA9PT0gJycpID8gPERhc2ggc2VhcmNoPXtzZWFyY2h9Lz4gOiA8UmVzdWx0cyBzZWFyY2g9e3NlYXJjaH0vPlxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbHVtbiBvdmVyZmxvdy15LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlbiBjb250ZW50LXN0YXJ0IHRleHQtbGVmdCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGgtMzYgdy1mdWxsJyA+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzZXRTZWFyY2g9e3NldFNlYXJjaH0gc2VhcmNoPXtzZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICA8TWluaVByb2ZpbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3ZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBVc2VycyBmcm9tICcuL3NoYXJlZC9Vc2VycydcbmltcG9ydCBGZWVkIGZyb20gJy4vc2hhcmVkL0ZlZWQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNiBoLWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayBmb250LWYxXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1mMSB0ZXh0LWxlZnQgbWwtNCB0cmFja2luZy13aWRlXCI+TXkgVGVhbTwvaDM+XG4gICAgICAgICAgICA8VXNlcnMgLz5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtZjEgdGV4dC1sZWZ0IG10LTYgbWwtNCB0cmFja2luZy13aWRlXCI+TGF0ZXN0IE5ld3M8L2gzPlxuICAgICAgICAgICAgPEZlZWQgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgU3RhdHVzRG90IGZyb20gJy4vc2hhcmVkL1N0YXR1c0RvdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbmlQcm9maWxlKHt1c2VyRGF0YX0pIHtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEgfHwge1xuICAgICAgICBmaXJzdF9uYW1lOiAnU2FtJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cDovL3BsYWNlLXB1cHB5LmNvbS8yMDF4MzAwJyxcbiAgICAgICAgY2l0eTogJ05ldyBZb3JrJ1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXgganVzdGlmeS1lbmQgc2VsZi1jZW50ZXIgaC0xMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LTEyIGgtMTIgbXItMiBzaGFkb3cgYm9yZGVyIGJvcmRlci1jMSBib3JkZXItb3BhY2l0eS01MCByb3VuZGVkLWZ1bGwnIHNyYz17dXNlci5hdmF0YXJ9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMyBoLTEwIGZvbnQtZjEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jMSB3LTMyIG5vLXdyYXAnPldlbGNvbWUsIHt1c2VyLmZpcnN0X25hbWV9ITwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbiBmb250LWMxJz57dXNlci5jaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC10aGluIGZvbnQtYzEgbXQtMiBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5PbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNEb3QgY29sb3I9J2dyZWVuLTQwMCcvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoe3NlYXJjaH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1jNCB0ZXh0LWNlbnRlciBmb250LXdoaXRlIGZvbnQtZjFcIj5cbiAgICAgICAgICAgIFJlc3VsdHMgSGVyZTpcbiAgICAgICAgICAgIFF1ZXJ5IGlzIHtzZWFyY2h9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCB7IElvSW9zU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQm94KHtzZWFyY2gsIHNldFNlYXJjaH0pIHtcbiAgICBjb25zdCBbdGVtcFNlYXJjaCwgc2V0VGVtcFNlYXJjaF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0VGVtcFNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2godGVtcFNlYXJjaClcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00OCBmbGV4IG5vLXdyYXAgaC04IG1yLTU2IGJvcmRlciBib3JkZXItYmxhY2sgbS01Jz5cbiAgICAgICAgICAgIDxJb0lvc1NlYXJjaCBjbGFzc05hbWU9J3ctOCBteS1hdXRvJy8+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIG91dGxpbmUtbm9uZScgdHlwZT1cInRleHRcIiBuYW1lPSdzZWFyY2gnIHBsYWNlaG9sZGVyPSdTZWFyY2ggRXZlcnl3aGVyZSdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXYgKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICBidXR0b25Db250YWluZXI6ICdjb2x1bW4td2lkdGhzZWxmLXN0YXJ0IGZsZXggYm9yZGVyIGJvcmRlci1jMSBmbGV4LWNvbHVtbiBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXInLFxuICAgICAgICBuYXZCdXR0b246ICd3LTkvMTIgbWwtMS80IG1yLTEvNCBoLWF1dG8gbGVhZGluZy10aWdodCBteS0wIGZvbnQtdGhpbiB0cmFja2luZy13aWRlIHRleHQtMnhsIHRleHQtd2hpdGUgZm9udC1mMSB0ZXh0LWxlZnQgdHJhbnNmb3JtIGhvdmVyOnRyYW5zbGF0ZS14LTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0J1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGZsZXgtY29sdW1uIGNvbnRlbnQtc3RhcnQgdGV4dC1jZW50ZXIgaC1mdWxsIGJnLWMxXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWYxIHRleHQtNXhsIHctZnVsbCBteS0xMiBoLTIwXCI+ZG9nUGFyazwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5uYXZCdXR0b259Pk15IFRlYW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLm5hdkJ1dHRvbn0+TGF0ZXN0IE5ld3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLm5hdkJ1dHRvbn0+UHJvamVjdCBUZWFtczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUubmF2QnV0dG9ufT5EaXJlY3Rvcnk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IEZlZWRDYXJkIGZyb20gJy4vRmVlZENhcmQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPEZlZWRDYXJkIC8+XG4gICAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZENhcmQoe3VwZGF0ZX0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHVzRG90KHtjb2xvcn0pIHtcbiAgICBsZXQgZmlsbEhlbHBlciA9IGBmaWxsLWN1cnJlbnQgdGV4dC0ke2NvbG9yfSBzdHJva2UtMC4xYFxuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIGNsYXNzTmFtZT0ndy0xMHB4IGgtYXV0byBtbC0xJz5cbiAgICAgICAgICAgIDxjaXJjbGUgcj1cIjRcIiBjeD1cIjRcIiBjeT1cIjRcIiBjbGFzc05hbWU9e2ZpbGxIZWxwZXJ9Lz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICApXG59XG4iLCJpbXBvcnQgU3RhdHVzRG90IGZyb20gICcuLi9zaGFyZWQvU3RhdHVzRG90J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoe3VzZXJzRGF0YX0pIHtcbiAgICBjb25zdCB1c2VycyA9IHVzZXJzRGF0YSB8fFxuICAgICAgICBBcnJheSgyMCkuZmlsbCh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiAnRmlyc3QnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnTGFzdCcsXG4gICAgICAgICAgICByb2xlOiAnUHJvamVjdCBMZWFkJyxcbiAgICAgICAgICAgIGF2YXRhcjogYGh0dHA6Ly9wbGFjZS1wdXBweS5jb20vMjAweDMwMGAsXG4gICAgICAgICAgICBjaXR5OiAnTmV3IFlvcmsnXG4gICAgICAgIH1cbiAgICApXG4gICAgY29uc3QgQ2FyZEdlbmVyYXRvciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBDYXJkID0gKHt1c2VyLCBpZH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgcGwtNCBtdC00Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJzW2lkXS5hdmF0YXJ9IGNsYXNzTmFtZT0ndy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBzaGFkb3cgYm9yZGVyLTIgYm9yZGVyLWMxIGJvcmRlci1vcGFjaXR5LTc1Jy8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHctMjQgbXgtYXV0byBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWYxXCI+e3VzZXJzW2lkXS5maXJzdF9uYW1lKycgJyt1c2Vyc1tpZF0ubGFzdF9uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgZm9udC1mMSBmb250LXRoaW4nPnt1c2Vyc1tpZF0ucm9sZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgZm9udC1mMSBmb250LXRoaW4nPnt1c2Vyc1tpZF0uY2l0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC10aGluIHRleHQteHMgZm9udC1jMSBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T25saW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0dXNEb3QgY29sb3I9J2dyZWVuLTQwMCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhcmRzID0gdXNlcnMubWFwKCh1c2VyLCBpKSA9PiAoPENhcmQgdXNlcj17dXNlcn0gaWQ9e2l9IC8+KSlcbiAgICAgICAgcmV0dXJuIGNhcmRzXG4gICAgfVxuICAgIGNvbnN0IGdyaWQgPSBgdy1mdWxsIG92ZXJmbG93LXgtc2Nyb2xsIGdyaWQgZ3JpZC1jb2xzLSR7dXNlcnMubGVuZ3RofSBjb2wtZ2FwLTAgbm8tc2Nyb2xsYmFyIGdyaWQtZmxvdy1jb2wgbm8td3JhcGBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkfT5cbiAgICAgICAgICAgIDxDYXJkR2VuZXJhdG9yIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCAnLi4vc3R5bGVzL3RhaWx3aW5kLmNzcydcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU5hdidcbmltcG9ydCBDZW50ZXJQYW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQ2VudGVyUGFuZSdcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbW9iaWxlSG9tZSBzbTpncmlkLWNvbHMtaG9tZSBncmlkLXJvd3MtMSBoLXNjcmVlbiBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgICA8U2lkZU5hdiAvPlxuICAgICAgICA8Q2VudGVyUGFuZSAvPlxuICAgIDwvZGl2PlxuKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==