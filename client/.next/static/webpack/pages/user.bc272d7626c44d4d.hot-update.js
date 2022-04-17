"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/requests/user */ \"./components/requests/user.js\");\n/* harmony import */ var _withUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../withUser */ \"./pages/withUser.js\");\n/* harmony import */ var _components_helpers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/helpers/auth */ \"./components/helpers/auth.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar User = function(param) {\n    var user = param.user, token = param.token;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n            children: JSON.stringify(user)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\user\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\user\\\\index.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this);\n};\n_c = User;\nUser.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var token, res;\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    token = (0,_components_helpers_auth__WEBPACK_IMPORTED_MODULE_6__.getCookie)(\"token\", context);\n                    console.log(context.req.cookies);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_4__.checkAuths)(token);\n                case 5:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        user: res.data\n                    });\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    return _ctx.abrupt(\"return\", {\n                        user: \"no User\"\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                9\n            ]\n        ]);\n    }));\n    return function(context) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0o7QUFDYTtBQUN6QjtBQUN1QjtBQUl6RCxJQUFNTyxJQUFJLEdBQUcsZ0JBQXFCO1FBQWxCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLO0lBRXZCLHFCQUNJLDhEQUFDTiwyREFBTztrQkFDSiw0RUFBQ08sSUFBRTtzQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQzs7Ozs7aUJBQU07Ozs7O2FBQ3pCLENBQ2I7Q0FDSjtBQVBLRCxLQUFBQSxJQUFJO0FBV1ZBLElBQUksQ0FBQ00sZUFBZTtlQUFHLDhMQUFPQyxPQUFPLEVBQUs7WUFDaENMLEtBQUssRUFHRE0sR0FBRzs7OztvQkFIUE4sS0FBSyxHQUFHSCxtRUFBUyxDQUFDLE9BQU8sRUFBRVEsT0FBTyxDQUFDO29CQUN6Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQzs7OzJCQUVYZixxRUFBVSxDQUFDSyxLQUFLLENBQUM7O29CQUE3Qk0sR0FBRyxZQUEwQjtpREFDNUI7d0JBQUVQLElBQUksRUFBRU8sR0FBRyxDQUFDSyxJQUFJO3FCQUFFOzs7O2lEQUdsQjt3QkFBRVosSUFBSSxFQUFFLFNBQVM7cUJBQUU7Ozs7Ozs7Ozs7O0tBSWpDO29CQVo2Qk0sT0FBTzs7O0dBWXBDO0FBR0QsK0RBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9pbmRleC5qcz9hZTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cydcclxuaW1wb3J0IHsgY2hlY2tBdXRocyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVxdWVzdHMvdXNlcidcclxuaW1wb3J0IHdpdGhVc2VyIGZyb20gJy4uL3dpdGhVc2VyJ1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlbHBlcnMvYXV0aCdcclxuXHJcblxyXG5cclxuY29uc3QgVXNlciA9ICh7IHVzZXIsIHRva2VuIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXRzPlxyXG4gICAgICAgICAgICA8aDQ+e0pTT04uc3RyaW5naWZ5KHVzZXIpfTwvaDQ+XHJcbiAgICAgICAgPC9MYXlvdXRzPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicsIGNvbnRleHQpXHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LnJlcS5jb29raWVzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2hlY2tBdXRocyh0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlcjogcmVzLmRhdGEgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFcm9vb29vcj09PT09PT5cIiwgZXJyKTtcclxuICAgICAgICByZXR1cm4geyB1c2VyOiBcIm5vIFVzZXJcIiB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dHMiLCJjaGVja0F1dGhzIiwid2l0aFVzZXIiLCJnZXRDb29raWUiLCJVc2VyIiwidXNlciIsInRva2VuIiwiaDQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXEiLCJjb29raWVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/index.js\n");

/***/ })

});