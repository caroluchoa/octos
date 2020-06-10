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
  }, __jsx("div", {
    className: "jsx-1278666085" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: submitData,
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Adicionar C\xE2mera"), __jsx("label", {
    className: "jsx-1278666085",
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
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx("label", {
    className: "jsx-1278666085",
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
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("label", {
    className: "jsx-1278666085",
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
    className: "jsx-1278666085" + " " + "select-css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Fabricante"), __jsx("option", {
    value: "Secure C\xE2meras Inc",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Secure C\xE2meras Inc"), __jsx("option", {
    value: "Surveillance Cams LLC",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Surveillance Cams LLC"), __jsx("option", {
    value: "DigiEye Group",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "DigiEye Group"), __jsx("option", {
    value: "C\xE2meraFi Inc",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "C\xE2meraFi Inc"), __jsx("option", {
    value: "VidMasters Inc",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "VidMasters Inc"))), __jsx("input", {
    type: "submit",
    value: "Adicionar",
    className: "jsx-1278666085",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("a", {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    },
    className: "jsx-1278666085" + " " + "back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Cancelar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1278666085",
    __self: _this
  }, ".page.jsx-1278666085{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.select-css.jsx-1278666085{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='text'].jsx-1278666085,textarea.jsx-1278666085{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-1278666085{box-shadow:1px 1px 3px #aaa;background:#ececec;border:0;padding:1rem 2rem;}.back.jsx-1278666085{box-shadow:1px 1px 3px #aaa;font-size:11pt;color:black;background:#ececec;padding:0.98rem 2rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUc0QixBQVNILEFBV0gsQUFRaUIsQUFPQSxXQWRiLElBWEwsRUFURyxTQVVGLEFBV0ssRUFPRyxBQU9MLEVBbENELE9BVUUsS0FXTyxDQWNYLElBUEYsS0FqQk8sR0F5QkcsQ0FQRCxRQVB1QixJQVZuQixNQWtCeEIsQUFPVSxBQUNhLGdCQXpCb0IsS0EwQnhCLE9BaEJuQixFQXRCeUIsUUF1Q3pCLGdCQTFCQSwyRUFacUIsNkZBQ3JCIiwiZmlsZSI6IkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IERyYWZ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYW1lcmFuYW1lLCBzZXRDYW1lcmFuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzZXJpYWxudW1iZXIsIHNldFNlcmlhbG51bWJlcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWFudWZhY3R1cmVyLCBzZXRNYW51ZmFjdHVyZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IHsgY2FtZXJhbmFtZSwgc2VyaWFsbnVtYmVyLCBtYW51ZmFjdHVyZXIgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDE+QWRpY2lvbmFyIEPDom1lcmE8L2gxPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDYW1lcmFuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgQ8OibWVyYVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjYW1lcmFuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTsO6bWVybyBkZSBTw6lyaWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQgcGF0dGVybj1cIltBLVowLTldK1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlcmlhbG51bWJlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VyaWFsbnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0LWNzc1wiIG1hbnVmYWN0dXJlcj1cIkZhYnJpY2FudGVcIiB2YWx1ZT17bWFudWZhY3R1cmVyfSBvbkNoYW5nZT17ZSA9PiBzZXRNYW51ZmFjdHVyZXIoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9XCJcIj5GYWJyaWNhbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlY3VyZSBDw6JtZXJhcyBJbmNcIj5TZWN1cmUgQ8OibWVyYXMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1cnZlaWxsYW5jZSBDYW1zIExMQ1wiPlN1cnZlaWxsYW5jZSBDYW1zIExMQzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWdpRXllIEdyb3VwXCI+RGlnaUV5ZSBHcm91cDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDw6JtZXJhRmkgSW5jXCI+Q8OibWVyYUZpIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWaWRNYXN0ZXJzIEluY1wiPlZpZE1hc3RlcnMgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFsdWU9XCJBZGljaW9uYXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3N7IFxyXG4gICAgICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgICAgICBjb2xvcjpncmV5OyAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10geyAgICAgICAgIFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTsgICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgICBmb250LXNpemU6MTFwdDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOiA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjk4cmVtIDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnQ7Il19 */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\create.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkRyYWZ0IiwidXNlU3RhdGUiLCJjYW1lcmFuYW1lIiwic2V0Q2FtZXJhbmFtZSIsInNlcmlhbG51bWJlciIsInNldFNlcmlhbG51bWJlciIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxFQUFELENBRjlCO0FBQUEsTUFFWEcsWUFGVztBQUFBLE1BRUdDLGVBRkg7O0FBQUEsbUJBR3NCSixzREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQSxNQUdYSyxZQUhXO0FBQUEsTUFHR0MsZUFISDs7QUFLbEIsTUFBTUMsVUFBVTtBQUFBLGdNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkEsZUFBQyxDQUFDQyxjQUFGO0FBRGlCO0FBR1RDLGtCQUhTLEdBR0Y7QUFBRVQsMEJBQVUsRUFBVkEsVUFBRjtBQUFjRSw0QkFBWSxFQUFaQSxZQUFkO0FBQTRCRSw0QkFBWSxFQUFaQTtBQUE1QixlQUhFO0FBQUE7QUFBQSxxQkFJR00seURBQUssbUNBQW1DO0FBQ3hEQyxzQkFBTSxFQUFFLE1BRGdEO0FBRXhEQyx1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O0FBQUE7QUFBQTtBQUFBLHVCQUxGLEVBTUU7QUFBUSxTQUFLLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLENBREYsQ0F4QkYsRUFrQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUssRUFBQyxXQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixFQXNDRTtBQUFvQixRQUFJLEVBQUMsR0FBekI7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBTUwsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLEtBQXRDO0FBQUEsd0NBQWEsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRDRixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsOG1OQURGO0FBOEZELENBbkhEOztHQUFNckIsSzs7S0FBQUEsSztBQXFIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZS5qcy5iZjEyMWMxMTU1M2E5MjAzNWQ0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxyXG4gICAgICAgICAgPGgxPkFkaWNpb25hciBDw6JtZXJhPC9oMT5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2FtZXJhbmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIEPDom1lcmFcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjUwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y2FtZXJhbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk7Dum1lcm8gZGUgU8OpcmllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkIHBhdHRlcm49XCJbQS1aMC05XStcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXJpYWxudW1iZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlcmlhbG51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdC1jc3NcIiBtYW51ZmFjdHVyZXI9XCJGYWJyaWNhbnRlXCIgdmFsdWU9e21hbnVmYWN0dXJlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TWFudWZhY3R1cmVyKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPVwiXCI+RmFicmljYW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWN1cmUgQ8OibWVyYXMgSW5jXCI+U2VjdXJlIEPDom1lcmFzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdXJ2ZWlsbGFuY2UgQ2FtcyBMTENcIj5TdXJ2ZWlsbGFuY2UgQ2FtcyBMTEM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlnaUV5ZSBHcm91cFwiPkRpZ2lFeWUgR3JvdXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ8OibWVyYUZpIEluY1wiPkPDom1lcmFGaSBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmlkTWFzdGVycyBJbmNcIj5WaWRNYXN0ZXJzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWRpY2lvbmFyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5zZWxlY3QtY3NzeyBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMnB0O1xyXG4gICAgICAgICAgY29sb3I6Z3JleTsgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHsgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7ICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgICAgZm9udC1zaXplOjExcHQ7XHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogO1xyXG4gICAgICAgICAgcGFkZGluZzogMC45OHJlbSAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0OyJdLCJzb3VyY2VSb290IjoiIn0=