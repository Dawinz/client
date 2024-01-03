"use strict";
exports.id = 9605;
exports.ids = [9605];
exports.modules = {

/***/ 1133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4937);
/* harmony import */ var react_count_to__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_count_to__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const RenderProgress = ({ number , name , link ="#"  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: link,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Progress, {
                    type: "circle",
                    strokeColor: {
                        "0%": "#666",
                        "50%": "#fff",
                        "100%": "#111"
                    },
                    percent: 100,
                    format: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_count_to__WEBPACK_IMPORTED_MODULE_2___default()), {
                            to: number,
                            speed: number * 100
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        marginTop: 18,
                        color: "#666"
                    },
                    children: name.toUpperCase()
                })
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderProgress);


/***/ }),

/***/ 6045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useNumbers = ()=>{
    // state
    const { 0: numbers , 1: setNumbers  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        getNumbers();
    }, []);
    const getNumbers = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/numbers");
            setNumbers(data);
        } catch (err) {
            console.log(err);
        }
    };
    return {
        numbers
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNumbers);


/***/ })

};
;