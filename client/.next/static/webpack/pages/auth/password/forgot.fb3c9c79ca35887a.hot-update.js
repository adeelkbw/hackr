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

/***/ "./pages/auth/password/forgot.js":
/*!***************************************!*\
  !*** ./pages/auth/password/forgot.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/requests/user */ \"./components/requests/user.js\");\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layouts */ \"./components/Layouts.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar forgot = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), success = ref2[0], setSuccess = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setLoading(true);\n        (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_2__.forgotPassword)(email).then(function(res) {\n            console.log(res);\n        }).catch(function(err) {\n            console.log(err);\n            console.log(err.response);\n        });\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        autoFocus: true,\n                        placeholder: \"Enter Your Email\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning w-100 mt-3 \",\n                    children: \"Submite\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n            lineNumber: 29,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: form()\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(forgot, \"SCyUmABanxyTwLuTOPdISxLmyRE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (forgot);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQTJDO0FBQ3VCO0FBQ2pCOztBQUdqRCxJQUFNSSxNQUFNLEdBQUcsV0FBTTs7O0lBRWpCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUjFDLEtBUWdCLEdBQWNBLEdBQVksR0FBMUIsRUFSaEIsUUFRMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVQxQyxLQVNnQixHQUFjQSxJQUFZLEdBQTFCLEVBVGhCLFFBUzBCLEdBQUlBLElBQVksR0FBaEI7SUFDdEIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFWOUMsT0FVa0IsR0FBZ0JBLElBQVksR0FBNUIsRUFWbEIsVUFVOEIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVhqRCxPQVdrQixHQUFnQkEsSUFBZSxHQUEvQixFQVhsQixVQVc4QixHQUFJQSxJQUFlLEdBQW5CO0lBRTFCLElBQU1hLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJILFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQlYseUVBQWMsQ0FBQ0csS0FBSyxDQUFDLENBQUNXLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7WUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztTQUNwQixDQUFDLENBQUNHLEtBQUssQ0FBQ0MsU0FBQUEsR0FBRyxFQUFJO1lBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUMsQ0FBQztZQUNqQkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7U0FDN0IsQ0FBQztLQUlMO0lBRUQsSUFBTUMsSUFBSSxHQUFHOzZCQUFNLDhEQUFDQSxNQUFJO1lBQUNDLFFBQVEsRUFBRVgsWUFBWTs7OEJBQzNDLDhEQUFDWSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsWUFBWTs4QkFDdkIsNEVBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxPQUFPO3dCQUFDRixTQUFTLEVBQUMsY0FBYzt3QkFBQ0csU0FBUzt3QkFBQ0MsV0FBVyxFQUFDLGtCQUFrQjt3QkFBQ0MsS0FBSyxFQUFFMUIsS0FBSzt3QkFBRTJCLFFBQVEsRUFBRSxTQUFDbEIsQ0FBQzttQ0FBS1IsUUFBUSxDQUFDUSxDQUFDLENBQUNtQixNQUFNLENBQUNGLEtBQUssQ0FBQzt5QkFBQTs7Ozs7OEJBQUk7Ozs7OzBCQUMvSTs4QkFDTiw4REFBQ0csUUFBTTtvQkFBQ1IsU0FBUyxFQUFDLHFDQUFxQzs4QkFBQyxTQUFPOzs7OzswQkFBUzs7Ozs7O2tCQUNyRTtLQUFBO0lBR1AscUJBRUksOERBQUN2QiwyREFBTztrQkFFSiw0RUFBQ3NCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQkFDaENILElBQUksRUFBRTs7Ozs7aUJBQ0w7Ozs7O2FBQ0EsQ0FDYjtDQUNKO0dBdkNLbkIsTUFBTTtBQXlDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdC5qcz81MGE2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZvcmdvdFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0cy91c2VyJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dHMnXHJcblxyXG5cclxuY29uc3QgZm9yZ290ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBmb3Jnb3RQYXNzd29yZChlbWFpbCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSAoKSA9PiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhdXRvRm9jdXMgcGxhY2Vob2xkZXI9J0VudGVyIFlvdXIgRW1haWwnIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyB3LTEwMCBtdC0zIFwiPlN1Ym1pdGU8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPExheW91dHM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dHM+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcmdvdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZvcmdvdFBhc3N3b3JkIiwiTGF5b3V0cyIsImZvcmdvdCIsImVtYWlsIiwic2V0RW1haWwiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJyZXNwb25zZSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/password/forgot.js\n");

/***/ })

});