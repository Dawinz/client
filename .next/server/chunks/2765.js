"use strict";
exports.id = 2765;
exports.ids = [2765];
exports.modules = {

/***/ 2765:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4146);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7424);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7160);











dayjs__WEBPACK_IMPORTED_MODULE_8___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_9___default()));
function UserComments() {
    // context
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext */ .V);
    // state
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // update
    const { 0: selectedComment , 1: setSelectedComment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // hook
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (auth === null || auth === void 0 ? void 0 : auth.token) {
            fetchComments();
        }
    }, [
        auth === null || auth === void 0 ? void 0 : auth.token
    ]);
    const fetchComments = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/user-comments`);
            //   console.log("__comments__", data);
            setComments(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async (comment)=>{
        try {
            const answer = window.confirm("Are you sure you want to delete?");
            if (!answer) return;
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default()["delete"](`/comment/${comment._id}`);
            if (data === null || data === void 0 ? void 0 : data.ok) {
                setComments(comments.filter((c)=>c._id !== comment._id
                ));
                setTotal(total - 1);
                toast.success("Comment deleted successfully");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`/comment/${selectedComment._id}`, {
                content
            });
            let arr = comments;
            const index = arr.findIndex((c)=>c._id === selectedComment._id
            );
            arr[index].content = data.content;
            setComments(arr);
            setVisible(false);
            setLoading(false);
            setSelectedComment({});
            toast.success("Comment updated");
        } catch (err) {
            console.log(err);
            setVisible(false);
        }
    };
    const filteredComments = comments === null || comments === void 0 ? void 0 : comments.filter((comment)=>comment.content.toLowerCase().includes(keyword)
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    span: 24,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            style: {
                                marginTop: 15
                            },
                            children: [
                                comments === null || comments === void 0 ? void 0 : comments.length,
                                " Comments"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                            placeholder: "Search",
                            type: "search",
                            value: keyword,
                            onChange: (e)=>setKeyword(e.target.value.toLowerCase())
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List, {
                            itemLayout: "horizontal",
                            dataSource: filteredComments,
                            renderItem: (item)=>{
                                var ref, ref1, ref2;
                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                                    actions: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            href: `/post/${item === null || item === void 0 ? void 0 : (ref = item.postId) === null || ref === void 0 ? void 0 : ref.slug}#${item._id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "view"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            onClick: ()=>{
                                                setSelectedComment(item);
                                                setVisible(true);
                                                setContent(item.content);
                                            },
                                            children: "edit"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            onClick: ()=>handleDelete(item)
                                            ,
                                            children: "delete"
                                        }), 
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item.Meta, {
                                        description: `On ${item === null || item === void 0 ? void 0 : (ref1 = item.postId) === null || ref1 === void 0 ? void 0 : ref1.title} | ${item === null || item === void 0 ? void 0 : (ref2 = item.postedBy) === null || ref2 === void 0 ? void 0 : ref2.name} | ${dayjs__WEBPACK_IMPORTED_MODULE_8___default()(item.createdAt).format("L LT")}`,
                                        title: item.content
                                    })
                                });
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                        visible: visible,
                        title: "Update comment",
                        onOk: ()=>setVisible(false)
                        ,
                        onCancel: ()=>setVisible(false)
                        ,
                        footer: null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            handleSubmit: handleSubmit,
                            comment: content,
                            setComment: setContent,
                            loading: loading
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComments);


/***/ })

};
;