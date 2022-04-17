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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/requests/user */ \"./components/requests/user.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar User = function(param) {\n    var user = param.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n            children: JSON.stringify(user)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\user\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\user\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_c = User;\nUser.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var req, token, res;\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    req = param.req;\n                    token = req.cookies.token;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_4__.checkAuths)(token);\n                case 5:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        user: res.data\n                    });\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    return _ctx.abrupt(\"return\", {\n                        user: \"no User\"\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                9\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKO0FBQ2E7QUFLM0QsSUFBTUssSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUVoQixxQkFDSSw4REFBQ0gsMkRBQU87a0JBQ0osNEVBQUNJLElBQUU7c0JBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLENBQUM7Ozs7O2lCQUFNOzs7OzthQUN6QixDQUNiO0NBQ0o7QUFQS0QsS0FBQUEsSUFBSTtBQVdWQSxJQUFJLENBQUNLLGVBQWU7ZUFBRyxxTUFBbUI7WUFBVkMsR0FBRyxFQUN6QkMsS0FBSyxFQUdEQyxHQUFHOzs7O29CQUplRixHQUFHLFNBQUhBLEdBQUc7b0JBQ3pCQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0csT0FBTyxDQUFDRixLQUFLOzs7MkJBR1RSLHFFQUFVLENBQUNRLEtBQUssQ0FBQzs7b0JBQTdCQyxHQUFHLFlBQTBCO2lEQUM1Qjt3QkFBRVAsSUFBSSxFQUFFTyxHQUFHLENBQUNFLElBQUk7cUJBQUU7Ozs7aURBR2xCO3dCQUFFVCxJQUFJLEVBQUUsU0FBUztxQkFBRTs7Ozs7Ozs7Ozs7S0FJakM7Ozs7R0FBQTtBQUdELCtEQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvaW5kZXguanM/YWU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMnXHJcbmltcG9ydCB7IGNoZWNrQXV0aHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlcXVlc3RzL3VzZXInXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyID0gKHsgdXNlciB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0cz5cclxuICAgICAgICAgICAgPGg0PntKU09OLnN0cmluZ2lmeSh1c2VyKX08L2g0PlxyXG4gICAgICAgIDwvTGF5b3V0cz5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLnRva2VuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoZWNrQXV0aHModG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZXI6IHJlcy5kYXRhIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXJvb29vb3I9PT09PT0+XCIsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlcjogXCJubyBVc2VyXCIgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXRzIiwiY2hlY2tBdXRocyIsIlVzZXIiLCJ1c2VyIiwiaDQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwidG9rZW4iLCJyZXMiLCJjb29raWVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/index.js\n");

/***/ })

});