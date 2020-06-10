webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./components/Post.jsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/bail/index.js":
false,

/***/ "./node_modules/character-entities-legacy/index.json":
false,

/***/ "./node_modules/character-reference-invalid/index.json":
false,

/***/ "./node_modules/collapse-white-space/index.js":
false,

/***/ "./node_modules/extend/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-alphabetical/index.js":
false,

/***/ "./node_modules/is-alphanumerical/index.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/is-decimal/index.js":
false,

/***/ "./node_modules/is-hexadecimal/index.js":
false,

/***/ "./node_modules/is-plain-obj/index.js":
false,

/***/ "./node_modules/is-whitespace-character/index.js":
false,

/***/ "./node_modules/is-word-character/index.js":
false,

/***/ "./node_modules/markdown-escapes/index.js":
false,

/***/ "./node_modules/mdast-add-list-metadata/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
false,

/***/ "./node_modules/parse-entities/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
false,

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
false,

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
false,

/***/ "./node_modules/react-markdown/lib/renderers.js":
false,

/***/ "./node_modules/react-markdown/lib/symbols.js":
false,

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
false,

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
false,

/***/ "./node_modules/remark-parse/index.js":
false,

/***/ "./node_modules/remark-parse/lib/block-elements.json":
false,

/***/ "./node_modules/remark-parse/lib/decode.js":
false,

/***/ "./node_modules/remark-parse/lib/defaults.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/break.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/link.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/url.js":
false,

/***/ "./node_modules/remark-parse/lib/parse.js":
false,

/***/ "./node_modules/remark-parse/lib/parser.js":
false,

/***/ "./node_modules/remark-parse/lib/set-options.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
false,

/***/ "./node_modules/remark-parse/lib/unescape.js":
false,

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
false,

/***/ "./node_modules/remark-parse/lib/util/html.js":
false,

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
false,

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
false,

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
false,

/***/ "./node_modules/repeat-string/index.js":
false,

/***/ "./node_modules/replace-ext/index.js":
false,

/***/ "./node_modules/state-toggle/index.js":
false,

/***/ "./node_modules/trim-trailing-lines/index.js":
false,

/***/ "./node_modules/trim/index.js":
false,

/***/ "./node_modules/trough/index.js":
false,

/***/ "./node_modules/trough/wrap.js":
false,

/***/ "./node_modules/unherit/index.js":
false,

/***/ "./node_modules/unified/index.js":
false,

/***/ "./node_modules/unist-util-is/convert.js":
false,

/***/ "./node_modules/unist-util-remove-position/index.js":
false,

/***/ "./node_modules/unist-util-stringify-position/index.js":
false,

/***/ "./node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/unist-util-visit/index.js":
false,

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/vfile-location/index.js":
false,

/***/ "./node_modules/vfile-message/index.js":
false,

/***/ "./node_modules/vfile/core.js":
false,

/***/ "./node_modules/vfile/index.js":
false,

