webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./components/Header.jsx":
false,

/***/ "./components/Layout.jsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/create.jsx":
/*!**************************!*\
  !*** ./pages/create.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Octos\\desafio\\pages\\create.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import fetch from 'isomorphic-unfetch'
//import Layout from '../components/Layout'
//import Router from 'next/router'

var Draft = function Draft() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      cameraname = _useState[0],
      setCameraname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      serialnumber = _useState2[0],
      setSerialnumber = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      manufacturer = _useState3[0],
      setManufacturer = _useState3[1]; // const submitData = async e => {
  //   e.preventDefault()
  //   try {
  //     const body = { cameraname, serialnumber, manufacturer }
  //     const res = await fetch(`http://localhost:3000/api/post`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     })
  //     const data = await res.json()
  //     await Router.push('/')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }


  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1875574670" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submitData,
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Adicionar C\xE2mera"), __jsx("label", {
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("input", {
    autoFocus: true,
    onChange: function onChange(e) {
      return setCameraname(e.target.value);
    },
    placeholder: "Nome da C\xE2mera",
    type: "text",
    required: true,
    maxLength: "50",
    value: cameraname,
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx("label", {
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("input", {
    placeholder: "N\xFAmero de S\xE9rie",
    type: "text",
    maxLength: "16",
    required: true,
    pattern: "[A-Z0-9]+",
    value: serialnumber,
    onChange: function onChange(e) {
      return setSerialnumber(e.target.value);
    },
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("label", {
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("select", {
    manufacturer: "Fabricante",
    value: manufacturer,
    onChange: function onChange(e) {
      return setManufacturer(e.target.value);
    },
    required: true,
    className: "jsx-1875574670" + " " + "select-css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Fabricante"), __jsx("option", {
    value: "Secure C\xE2meras Inc",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Secure C\xE2meras Inc"), __jsx("option", {
    value: "Surveillance Cams LLC",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Surveillance Cams LLC"), __jsx("option", {
    value: "DigiEye Group",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "DigiEye Group"), __jsx("option", {
    value: "C\xE2meraFi Inc",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "C\xE2meraFi Inc"), __jsx("option", {
    value: "VidMasters Inc",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "VidMasters Inc"))), __jsx("input", {
    type: "submit",
    value: "Adicionar",
    className: "jsx-1875574670",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("button", {
    href: "#",
    onClick: function onClick() {
      return Router.push('/');
    },
    className: "jsx-1875574670" + " " + "back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Cancelar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1875574670",
    __self: _this
  }, ".page.jsx-1875574670{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.select-css.jsx-1875574670{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}.select-css.jsx-1875574670:hover{color:black;}input[type='text'].jsx-1875574670,textarea.jsx-1875574670{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-1875574670{margin-top:1rem;font-size:11.3pt;background:#ececec;border:0;padding:1rem 2rem;}input[type='submit'].jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670{margin-top:1rem;font-size:11.3pt;color:black;background:#ececec;border:0;padding:1rem 2rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUc0QixBQVFILEFBVUgsQUFLQSxBQVFLLEFBUVksQUFJQSxBQUlaLFdBdkJELENBTGpCLEdBVlksQ0F1Qk0sQUFnQkEsQ0EvQ0gsU0FTRixBQWVLLEVBZWxCLEFBSUEsRUExQ2UsR0ErQk0sQUFnQlIsSUF0Q0ksS0FlTyxHQXdCSCxPQXRDSCxBQXNCUCxTQUNTLEdBUnVCLEFBd0JoQyxJQXRDYSxLQXVDSixNQWhCcEIsV0F0QjJDLENBdUN4QixXQXpCbkIsRUF6QnlCLElBbUR6QixvQkF2Q0EsMkVBWHFCLDZGQUNyQiIsImZpbGUiOiJEOlxcT2N0b3NcXGRlc2FmaW9cXHBhZ2VzXFxjcmVhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuLy9pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG4vL2ltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAvLyBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KClcclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAvLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDI+QWRpY2lvbmFyIEPDom1lcmE8L2gyPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDYW1lcmFuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgQ8OibWVyYVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjYW1lcmFuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTsO6bWVybyBkZSBTw6lyaWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQgcGF0dGVybj1cIltBLVowLTldK1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlcmlhbG51bWJlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VyaWFsbnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0LWNzc1wiIG1hbnVmYWN0dXJlcj1cIkZhYnJpY2FudGVcIiB2YWx1ZT17bWFudWZhY3R1cmVyfSBvbkNoYW5nZT17ZSA9PiBzZXRNYW51ZmFjdHVyZXIoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9XCJcIj5GYWJyaWNhbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlY3VyZSBDw6JtZXJhcyBJbmNcIj5TZWN1cmUgQ8OibWVyYXMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1cnZlaWxsYW5jZSBDYW1zIExMQ1wiPlN1cnZlaWxsYW5jZSBDYW1zIExMQzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWdpRXllIEdyb3VwXCI+RGlnaUV5ZSBHcm91cDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDw6JtZXJhRmkgSW5jXCI+Q8OibWVyYUZpIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWaWRNYXN0ZXJzIEluY1wiPlZpZE1hc3RlcnMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFsdWU9XCJBZGljaW9uYXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFja1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzczpob3ZlcnsgXHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0OyAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrOmhvdmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0O1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6MCA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFmdDsiXX0= */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\create.jsx */"));
};

