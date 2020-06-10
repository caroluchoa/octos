webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./pages/create.jsx":
/*!**************************!*\
  !*** ./pages/create.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "D:\\Octos\\desafio\\pages\\create.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Draft = function Draft() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      cameraname = _useState[0],
      setCameraname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      serialnumber = _useState2[0],
      setSerialnumber = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      manufacturer = _useState3[0],
      setManufacturer = _useState3[1];

  var submitData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var body, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              body = {
                cameraname: cameraname,
                serialnumber: serialnumber,
                manufacturer: manufacturer
              };
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/post", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              data = _context.sent;
              _context.next = 11;
              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function submitData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1875574670",
    __self: _this
  }, ".page.jsx-1875574670{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.select-css.jsx-1875574670{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}.select-css.jsx-1875574670:hover{color:black;}input[type='text'].jsx-1875574670,textarea.jsx-1875574670{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-1875574670{margin-top:1rem;font-size:11.3pt;background:#ececec;border:0;padding:1rem 2rem;}input[type='submit'].jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670{margin-top:1rem;font-size:11.3pt;color:black;background:#ececec;border:0;padding:1rem 2rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUc0QixBQVFILEFBVUgsQUFLQSxBQVFLLEFBUVksQUFJQSxBQUlaLFdBdkJELENBTGpCLEdBVlksQ0F1Qk0sQUFnQkEsQ0EvQ0gsU0FTRixBQWVLLEVBZWxCLEFBSUEsRUExQ2UsR0ErQk0sQUFnQlIsSUF0Q0ksS0FlTyxHQXdCSCxPQXRDSCxBQXNCUCxTQUNTLEdBUnVCLEFBd0JoQyxJQXRDYSxLQXVDSixNQWhCcEIsV0F0QjJDLENBdUN4QixXQXpCbkIsRUF6QnlCLElBbUR6QixvQkF2Q0EsMkVBWHFCLDZGQUNyQiIsImZpbGUiOiJEOlxcT2N0b3NcXGRlc2FmaW9cXHBhZ2VzXFxjcmVhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXREYXRhfT5cclxuICAgICAgICAgIDxoMj5BZGljaW9uYXIgQ8OibWVyYTwvaDI+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhbWVyYW5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBDw6JtZXJhXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhbWVyYW5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIGRlIFPDqXJpZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjE2XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZCBwYXR0ZXJuPVwiW0EtWjAtOV0rXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VyaWFsbnVtYmVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZXJpYWxudW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3QtY3NzXCIgbWFudWZhY3R1cmVyPVwiRmFicmljYW50ZVwiIHZhbHVlPXttYW51ZmFjdHVyZXJ9IG9uQ2hhbmdlPXtlID0+IHNldE1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID1cIlwiPkZhYnJpY2FudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VjdXJlIEPDom1lcmFzIEluY1wiPlNlY3VyZSBDw6JtZXJhcyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VydmVpbGxhbmNlIENhbXMgTExDXCI+U3VydmVpbGxhbmNlIENhbXMgTExDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpZ2lFeWUgR3JvdXBcIj5EaWdpRXllIEdyb3VwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkPDom1lcmFGaSBJbmNcIj5Dw6JtZXJhRmkgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpZE1hc3RlcnMgSW5jXCI+VmlkTWFzdGVycyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIkFkaWNpb25hclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzczpob3ZlcnsgXHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0OyAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrOmhvdmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0O1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6MCA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnQ7Il19 */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\create.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkRyYWZ0IiwidXNlU3RhdGUiLCJjYW1lcmFuYW1lIiwic2V0Q2FtZXJhbmFtZSIsInNlcmlhbG51bWJlciIsInNldFNlcmlhbG51bWJlciIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFBQSxtQkFFc0JGLHNEQUFRLENBQUMsRUFBRCxDQUY5QjtBQUFBLE1BRVhHLFlBRlc7QUFBQSxNQUVHQyxlQUZIOztBQUFBLG1CQUdzQkosc0RBQVEsQ0FBQyxFQUFELENBSDlCO0FBQUEsTUFHWEssWUFIVztBQUFBLE1BR0dDLGVBSEg7O0FBS2xCLE1BQU1DLFVBQVU7QUFBQSxnTUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0MsY0FBRjtBQURpQjtBQUdUQyxrQkFIUyxHQUdGO0FBQUVULDBCQUFVLEVBQVZBLFVBQUY7QUFBY0UsNEJBQVksRUFBWkEsWUFBZDtBQUE0QkUsNEJBQVksRUFBWkE7QUFBNUIsZUFIRTtBQUFBO0FBQUEscUJBSUdNLHlEQUFLLG1DQUFtQztBQUN4REMsc0JBQU0sRUFBRSxNQURnRDtBQUV4REMsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGK0M7QUFHeERILG9CQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmO0FBSGtELGVBQW5DLENBSlI7O0FBQUE7QUFJVE0saUJBSlM7QUFBQTtBQUFBLHFCQVNJQSxHQUFHLENBQUNDLElBQUosRUFUSjs7QUFBQTtBQVNUQyxrQkFUUztBQUFBO0FBQUEscUJBVVRDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBVlM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlmQyxxQkFBTyxDQUFDQyxLQUFSOztBQVplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZmLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBZ0JBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHd3T0FERjtBQTBHRCxDQS9IRDs7R0FBTVIsSzs7S0FBQUEsSztBQWlJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZS5qcy40NzgwODk1MzU0YzM2OTk3NWQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXREYXRhfT5cclxuICAgICAgICAgIDxoMj5BZGljaW9uYXIgQ8OibWVyYTwvaDI+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhbWVyYW5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBDw6JtZXJhXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhbWVyYW5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIGRlIFPDqXJpZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjE2XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZCBwYXR0ZXJuPVwiW0EtWjAtOV0rXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VyaWFsbnVtYmVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZXJpYWxudW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3QtY3NzXCIgbWFudWZhY3R1cmVyPVwiRmFicmljYW50ZVwiIHZhbHVlPXttYW51ZmFjdHVyZXJ9IG9uQ2hhbmdlPXtlID0+IHNldE1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID1cIlwiPkZhYnJpY2FudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VjdXJlIEPDom1lcmFzIEluY1wiPlNlY3VyZSBDw6JtZXJhcyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VydmVpbGxhbmNlIENhbXMgTExDXCI+U3VydmVpbGxhbmNlIENhbXMgTExDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpZ2lFeWUgR3JvdXBcIj5EaWdpRXllIEdyb3VwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkPDom1lcmFGaSBJbmNcIj5Dw6JtZXJhRmkgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpZE1hc3RlcnMgSW5jXCI+VmlkTWFzdGVycyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIkFkaWNpb25hclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzczpob3ZlcnsgXHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0OyAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrOmhvdmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MTEuM3B0O1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6MCA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==