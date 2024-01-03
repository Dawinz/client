"use strict";
exports.id = 5728;
exports.ids = [5728];
exports.modules = {

/***/ 6520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useCategory = ()=>{
    // state
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getCategories = async ()=>{
            try {
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/categories");
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);
    return {
        categories
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategory);


/***/ }),

/***/ 7515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useLatestPosts = ()=>{
    // state
    const { 0: latestPosts , 1: setLatestPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getPosts = async ()=>{
            try {
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/posts/1");
                setLatestPosts(data);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, []);
    return {
        latestPosts
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatestPosts);


/***/ })

};
;