_s(Draft, "xs2Dr8HQOStI7wimVUieSlNf1eY=");

_c = Draft;
/* harmony default export */ __webpack_exports__["default"] = (Draft);

var _c;

$RefreshReg$(_c, "Draft");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkRyYWZ0IiwidXNlU3RhdGUiLCJjYW1lcmFuYW1lIiwic2V0Q2FtZXJhbmFtZSIsInNlcmlhbG51bWJlciIsInNldFNlcmlhbG51bWJlciIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsInN1Ym1pdERhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxFQUFELENBRDFCO0FBQUEsTUFDWEMsVUFEVztBQUFBLE1BQ0NDLGFBREQ7O0FBQUEsbUJBRXNCRixzREFBUSxDQUFDLEVBQUQsQ0FGOUI7QUFBQSxNQUVYRyxZQUZXO0FBQUEsTUFFR0MsZUFGSDs7QUFBQSxtQkFHc0JKLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR1hLLFlBSFc7QUFBQSxNQUdHQyxlQUhILGtCQUtsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZ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ZWF0ZS5qcy5iZDM3ZTgwMGVjODVjZjFhN2YwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuLy9pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG4vL2ltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAvLyBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KClcclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAvLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDI+QWRpY2lvbmFyIEPDom1lcmE8L2gyPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDYW1lcmFuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgQ8OibWVyYVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjYW1lcmFuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTsO6bWVybyBkZSBTw6lyaWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQgcGF0dGVybj1cIltBLVowLTldK1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlcmlhbG51bWJlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VyaWFsbnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0LWNzc1wiIG1hbnVmYWN0dXJlcj1cIkZhYnJpY2FudGVcIiB2YWx1ZT17bWFudWZhY3R1cmVyfSBvbkNoYW5nZT17ZSA9PiBzZXRNYW51ZmFjdHVyZXIoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9XCJcIj5GYWJyaWNhbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlY3VyZSBDw6JtZXJhcyBJbmNcIj5TZWN1cmUgQ8OibWVyYXMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1cnZlaWxsYW5jZSBDYW1zIExMQ1wiPlN1cnZlaWxsYW5jZSBDYW1zIExMQzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWdpRXllIEdyb3VwXCI+RGlnaUV5ZSBHcm91cDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDw6JtZXJhRmkgSW5jXCI+Q8OibWVyYUZpIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWaWRNYXN0ZXJzIEluY1wiPlZpZE1hc3RlcnMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFsdWU9XCJBZGljaW9uYXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFja1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzczpob3ZlcnsgXHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0OyAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrOmhvdmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0O1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6MCA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFmdDsiXSwic291cmNlUm9vdCI6IiJ9