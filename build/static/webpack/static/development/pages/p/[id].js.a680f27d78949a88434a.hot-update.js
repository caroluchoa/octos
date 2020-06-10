webpackHotUpdate("static\\development\\pages\\p\\[id].js",{

/***/ "./pages/p/[id].jsx":
/*!**************************!*\
  !*** ./pages/p/[id].jsx ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "D:\\Octos\\desafio\\pages\\p\\[id].jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





function destroy(_x) {
  return _destroy.apply(this, arguments);
}

function _destroy() {
  _destroy = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("http://localhost:3000/api/post/".concat(id), {
              method: 'DELETE'
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _destroy.apply(this, arguments);
}

var Cameras = function Cameras(props) {
  var cameraname = props.cameraname;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-205096214" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, "Nome:"), " ", props.cameraname), __jsx("p", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, "N\xFAmero de s\xE9rie:"), "  ", props.serialnumber, " "), __jsx("p", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, "Fabricante:"), "  ", props.manufacturer, " "), __jsx("div", {
    className: "jsx-205096214" + " " + "actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return destroy(props.id);
    },
    className: "jsx-205096214",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Deletar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "205096214",
    __self: _this
  }, ".page.jsx-205096214{background:white;padding:1.5rem;}.actions.jsx-205096214{margin-top:2rem;}button.jsx-205096214:hover{box-shadow:1px 1px 3px #aaa;}button.jsx-205096214{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-205096214+button.jsx-205096214{margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXHBcXFtpZF0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHNEIsQUFLRCxBQUlZLEFBSVQsQUFPRixnQkFkbkIsQ0FMaUIsQUFvQmpCLEVBUFcsU0FKWCxBQUt5QixJQWJ6QixtQkFjb0Isa0JBQ3BCIiwiZmlsZSI6IkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXHBcXFtpZF0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVzdHJveShpZCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gIH0pXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBSb3V0ZXIucHVzaCgnLycpXHJcbn1cclxuXHJcbmNvbnN0IENhbWVyYXMgPSBwcm9wcyA9PiB7XHJcbiAgbGV0IGNhbWVyYW5hbWUgPSBwcm9wcy5jYW1lcmFuYW1lXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxwPjxiPk5vbWU6PC9iPiB7cHJvcHMuY2FtZXJhbmFtZX08L3A+XHJcbiAgICAgICAgPHA+PGI+TsO6bWVybyBkZSBzw6lyaWU6PC9iPiAge3Byb3BzLnNlcmlhbG51bWJlcn0gPC9wPlxyXG4gICAgICAgIDxwPjxiPkZhYnJpY2FudGU6PC9iPiAge3Byb3BzLm1hbnVmYWN0dXJlcn0gPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZXN0cm95KHByb3BzLmlkKX0+RGVsZXRhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtwcm9wczogey4uLmRhdGF9fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFzXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\p\\\\[id].jsx */"));
};

_c = Cameras;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Cameras);

var _c;

$RefreshReg$(_c, "Cameras");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wLy5qc3giXSwibmFtZXMiOlsiZGVzdHJveSIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJyZXMiLCJqc29uIiwiZGF0YSIsIlJvdXRlciIsInB1c2giLCJDYW1lcmFzIiwicHJvcHMiLCJjYW1lcmFuYW1lIiwic2VyaWFsbnVtYmVyIiwibWFudWZhY3R1cmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztTQUdlQSxPOzs7Ozs4TEFBZixpQkFBdUJDLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ29CQyx5REFBSywwQ0FBbUNELEVBQW5DLEdBQXlDO0FBQzlERSxvQkFBTSxFQUFFO0FBRHNELGFBQXpDLENBRHpCOztBQUFBO0FBQ1FDLGVBRFI7QUFBQTtBQUFBLG1CQUlxQkEsR0FBRyxDQUFDQyxJQUFKLEVBSnJCOztBQUFBO0FBSVFDLGdCQUpSO0FBS0VDLDhEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFDdkIsTUFBSUMsVUFBVSxHQUFHRCxLQUFLLENBQUNDLFVBQXZCO0FBQ0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILE9BQWlCRCxLQUFLLENBQUNDLFVBQXZCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQUgsUUFBNkJELEtBQUssQ0FBQ0UsWUFBbkMsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSCxRQUF3QkYsS0FBSyxDQUFDRyxZQUE5QixNQUhGLEVBSUU7QUFBQSx1Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1iLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDVCxFQUFQLENBQWI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUpGLENBREY7QUFBQTtBQUFBO0FBQUEsaTdGQURGO0FBcUNELENBdkNEOztLQUFNUSxPOztBQStDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBcXFtpZF0uanMuYTY4MGYyN2Q3ODk0OWE4ODQzNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICB9KVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgUm91dGVyLnB1c2goJy8nKVxyXG59XHJcblxyXG5jb25zdCBDYW1lcmFzID0gcHJvcHMgPT4ge1xyXG4gIGxldCBjYW1lcmFuYW1lID0gcHJvcHMuY2FtZXJhbmFtZVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8cD48Yj5Ob21lOjwvYj4ge3Byb3BzLmNhbWVyYW5hbWV9PC9wPlxyXG4gICAgICAgIDxwPjxiPk7Dum1lcm8gZGUgc8OpcmllOjwvYj4gIHtwcm9wcy5zZXJpYWxudW1iZXJ9IDwvcD5cclxuICAgICAgICA8cD48Yj5GYWJyaWNhbnRlOjwvYj4gIHtwcm9wcy5tYW51ZmFjdHVyZXJ9IDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVzdHJveShwcm9wcy5pZCl9PkRlbGV0YXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIgeyAgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7Y29udGV4dC5wYXJhbXMuaWR9YClcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7cHJvcHM6IHsuLi5kYXRhfX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtZXJhc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9