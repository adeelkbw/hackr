"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/helpers/auth.js":
/*!************************************!*\
  !*** ./components/helpers/auth.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCookie\": function() { return /* binding */ setCookie; },\n/* harmony export */   \"removeCookie\": function() { return /* binding */ removeCookie; },\n/* harmony export */   \"getCookie\": function() { return /* binding */ getCookie; },\n/* harmony export */   \"setInLoacalStorage\": function() { return /* binding */ setInLoacalStorage; },\n/* harmony export */   \"removefromLocalStorage\": function() { return /* binding */ removefromLocalStorage; },\n/* harmony export */   \"authenticate\": function() { return /* binding */ authenticate; },\n/* harmony export */   \"isAuth\": function() { return /* binding */ isAuth; },\n/* harmony export */   \"logoutUser\": function() { return /* binding */ logoutUser; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n//set cookies\nvar setCookie = function(key, value) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(key, value, {\n            expires: 7\n        });\n    }\n};\n// remove cookies\nvar removeCookie = function(key) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(key);\n    }\n};\n//get cookie data such token\nvar getCookie = function(key) {\n    if (true) {\n        return js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(key);\n    }\n};\n//local Storage\n//set user and token in cookie\nvar setInLoacalStorage = function(key, value) {\n    if (true) {\n        localStorage.setItem(key, JSON.stringify(value));\n    }\n};\n//remove from loacal Strorage\nvar removefromLocalStorage = function(key) {\n    if (true) {\n        localStorage.removeItem(key);\n    }\n};\n//authenticat use after sign in and store it in cooki and local strorage\nvar authenticate = function(res, next) {\n    setCookie(\"token\", res.data.token);\n    setInLoacalStorage(\"user\", res.data.user);\n    next();\n};\n// access user info from localstorage\nvar isAuth = function() {\n    if (true) {\n        var checkIfToken = getCookie(\"token\");\n        if (checkIfToken) {\n            if (localStorage.getItem(\"user\")) {\n                return JSON.parse(localStorage.getItem(\"user\"));\n            }\n        }\n    }\n};\n//logout\nvar logoutUser = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (true) {\n        removeCookie(\"token\");\n        removefromLocalStorage(\"user\");\n        router.push(\"/\");\n    }\n};\n_s(logoutUser, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlbHBlcnMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNTOztBQUd2QyxhQUFhO0FBQ04sSUFBTUUsU0FBUyxHQUFHLFNBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFLO0lBQ3JDLElBQUksSUFBNkIsRUFBRTtRQUMvQkoscURBQVUsQ0FBQ0csR0FBRyxFQUFFQyxLQUFLLEVBQUU7WUFDbkJFLE9BQU8sRUFBRSxDQUFDO1NBQ2IsQ0FBQztLQUNMO0NBQ0o7QUFFRCxpQkFBaUI7QUFDVixJQUFNQyxZQUFZLEdBQUcsU0FBQ0osR0FBRyxFQUFLO0lBQ2pDLElBQUksSUFBNkIsRUFBRTtRQUMvQkgsd0RBQWEsQ0FBQ0csR0FBRyxDQUFDO0tBQ3JCO0NBQ0o7QUFFRCw0QkFBNEI7QUFDckIsSUFBTU0sU0FBUyxHQUFHLFNBQUNOLEdBQUcsRUFBSztJQUM5QixJQUFJLElBQTZCLEVBQUU7UUFDL0IsT0FBT0gscURBQVUsQ0FBQ0csR0FBRyxDQUFDO0tBQ3pCO0NBQ0o7QUFHRCxlQUFlO0FBRWYsOEJBQThCO0FBQ3ZCLElBQU1RLGtCQUFrQixHQUFHLFNBQUNSLEdBQUcsRUFBRUMsS0FBSyxFQUFLO0lBQzlDLElBQUksSUFBNkIsRUFBRTtRQUMvQlEsWUFBWSxDQUFDQyxPQUFPLENBQUNWLEdBQUcsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUNYLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0NBQ0o7QUFHRCw2QkFBNkI7QUFDdEIsSUFBTVksc0JBQXNCLEdBQUcsU0FBQ2IsR0FBRyxFQUFLO0lBQzNDLElBQUksSUFBNkIsRUFBRTtRQUMvQlMsWUFBWSxDQUFDSyxVQUFVLENBQUNkLEdBQUcsQ0FBQztLQUMvQjtDQUNKO0FBRUQsd0VBQXdFO0FBRWpFLElBQU1lLFlBQVksR0FBRyxTQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBSztJQUN2Q2xCLFNBQVMsQ0FBQyxPQUFPLEVBQUVpQixHQUFHLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQ2xDWCxrQkFBa0IsQ0FBQyxNQUFNLEVBQUVRLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDRSxJQUFJLENBQUM7SUFDekNILElBQUksRUFBRTtDQUNUO0FBR0QscUNBQXFDO0FBQzlCLElBQU1JLE1BQU0sR0FBRyxXQUFNO0lBQ3hCLElBQUksSUFBNkIsRUFBRTtRQUMvQixJQUFNQyxZQUFZLEdBQUdoQixTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUlnQixZQUFZLEVBQUU7WUFDZCxJQUFJYixZQUFZLENBQUNjLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsT0FBT1osSUFBSSxDQUFDYSxLQUFLLENBQUNmLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1NBQ0o7S0FDSjtDQUNKO0FBSUQsUUFBUTtBQUVELElBQU1FLFVBQVUsR0FBRyxXQUFNOztJQUU1QixJQUFNQyxNQUFNLEdBQUc1QixzREFBUyxFQUFFO0lBQzFCLElBQUksSUFBNkIsRUFBRTtRQUMvQk0sWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUNyQlMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1FBQzlCYSxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDbkI7Q0FDSjtHQVJZRixVQUFVOztRQUVKM0Isa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWxwZXJzL2F1dGguanM/MDFhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuLy9zZXQgY29va2llc1xyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgQ29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZW1vdmUgY29va2llc1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgQ29va2llLnJlbW92ZShrZXkpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vZ2V0IGNvb2tpZSBkYXRhIHN1Y2ggdG9rZW5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBDb29raWUuZ2V0KGtleSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vbG9jYWwgU3RvcmFnZVxyXG5cclxuLy9zZXQgdXNlciBhbmQgdG9rZW4gaW4gY29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRJbkxvYWNhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3JlbW92ZSBmcm9tIGxvYWNhbCBTdHJvcmFnZVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlZnJvbUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2F1dGhlbnRpY2F0IHVzZSBhZnRlciBzaWduIGluIGFuZCBzdG9yZSBpdCBpbiBjb29raSBhbmQgbG9jYWwgc3Ryb3JhZ2VcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAocmVzLCBuZXh0KSA9PiB7XHJcbiAgICBzZXRDb29raWUoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICBzZXRJbkxvYWNhbFN0b3JhZ2UoJ3VzZXInLCByZXMuZGF0YS51c2VyKVxyXG4gICAgbmV4dCgpXHJcbn1cclxuXHJcblxyXG4vLyBhY2Nlc3MgdXNlciBpbmZvIGZyb20gbG9jYWxzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCBjaGVja0lmVG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKGNoZWNrSWZUb2tlbikge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL2xvZ291dFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZSgndG9rZW4nKVxyXG4gICAgICAgIHJlbW92ZWZyb21Mb2NhbFN0b3JhZ2UoJ3VzZXInKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDb29raWUiLCJ1c2VSb3V0ZXIiLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXQiLCJzZXRJbkxvYWNhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZWZyb21Mb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlIiwicmVzIiwibmV4dCIsImRhdGEiLCJ0b2tlbiIsInVzZXIiLCJpc0F1dGgiLCJjaGVja0lmVG9rZW4iLCJnZXRJdGVtIiwicGFyc2UiLCJsb2dvdXRVc2VyIiwicm91dGVyIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/helpers/auth.js\n");

/***/ })

});