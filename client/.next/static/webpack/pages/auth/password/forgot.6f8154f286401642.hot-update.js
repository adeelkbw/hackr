"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/password/forgot",{

/***/ "./components/requests/user.js":
/*!*************************************!*\
  !*** ./components/requests/user.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": function() { return /* binding */ addUser; },\n/* harmony export */   \"activateAccount\": function() { return /* binding */ activateAccount; },\n/* harmony export */   \"loginUser\": function() { return /* binding */ loginUser; },\n/* harmony export */   \"checkAuths\": function() { return /* binding */ checkAuths; },\n/* harmony export */   \"forgotPassword\": function() { return /* binding */ forgotPassword; }\n/* harmony export */ });\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar addUser = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name, email, password) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:4000/api/v1\", \"/register\"), {\n                        name: name,\n                        email: email,\n                        password: password\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function addUser(name, email, password) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar activateAccount = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(token) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:4000/api/v1\", \"/register/activate\"), {\n                        token: token\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function activateAccount(token) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar loginUser = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:4000/api/v1\", \"/login\"), {\n                        email: email,\n                        password: password\n                    }));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function loginUser(email, password) {\n        return _ref.apply(this, arguments);\n    };\n}();\n//midleware\nvar checkAuths = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(authToken) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(\"http://localhost:4000/api/v1\", \"/user\"), {\n                        headers: {\n                            authorization: \"Bearer \".concat(authToken),\n                            contentType: \"application/json\"\n                        }\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function checkAuths(authToken) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar forgotPassword = function() {\n    var _ref = _asyncToGenerator(C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email) {\n        return C_Users_adnas_OneDrive_Desktop_react_aws_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().put(\"\".concat(\"http://localhost:4000/api/v1\", \"/forgot-password\"), {\n                        email: email\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function forgotPassword(email) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3RzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNsQixJQUFNQyxPQUFPO2VBQUcsOExBQU9DLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7Ozs7OzJCQUN2Q0osaURBQVUsQ0FBQyxFQUFDLENBQTBDLE1BQVMsQ0FBakRNLDhCQUF1QyxFQUFDLFdBQVMsQ0FBQyxFQUN6RTt3QkFBRUosSUFBSSxFQUFKQSxJQUFJO3dCQUFFQyxLQUFLLEVBQUxBLEtBQUs7d0JBQUVDLFFBQVEsRUFBUkEsUUFBUTtxQkFBRSxDQUM1Qjs7Ozs7Ozs7S0FDSjtvQkFKWUgsT0FBTyxDQUFVQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUTs7O0dBSWxEO0FBRU0sSUFBTUssZUFBZTtlQUFHLDhMQUFPQyxLQUFLLEVBQUs7Ozs7OzJCQUMvQlYsaURBQVUsQ0FBQyxFQUFDLENBQTBDLE1BQWtCLENBQTFETSw4QkFBdUMsRUFBQyxvQkFBa0IsQ0FBQyxFQUNsRjt3QkFBRUksS0FBSyxFQUFMQSxLQUFLO3FCQUFFLENBQ1o7Ozs7Ozs7O0tBQ0o7b0JBSllELGVBQWUsQ0FBVUMsS0FBSzs7O0dBSTFDO0FBR00sSUFBTUMsU0FBUztlQUFHLDhMQUFPUixLQUFLLEVBQUVDLFFBQVEsRUFBSzs7OztpREFDekNKLGlEQUFVLENBQUMsRUFBQyxDQUEwQyxNQUFNLENBQTlDTSw4QkFBdUMsRUFBQyxRQUFNLENBQUMsRUFDaEU7d0JBQUVILEtBQUssRUFBTEEsS0FBSzt3QkFBRUMsUUFBUSxFQUFSQSxRQUFRO3FCQUFFLENBQ3RCOzs7Ozs7S0FDSjtvQkFKWU8sU0FBUyxDQUFVUixLQUFLLEVBQUVDLFFBQVE7OztHQUk5QztBQUdELFdBQVc7QUFDSixJQUFNUSxVQUFVO2VBQUcsOExBQU9DLFNBQVMsRUFBSzs7Ozs7MkJBQzlCYixnREFBUyxDQUFDLEVBQUMsQ0FBMEMsTUFBSyxDQUE3Q00sOEJBQXVDLEVBQUMsT0FBSyxDQUFDLEVBQ3BFO3dCQUNJUyxPQUFPLEVBQUU7NEJBQ0xDLGFBQWEsRUFBRSxTQUFRLENBQVksT0FBVkgsU0FBUyxDQUFFOzRCQUNwQ0ksV0FBVyxFQUFFLGtCQUFrQjt5QkFFbEM7cUJBQ0osQ0FDSjs7Ozs7Ozs7S0FDSjtvQkFWWUwsVUFBVSxDQUFVQyxTQUFTOzs7R0FVekM7QUFJTSxJQUFNSyxjQUFjO2VBQUcsOExBQU9mLEtBQUssRUFBSzs7Ozs7MkJBQzlCSCxnREFBUyxDQUFDLEVBQUMsQ0FBMEMsTUFBZ0IsQ0FBeERNLDhCQUF1QyxFQUFDLGtCQUFnQixDQUFDLEVBQy9FO3dCQUFFSCxLQUFLLEVBQUxBLEtBQUs7cUJBQUUsQ0FDWjs7Ozs7Ozs7S0FDSjtvQkFKWWUsY0FBYyxDQUFVZixLQUFLOzs7R0FJekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0cy91c2VyLmpzPzBiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jIChuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9SRVFVRVNUX1VSTH0vcmVnaXN0ZXJgLFxyXG4gICAgICAgIHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlQWNjb3VudCA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1JFUVVFU1RfVVJMfS9yZWdpc3Rlci9hY3RpdmF0ZWAsXHJcbiAgICAgICAgeyB0b2tlbiB9XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1JFUVVFU1RfVVJMfS9sb2dpbmAsXHJcbiAgICAgICAgeyBlbWFpbCwgcGFzc3dvcmQgfVxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy9taWRsZXdhcmVcclxuZXhwb3J0IGNvbnN0IGNoZWNrQXV0aHMgPSBhc3luYyAoYXV0aFRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9SRVFVRVNUX1VSTH0vdXNlcmAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IGFzeW5jIChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnB1dChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfUkVRVUVTVF9VUkx9L2ZvcmdvdC1wYXNzd29yZGAsXHJcbiAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiYWRkVXNlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfUkVRVUVTVF9VUkwiLCJhY3RpdmF0ZUFjY291bnQiLCJ0b2tlbiIsImxvZ2luVXNlciIsImNoZWNrQXV0aHMiLCJhdXRoVG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImNvbnRlbnRUeXBlIiwiZm9yZ290UGFzc3dvcmQiLCJwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/requests/user.js\n");

/***/ })

});