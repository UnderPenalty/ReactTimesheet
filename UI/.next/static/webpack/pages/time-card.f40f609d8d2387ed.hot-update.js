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

/***/ "./pages/time-card/index.tsx":
/*!***********************************!*\
  !*** ./pages/time-card/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TimeCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDateFns */ \"./node_modules/@mui/x-date-pickers/AdapterDateFns/index.js\");\n/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/startOfWeek */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/endOfWeek */ \"./node_modules/date-fns/esm/endOfWeek/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dropdown */ \"./components/dropdown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TimeCard() {\n    _s();\n    let currentDate = Date.now();\n    let endOfCurrentWeek = (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentDate, {\n        weekStartsOn: 1\n    });\n    let startOfCurrentWeek = (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentDate, {\n        weekStartsOn: 1\n    });\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startOfCurrentWeek);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(endOfCurrentWeek);\n    const [weekIncrement, setWeekIncrement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weekSelection, setWeekSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;\n    const weekEndSelected = (weekSelected)=>{\n        return (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentDate + weekSelected * weekInMilliseconds, {\n            weekStartsOn: 1\n        });\n    };\n    const weekStartSelected = (weekSelected)=>{\n        return (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentDate + weekSelected * weekInMilliseconds, {\n            weekStartsOn: 1\n        });\n    };\n    const generateWeeks = (count)=>{\n        let weekSelection = [];\n        for(let i = count * -1; i <= count; i++){\n            let weekSelected = currentDate + i * weekInMilliseconds;\n            let endOfSelectedWeek = (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weekSelected, {\n                weekStartsOn: 1\n            });\n            let startOfSelectedWeek = (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(weekSelected, {\n                weekStartsOn: 1\n            });\n            weekSelection.push({\n                name: startOfSelectedWeek.toString() + \" to \" + endOfSelectedWeek.toString(),\n                value: i\n            });\n        }\n        return weekSelection;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWeekSelection(generateWeeks(5));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weekIncrement !== \"\") {\n            setStartDate(weekStartSelected(weekIncrement));\n            setEndDate(weekEndSelected(weekIncrement));\n        }\n    }, [\n        weekIncrement\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n            dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_6__.AdapterDateFns,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Starting basic support for a Time Card\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                    container: true,\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Week Selection\",\n                                options: weekSelection,\n                                emptyoption: true,\n                                value: weekIncrement,\n                                onChange: (e)=>{\n                                    if (typeof e.target.value === \"string\") {\n                                        setWeekIncrement(\"\");\n                                    }\n                                    let weekSelected = e.target.value;\n                                    setWeekIncrement(weekSelected);\n                                },\n                                style: {\n                                    minWidth: 300\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DesktopDatePicker, {\n                                disabled: true,\n                                label: \"Start Date for Time Sheet\",\n                                format: \"yyyy-MM-dd\",\n                                defaultValue: startOfCurrentWeek,\n                                value: startDate,\n                                onChange: (value)=>setStartDate(value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DesktopDatePicker, {\n                                disabled: true,\n                                label: \"End Date for Time Sheet\",\n                                format: \"yyyy-MM-dd\",\n                                defaultValue: endOfCurrentWeek,\n                                value: endDate,\n                                onChange: (value)=>setEndDate(value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(TimeCard, \"Kop2MPykDMt+EJaxHt3WOcOsozw=\");\n_c = TimeCard;\nvar _c;\n$RefreshReg$(_c, \"TimeCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNWLFFBQVVuQixhQUFhbUI7Ozs7Ozs7Ozs7O3NDQUcxQyw4REFBQ3BDLCtDQUFJQTs0QkFBQ3lDLElBQUk7c0NBQ04sNEVBQUN4QyxrRUFBaUJBO2dDQUNka0QsVUFBVTtnQ0FDVlIsT0FBTTtnQ0FDTlMsUUFBTztnQ0FDUEMsY0FBY3hDO2dDQUNkdUIsT0FBT2xCO2dDQUNQNEIsVUFBVSxDQUFDVixRQUFVakIsV0FBV2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQ7R0E3RndCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGltZS1jYXJkL2luZGV4LnRzeD8wNWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFNlbGVjdCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyLCBEZXNrdG9wRGF0ZVBpY2tlciwgRGVza3RvcERhdGVUaW1lUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzXCI7XHJcbmltcG9ydCB7QWRhcHRlckRhdGVGbnN9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXRlRm5zXCI7XHJcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrLCBlbmRPZldlZWssIGdldFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcGRvd24sIHsgRHJvcGRvd25PcHRpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kcm9wZG93blwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lQ2FyZCgpIHtcclxuXHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGVuZE9mQ3VycmVudFdlZWsgPSBlbmRPZldlZWsoY3VycmVudERhdGUsIHt3ZWVrU3RhcnRzT246IDF9KTtcclxuICAgIGxldCBzdGFydE9mQ3VycmVudFdlZWsgPSBzdGFydE9mV2VlayhjdXJyZW50RGF0ZSwge3dlZWtTdGFydHNPbjogMX0pO1xyXG5cclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlPihzdGFydE9mQ3VycmVudFdlZWspO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGU8RGF0ZT4oZW5kT2ZDdXJyZW50V2Vlayk7XHJcbiAgICBjb25zdCBbd2Vla0luY3JlbWVudCwgc2V0V2Vla0luY3JlbWVudF0gPSB1c2VTdGF0ZTxudW1iZXIgfCAnJz4oJycpO1xyXG4gICAgY29uc3QgW3dlZWtTZWxlY3Rpb24sIHNldFdlZWtTZWxlY3Rpb25dID0gdXNlU3RhdGU8RHJvcGRvd25PcHRpb25bXT4oW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCB3ZWVrSW5NaWxsaXNlY29uZHMgPSA3KjI0KjYwKjYwKjEwMDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHdlZWtFbmRTZWxlY3RlZCA9ICh3ZWVrU2VsZWN0ZWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbmRPZldlZWsoY3VycmVudERhdGUgKyB3ZWVrU2VsZWN0ZWQgKiB3ZWVrSW5NaWxsaXNlY29uZHMsIHt3ZWVrU3RhcnRzT246IDF9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlZWtTdGFydFNlbGVjdGVkID0gKHdlZWtTZWxlY3RlZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGN1cnJlbnREYXRlICsgd2Vla1NlbGVjdGVkICogd2Vla0luTWlsbGlzZWNvbmRzLCB7d2Vla1N0YXJ0c09uOiAxfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2VuZXJhdGVXZWVrcyA9IChjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHdlZWtTZWxlY3Rpb246IERyb3Bkb3duT3B0aW9uW10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9IGNvdW50ICogLTE7IGkgPD0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgd2Vla1NlbGVjdGVkID0gY3VycmVudERhdGUgKyAoaSAqIHdlZWtJbk1pbGxpc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIGxldCBlbmRPZlNlbGVjdGVkV2VlayA9IGVuZE9mV2Vlayh3ZWVrU2VsZWN0ZWQsIHt3ZWVrU3RhcnRzT246IDF9KTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0T2ZTZWxlY3RlZFdlZWsgPSBzdGFydE9mV2Vlayh3ZWVrU2VsZWN0ZWQsIHt3ZWVrU3RhcnRzT246IDF9KTtcclxuICAgICAgICAgICAgd2Vla1NlbGVjdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0YXJ0T2ZTZWxlY3RlZFdlZWsudG9TdHJpbmcoKSArIFwiIHRvIFwiICsgZW5kT2ZTZWxlY3RlZFdlZWsudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2Vla1NlbGVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdlZWtTZWxlY3Rpb24oZ2VuZXJhdGVXZWVrcyg1KSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZih3ZWVrSW5jcmVtZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICBzZXRTdGFydERhdGUod2Vla1N0YXJ0U2VsZWN0ZWQod2Vla0luY3JlbWVudCkpO1xyXG4gICAgICAgICAgICBzZXRFbmREYXRlKHdlZWtFbmRTZWxlY3RlZCh3ZWVrSW5jcmVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3dlZWtJbmNyZW1lbnRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXRlRm5zfT5cclxuICAgICAgICAgICAgICAgIDxwPlN0YXJ0aW5nIGJhc2ljIHN1cHBvcnQgZm9yIGEgVGltZSBDYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldlZWsgU2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dlZWtTZWxlY3Rpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlvcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla0luY3JlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7KGU6e3RhcmdldDp7dmFsdWU6YW55LCBuYW1lOiBzdHJpbmd9fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlLnRhcmdldC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXZWVrSW5jcmVtZW50KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdlZWtTZWxlY3RlZCA9IGUudGFyZ2V0LnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXZWVrSW5jcmVtZW50KHdlZWtTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5XaWR0aDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3BEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZSBmb3IgVGltZSBTaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhcnRPZkN1cnJlbnRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFN0YXJ0RGF0ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZCBEYXRlIGZvciBUaW1lIFNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cInl5eXktTU0tZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlbmRPZkN1cnJlbnRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRFbmREYXRlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkdyaWQiLCJEZXNrdG9wRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRhdGVGbnMiLCJzdGFydE9mV2VlayIsImVuZE9mV2VlayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJvcGRvd24iLCJUaW1lQ2FyZCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImVuZE9mQ3VycmVudFdlZWsiLCJ3ZWVrU3RhcnRzT24iLCJzdGFydE9mQ3VycmVudFdlZWsiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsIndlZWtJbmNyZW1lbnQiLCJzZXRXZWVrSW5jcmVtZW50Iiwid2Vla1NlbGVjdGlvbiIsInNldFdlZWtTZWxlY3Rpb24iLCJ3ZWVrSW5NaWxsaXNlY29uZHMiLCJ3ZWVrRW5kU2VsZWN0ZWQiLCJ3ZWVrU2VsZWN0ZWQiLCJ3ZWVrU3RhcnRTZWxlY3RlZCIsImdlbmVyYXRlV2Vla3MiLCJjb3VudCIsImkiLCJlbmRPZlNlbGVjdGVkV2VlayIsInN0YXJ0T2ZTZWxlY3RlZFdlZWsiLCJwdXNoIiwibmFtZSIsInRvU3RyaW5nIiwidmFsdWUiLCJkYXRlQWRhcHRlciIsInAiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwibGFiZWwiLCJvcHRpb25zIiwiZW1wdHlvcHRpb24iLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsIm1pbldpZHRoIiwiZGlzYWJsZWQiLCJmb3JtYXQiLCJkZWZhdWx0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/time-card/index.tsx\n"));

/***/ })

});