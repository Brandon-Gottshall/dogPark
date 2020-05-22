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
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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
      lineNumber: 14,
      columnNumber: 36
    }
  }) : __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 62
    }
  });
  return __jsx("div", {
    className: "flex flex-wrap flex-column overflow-y-scroll overflow-x-hidden content-start text-left h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "grid grid-cols-2 grid-rows-1 h-36 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setSearch: setSearch,
    search: search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(_MiniProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
/* harmony import */ var _public_helper_api_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/helper/api-helper */ "./public/helper/api-helper.js");
/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectGrid */ "./components/ProjectGrid.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/Dash.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Dash() {
  const {
    0: userData,
    1: setUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const data = Object(_public_helper_api_helper__WEBPACK_IMPORTED_MODULE_3__["getMyTeamAndProjects"])();
    data.then(value => setUserData(value));
  }, []);
  return __jsx("div", {
    className: "w-full mt-6 h-full text-center text-black font-f1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "font-f1 text-left ml-4 tracking-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "My Team"), __jsx(_shared_Users__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userData: userData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "font-f1 text-left mt-6 ml-4 tracking-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Latest News"), __jsx(_shared_Feed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "font-f1 text-left mt-6 ml-4 tracking-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Project Teams"), __jsx(_ProjectGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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

/***/ "./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/Profile.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Profile() {
  const {
    userID,
    storeUserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  return __jsx("div", {
    className: "w-full bg-c1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, userID));
}

/***/ }),

/***/ "./components/ProjectGrid.jsx":
/*!************************************!*\
  !*** ./components/ProjectGrid.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_ProjectSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/ProjectSquare */ "./components/shared/ProjectSquare.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/ProjectGrid.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProjectGrid({
  data,
  type
}) {
  //type can be used to switch update/news
  const projectsData = data || Array(20).fill({
    name: 'Project Name'
  });
  const squares = projectsData.map((data, i) => __jsx(_shared_ProjectSquare__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    key: i,
    id: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 51
    }
  }));
  const grid = `w-screen overflow-x-scroll grid grid-rows-2 grid-cols-${projectsData.length / 2} col-gap-0 no-scrollbar justify-between no-wrap ml-2`;
  return __jsx("div", {
    style: {
      gridTemplateColumns: `repeat(${projectsData.length / 2}, 250px)`
    },
    className: grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, squares);
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
    buttonContainer: 'column-width self-start flex flex-column flex-wrap items-start justify-center',
    navButton: 'w-9/12 ml-1/4 mr-1/4 h-auto leading-tight my-0 font-thin tracking-wide text-2xl text-white font-f1 text-left transform hover:translate-x-5 transition-all duration-200 ease-in-out'
  };
  return __jsx("div", {
    className: "flex flex-wrap flex-column content-start text-center h-full shadow bg-c1",
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
  }, "Directory"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/docs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: style.navButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 40
    }
  }, "Docs"))));
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

function Feed({
  data,
  type
}) {
  //type can be used to switch update/news
  const feedData = data || Array(20).fill({});
  const cards = feedData.map((data, i) => __jsx(_FeedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 45
    }
  }));
  const grid = `w-screen overflow-x-scroll grid grid-rows-2 grid-cols-${feedData.length / 2} col-gap-0 no-scrollbar justify-between no-wrap`;
  return __jsx("div", {
    style: {
      gridTemplateColumns: `repeat(${feedData.length / 2}, 350px)`
    },
    className: grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, cards);
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
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/FeedCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FeedCard({
  update
}) {
  update = update || {
    title: 'News Title',
    updatedAt: 'May 16, 2020'
  };
  return __jsx("div", {
    className: "newsCard my-4 shadow bg-white border-t-4 border-c1 ml-4 pl-1 text-left text-c1 font-f1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "h-4 tracking-wide font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, update.title), __jsx("p", {
    className: "text-c3 text-xs mt-1 h-4 w-full mx-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, update.updatedAt), __jsx("p", {
    className: "mt-3 text-black text-left text-sm font-f1 leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Bork shibe heckin angery woofer yapper the neighborhood pupper clouds porgo, snoot lotsa pats bork super chub very good spot."), __jsx("div", {
    className: "flex justify-end w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "w-1/3 flex no-wrap text-right items-center mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Read More", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowForward"], {
    className: "w-4 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 94
    }
  }))));
}

