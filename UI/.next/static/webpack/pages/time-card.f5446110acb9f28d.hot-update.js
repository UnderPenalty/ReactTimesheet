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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TimeCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDateFns */ \"./node_modules/@mui/x-date-pickers/AdapterDateFns/index.js\");\n/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/startOfWeek */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/endOfWeek */ \"./node_modules/date-fns/esm/endOfWeek/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dropdown */ \"./components/dropdown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TimeCard() {\n    _s();\n    let currentDate = Date.now();\n    let endOfCurrentWeek = (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentDate, {\n        weekStartsOn: 1\n    });\n    let startOfCurrentWeek = (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentDate, {\n        weekStartsOn: 1\n    });\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startOfCurrentWeek);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(endOfCurrentWeek);\n    const [weekIncrement, setWeekIncrement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weekSelection, setWeekSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;\n    const weekEndSelected = (weekSelected)=>{\n        return (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentDate + weekSelected * weekInMilliseconds, {\n            weekStartsOn: 1\n        });\n    };\n    const weekStartSelected = (weekSelected)=>{\n        return (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentDate + weekSelected * weekInMilliseconds, {\n            weekStartsOn: 1\n        });\n    };\n    const generateWeeks = (count)=>{\n        let weekSelection = [];\n        for(let i = count * -1; i <= count; i++){\n            let weekSelected = currentDate + i * weekInMilliseconds;\n            let endOfSelectedWeek = (0,date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weekSelected, {\n                weekStartsOn: 1\n            });\n            let startOfSelectedWeek = (0,date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(weekSelected, {\n                weekStartsOn: 1\n            });\n            weekSelection.push({\n                name: startOfSelectedWeek.toString() + \" to \" + endOfSelectedWeek.toString(),\n                value: i\n            });\n        }\n        return weekSelection;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWeekSelection(generateWeeks(5));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weekIncrement !== \"\") {\n            setStartDate(weekStartSelected(weekIncrement));\n            setEndDate(weekEndSelected(weekIncrement));\n        }\n    }, [\n        weekIncrement\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n            dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_6__.AdapterDateFns,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Starting basic support for a Time Card\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                    container: true,\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Week Selection\",\n                                options: weekSelection,\n                                emptyoption: true,\n                                value: weekIncrement,\n                                onChange: (e)=>{\n                                    if (typeof e.target.value === \"string\") {\n                                        setWeekIncrement(\"\");\n                                    }\n                                    let weekSelected = e.target.value;\n                                    setWeekIncrement(weekSelected);\n                                },\n                                style: {\n                                    minWidth: 300\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DesktopDatePicker, {\n                                disabled: true,\n                                label: \"Start Date for Time Sheet\",\n                                format: \"yyyy-MM-dd\",\n                                defaultValue: startOfCurrentWeek,\n                                value: startDate,\n                                onChange: (value)=>setStartDate(value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DesktopDatePicker, {\n                                disabled: true,\n                                label: \"End Date for Time Sheet\",\n                                format: \"yyyy-MM-dd\",\n                                defaultValue: endOfCurrentWeek,\n                                value: endDate,\n                                onChange: (value)=>setEndDate(value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rober\\\\OneDrive\\\\workspace\\\\ReactTimesheet\\\\pages\\\\time-card\\\\index.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(TimeCard, \"Kop2MPykDMt+EJaxHt3WOcOsozw=\");\n_c = TimeCard;\nvar _c;\n$RefreshReg$(_c, \"TimeCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEMsY0FBY3hDO2dDQUNkcUIsT0FBT3BCO2dDQUNQOEIsVUFBVSxDQUFDVixRQUFVbkIsYUFBYW1COzs7Ozs7Ozs7OztzQ0FHMUMsOERBQUNwQywrQ0FBSUE7NEJBQUN5QyxJQUFJOzRCQUFDQyxJQUFJOzRCQUFJUyxJQUFJOzRCQUFHQyxJQUFJO3NDQUMxQiw0RUFBQ25ELGtFQUFpQkE7Z0NBQ2RvRCxVQUFVO2dDQUNWVixPQUFNO2dDQUNOVyxRQUFPO2dDQUNQQyxjQUFjMUM7Z0NBQ2R1QixPQUFPbEI7Z0NBQ1A0QixVQUFVLENBQUNWLFFBQVVqQixXQUFXaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDtHQTdGd0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aW1lLWNhcmQvaW5kZXgudHN4PzA1ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgU2VsZWN0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIsIERlc2t0b3BEYXRlUGlja2VyLCBEZXNrdG9wRGF0ZVRpbWVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnNcIjtcclxuaW1wb3J0IHtBZGFwdGVyRGF0ZUZuc30gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRhdGVGbnNcIjtcclxuaW1wb3J0IHsgc3RhcnRPZldlZWssIGVuZE9mV2VlaywgZ2V0VGltZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcm9wZG93biwgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVDYXJkKCkge1xyXG5cclxuICAgIGxldCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICBsZXQgZW5kT2ZDdXJyZW50V2VlayA9IGVuZE9mV2VlayhjdXJyZW50RGF0ZSwge3dlZWtTdGFydHNPbjogMX0pO1xyXG4gICAgbGV0IHN0YXJ0T2ZDdXJyZW50V2VlayA9IHN0YXJ0T2ZXZWVrKGN1cnJlbnREYXRlLCB7d2Vla1N0YXJ0c09uOiAxfSk7XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlPERhdGU+KHN0YXJ0T2ZDdXJyZW50V2Vlayk7XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZTxEYXRlPihlbmRPZkN1cnJlbnRXZWVrKTtcclxuICAgIGNvbnN0IFt3ZWVrSW5jcmVtZW50LCBzZXRXZWVrSW5jcmVtZW50XSA9IHVzZVN0YXRlPG51bWJlciB8ICcnPignJyk7XHJcbiAgICBjb25zdCBbd2Vla1NlbGVjdGlvbiwgc2V0V2Vla1NlbGVjdGlvbl0gPSB1c2VTdGF0ZTxEcm9wZG93bk9wdGlvbltdPihbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHdlZWtJbk1pbGxpc2Vjb25kcyA9IDcqMjQqNjAqNjAqMTAwMDtcclxuICAgIFxyXG4gICAgY29uc3Qgd2Vla0VuZFNlbGVjdGVkID0gKHdlZWtTZWxlY3RlZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVuZE9mV2VlayhjdXJyZW50RGF0ZSArIHdlZWtTZWxlY3RlZCAqIHdlZWtJbk1pbGxpc2Vjb25kcywge3dlZWtTdGFydHNPbjogMX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2Vla1N0YXJ0U2VsZWN0ZWQgPSAod2Vla1NlbGVjdGVkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhcnRPZldlZWsoY3VycmVudERhdGUgKyB3ZWVrU2VsZWN0ZWQgKiB3ZWVrSW5NaWxsaXNlY29uZHMsIHt3ZWVrU3RhcnRzT246IDF9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZVdlZWtzID0gKGNvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgd2Vla1NlbGVjdGlvbjogRHJvcGRvd25PcHRpb25bXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0gY291bnQgKiAtMTsgaSA8PSBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3ZWVrU2VsZWN0ZWQgPSBjdXJyZW50RGF0ZSArIChpICogd2Vla0luTWlsbGlzZWNvbmRzKTtcclxuICAgICAgICAgICAgbGV0IGVuZE9mU2VsZWN0ZWRXZWVrID0gZW5kT2ZXZWVrKHdlZWtTZWxlY3RlZCwge3dlZWtTdGFydHNPbjogMX0pO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRPZlNlbGVjdGVkV2VlayA9IHN0YXJ0T2ZXZWVrKHdlZWtTZWxlY3RlZCwge3dlZWtTdGFydHNPbjogMX0pO1xyXG4gICAgICAgICAgICB3ZWVrU2VsZWN0aW9uLnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RhcnRPZlNlbGVjdGVkV2Vlay50b1N0cmluZygpICsgXCIgdG8gXCIgKyBlbmRPZlNlbGVjdGVkV2Vlay50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWVrU2VsZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0V2Vla1NlbGVjdGlvbihnZW5lcmF0ZVdlZWtzKDUpKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGlmKHdlZWtJbmNyZW1lbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0RGF0ZSh3ZWVrU3RhcnRTZWxlY3RlZCh3ZWVrSW5jcmVtZW50KSk7XHJcbiAgICAgICAgICAgIHNldEVuZERhdGUod2Vla0VuZFNlbGVjdGVkKHdlZWtJbmNyZW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbd2Vla0luY3JlbWVudF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRhdGVGbnN9PlxyXG4gICAgICAgICAgICAgICAgPHA+U3RhcnRpbmcgYmFzaWMgc3VwcG9ydCBmb3IgYSBUaW1lIENhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2VlayBTZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d2Vla1NlbGVjdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eW9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3ZWVrSW5jcmVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9IHsoZTp7dGFyZ2V0Ont2YWx1ZTphbnksIG5hbWU6IHN0cmluZ319KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGUudGFyZ2V0LnZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdlZWtJbmNyZW1lbnQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2Vla1NlbGVjdGVkID0gZS50YXJnZXQudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdlZWtJbmNyZW1lbnQod2Vla1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbldpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3BEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZSBmb3IgVGltZSBTaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhcnRPZkN1cnJlbnRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFN0YXJ0RGF0ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVza3RvcERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmQgRGF0ZSBmb3IgVGltZSBTaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZW5kT2ZDdXJyZW50V2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0RW5kRGF0ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHcmlkIiwiRGVza3RvcERhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXRlRm5zIiwic3RhcnRPZldlZWsiLCJlbmRPZldlZWsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiVGltZUNhcmQiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJub3ciLCJlbmRPZkN1cnJlbnRXZWVrIiwid2Vla1N0YXJ0c09uIiwic3RhcnRPZkN1cnJlbnRXZWVrIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJ3ZWVrSW5jcmVtZW50Iiwic2V0V2Vla0luY3JlbWVudCIsIndlZWtTZWxlY3Rpb24iLCJzZXRXZWVrU2VsZWN0aW9uIiwid2Vla0luTWlsbGlzZWNvbmRzIiwid2Vla0VuZFNlbGVjdGVkIiwid2Vla1NlbGVjdGVkIiwid2Vla1N0YXJ0U2VsZWN0ZWQiLCJnZW5lcmF0ZVdlZWtzIiwiY291bnQiLCJpIiwiZW5kT2ZTZWxlY3RlZFdlZWsiLCJzdGFydE9mU2VsZWN0ZWRXZWVrIiwicHVzaCIsIm5hbWUiLCJ0b1N0cmluZyIsInZhbHVlIiwiZGF0ZUFkYXB0ZXIiLCJwIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsImxhYmVsIiwib3B0aW9ucyIsImVtcHR5b3B0aW9uIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJtaW5XaWR0aCIsInNtIiwibWQiLCJkaXNhYmxlZCIsImZvcm1hdCIsImRlZmF1bHRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/time-card/index.tsx\n"));

/***/ })

});