"use strict";
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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${\"http://localhost:8000\"}/api/token`, {\n                username,\n                password\n            }, {\n                \"Content-Type\": \"application/json\"\n            });\n            if (response.data.access) {\n                res.setHeader(\"Set-Cookie\", [\n                    cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize(\"access\", response.data.access, {\n                        httpOnly: true,\n                        secure: \"development\" !== \"development\",\n                        maxAge: 60 * 60 * 24 * 15,\n                        sameSite: \"Lax\",\n                        path: \"/\"\n                    })\n                ]);\n                return res.status(200).json({\n                    success: true\n                });\n            } else {\n                res.status(response.status).json({\n                    error: \"Authentication failed\"\n                });\n            }\n        } catch (error) {\n            res.status(500).json({\n                error: error.ressponse && error.response.data.detail\n            });\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ0U7QUFFM0IsaUVBQWUsT0FBT0UsS0FBS0MsTUFBUTtJQUNqQyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUN2QixNQUFNLEVBQUNDLFNBQVEsRUFBRUMsU0FBUSxFQUFDLEdBQUdKLElBQUlLLElBQUk7UUFDckMsSUFBRztZQUNELE1BQU1DLFdBQVcsTUFBTVIsa0RBQVUsQ0FBQyxDQUFDLEVBQUVVLHVCQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRUw7Z0JBQ0FDO1lBQ0YsR0FBRztnQkFDRCxnQkFBZTtZQUNqQjtZQUVBLElBQUdFLFNBQVNLLElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUN2QlgsSUFBSVksU0FBUyxDQUFDLGNBQWM7b0JBQzFCZCx1REFBZ0IsQ0FBQyxVQUFVTyxTQUFTSyxJQUFJLENBQUNDLE1BQU0sRUFBRTt3QkFDL0NHLFVBQVUsSUFBSTt3QkFDZEMsUUFBT1Isa0JBQXlCO3dCQUNoQ1MsUUFBTyxLQUFHLEtBQUcsS0FBRzt3QkFDaEJDLFVBQVU7d0JBQ1ZDLE1BQU87b0JBQ1Q7aUJBQ0Q7Z0JBRUQsT0FBT2xCLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUMxQkMsU0FBUSxJQUFJO2dCQUNkO1lBQ0YsT0FDSTtnQkFDRnJCLElBQUltQixNQUFNLENBQUNkLFNBQVNjLE1BQU0sRUFBRUMsSUFBSSxDQUFDO29CQUMvQkUsT0FBTztnQkFDVDtZQUNGLENBQUM7UUFDSCxFQUNBLE9BQU1BLE9BQU07WUFDVnRCLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkUsT0FBT0EsTUFBTUMsU0FBUyxJQUFJRCxNQUFNakIsUUFBUSxDQUFDSyxJQUFJLENBQUNjLE1BQU07WUFDdEQ7UUFDRjtJQUNGLENBQUM7QUFDSCxHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcz8xMzE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBwYXNzd29yZH0gPSByZXEuYm9keTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL3Rva2VuYCwge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9LCB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICAgIFxuICAgICAgaWYocmVzcG9uc2UuZGF0YS5hY2Nlc3MpIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIFtcbiAgICAgICAgICBjb29raWUuc2VyaWFsaXplKCdhY2Nlc3MnLCByZXNwb25zZS5kYXRhLmFjY2Vzcywge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzZWN1cmU6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMTUsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ0xheCcsXG4gICAgICAgICAgICBwYXRoIDogJy8nLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6dHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgZXJyb3I6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IGVycm9yLnJlc3Nwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiZGF0YSIsImFjY2VzcyIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsInJlc3Nwb25zZSIsImRldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();