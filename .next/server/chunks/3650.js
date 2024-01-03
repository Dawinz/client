"use strict";
exports.id = 3650;
exports.ids = [3650];
exports.modules = {

/***/ 6853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4808);
/* harmony import */ var _MediaLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7665);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);





const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_4__.Tabs;
const Media = ({ page  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                tab: "Upload File",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadFile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }, "1"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                tab: "Media Library",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaLibrary__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }, "2")
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);


/***/ }),

/***/ 3650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4146);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6329);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6853);









const ProfileUpdate = ({ page ="admin"  })=>{
    var ref2, ref1;
    // context
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_7__/* .MediaContext */ .Y);
    // state
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: website , 1: setWebsite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: role , 1: setRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // hooks
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentUser = async ()=>{
            try {
                var ref;
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/user/${router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.id}`);
                // console.log("current_user", data);
                setId(data._id);
                setName(data.name);
                setEmail(data.email);
                setWebsite(data.website);
                setRole(data.role);
                setImage(data.image);
            } catch (err) {
                console.log(err);
            }
        };
        if (auth === null || auth === void 0 ? void 0 : auth.token) currentUser();
    }, [
        auth,
        router === null || router === void 0 ? void 0 : (ref2 = router.query) === null || ref2 === void 0 ? void 0 : ref2.id
    ]);
    // function
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            var ref, ref3;
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().put(`/update-user-by-${page}`, {
                id,
                name,
                email,
                password,
                website,
                role,
                image: (media === null || media === void 0 ? void 0 : (ref = media.selected) === null || ref === void 0 ? void 0 : ref._id) ? media === null || media === void 0 ? void 0 : (ref3 = media.selected) === null || ref3 === void 0 ? void 0 : ref3._id : (image === null || image === void 0 ? void 0 : image._id) ? image === null || image === void 0 ? void 0 : image._id : undefined
            });
            // console.log("update_user", data);
            if (data === null || data === void 0 ? void 0 : data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error(data.error);
            } else {
                var ref4;
                // udpate context and local storage for current user only
                if ((auth === null || auth === void 0 ? void 0 : (ref4 = auth.user) === null || ref4 === void 0 ? void 0 : ref4._id) === data._id) {
                    setAuth({
                        ...auth,
                        user: data
                    });
                    let fromLocalStorage = JSON.parse(localStorage.getItem("auth"));
                    fromLocalStorage.user = data;
                    localStorage.setItem("auth", JSON.stringify(fromLocalStorage));
                }
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.success("User updated successfully");
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error("User update failed. Try again.");
            setLoading(false);
        }
    };
    // show form
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
            span: 12,
            offset: 6,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    style: {
                        marginBottom: "-10px"
                    },
                    children: "Profile update"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginBottom: 20,
                        textAlign: "center"
                    },
                    children: media.selected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: 15
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                src: media.selected.url,
                                size: 100
                            })
                        ]
                    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: 15
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                src: image.url,
                                size: 100
                            })
                        ]
                    }) : ""
                }),
                (auth === null || auth === void 0 ? void 0 : (ref1 = auth.user) === null || ref1 === void 0 ? void 0 : ref1.role) !== "Subscriber" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    style: {
                        margin: "20px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Full name",
                    value: name,
                    onChange: (e)=>setName(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Website",
                    value: website,
                    onChange: (e)=>setWebsite(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    size: "large",
                    placeholder: "Password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value)
                }),
                page === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    value: role,
                    style: {
                        margin: "10px 0px 10px 0px",
                        width: "100%"
                    },
                    onChange: (e)=>setRole(e)
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                            value: "Subscriber",
                            children: "Subscriber"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                            value: "Author",
                            children: "Author"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                            value: "Admin",
                            children: "Admin"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    onClick: handleSubmit,
                    type: "default",
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    loading: loading,
                    block: true,
                    children: "Submit"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileUpdate);


/***/ })

};
;