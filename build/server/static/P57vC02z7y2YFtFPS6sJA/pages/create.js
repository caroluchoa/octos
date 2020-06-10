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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hixh");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hixh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import Layout from '../components/Layout'



const Draft = () => {
  const {
    0: cameraname,
    1: setCameraname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: serialnumber,
    1: setSerialnumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: manufacturer,
    1: setManufacturer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const submitData = async e => {
    e.preventDefault();

    try {
      const body = {
        cameraname,
        serialnumber,
        manufacturer
      };
      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:3000/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      await next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1875574670" + " " + "page"
  }, __jsx("form", {
    onSubmit: submitData,
    className: "jsx-1875574670"
  }, __jsx("h2", {
    className: "jsx-1875574670"
  }, "Adicionar C\xE2mera"), __jsx("label", {
    className: "jsx-1875574670"
  }, __jsx("input", {
    autoFocus: true,
    onChange: e => setCameraname(e.target.value),
    placeholder: "Nome da C\xE2mera",
    type: "text",
    required: true,
    maxLength: "50",
    value: cameraname,
    className: "jsx-1875574670"
  })), __jsx("label", {
    className: "jsx-1875574670"
  }, __jsx("input", {
    placeholder: "N\xFAmero de S\xE9rie",
    type: "text",
    maxLength: "16",
    required: true,
    pattern: "[A-Z0-9]+",
    value: serialnumber,
    onChange: e => setSerialnumber(e.target.value),
    className: "jsx-1875574670"
  })), __jsx("label", {
    className: "jsx-1875574670"
  }, __jsx("select", {
    manufacturer: "Fabricante",
    value: manufacturer,
    onChange: e => setManufacturer(e.target.value),
    required: true,
    className: "jsx-1875574670" + " " + "select-css"
  }, __jsx("option", {
    value: "",
    className: "jsx-1875574670"
  }, "Fabricante"), __jsx("option", {
    value: "Secure C\xE2meras Inc",
    className: "jsx-1875574670"
  }, "Secure C\xE2meras Inc"), __jsx("option", {
    value: "Surveillance Cams LLC",
    className: "jsx-1875574670"
  }, "Surveillance Cams LLC"), __jsx("option", {
    value: "DigiEye Group",
    className: "jsx-1875574670"
  }, "DigiEye Group"), __jsx("option", {
    value: "C\xE2meraFi Inc",
    className: "jsx-1875574670"
  }, "C\xE2meraFi Inc"), __jsx("option", {
    value: "VidMasters Inc",
    className: "jsx-1875574670"
  }, "VidMasters Inc"))), __jsx("input", {
    type: "submit",
    value: "Adicionar",
    className: "jsx-1875574670"
  }), __jsx("button", {
    href: "#",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/'),
    className: "jsx-1875574670" + " " + "back"
  }, "Cancelar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1875574670"
  }, [".page.jsx-1875574670{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".select-css.jsx-1875574670{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}", ".select-css.jsx-1875574670:hover{color:black;}", "input[type='text'].jsx-1875574670,textarea.jsx-1875574670{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}", "input[type='submit'].jsx-1875574670{margin-top:1rem;font-size:11.3pt;background:#ececec;border:0;padding:1rem 2rem;}", "input[type='submit'].jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}", ".back.jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}", ".back.jsx-1875574670{margin-top:1rem;font-size:11.3pt;color:black;background:#ececec;border:0;padding:1rem 2rem;margin-left:1rem;}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Draft);

/***/ })

/******/ });