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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vxGY");


/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vxGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    style: "text-align:center"
  }, "dogPark"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", null), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", null, "What's up, dog?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    style: "text-align:center"
  }, "Table Of Contents"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("details", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("summary", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#overview"
  }, "Overview")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    style: "text-align:center;list-style:inside"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#our-team"
  }, "Our Team")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("details", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("summary", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#user-experience"
  }, "User Experience")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    style: "text-align:center;list-style:inside"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#problem-statment"
  }, "Problem Statment")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#ux-team"
  }, "Our User Experience Designers")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#tools-used"
  }, "Tools Used")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#task-flow"
  }, "Task Flow")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#journey-map"
  }, "Journey Map")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#personas"
  }, "Personas")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#wireframes"
  }, "Wireframes")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("details", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("summary", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#server-development"
  }, "Server Development")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    style: "text-align:center;list-style:inside"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#server-dev"
  }, "Our Server Dev")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#server-libraries"
  }, "Libraries")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#mvp-server"
  }, "Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#erd-model"
  }, "ERD Model")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#endpoints"
  }, "Endpoints")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#mvp-server"
  }, "Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#pmvp-server"
  }, "Post Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#code-showcase"
  }, "Code Showcase")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#issues-resolutions"
  }, "Issues and Resolutions")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("details", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("summary", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#client-development"
  }, "Client Development")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    style: "text-align:center;list-style:inside"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#client-dev"
  }, "Our Client Dev")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#server-libraries"
  }, "Libraries")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#mvp-client"
  }, "Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#component-hierarchy"
  }, "Component Hierarchy")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#component-breakdown"
  }, "Component Breakdown")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#mvp-client"
  }, "Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#pmvp-client"
  }, "Post Minimum Viable Product")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#code-showcase"
  }, "Code Showcase")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "#issues-resolutions"
  }, "Issues and Resolutions")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, "Overview"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center;font-style:italic"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    style: "font-size:1.1em"
  }, "dogPark"), " is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    style: "font-size:1.1em"
  }, "your next tool"), " for workforce management."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "text-align:center"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("button", {
    style: "color:#4CAF50;background-color:White;border:.02em solid rgba(0,0,0,.2);text-decoration:none"
  }, "Come take a walk in the dog park.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align:center"
  }, "Our Team"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: grid; grid-template-columns: 45vw 45vw; grid-template-rows: 65vh 65vh; justify-content: space-evenly; align-items: space-evenly;"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Mary Mac Murray"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "Technical Project Manager | Software Engineer | EdTech Organizer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4D03AQH_Vqb6B7PDfA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=3-lI5VNcRSHydf_Cr66WZiUF3fiMS0gHunpKdk8zrdI",
    alt: "Mary Mac Murray",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "As a formally trained teacher and technical project manager, I energize teams through playful and tactical experiences. Being a scuba rescue diver and tango dancer means I test for failure but love to improvise."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.maryxmac.com/",
    alt: "Mary's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/maryxmac/",
    alt: "Mary Mac Murray's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Miykaelah (Rajmani) Sinclair"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "UX Designer | Product Designer | Event Designer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C5603AQGV5ISg-4gEJg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=_15ckCFlxKEeIomYgRyYPpvgNL-D0t4fR_-U6IDbqss",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Miykaelah Sinclair"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em;width:40vw"
  }, "AI am a UX designer with over 10 years of experience using human centered design practices to produce, direct, and market memorable and meaningful events for audiences and participants. I bring this same approach to my UX Design practice where I lead with listening, consider all the touch points and engagements of users, and deliver a delightful, intuitive, and memorable product."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.miykaelahsinclair.com",
    alt: "Miykaelah's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/miykaelah-sinclair/",
    alt: "Miykaelah's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Brandon Gottshall"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "Software Engineer | Marine Corps Veteran"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4E03AQErDiTHdpTt8g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=UrTPfKAo--f-bqJ3XLdkNOf_V9ixRis1i1veE0h_Ojw",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Brandon Gottshall"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "I am a highly adaptable, motivated Software Engineer. I\u2019ve built a skill set through my time in the Marine Corps that allows me to take root in uncomfortable and difficult situations and extract success where others have accepted failure. I\u2019m extremely passionate about the tech industry, and I\u2019m always ready to embrace failure, growth, and to demand success."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.gottshall.dev",
    alt: "Brandon's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/brandon-gottshall/",
    alt: "Brandon's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Heather Sterman"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "UX Researcher | Film & TV Librarian | Empath"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4D03AQHjEB9PwL06uA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=NtXNb-VOFRl5uC_VME_VKOvEYMMapzZWDc6LrzO_-lo",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Heather Sterman"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "UX Researcher who\u2019s a constant and curious learner. Empathic Listener with 13 years of experience in Librarianship. The library is the ultimate example of user experience: The librarian or archivist is the UX Professional, the library itself is the Information Architecture, and the library patrons are the users of the product. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.heather-sterman.com/",
    alt: "Heather's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/heathersterman/",
    alt: "Heather's LinkedIn"
  }, "My LinkedIn"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, "User Experience"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Problem Statment"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "This is a problem statment."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Our User Experience Designers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display:grid;grid-template-columns: 45vw 45vw; grid-template-rows: 30vh 30vh; justify-content: space-evenly; align-items: space-evenly;"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h6", null, "Miykaelah (Rajmani) Sinclair"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "UX Designer | Product Designer | Event Designer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C5603AQGV5ISg-4gEJg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=_15ckCFlxKEeIomYgRyYPpvgNL-D0t4fR_-U6IDbqss",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Miykaelah Sinclair"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "AI am a UX designer with over 10 years of experience using human centered design practices to produce, direct, and market memorable and meaningful events for audiences and participants. I bring this same approach to my UX Design practice where I lead with listening, consider all the touch points and engagements of users, and deliver a delightful, intuitive, and memorable product."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.miykaelahsinclair.com",
    alt: "Miykaelah's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/miykaelah-sinclair/",
    alt: "Miykaelah's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h6", null, "Heather Sterman"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "UX Researcher | Film & TV Librarian | Empath"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4D03AQHjEB9PwL06uA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=NtXNb-VOFRl5uC_VME_VKOvEYMMapzZWDc6LrzO_-lo",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Heather Sterman"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "UX Researcher who\u2019s a constant and curious learner. Empathic Listener with 13 years of experience in Librarianship. The library is the ultimate example of user experience: The librarian or archivist is the UX Professional, the library itself is the Information Architecture, and the library patrons are the users of the product. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.heather-sterman.com/",
    alt: "Heather's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/heathersterman/",
    alt: "Heather's LinkedIn"
  }, "My LinkedIn"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Task Flow"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Journey Map"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Personas"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Wireframes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, `Server Development`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Our Server Dev"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin-bottom:50px; height:200px;width:400px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Mary Mac Murray"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "Technical Project Manager | Software Engineer | EdTech Organizer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4D03AQH_Vqb6B7PDfA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=3-lI5VNcRSHydf_Cr66WZiUF3fiMS0gHunpKdk8zrdI",
    alt: "Mary Mac Murray",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "As a formally trained teacher and technical project manager, I energize teams through playful and tactical experiences. Being a scuba rescue diver and tango dancer means I test for failure but love to improvise."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.maryxmac.com/",
    alt: "Mary's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/maryxmac/",
    alt: "Mary Mac Murray's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Libraries"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Library`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": "center"
  }), `Description`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Rails`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": "center"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "td"
  }, `Dkfmdk`))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "ERD Model"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Endpoints"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center;font-weight:bold"
  }, "Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Controller`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Operation`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `VERB`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Route`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `User`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `#view`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `GET`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `/user/:id`)))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center;font-weight:bold"
  }, "Post Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Controller`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Operation`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `VERB`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Route`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `CorrectQuestion`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `#index`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `GET`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `/user/:id/CorrectQuestion/`)))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Post Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Code Showcase"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Issues and Resolutions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, `Client Development`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Our Client Dev"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    style: "display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px;width:400px"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, "Brandon Gottshall"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("i", {
    style: "text-align:left; font-size: .6em"
  }, "Software Engineer | Marine Corps Veteran"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "https://media-exp1.licdn.com/dms/image/C4E03AQErDiTHdpTt8g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=UrTPfKAo--f-bqJ3XLdkNOf_V9ixRis1i1veE0h_Ojw",
    style: "height: 275px; width: 275px; border-radius:100%;margin:30px",
    alt: "Brandon Gottshall"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "font-size:.6em; width: 40vw"
  }, "I am a highly adaptable, motivated Software Engineer. I\u2019ve built a skill set through my time in the Marine Corps that allows me to take root in uncomfortable and difficult situations and extract success where others have accepted failure. I\u2019m extremely passionate about the tech industry, and I\u2019m always ready to embrace failure, growth, and to demand success."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.gottshall.dev",
    alt: "Brandon's portfolio"
  }, "My Portfolio"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    style: "font-size:1em;",
    href: "https://www.linkedin.com/in/brandon-gottshall/",
    alt: "Brandon's LinkedIn"
  }, "My LinkedIn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Libraries"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": "left"
  }), `Library`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": "center"
  }), `Description`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": "left"
  }), `React`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": "center"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "td"
  }, `Required for Next.js`))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Component Heirarchy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Component Breakdown"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center;font-weight:bold"
  }, "MVP"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Component`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `State`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Description`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `App`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `User`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Root of the application.`)))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align:center;font-weight:bold"
  }, "PMVP"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Component`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `State`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Description`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `UserStats`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `API data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), `Render progress of categories based on correct questions table and number of questions per category.`)))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Post Minimum Viable Product"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Code Showcase"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h5", {
    style: "text-align: center"
  }, "Issues and Resolutions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    style: "text-align: center"
  }, "Content Here"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, `Project Change Log`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, `Code Showcase`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    id: "#overview",
    style: "text-align:center;"
  }, `Code Issues & Resolutions`)));
}
;
MDXContent.isMDXComponent = true;

/***/ })

/******/ });