"use strict";
exports.id = 3875;
exports.ids = [3875];
exports.modules = {

/***/ 3875:
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
function EditPost({ page ="admin"  }) {
    var ref3, ref1;
    // context
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_11__/* .MediaContext */ .Y);
    // state
    const { 0: postId , 1: setPostId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // post's existing categories
    const { 0: loadedCategories , 1: setLoadedCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: featuredImage , 1: setFeaturedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // media Modal
    // const [visibleMedia, setVisibleMedia] = useState(false);
    // hook
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadPost();
    }, [
        router === null || router === void 0 ? void 0 : (ref3 = router.query) === null || ref3 === void 0 ? void 0 : ref3.slug
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadPost = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/post/${router.query.slug}`);
            console.log("GOT POST FOR EDIT", data);
            setTitle(data.post.title);
            setContent(data.post.content);
            setFeaturedImage(data.post.featuredImage);
            setPostId(data._id);
            // push category names
            let arr = [];
            data.post.categories.map((c)=>arr.push(c.name)
            );
            setCategories(arr);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
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
            var ref, ref2;
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`/edit-post/${postId}`, {
                title,
                content,
                categories,
                featuredImage: (media === null || media === void 0 ? void 0 : (ref = media.selected) === null || ref === void 0 ? void 0 : ref._id) ? media === null || media === void 0 ? void 0 : (ref2 = media.selected) === null || ref2 === void 0 ? void 0 : ref2._id : (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage._id) ? featuredImage._id : undefined
            });
            if (data === null || data === void 0 ? void 0 : data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(data === null || data === void 0 ? void 0 : data.error);
                setLoading(false);
            } else {
                // console.log("POST PUBLISHED RES => ", data);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success("Post updated successfully");
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
                        children: "Edit post"
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
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Loading..."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                        value: [
                            ...categories
                        ],
                        children: loadedCategories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                children: item.name
                            }, item.name)
                        )
                    }),
                    (media === null || media === void 0 ? void 0 : media.selected) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            width: "100%",
                            src: media === null || media === void 0 ? void 0 : (ref1 = media.selected) === null || ref1 === void 0 ? void 0 : ref1.url
                        })
                    }) : (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.url) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginTop: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            width: "100%",
                            src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.url
                        })
                    }) : "",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPost);


/***/ })

};
;