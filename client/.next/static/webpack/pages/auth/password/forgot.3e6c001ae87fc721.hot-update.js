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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_requests_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/requests/user */ \"./components/requests/user.js\");\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layouts */ \"./components/Layouts.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar forgot = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), success = ref2[0], setSuccess = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setLoading(true);\n        try {\n            var res = (0,_components_requests_user__WEBPACK_IMPORTED_MODULE_2__.forgotPassword)(email);\n            setLoading(false);\n            setSuccess(res.data.data);\n            console.log(res);\n        } catch (err) {\n            setLoading(false);\n            // setError(err.response.data)\n            console.log(err.response);\n        }\n    };\n    var form = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        autoFocus: true,\n                        placeholder: \"Enter Your Email\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-warning w-100 mt-3 \",\n                    children: \"Submite\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n            lineNumber: 30,\n            columnNumber: 24\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: form()\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\react-aws\\\\client\\\\pages\\\\auth\\\\password\\\\forgot.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this);\n};\n_s(forgot, \"SCyUmABanxyTwLuTOPdISxLmyRE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (forgot);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQTJDO0FBQ3VCO0FBQ2pCOztBQUdqRCxJQUFNSSxNQUFNLEdBQUcsV0FBTTs7O0lBRWpCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUjFDLEtBUWdCLEdBQWNBLEdBQVksR0FBMUIsRUFSaEIsUUFRMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVQxQyxLQVNnQixHQUFjQSxJQUFZLEdBQTFCLEVBVGhCLFFBUzBCLEdBQUlBLElBQVksR0FBaEI7SUFDdEIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFWOUMsT0FVa0IsR0FBZ0JBLElBQVksR0FBNUIsRUFWbEIsVUFVOEIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVhqRCxPQVdrQixHQUFnQkEsSUFBZSxHQUEvQixFQVhsQixVQVc4QixHQUFJQSxJQUFlLEdBQW5CO0lBRTFCLElBQU1hLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJILFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJO1lBQ0EsSUFBTUksR0FBRyxHQUFHZCx5RUFBYyxDQUFDRyxLQUFLLENBQUM7WUFDakNPLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJGLFVBQVUsQ0FBQ00sR0FBRyxDQUFDQyxJQUFJLENBQUNBLElBQUksQ0FBQztZQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO1NBQ3BCLENBQUMsT0FBT0ksR0FBRyxFQUFFO1lBQ1ZSLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsOEJBQThCO1lBQzlCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQztTQUM3QjtLQUVKO0lBRUQsSUFBTUMsSUFBSSxHQUFHOzZCQUFNLDhEQUFDQSxNQUFJO1lBQUNDLFFBQVEsRUFBRVYsWUFBWTs7OEJBQzNDLDhEQUFDVyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsWUFBWTs4QkFDdkIsNEVBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxPQUFPO3dCQUFDRixTQUFTLEVBQUMsY0FBYzt3QkFBQ0csU0FBUzt3QkFBQ0MsV0FBVyxFQUFDLGtCQUFrQjt3QkFBQ0MsS0FBSyxFQUFFekIsS0FBSzt3QkFBRTBCLFFBQVEsRUFBRSxTQUFDakIsQ0FBQzttQ0FBS1IsUUFBUSxDQUFDUSxDQUFDLENBQUNrQixNQUFNLENBQUNGLEtBQUssQ0FBQzt5QkFBQTs7Ozs7OEJBQUk7Ozs7OzBCQUMvSTs4QkFDTiw4REFBQ0csUUFBTTtvQkFBQ1IsU0FBUyxFQUFDLHFDQUFxQzs4QkFBQyxTQUFPOzs7OzswQkFBUzs7Ozs7O2tCQUNyRTtLQUFBO0lBR1AscUJBRUksOERBQUN0QiwyREFBTztrQkFFSiw0RUFBQ3FCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQkFDaENILElBQUksRUFBRTs7Ozs7aUJBQ0w7Ozs7O2FBQ0EsQ0FDYjtDQUNKO0dBeENLbEIsTUFBTTtBQTBDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdC5qcz81MGE2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZvcmdvdFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0cy91c2VyJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dHMnXHJcblxyXG5cclxuY29uc3QgZm9yZ290ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZvcmdvdFBhc3N3b3JkKGVtYWlsKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRTdWNjZXNzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIC8vIHNldEVycm9yKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybSA9ICgpID0+IDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGF1dG9Gb2N1cyBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBFbWFpbCcgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIHctMTAwIG10LTMgXCI+U3VibWl0ZTwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8TGF5b3V0cz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0cz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9yZ290Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZm9yZ290UGFzc3dvcmQiLCJMYXlvdXRzIiwiZm9yZ290IiwiZW1haWwiLCJzZXRFbWFpbCIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJyZXNwb25zZSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/password/forgot.js\n");

/***/ })

});