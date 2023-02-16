/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.jsx":
/*!*********************************!*\
  !*** ./context/AuthContext.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //login user\n    const login = async ({ username , password  })=>{\n        try {\n            setLoading(true);\n            const res = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/auth/login\", {\n                username,\n                password\n            });\n            if (res.data.success) {\n                setIsAuthenticated(true);\n                setLoading(false);\n                router.push(\"/\");\n            }\n        } catch (error) {\n            setLoading(false);\n            setError(error.response && (error.response.data.detail || error.response.data.error));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            loading,\n            user,\n            error,\n            isAuthenticated,\n            login\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rakesh/Desktop/FullStack/jobee/frontend/context/AuthContext.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNZO0FBQ3FCO0FBRTNELE1BQU1LLDRCQUFjRCxvREFBYUE7QUFFMUIsTUFBTUUsZUFBZ0IsQ0FBQyxFQUFDQyxTQUFRLEVBQUMsR0FBSztJQUN6QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBRVQsK0NBQVFBLENBQUMsSUFBSTtJQUNwQyxNQUFNLENBQUNVLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFFdkMsTUFBTWMsU0FBU2Ysc0RBQVNBO0lBRXhCLFlBQVk7SUFDWixNQUFNZ0IsUUFBUSxPQUFPLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFDLEdBQUs7UUFDM0MsSUFBRztZQUNDVixXQUFXLElBQUk7WUFDZixNQUFNVyxNQUFPcEIsa0RBQVUsQ0FBQyxtQkFBbUI7Z0JBQ3ZDa0I7Z0JBQ0FDO1lBQ0o7WUFDQSxJQUFHQyxJQUFJRSxJQUFJLENBQUNDLE9BQU8sRUFBQztnQkFDaEJWLG1CQUFtQixJQUFJO2dCQUN2QkosV0FBVyxLQUFLO2dCQUNoQk8sT0FBT1EsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxFQUNBLE9BQU1WLE9BQU07WUFDUkwsV0FBVyxLQUFLO1lBQ2hCTSxTQUNJRCxNQUFNVyxRQUFRLElBQUtYLENBQUFBLE1BQU1XLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDSSxNQUFNLElBQUlaLE1BQU1XLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDUixLQUFLO1FBRWxGO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1QsWUFBWXNCLFFBQVE7UUFDckJDLE9BQVM7WUFDTHBCO1lBQ0FFO1lBQ0FJO1lBQ0FGO1lBQ0FLO1FBQ0o7a0JBRUtWOzs7Ozs7QUFHYixFQUFFO0FBRUYsaUVBQWVGLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanN4P2RlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPXVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgLy9sb2dpbiB1c2VyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoeyB1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXMgPSAgYXhpb3MucG9zdCgnL2FwaS9hdXRoL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlICYmIChlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbCB8fCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICB2YWx1ZSA9IHt7XG4gICAgICAgICAgICBsb2FkaW5nLFxuICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICAgICAgbG9naW4sXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzIiwicG9zdCIsImRhdGEiLCJzdWNjZXNzIiwicHVzaCIsInJlc3BvbnNlIiwiZGV0YWlsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/rakesh/Desktop/FullStack/jobee/frontend/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/rakesh/Desktop/FullStack/jobee/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ3VCO0FBR3RDLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDQSw4REFBQ0gsOERBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICA8QXV0aFByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9BdXRoUHJvdmlkZXI+KVxufVxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();