"use strict";
(() => {
var exports = {};
exports.id = 6515;
exports.ids = [6515];
exports.modules = {

/***/ 5162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ThemeProvider = ({ children  })=>{
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: [
            theme,
            setTheme
        ],
        children: children
    });
};



/***/ }),

/***/ 9452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SinglePost": () => (/* binding */ SinglePost),
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "rich-markdown-editor"
var external_rich_markdown_editor_ = __webpack_require__(4825);
var external_rich_markdown_editor_default = /*#__PURE__*/__webpack_require__.n(external_rich_markdown_editor_);
// EXTERNAL MODULE: ./context/theme.js
var context_theme = __webpack_require__(5162);
// EXTERNAL MODULE: ./components/comments/CommentForm.js
var CommentForm = __webpack_require__(7160);
;// CONCATENATED MODULE: external "react-share-social"
const external_react_share_social_namespaceObject = require("react-share-social");
// EXTERNAL MODULE: ./hooks/useCategory.js
var useCategory = __webpack_require__(6520);
// EXTERNAL MODULE: ./hooks/useLatestPosts.js
var useLatestPosts = __webpack_require__(7515);
// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__(4195);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);
;// CONCATENATED MODULE: ./pages/post/[slug].js














external_dayjs_default().extend((relativeTime_default()));
const { Title  } = external_antd_.Typography;
const { Meta  } = external_antd_.Card;
const SinglePost = ({ post , postComments  })=>{
    var ref3;
    const { 0: theme , 1: setTheme  } = (0,external_react_.useContext)(context_theme/* ThemeContext */.N);
    // comments
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)(postComments);
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    // hooks
    const { categories  } = (0,useCategory/* default */.Z)();
    const { latestPosts  } = (0,useLatestPosts/* default */.Z)();
    const handleSubmit = async ()=>{
        try {
            setLoading(true);
            const { data  } = await external_axios_default().post(`/comment/${post._id}`, {
                comment
            });
            setComments([
                data,
                ...comments
            ]);
            setComment("");
            toast.success("Comment posted successfully");
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: post.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        description: post.content.substring(0, 160)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                        xs: 24,
                        xl: 16,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Card, {
                            cover: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (post === null || post === void 0 ? void 0 : (ref3 = post.featuredImage) === null || ref3 === void 0 ? void 0 : ref3.url) || "/images/default.jpeg",
                                alt: post.title
                            }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                    children: post.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        external_dayjs_default()(post.createdAt).format("MMMM D, YYYY h:mm A"),
                                        " / 0 Comments / in",
                                        " ",
                                        post === null || post === void 0 ? void 0 : post.categories.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: `/category/${c.slug}`,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        children: [
                                                            c.name,
                                                            " "
                                                        ]
                                                    })
                                                })
                                            }, c._id)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        marginTop: "-20px",
                                        marginBottom: "15px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_social_namespaceObject.ShareSocial, {
                                        url:  false && 0,
                                        socialTypes: [
                                            "facebook",
                                            "twitter",
                                            "reddit",
                                            "linkedin"
                                        ],
                                        style: {
                                            height: "100px",
                                            overflow: "hidden",
                                            background: "none"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((external_rich_markdown_editor_default()), {
                                    defaultValue: post.content,
                                    dark: theme === "light" ? false : true,
                                    readOnly: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CommentForm/* default */.Z, {
                                    comment: comment,
                                    setComment: setComment,
                                    handleSubmit: handleSubmit,
                                    loading: loading
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        marginBottom: 50
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
                                    itemLayout: "horizontal",
                                    dataSource: comments,
                                    renderItem: (item)=>{
                                        var ref, ref1, ref2;
                                        /*#__PURE__*/ return jsx_runtime_.jsx(external_antd_.List.Item, {
                                            id: item._id,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item.Meta, {
                                                avatar: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Avatar, {
                                                    children: item === null || item === void 0 ? void 0 : (ref = item.postedBy) === null || ref === void 0 ? void 0 : (ref1 = ref.name) === null || ref1 === void 0 ? void 0 : ref1.charAt(0)
                                                }),
                                                title: item === null || item === void 0 ? void 0 : (ref2 = item.postedBy) === null || ref2 === void 0 ? void 0 : ref2.name,
                                                description: `${item.content} - ${external_dayjs_default()(item.createdAt).fromNow()}`
                                            })
                                        }, item._id);
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                        xs: 22,
                        xl: 6,
                        offset: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                children: "Categories"
                            }),
                            categories.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/category/${c.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                            style: {
                                                margin: 2
                                            },
                                            children: c.name
                                        })
                                    })
                                }, c._id)
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                children: "Latest Posts"
                            }),
                            latestPosts.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/post/${p.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: p.title
                                        })
                                    })
                                }, p._id)
                            )
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps({ params  }) {
    const { data  } = await external_axios_default().get(`${process.env.API}/post/${params.slug}`);
    return {
        props: {
            post: data.post,
            postComments: data.comments
        }
    };
}
/* harmony default export */ const _slug_ = (SinglePost);


/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4825:
/***/ ((module) => {

module.exports = require("rich-markdown-editor");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,4146,7160,5728], () => (__webpack_exec__(9452)));
module.exports = __webpack_exports__;

})();