/***/ "./node_modules/x-is-string/index.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

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
      return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    },
    className: "jsx-1875574670" + " " + "back",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Cancelar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1875574670",
    __self: _this
  }, ".page.jsx-1875574670{background:white;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.select-css.jsx-1875574670{font-size:12pt;color:grey;width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}.select-css.jsx-1875574670:hover{color:black;}input[type='text'].jsx-1875574670,textarea.jsx-1875574670{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-1875574670{margin-top:1rem;font-size:11.3pt;background:#ececec;border:0;padding:1rem 2rem;}input[type='submit'].jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670:hover{box-shadow:1px 1px 3px #aaa;}.back.jsx-1875574670{margin-top:1rem;font-size:11.3pt;color:black;background:#ececec;border:0;padding:1rem 2rem;margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPY3Rvc1xcZGVzYWZpb1xccGFnZXNcXGNyZWF0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQUc0QixBQVFILEFBVUgsQUFLQSxBQVFLLEFBUVksQUFJQSxBQUlaLFdBdkJELENBTGpCLEdBVlksQ0F1Qk0sQUFnQkEsQ0EvQ0gsU0FTRixBQWVLLEVBZWxCLEFBSUEsRUExQ2UsR0ErQk0sQUFnQlIsSUF0Q0ksS0FlTyxHQXdCSCxPQXRDSCxBQXNCUCxTQUNTLEdBUnVCLEFBd0JoQyxJQXRDYSxLQXVDSixNQWhCcEIsV0F0QjJDLENBdUN4QixXQXpCbkIsRUF6QnlCLElBbUR6QixvQkF2Q0EsMkVBWHFCLDZGQUNyQiIsImZpbGUiOiJEOlxcT2N0b3NcXGRlc2FmaW9cXHBhZ2VzXFxjcmVhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEcmFmdCA9ICgpID0+IHtcclxuICBjb25zdCBbY2FtZXJhbmFtZSwgc2V0Q2FtZXJhbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2VyaWFsbnVtYmVyLCBzZXRTZXJpYWxudW1iZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGNhbWVyYW5hbWUsIHNlcmlhbG51bWJlciwgbWFudWZhY3R1cmVyIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxyXG4gICAgICAgICAgPGgyPkFkaWNpb25hciBDw6JtZXJhPC9oMj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2FtZXJhbmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIEPDom1lcmFcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjUwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y2FtZXJhbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk7Dum1lcm8gZGUgU8OpcmllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkIHBhdHRlcm49XCJbQS1aMC05XStcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXJpYWxudW1iZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlcmlhbG51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdC1jc3NcIiBtYW51ZmFjdHVyZXI9XCJGYWJyaWNhbnRlXCIgdmFsdWU9e21hbnVmYWN0dXJlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TWFudWZhY3R1cmVyKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPVwiXCI+RmFicmljYW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWN1cmUgQ8OibWVyYXMgSW5jXCI+U2VjdXJlIEPDom1lcmFzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdXJ2ZWlsbGFuY2UgQ2FtcyBMTENcIj5TdXJ2ZWlsbGFuY2UgQ2FtcyBMTEM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlnaUV5ZSBHcm91cFwiPkRpZ2lFeWUgR3JvdXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ8OibWVyYUZpIEluY1wiPkPDom1lcmFGaSBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmlkTWFzdGVycyBJbmNcIj5WaWRNYXN0ZXJzIEluYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWRpY2lvbmFyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2tcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIC5zZWxlY3QtY3NzeyBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMnB0O1xyXG4gICAgICAgICAgY29sb3I6Z3JleTsgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1jc3M6aG92ZXJ7IFxyXG4gICAgICAgICAgY29sb3I6YmxhY2s7ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHsgICAgICAgICBcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07IFxyXG4gICAgICAgICAgZm9udC1zaXplOjExLjNwdDsgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7ICAgICAgICAgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjazpob3ZlciB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07ICAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOjExLjNwdDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOjAgO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0OyJdfQ== */\n/*@ sourceURL=D:\\\\Octos\\\\desafio\\\\pages\\\\create.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9mZXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkRyYWZ0IiwidXNlU3RhdGUiLCJjYW1lcmFuYW1lIiwic2V0Q2FtZXJhbmFtZSIsInNlcmlhbG51bWJlciIsInNldFNlcmlhbG51bWJlciIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDYSxrREFBa0QscUJBQXFCO0FBQ3BGLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxXQUFPLEVBQUU7QUFBQSxhQUFNTCxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsS0FBM0M7QUFBQSx3Q0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Q0YsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLGd3T0FERjtBQTBHRCxDQS9IRDs7R0FBTXJCLEs7O0tBQUFBLEs7QUFpSVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhdGUuanMuZGY4NDM2ZGM0YjUwNWQzY2ZmZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiOy8qIGdsb2JhbHMgc2VsZiAqL3ZhciBmZXRjaD1zZWxmLmZldGNoLmJpbmQoc2VsZik7bW9kdWxlLmV4cG9ydHM9ZmV0Y2g7bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRHJhZnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhbWVyYW5hbWUsIHNldENhbWVyYW5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3NlcmlhbG51bWJlciwgc2V0U2VyaWFsbnVtYmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttYW51ZmFjdHVyZXIsIHNldE1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0geyBjYW1lcmFuYW1lLCBzZXJpYWxudW1iZXIsIG1hbnVmYWN0dXJlciB9XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIGF3YWl0IFJvdXRlci5wdXNoKCcvJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXREYXRhfT5cclxuICAgICAgICAgIDxoMj5BZGljaW9uYXIgQ8OibWVyYTwvaDI+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhbWVyYW5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBDw6JtZXJhXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhbWVyYW5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIGRlIFPDqXJpZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjE2XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZCBwYXR0ZXJuPVwiW0EtWjAtOV0rXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VyaWFsbnVtYmVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZXJpYWxudW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3QtY3NzXCIgbWFudWZhY3R1cmVyPVwiRmFicmljYW50ZVwiIHZhbHVlPXttYW51ZmFjdHVyZXJ9IG9uQ2hhbmdlPXtlID0+IHNldE1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID1cIlwiPkZhYnJpY2FudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VjdXJlIEPDom1lcmFzIEluY1wiPlNlY3VyZSBDw6JtZXJhcyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VydmVpbGxhbmNlIENhbXMgTExDXCI+U3VydmVpbGxhbmNlIENhbXMgTExDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpZ2lFeWUgR3JvdXBcIj5EaWdpRXllIEdyb3VwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkPDom1lcmFGaSBJbmNcIj5Dw6JtZXJhRmkgSW5jPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpZE1hc3RlcnMgSW5jXCI+VmlkTWFzdGVycyBJbmM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIkFkaWNpb25hclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICAuc2VsZWN0LWNzc3sgXHJcbiAgICAgICAgICBmb250LXNpemU6MTJwdDtcclxuICAgICAgICAgIGNvbG9yOmdyZXk7ICAgICBcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3QtY3NzOmhvdmVyeyBcclxuICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0W3R5cGU9J3RleHQnXSxcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7ICAgICAgICAgXHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtOyBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMS4zcHQ7ICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXIgeyAgICAgICAgIFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2s6aG92ZXIgeyAgICAgICAgICBcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtOyAgICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMS4zcHQ7XHJcbiAgICAgICAgICBjb2xvcjpibGFjazsgICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjowIDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFmdDsiXSwic291cmNlUm9vdCI6IiJ9