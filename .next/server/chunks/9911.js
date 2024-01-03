"use strict";
exports.id = 9911;
exports.ids = [9911];
exports.modules = {

/***/ 9911:
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
/* harmony import */ var rich_markdown_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4825);
/* harmony import */ var rich_markdown_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rich_markdown_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5162);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5771);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6853);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6329);












const { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;
const { Content , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
function NewPostComponent({ page ="admin"  }) {
    var ref1;
    // load from local storage
    const savedTitle = ()=>{
        if (false) {}
    };
    const savedContent = ()=>{
        if (false) {}
    };
    // context
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_11__/* .MediaContext */ .Y);
    // state
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedTitle());
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedContent());
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loadedCategories , 1: setLoadedCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // media Modal
    // const [visibleMedia, setVisibleMedia] = useState(false);
    // hook
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadCategories = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get("/categories");
            setLoadedCategories(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handlePublish = async ()=>{
        try {
            var ref;
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post("/create-post", {
                title,
                content,
                categories,
                featuredImage: media === null || media === void 0 ? void 0 : (ref = media.selected) === null || ref === void 0 ? void 0 : ref._id
            });
            if (data === null || data === void 0 ? void 0 : data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(data === null || data === void 0 ? void 0 : data.error);
                setLoading(false);
            } else {
                // console.log("POST PUBLISHED RES => ", data);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success("Post created successfully");
                localStorage.removeItem("post-title");
                localStorage.removeItem("post-content");
                setMedia({
                    ...media,
                    selected: null
                });
                router.push(`/${page}/posts`);
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error("Post create failed. Try again.");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                span: 14,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Create new post"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                        size: "large",
                        value: title,
                        placeholder: "Give your post a title",
                        onChange: (e)=>{
                            setTitle(e.target.value);
                            localStorage.setItem("post-title", JSON.stringify(e.target.value));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "editor-scroll",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rich_markdown_editor__WEBPACK_IMPORTED_MODULE_3___default()), {
                            dark: theme === "light" ? false : true,
                            defaultValue: content,
                            onChange: (v)=>{
                                setContent(v());
                                localStorage.setItem("post-content", JSON.stringify(v()));
                            },
                            uploadImage: _functions_upload__WEBPACK_IMPORTED_MODULE_6__/* .uploadImage */ .I
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                span: 6,
                offset: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setVisible(true)
                        ,
                        children: "Preview"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        onClick: ()=>setMedia({
                                ...media,
                                showMediaModal: true
                            })
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.UploadOutlined, {}),
                            " Featured Image"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                        mode: "multiple",
                        allowClear: true,
                        placeholder: "Select categories",
                        style: {
                            width: "100%"
                        },
                        onChange: (v)=>setCategories(v)
                        ,
                        children: loadedCategories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                children: item.name
                            }, item.name)
                        )
                    }),
                    (media === null || media === void 0 ? void 0 : media.selected) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            width: "100%",
                            src: media === null || media === void 0 ? void 0 : (ref1 = media.selected) === null || ref1 === void 0 ? void 0 : ref1.url
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        loading: loading,
                        style: {
                            margin: "10px 0px 10px 0px",
                            width: "100%"
                        },
                        type: "primary",
                        onClick: handlePublish,
                        children: "Publish"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Preview",
                centered: true,
                visible: visible,
                onOk: ()=>setVisible(false)
                ,
                onCancel: ()=>setVisible(false)
                ,
                width: 720,
                footer: null,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rich_markdown_editor__WEBPACK_IMPORTED_MODULE_3___default()), {
                        dark: theme === "light" ? false : true,
                        defaultValue: content,
                        readOnly: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                visible: media.showMediaModal,
                title: "Media",
                onOk: ()=>setMedia({
                        ...media,
                        showMediaModal: false
                    })
                ,
                onCancel: ()=>setMedia({
                        ...media,
                        showMediaModal: false
                    })
                ,
                width: 720,
                footer: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPostComponent);


/***/ })

};
;