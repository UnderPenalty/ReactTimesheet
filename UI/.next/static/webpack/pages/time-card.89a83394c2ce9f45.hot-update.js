"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/time-card",{

/***/ "./components/dropdown.tsx":
/*!*********************************!*\
  !*** ./components/dropdown.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Select */ \"./node_modules/@mui/material/Select/index.js\");\n\n\n\nfunction Dropdown(props) {\n    console.log(props.value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ...props,\n        children: [\n            props.emptyoption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                value: \"\",\n                children: props.label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\components\\\\dropdown.tsx\",\n                lineNumber: 26,\n                columnNumber: 38\n            }, this) : null,\n            props.options.map((option)=>{\n                let isDropdownOption = typeof option !== \"number\" && typeof option !== \"string\";\n                if (isDropdownOption) {\n                    let optionAsDropdownOption = option;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        value: optionAsDropdownOption.value,\n                        children: optionAsDropdownOption.name\n                    }, optionAsDropdownOption.value, false, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\components\\\\dropdown.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 37\n                    }, this);\n                }\n                let optionAsSingleValue = option;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    value: optionAsSingleValue,\n                    children: optionAsSingleValue\n                }, optionAsSingleValue, false, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\components\\\\dropdown.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 33\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\components\\\\dropdown.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Ryb3Bkb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUNqQjtBQWEzQixTQUFTRSxTQUFTQyxLQUFvQjtJQUNqREMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxLQUFLO0lBQ3ZCLHFCQUNJLDhEQUFDTiw0REFBTUE7UUFDRixHQUFHRyxLQUFLOztZQU9KQSxNQUFNSSxXQUFXLGlCQUFHLDhEQUFDTiw0REFBTUE7Z0JBQUNLLE9BQU07MEJBQUlILE1BQU1LLEtBQUs7Ozs7O3VCQUFjO1lBRTVETCxNQUFNTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztnQkFDZixJQUFJQyxtQkFBbUIsT0FBT0QsV0FBVyxZQUFZLE9BQU9BLFdBQVc7Z0JBQ3ZFLElBQUdDLGtCQUFrQjtvQkFDakIsSUFBSUMseUJBQXlCRjtvQkFDN0IscUJBQVEsOERBQUNWLDREQUFNQTt3QkFBb0NLLE9BQU9PLHVCQUF1QlAsS0FBSztrQ0FBR08sdUJBQXVCQyxJQUFJO3VCQUEvRkQsdUJBQXVCUCxLQUFLOzs7OztnQkFDckQ7Z0JBQ0EsSUFBSVMsc0JBQXNCSjtnQkFDMUIscUJBQVEsOERBQUNWLDREQUFNQTtvQkFBMkJLLE9BQU9TOzhCQUFzQkE7bUJBQWxEQTs7Ozs7WUFDekI7Ozs7Ozs7QUFJcEI7S0F6QndCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Ryb3Bkb3duLnRzeD83ODI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QsIHsgU2VsZWN0UHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuaW1wb3J0IE9wdGlvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9TZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25PcHRpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyBleHRlbmRzIFNlbGVjdFByb3Bze1xyXG4gICAgb3B0aW9uczogc3RyaW5nW10gfCBudW1iZXJbXSB8IERyb3Bkb3duT3B0aW9uW10sXHJcbiAgICBlbXB0eW9wdGlvbj86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHM6IERyb3Bkb3duUHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLnZhbHVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIC8vIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgLy8gaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAvLyBhdXRvV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIC8vIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgLy8gb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZW1wdHlvcHRpb24/ICg8T3B0aW9uIHZhbHVlPVwiXCI+e3Byb3BzLmxhYmVsfTwvT3B0aW9uPikgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0Ryb3Bkb3duT3B0aW9uID0gdHlwZW9mIG9wdGlvbiAhPT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygb3B0aW9uICE9PSBcInN0cmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc0Ryb3Bkb3duT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uQXNEcm9wZG93bk9wdGlvbiA9IG9wdGlvbiBhcyBEcm9wZG93bk9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPE9wdGlvbiBrZXk9e29wdGlvbkFzRHJvcGRvd25PcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb25Bc0Ryb3Bkb3duT3B0aW9uLnZhbHVlfT57b3B0aW9uQXNEcm9wZG93bk9wdGlvbi5uYW1lfTwvT3B0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uQXNTaW5nbGVWYWx1ZSA9IG9wdGlvbiBhcyBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPE9wdGlvbiBrZXk9e29wdGlvbkFzU2luZ2xlVmFsdWV9IHZhbHVlPXtvcHRpb25Bc1NpbmdsZVZhbHVlfT57b3B0aW9uQXNTaW5nbGVWYWx1ZX08L09wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTZWxlY3QiLCJPcHRpb24iLCJEcm9wZG93biIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZW1wdHlvcHRpb24iLCJsYWJlbCIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpc0Ryb3Bkb3duT3B0aW9uIiwib3B0aW9uQXNEcm9wZG93bk9wdGlvbiIsIm5hbWUiLCJvcHRpb25Bc1NpbmdsZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dropdown.tsx\n"));

/***/ })

});