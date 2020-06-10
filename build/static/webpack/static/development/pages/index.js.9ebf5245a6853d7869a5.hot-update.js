webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Post */ "./components/Post.jsx");



var _this = undefined,
    _jsxFileName = "D:\\Octos\\desafio\\pages\\index.jsx";



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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/api/post/".concat(id), {
              method: 'DELETE'
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            Router.push('/');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _destroy.apply(this, arguments);
}

var feed = function feed(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3469942157" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3469942157",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Listagem"), __jsx("main", {
    className: "jsx-3469942157",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, props.feed.map(function (cameras) {
    return __jsx("div", {
      key: cameras.id,
      className: "jsx-3469942157" + " " + "cameras",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cameras: cameras,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3469942157",
    __self: _this
  }, ".cameras.jsx-3469942157{background:white;-webkit-transition:box-shadow 0.1s ease-in;transition:box-shadow 0.1s ease-in;}.cameras.jsx-3469942157:hover{box-shadow:1px 1px 3px #aaa;}.cameras.jsx-3469942157+.cameras.jsx-3469942157{margin-top:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBRzRCLEFBS1csQUFJWixnQkFDbEIsQ0FUcUMsV0FLckMsbUVBSkEiLCJmaWxlIjoiRDpcXE9jdG9zXFxkZXNhZmlvXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENhbWVyYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0J1xyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdC8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgfSlcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFJvdXRlci5wdXNoKCcvJylcclxufVxyXG5cclxuY29uc3QgZmVlZCA9IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGgxPkxpc3RhZ2VtPC9oMT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIHtwcm9wcy5mZWVkLm1hcChjYW1lcmFzID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhbWVyYXMuaWR9IGNsYXNzTmFtZT1cImNhbWVyYXNcIj5cclxuICAgICAgICAgICAgICA8Q2FtZXJhcyBjYW1lcmFzPXtjYW1lcmFzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FtZXJhcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhbWVyYXM6aG92ZXIge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYW1lcmFzICsgLmNhbWVyYXMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mZWVkJylcclxuICBjb25zdCBmZWVkID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBmZWVkIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZWVkXHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\index.jsx */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (feed);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiZGVzdHJveSIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJyZXMiLCJqc29uIiwiZGF0YSIsIlJvdXRlciIsInB1c2giLCJmZWVkIiwicHJvcHMiLCJtYXAiLCJjYW1lcmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7U0FJZUEsTzs7Ozs7OExBQWYsaUJBQXVCQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQkMseURBQUssMENBQW1DRCxFQUFuQyxHQUF5QztBQUM5REUsb0JBQU0sRUFBRTtBQURzRCxhQUF6QyxDQUR6Qjs7QUFBQTtBQUNRQyxlQURSO0FBQUE7QUFBQSxtQkFJcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUpyQjs7QUFBQTtBQUlRQyxnQkFKUjtBQUtFQyxrQkFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQ3BCLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDRCxJQUFOLENBQVdFLEdBQVgsQ0FBZSxVQUFBQyxPQUFPO0FBQUEsV0FDckI7QUFBSyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ1gsRUFBbEI7QUFBQSwwQ0FBZ0MsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBUyxhQUFPLEVBQUVXLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURxQjtBQUFBLEdBQXRCLENBREgsQ0FGRixDQURGO0FBQUE7QUFBQTtBQUFBLHExRUFERjtBQTRCRCxDQTdCRDs7O0FBdUNlSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWViZjUyNDVhNjg1M2Q3ODY5YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDYW1lcmFzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCdcclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVzdHJveShpZCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gIH0pXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBSb3V0ZXIucHVzaCgnLycpXHJcbn1cclxuXHJcbmNvbnN0IGZlZWQgPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxoMT5MaXN0YWdlbTwvaDE+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICB7cHJvcHMuZmVlZC5tYXAoY2FtZXJhcyA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYW1lcmFzLmlkfSBjbGFzc05hbWU9XCJjYW1lcmFzXCI+XHJcbiAgICAgICAgICAgICAgPENhbWVyYXMgY2FtZXJhcz17Y2FtZXJhc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhbWVyYXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYW1lcmFzOmhvdmVyIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FtZXJhcyArIC5jYW1lcmFzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZmVlZCcpXHJcbiAgY29uc3QgZmVlZCA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZmVlZCB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmVlZFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==