webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
var _this = undefined,
    _jsxFileName = "D:\\Octos\\desafio\\pages\\create.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import fetch from 'isomorphic-unfetch'

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


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    onSubmit: function onSubmit() {},
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
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1875574670",
    __self: _this
  }, ".page.jsx-1875574670{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.select-css.jsx-1875574670{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}.select-css.jsx-1875574670:hover{color:black;}input[type='text'].jsx-1875574670,textarea.jsx-1875574670{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-1875574670{margin-top:1rem;font-size:11.3pt;background:#ececec;border:0;padding:1rem 2rem;}input[type='submit'].jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670{margin-top:1rem;font-size:11.3pt;color:black;background:#ececec;border:0;padding:1rem 2rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VrQixBQUc0QixBQVFILEFBVUgsQUFLQSxBQVFLLEFBUVksQUFJQSxBQUlaLFdBdkJELENBTGpCLEdBVlksQ0F1Qk0sQUFnQkEsQ0EvQ0gsU0FTRixBQWVLLEVBZWxCLEFBSUEsRUExQ2UsR0ErQk0sQUFnQlIsSUF0Q0ksS0FlTyxHQXdCSCxPQXRDSCxBQXNCUCxTQUNTLEdBUnVCLEFBd0JoQyxJQXRDYSxLQXVDSixNQWhCcEIsV0F0QjJDLENBdUN4QixXQXpCbkIsRUF6QnlCLElBbUR6QixvQkF2Q0EsMkVBWHFCLDZGQUNyQiIsImZpbGUiOiJEOlxcT2N0b3NcXGRlc2FmaW9cXHBhZ2VzXFxjcmVhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuLy9pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRHJhZnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhbWVyYW5hbWUsIHNldENhbWVyYW5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3NlcmlhbG51bWJlciwgc2V0U2VyaWFsbnVtYmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttYW51ZmFjdHVyZXIsIHNldE1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgLy8gY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIGUgPT4ge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBjb25zdCBib2R5ID0geyBjYW1lcmFuYW1lLCBzZXJpYWxudW1iZXIsIG1hbnVmYWN0dXJlciB9XHJcbiAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RgLCB7XHJcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgLy8gICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gICAgIGF3YWl0IFJvdXRlci5wdXNoKCcvJylcclxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXsoKT0+e319PlxyXG4gICAgICAgICAgPGgyPkFkaWNpb25hciBDw6JtZXJhPC9oMj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2FtZXJhbmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIEPDom1lcmFcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjUwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y2FtZXJhbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk7Dum1lcm8gZGUgU8OpcmllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkIHBhdHRlcm49XCJbQS1aMC05XStcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXJpYWxudW1iZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlcmlhbG51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdC1jc3NcIiBtYW51ZmFjdHVyZXI9XCJGYWJyaWNhbnRlXCIgdmFsdWU9e21hbnVmYWN0dXJlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TWFudWZhY3R1cmVyKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPVwiXCI+RmFicmljYW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWN1cmUgQ8OibWVyYXMgSW5jXCI+U2VjdXJlIEPDom1lcmFzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdXJ2ZWlsbGFuY2UgQ2FtcyBMTENcIj5TdXJ2ZWlsbGFuY2UgQ2FtcyBMTEM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlnaUV5ZSBHcm91cFwiPkRpZ2lFeWUgR3JvdXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ8OibWVyYUZpIEluY1wiPkPDom1lcmFGaSBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmlkTWFzdGVycyBJbmNcIj5WaWRNYXN0ZXJzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWRpY2lvbmFyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzczpob3ZlcnsgXHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0OyAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrOmhvdmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0O1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6MCA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnQ7Il19 */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\create.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkRyYWZ0IiwidXNlU3RhdGUiLCJjYW1lcmFuYW1lIiwic2V0Q2FtZXJhbmFtZSIsInNlcmlhbG51bWJlciIsInNldFNlcmlhbG51bWJlciIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxFQUFELENBRjlCO0FBQUEsTUFFWEcsWUFGVztBQUFBLE1BRUdDLGVBRkg7O0FBQUEsbUJBR3NCSixzREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQSxNQUdYSyxZQUhXO0FBQUEsTUFHR0MsZUFISCxrQkFLbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUUsb0JBQUksQ0FBRSxDQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGFBQUlMLGFBQWEsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxLQUZiO0FBR0UsZUFBVyxFQUFDLG1CQUhkO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxZQUFRLE1BTFY7QUFNRSxhQUFTLEVBQUMsSUFOWjtBQU9FLFNBQUssRUFBRVIsVUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsdUJBQW5CO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsSUFGWjtBQUdFLFlBQVEsTUFIVjtBQUdXLFdBQU8sRUFBQyxXQUhuQjtBQUlFLFNBQUssRUFBRUUsWUFKVDtBQUtFLFlBQVEsRUFBRSxrQkFBQUksQ0FBQztBQUFBLGFBQ1RILGVBQWUsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FETjtBQUFBLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkRixFQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUErQixnQkFBWSxFQUFDLFlBQTVDO0FBQXlELFNBQUssRUFBRUosWUFBaEU7QUFBOEUsWUFBUSxFQUFFLGtCQUFBRSxDQUFDO0FBQUEsYUFBSUQsZUFBZSxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLEtBQXpGO0FBQThILFlBQVEsTUFBdEk7QUFBQSx3Q0FBa0IsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBUSxTQUFLLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLEVBR0U7QUFBUSxTQUFLLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsQ0FERixDQXhCRixFQWtDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSw0cE9BREY7QUF3R0QsQ0E3SEQ7O0dBQU1WLEs7O0tBQUFBLEs7QUErSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhdGUuanMuMWMxMTY1ZGUzMjYyOGRmZDIxMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vL2ltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbi8vaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IERyYWZ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYW1lcmFuYW1lLCBzZXRDYW1lcmFuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzZXJpYWxudW1iZXIsIHNldFNlcmlhbG51bWJlcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWFudWZhY3R1cmVyLCBzZXRNYW51ZmFjdHVyZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIC8vIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyBlID0+IHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgY29uc3QgYm9keSA9IHsgY2FtZXJhbmFtZSwgc2VyaWFsbnVtYmVyLCBtYW51ZmFjdHVyZXIgfVxyXG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0YCwge1xyXG4gIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIC8vICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17KCk9Pnt9fT5cclxuICAgICAgICAgIDxoMj5BZGljaW9uYXIgQ8OibWVyYTwvaDI+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhbWVyYW5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBDw6JtZXJhXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhbWVyYW5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIGRlIFPDqXJpZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjE2XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZCBwYXR0ZXJuPVwiW0EtWjAtOV0rXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VyaWFsbnVtYmVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZXJpYWxudW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3QtY3NzXCIgbWFudWZhY3R1cmVyPVwiRmFicmljYW50ZVwiIHZhbHVlPXttYW51ZmFjdHVyZXJ9IG9uQ2hhbmdlPXtlID0+IHNldE1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID1cIlwiPkZhYnJpY2FudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VjdXJlIEPDom1lcmFzIEluY1wiPlNlY3VyZSBDw6JtZXJhcyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VydmVpbGxhbmNlIENhbXMgTExDXCI+U3VydmVpbGxhbmNlIENhbXMgTExDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpZ2lFeWUgR3JvdXBcIj5EaWdpRXllIEdyb3VwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkPDom1lcmFGaSBJbmNcIj5Dw6JtZXJhRmkgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpZE1hc3RlcnMgSW5jXCI+VmlkTWFzdGVycyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIkFkaWNpb25hclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIC5zZWxlY3QtY3NzeyBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMnB0O1xyXG4gICAgICAgICAgY29sb3I6Z3JleTsgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3M6aG92ZXJ7IFxyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHsgICAgICAgICBcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07IFxyXG4gICAgICAgICAgZm9udC1zaXplOjExLjNwdDsgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7ICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjazpob3ZlciB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07ICAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOjExLjNwdDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOjAgO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0OyJdLCJzb3VyY2VSb290IjoiIn0=