/***/ }),

/***/ "./components/shared/ProjectSquare.jsx":
/*!*********************************************!*\
  !*** ./components/shared/ProjectSquare.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectSquare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/ProjectSquare.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProjectSquare({
  data,
  id
}) {
  const iconStyle = 'w-40 h-40 text-white mt-2';
  const icons = [__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosBarcode"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosCash"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosFlask"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosOptions"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPaw"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosThunderstorm"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosToday"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosTrendingUp"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoIonic"], {
    className: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })];
  const color = [2, 6, 4];
  let square = `projectSquare flex flex-col items-center border-c${color[id % 3]} bg-c${color[id % 3]}`;
  return __jsx("div", {
    key: id,
    className: square,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "w-full mt-4 font-f1 text-center text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, data.name), icons[id % 8], __jsx("p", {
    className: "font-f1 font-thin text-sm tracking-tight self-end mr-4 mt-4 text-white text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "MEET THE TEAM"));
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
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/userContext */ "./contexts/userContext.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/components/shared/Users.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Users({
  userData
}) {
  const users = userData || Array(20).fill({
    first_name: 'First',
    last_name: 'Last',
    role: 'Project Lead',
    avatar: `http://place-puppy.com/200x300`,
    city: 'New York'
  });
  const {
    userID,
    storeUserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);

  const CardGenerator = () => {
    const Card = ({
      user,
      id
    }) => {
      return __jsx("div", {
        onClick: () => storeUserID(1),
        className: "w-40 pl-4 mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: user.avatar,
        className: "w-32 h-32 rounded-full shadow border-2 border-c1 border-opacity-75",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "text-left w-24 mx-auto leading-tight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      }, __jsx("h3", {
        className: "text-lg font-f1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      }, user.first_name + ' ' + user.last_name), __jsx("p", {
        className: "text-xs font-f1 font-thin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }
      }, user.title), __jsx("p", {
        className: "text-xs font-f1 font-thin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, user.city), __jsx("div", {
        className: "font-thin text-xs font-c1 flex items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }
      }, "Online"), __jsx(_shared_StatusDot__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: "green-400",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }
      }))));
    };

    const cards = users.map((user, i) => __jsx(Card, {
      user: user,
      key: i,
      id: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(CardGenerator, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./contexts/userContext.jsx":
/*!**********************************!*\
  !*** ./contexts/userContext.jsx ***!
  \**********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/contexts/userContext.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const UserContextProvider = props => {
  const {
    0: userID,
    1: setUserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const storeUserID = userID => setUserID(userID);

  return __jsx(UserContext.Provider, {
    value: {
      userID,
      storeUserID
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (UserContextProvider);

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
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.jsx");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav.jsx");
/* harmony import */ var _components_CenterPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CenterPane */ "./components/CenterPane.jsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.jsx");
var _jsxFileName = "/Users/brandongottshall/GDrive/dogPark/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    userID,
    storeUserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const gridType = userID ? 'profile sm:grid-cols-profile' : 'mobileHome sm:grid-cols-home';
  const grid = `grid grid-cols-${gridType} grid-rows-1 h-screen overflow-y-hidden`;
  return __jsx("div", {
    className: grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_components_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx(_components_CenterPane__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), userID != false ? __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 32
    }
  }) : null);
});

/***/ }),

/***/ "./public/helper/api-helper.js":
/*!*************************************!*\
  !*** ./public/helper/api-helper.js ***!
  \*************************************/
/*! exports provided: getMyTeamAndProjects, getTeamUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyTeamAndProjects", function() { return getMyTeamAndProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamUpdates", function() { return getTeamUpdates; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: false ? undefined : 'http://localhost:3000'
}); // ====================================
// ============= Auth =================
// ====================================
// export const loginUser = async (loginData) => {
//   const resp = await api.post('/auth/login', { auth: loginData });
//   localStorage.setItem('authToken', resp.data.token);
//   api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
//   return resp.data.user;
// }
// export const registerUser = async (registerData) => {
//   const resp = await api.post('/users/', { user: registerData })
//   localStorage.setItem('authToken', resp.data.token);
//   api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
//   return resp.data.user
// }
// export const verifyUser = async () => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     api.defaults.headers.common.authorization = `Bearer ${token}`
//     const resp = await api.get('/auth/verify');
//     return resp.data
//   }
//   return false
// }
// export const removeToken = () => {
//   api.defaults.headers.common.authorization = null;
// }
// ====================================
// ============= Resources ================
// ====================================

const getMyTeamAndProjects = async () => {
  const resp = await api.get('/users/1/team');
  return resp.data;
};
const getTeamUpdates = async () => {
  const resp = await api.get('/updates');
  return resp.data;
};

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbnRlclBhbmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaW5pUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVOYXYuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL0ZlZWQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL0ZlZWRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9qZWN0U3F1YXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9TdGF0dXNEb3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hhcmVkL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy91c2VyQ29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2hlbHBlci9hcGktaGVscGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkNlbnRlclBhbmUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2aWV3IiwiRGFzaCIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJkYXRhIiwiZ2V0TXlUZWFtQW5kUHJvamVjdHMiLCJ0aGVuIiwidmFsdWUiLCJNaW5pUHJvZmlsZSIsInVzZXIiLCJmaXJzdF9uYW1lIiwiYXZhdGFyIiwiY2l0eSIsIlByb2ZpbGUiLCJ1c2VySUQiLCJzdG9yZVVzZXJJRCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIlByb2plY3RHcmlkIiwidHlwZSIsInByb2plY3RzRGF0YSIsIkFycmF5IiwiZmlsbCIsIm5hbWUiLCJzcXVhcmVzIiwibWFwIiwiaSIsImdyaWQiLCJsZW5ndGgiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiUmVzdWx0cyIsIlNlYXJjaEJveCIsInRlbXBTZWFyY2giLCJzZXRUZW1wU2VhcmNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsIlNpZGVOYXYiLCJzdHlsZSIsImJ1dHRvbkNvbnRhaW5lciIsIm5hdkJ1dHRvbiIsIkZlZWQiLCJmZWVkRGF0YSIsImNhcmRzIiwiRmVlZENhcmQiLCJ1cGRhdGUiLCJ0aXRsZSIsInVwZGF0ZWRBdCIsIlByb2plY3RTcXVhcmUiLCJpZCIsImljb25TdHlsZSIsImljb25zIiwiY29sb3IiLCJzcXVhcmUiLCJTdGF0dXNEb3QiLCJmaWxsSGVscGVyIiwiVXNlcnMiLCJ1c2VycyIsImxhc3RfbmFtZSIsInJvbGUiLCJDYXJkR2VuZXJhdG9yIiwiQ2FyZCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzZXRVc2VySUQiLCJjaGlsZHJlbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsImdyaWRUeXBlIiwiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIiwicmVzcCIsImdldFRlYW1VcGRhdGVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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QSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCdcbmltcG9ydCBEYXNoIGZyb20gJy4vRGFzaCdcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cydcbmltcG9ydCBNaW5pUHJvZmlsZSBmcm9tICcuL01pbmlQcm9maWxlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy91c2VyQ29udGV4dCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VudGVyUGFuZSgpIHtcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoKVxuICAgICAgICAvLyBkZWJvdW5jZSggKCkgPT4gY29uc29sZS5sb2coJ3RyaWdnZXJlZCcpLCAxMDAwKVxuICAgIH0sIFtzZWFyY2hdKVxuICAgIGNvbnN0IHZpZXcgPSAoc2VhcmNoID09PSAnJykgPyA8RGFzaCBzZWFyY2g9e3NlYXJjaH0vPiA6IDxSZXN1bHRzIHNlYXJjaD17c2VhcmNofS8+XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGZsZXgtY29sdW1uIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIGNvbnRlbnQtc3RhcnQgdGV4dC1sZWZ0IGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgaC0zNiB3LWZ1bGwnID5cbiAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHNldFNlYXJjaD17c2V0U2VhcmNofSBzZWFyY2g9e3NlYXJjaH0vPlxuICAgICAgICAgICAgICAgIDxNaW5pUHJvZmlsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dmlld31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFVzZXJzIGZyb20gJy4vc2hhcmVkL1VzZXJzJ1xuaW1wb3J0IEZlZWQgZnJvbSAnLi9zaGFyZWQvRmVlZCdcbmltcG9ydCB7IGdldE15VGVhbUFuZFByb2plY3RzfSBmcm9tICcuLi9wdWJsaWMvaGVscGVyL2FwaS1oZWxwZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2goKSB7XG5cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBnZXRNeVRlYW1BbmRQcm9qZWN0cygpO1xuICAgIGRhdGEudGhlbigodmFsdWUpID0+c2V0VXNlckRhdGEodmFsdWUpKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC02IGgtZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIGZvbnQtZjFcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWYxIHRleHQtbGVmdCBtbC00IHRyYWNraW5nLXdpZGVcIj5NeSBUZWFtPC9oMz5cbiAgICAgICAgICAgIDxVc2VycyB1c2VyRGF0YT17dXNlckRhdGF9IC8+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWYxIHRleHQtbGVmdCBtdC02IG1sLTQgdHJhY2tpbmctd2lkZVwiPkxhdGVzdCBOZXdzPC9oMz5cbiAgICAgICAgICAgIDxGZWVkIC8+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWYxIHRleHQtbGVmdCBtdC02IG1sLTQgdHJhY2tpbmctd2lkZVwiPlByb2plY3QgVGVhbXM8L2gzPlxuICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBTdGF0dXNEb3QgZnJvbSAnLi9zaGFyZWQvU3RhdHVzRG90J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWluaVByb2ZpbGUoe3VzZXJEYXRhfSkge1xuICAgIGNvbnN0IHVzZXIgPSB1c2VyRGF0YSB8fCB7XG4gICAgICAgIGZpcnN0X25hbWU6ICdTYW0nLFxuICAgICAgICBhdmF0YXI6ICdodHRwOi8vcGxhY2UtcHVwcHkuY29tLzIwMXgzMDAnLFxuICAgICAgICBjaXR5OiAnTmV3IFlvcmsnXG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBqdXN0aWZ5LWVuZCBzZWxmLWNlbnRlciBoLTEyIHctZnVsbFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctMTIgaC0xMiBtci0yIHNoYWRvdyBib3JkZXIgYm9yZGVyLWMxIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCcgc3JjPXt1c2VyLmF2YXRhcn0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdyaWQtcm93cy0zIGgtMTAgZm9udC1mMSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWMxIHctMzIgbm8td3JhcCc+V2VsY29tZSwge3VzZXIuZmlyc3RfbmFtZX0hPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10aGluIGZvbnQtYzEnPnt1c2VyLmNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LXRoaW4gZm9udC1jMSBtdC0yIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LXRoaW4nPk9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXR1c0RvdCBjb2xvcj0nZ3JlZW4tNDAwJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy91c2VyQ29udGV4dCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgY29uc3QgeyB1c2VySUQsIHN0b3JlVXNlcklEIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBiZy1jMSc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt1c2VySUR9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByb2plY3RTcXVhcmUgZnJvbSBcIi4vc2hhcmVkL1Byb2plY3RTcXVhcmVcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEdyaWQoe2RhdGEsIHR5cGV9KSB7IC8vdHlwZSBjYW4gYmUgdXNlZCB0byBzd2l0Y2ggdXBkYXRlL25ld3NcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBkYXRhIHx8IEFycmF5KDIwKS5maWxsKHtcbiAgICAgICAgbmFtZTogJ1Byb2plY3QgTmFtZSdcbiAgICB9KVxuICAgIGNvbnN0IHNxdWFyZXMgPSBwcm9qZWN0c0RhdGEubWFwKChkYXRhLCBpKSA9PiA8UHJvamVjdFNxdWFyZSBkYXRhPXtkYXRhfSBrZXk9e2l9IGlkPXtpfS8+KVxuICAgIGNvbnN0IGdyaWQgPSBgdy1zY3JlZW4gb3ZlcmZsb3cteC1zY3JvbGwgZ3JpZCBncmlkLXJvd3MtMiBncmlkLWNvbHMtJHtwcm9qZWN0c0RhdGEubGVuZ3RoLzJ9IGNvbC1nYXAtMCBuby1zY3JvbGxiYXIganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgbWwtMmBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7cHJvamVjdHNEYXRhLmxlbmd0aC8yfSwgMjUwcHgpYH19IGNsYXNzTmFtZT17Z3JpZH0+XG4gICAgICAgICAgICB7c3F1YXJlc31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0cyh7c2VhcmNofSkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLWM0IHRleHQtY2VudGVyIGZvbnQtd2hpdGUgZm9udC1mMVwiPlxuICAgICAgICAgICAgUmVzdWx0cyBIZXJlOlxuICAgICAgICAgICAgUXVlcnkgaXMge3NlYXJjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElvSW9zU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCb3goe3NlYXJjaCwgc2V0U2VhcmNofSkge1xuICAgIGNvbnN0IFt0ZW1wU2VhcmNoLCBzZXRUZW1wU2VhcmNoXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRUZW1wU2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaCh0ZW1wU2VhcmNoKVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQ4IGZsZXggbm8td3JhcCBoLTggbXItNTYgYm9yZGVyIGJvcmRlci1ibGFjayBtLTUnPlxuICAgICAgICAgICAgPElvSW9zU2VhcmNoIGNsYXNzTmFtZT0ndy04IG15LWF1dG8nLz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgb3V0bGluZS1ub25lJyB0eXBlPVwidGV4dFwiIG5hbWU9J3NlYXJjaCcgcGxhY2Vob2xkZXI9J1NlYXJjaCBFdmVyeXdoZXJlJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZU5hdiAoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lcjogJ2NvbHVtbi13aWR0aCBzZWxmLXN0YXJ0IGZsZXggZmxleC1jb2x1bW4gZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyJyxcbiAgICAgICAgbmF2QnV0dG9uOiAndy05LzEyIG1sLTEvNCBtci0xLzQgaC1hdXRvIGxlYWRpbmctdGlnaHQgbXktMCBmb250LXRoaW4gdHJhY2tpbmctd2lkZSB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIGZvbnQtZjEgdGV4dC1sZWZ0IHRyYW5zZm9ybSBob3Zlcjp0cmFuc2xhdGUteC01IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbHVtbiBjb250ZW50LXN0YXJ0IHRleHQtY2VudGVyIGgtZnVsbCBzaGFkb3cgYmctYzFcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZjEgdGV4dC01eGwgdy1mdWxsIG15LTEyIGgtMjBcIj5kb2dQYXJrPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLm5hdkJ1dHRvbn0+TXkgVGVhbTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUubmF2QnV0dG9ufT5MYXRlc3QgTmV3czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUubmF2QnV0dG9ufT5Qcm9qZWN0IFRlYW1zPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5uYXZCdXR0b259PkRpcmVjdG9yeTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9jcyc+PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLm5hdkJ1dHRvbn0+RG9jczwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IEZlZWRDYXJkIGZyb20gJy4vRmVlZENhcmQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkKHtkYXRhLCB0eXBlfSkgeyAvL3R5cGUgY2FuIGJlIHVzZWQgdG8gc3dpdGNoIHVwZGF0ZS9uZXdzXG4gICAgY29uc3QgZmVlZERhdGEgPSBkYXRhIHx8IEFycmF5KDIwKS5maWxsKHt9KVxuICAgIGNvbnN0IGNhcmRzID0gZmVlZERhdGEubWFwKChkYXRhLCBpKSA9PiA8RmVlZENhcmQgZGF0YT17ZGF0YX0ga2V5PXtpfS8+KVxuICAgIGNvbnN0IGdyaWQgPSBgdy1zY3JlZW4gb3ZlcmZsb3cteC1zY3JvbGwgZ3JpZCBncmlkLXJvd3MtMiBncmlkLWNvbHMtJHtmZWVkRGF0YS5sZW5ndGgvMn0gY29sLWdhcC0wIG5vLXNjcm9sbGJhciBqdXN0aWZ5LWJldHdlZW4gbm8td3JhcGBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7ZmVlZERhdGEubGVuZ3RoLzJ9LCAzNTBweClgfX0gY2xhc3NOYW1lPXtncmlkfT5cbiAgICAgICAgICAgIHtjYXJkc31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWRDYXJkKHt1cGRhdGV9KSB7XG5cbiAgICB1cGRhdGUgPSB1cGRhdGUgfHwge1xuICAgICAgICB0aXRsZTogJ05ld3MgVGl0bGUnLFxuICAgICAgICB1cGRhdGVkQXQ6ICdNYXkgMTYsIDIwMjAnXG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzQ2FyZCBteS00IHNoYWRvdyBiZy13aGl0ZSBib3JkZXItdC00IGJvcmRlci1jMSBtbC00IHBsLTEgdGV4dC1sZWZ0IHRleHQtYzEgZm9udC1mMVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0naC00IHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZCc+e3VwZGF0ZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWMzIHRleHQteHMgbXQtMSBoLTQgdy1mdWxsIG14LTAnPnt1cGRhdGUudXBkYXRlZEF0fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMyB0ZXh0LWJsYWNrIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtZjEgbGVhZGluZy10aWdodCcgPkJvcmsgc2hpYmUgaGVja2luIGFuZ2VyeSB3b29mZXIgeWFwcGVyIHRoZSBuZWlnaGJvcmhvb2QgcHVwcGVyIGNsb3VkcyBwb3Jnbywgc25vb3QgbG90c2EgcGF0cyBib3JrIHN1cGVyIGNodWIgdmVyeSBnb29kIHNwb3QuPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgdy1mdWxsJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0xLzMgZmxleCBuby13cmFwIHRleHQtcmlnaHQgaXRlbXMtY2VudGVyIG10LTQnPlJlYWQgTW9yZTxJb0lvc0Fycm93Rm9yd2FyZCBjbGFzc05hbWU9J3ctNCBteC1hdXRvJyAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgSW9Jb3NCYXJjb2RlLFxuICAgIElvSW9zQ2FzaCxcbiAgICBJb0lvc0ZsYXNrLFxuICAgIElvSW9zT3B0aW9ucyxcbiAgICBJb0lvc1BhdyxcbiAgICBJb0lvc1RodW5kZXJzdG9ybSxcbiAgICBJb0lvc1RvZGF5LFxuICAgIElvSW9zVHJlbmRpbmdVcCxcbiAgICBJb0xvZ29Jb25pY1xufSBmcm9tICdyZWFjdC1pY29ucy9pbydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0U3F1YXJlKHtkYXRhLCBpZH0pIHtcbiAgICBjb25zdCBpY29uU3R5bGUgPSAndy00MCBoLTQwIHRleHQtd2hpdGUgbXQtMidcbiAgICBjb25zdCBpY29ucyA9IFtcbiAgICAgICAgPElvSW9zQmFyY29kZSAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NDYXNoICAgICAgICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0lvc0ZsYXNrICAgICAgICBjbGFzc05hbWU9e2ljb25TdHlsZX0vPixcbiAgICAgICAgPElvSW9zT3B0aW9ucyAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NQYXcgICAgICAgICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0lvc1RodW5kZXJzdG9ybSBjbGFzc05hbWU9e2ljb25TdHlsZX0vPixcbiAgICAgICAgPElvSW9zVG9kYXkgICAgICAgIGNsYXNzTmFtZT17aWNvblN0eWxlfS8+LFxuICAgICAgICA8SW9Jb3NUcmVuZGluZ1VwICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9Lz4sXG4gICAgICAgIDxJb0xvZ29Jb25pYyAgICAgICBjbGFzc05hbWU9e2ljb25TdHlsZX0vPlxuICAgIF1cbiAgICBjb25zdCBjb2xvciA9IFsgMiwgNiwgNCBdXG4gICAgbGV0IHNxdWFyZSA9IGBwcm9qZWN0U3F1YXJlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJvcmRlci1jJHtjb2xvcltpZCUzXX0gYmctYyR7Y29sb3JbaWQlM119YFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXtzcXVhcmV9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctZnVsbCBtdC00IGZvbnQtZjEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPntkYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIHtpY29uc1tpZCU4XX1cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZjEgZm9udC10aGluIHRleHQtc20gdHJhY2tpbmctdGlnaHQgc2VsZi1lbmQgbXItNCBtdC00IHRleHQtd2hpdGUgdGV4dC1sZWZ0XCI+TUVFVCBUSEUgVEVBTTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHVzRG90KHtjb2xvcn0pIHtcbiAgICBsZXQgZmlsbEhlbHBlciA9IGBmaWxsLWN1cnJlbnQgdGV4dC0ke2NvbG9yfSBzdHJva2UtMC4xYFxuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIGNsYXNzTmFtZT0ndy0xMHB4IGgtYXV0byBtbC0xJz5cbiAgICAgICAgICAgIDxjaXJjbGUgcj1cIjRcIiBjeD1cIjRcIiBjeT1cIjRcIiBjbGFzc05hbWU9e2ZpbGxIZWxwZXJ9Lz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICApXG59XG4iLCJpbXBvcnQgU3RhdHVzRG90IGZyb20gICcuLi9zaGFyZWQvU3RhdHVzRG90J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy91c2VyQ29udGV4dCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHt1c2VyRGF0YX0pIHtcbiAgICBjb25zdCB1c2VycyA9IHVzZXJEYXRhIHx8XG4gICAgICAgIEFycmF5KDIwKS5maWxsKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICdGaXJzdCcsXG4gICAgICAgICAgICBsYXN0X25hbWU6ICdMYXN0JyxcbiAgICAgICAgICAgIHJvbGU6ICdQcm9qZWN0IExlYWQnLFxuICAgICAgICAgICAgYXZhdGFyOiBgaHR0cDovL3BsYWNlLXB1cHB5LmNvbS8yMDB4MzAwYCxcbiAgICAgICAgICAgIGNpdHk6ICdOZXcgWW9yaydcbiAgICAgICAgfVxuICAgIClcbiAgICBjb25zdCB7IHVzZXJJRCwgc3RvcmVVc2VySUQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgY29uc3QgQ2FyZEdlbmVyYXRvciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBDYXJkID0gKHt1c2VyLCBpZH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzdG9yZVVzZXJJRCgxKX0gY2xhc3NOYW1lPSd3LTQwIHBsLTQgbXQtNCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gY2xhc3NOYW1lPSd3LTMyIGgtMzIgcm91bmRlZC1mdWxsIHNoYWRvdyBib3JkZXItMiBib3JkZXItYzEgYm9yZGVyLW9wYWNpdHktNzUnLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdy0yNCBteC1hdXRvIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtZjFcIj57dXNlci5maXJzdF9uYW1lKycgJyt1c2VyLmxhc3RfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIGZvbnQtZjEgZm9udC10aGluJz57dXNlci50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgZm9udC1mMSBmb250LXRoaW4nPnt1c2VyLmNpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtdGhpbiB0ZXh0LXhzIGZvbnQtYzEgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdHVzRG90IGNvbG9yPSdncmVlbi00MDAnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXJkcyA9IHVzZXJzLm1hcCgodXNlciwgaSkgPT4gKDxDYXJkIHVzZXI9e3VzZXJ9IGtleT17aX0gaWQ9e2l9IC8+KSlcbiAgICAgICAgcmV0dXJuIGNhcmRzXG4gICAgfVxuICAgIGNvbnN0IGdyaWQgPSBgdy1mdWxsIG92ZXJmbG93LXgtc2Nyb2xsIGdyaWQgZ3JpZC1jb2xzLSR7dXNlcnMubGVuZ3RofSBjb2wtZ2FwLTAgbm8tc2Nyb2xsYmFyIGdyaWQtZmxvdy1jb2wgbm8td3JhcGBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkfT5cbiAgICAgICAgICAgIDxDYXJkR2VuZXJhdG9yIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcbmNvbnN0IFVzZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgWyB1c2VySUQsIHNldFVzZXJJRCBdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHN0b3JlVXNlcklEID0gdXNlcklEID0+IHNldFVzZXJJRCh1c2VySUQpXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJJRCwgIHN0b3JlVXNlcklEIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZXh0UHJvdmlkZXI7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0J1xuaW1wb3J0ICcuLi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlTmF2J1xuaW1wb3J0IENlbnRlclBhbmUgZnJvbSAnLi4vY29tcG9uZW50cy9DZW50ZXJQYW5lJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlcklELCBzdG9yZVVzZXJJRCB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcbiAgICBjb25zdCBncmlkVHlwZSA9IHVzZXJJRCAgPyAncHJvZmlsZSBzbTpncmlkLWNvbHMtcHJvZmlsZScgOiAnbW9iaWxlSG9tZSBzbTpncmlkLWNvbHMtaG9tZSdcbiAgICBjb25zdCBncmlkID0gYGdyaWQgZ3JpZC1jb2xzLSR7Z3JpZFR5cGV9IGdyaWQtcm93cy0xIGgtc2NyZWVuIG92ZXJmbG93LXktaGlkZGVuYFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWR9PlxuICAgICAgICAgICAgPFNpZGVOYXYgLz5cbiAgICAgICAgICAgIDxDZW50ZXJQYW5lIC8+XG4gICAgICAgICAgICB7dXNlcklEICE9IGZhbHNlID8gPFByb2ZpbGUgLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vZG9ncGFyay1iYWNrZW5kLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbn0pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT0gQXV0aCA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAobG9naW5EYXRhKSA9PiB7XG4vLyAgIGNvbnN0IHJlc3AgPSBhd2FpdCBhcGkucG9zdCgnL2F1dGgvbG9naW4nLCB7IGF1dGg6IGxvZ2luRGF0YSB9KTtcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhUb2tlbicsIHJlc3AuZGF0YS50b2tlbik7XG4vLyAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Jlc3AuZGF0YS50b2tlbn1gO1xuLy8gICByZXR1cm4gcmVzcC5kYXRhLnVzZXI7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAocmVnaXN0ZXJEYXRhKSA9PiB7XG4vLyAgIGNvbnN0IHJlc3AgPSBhd2FpdCBhcGkucG9zdCgnL3VzZXJzLycsIHsgdXNlcjogcmVnaXN0ZXJEYXRhIH0pXG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCByZXNwLmRhdGEudG9rZW4pO1xuLy8gICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uYXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtyZXNwLmRhdGEudG9rZW59YFxuLy8gICByZXR1cm4gcmVzcC5kYXRhLnVzZXJcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHZlcmlmeVVzZXIgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhUb2tlbicpO1xuLy8gICBpZiAodG9rZW4pIHtcbi8vICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uYXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gXG4vLyAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGFwaS5nZXQoJy9hdXRoL3ZlcmlmeScpO1xuLy8gICAgIHJldHVybiByZXNwLmRhdGFcbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2Vcbi8vIH1cblxuXG4vLyBleHBvcnQgY29uc3QgcmVtb3ZlVG9rZW4gPSAoKSA9PiB7XG4vLyAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hdXRob3JpemF0aW9uID0gbnVsbDtcbi8vIH1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT0gUmVzb3VyY2VzID09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgZ2V0TXlUZWFtQW5kUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMvMS90ZWFtJyk7XG4gIHJldHVybiByZXNwLmRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtVXBkYXRlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGFwaS5nZXQoJy91cGRhdGVzJyk7XG4gIHJldHVybiByZXNwLmRhdGE7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9