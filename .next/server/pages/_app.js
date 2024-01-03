"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MediaContext),
/* harmony export */   "Z": () => (/* binding */ MediaProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MediaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const MediaProvider = ({ children  })=>{
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        images: [],
        selected: null,
        showMediaModal: false
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaContext.Provider, {
        value: [
            media,
            setMedia
        ],
        children: children
    });
};



/***/ }),

/***/ 6345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ PostContext),
/* harmony export */   "e": () => (/* binding */ PostProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PostContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const PostProvider = ({ children  })=>{
    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        posts: [],
        categories: []
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostContext.Provider, {
        value: [
            post,
            setPost
        ],
        children: children
    });
};



/***/ }),

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

/***/ 4587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./context/theme.js
var context_theme = __webpack_require__(5162);
// EXTERNAL MODULE: ./context/auth.js
var context_auth = __webpack_require__(4146);
// EXTERNAL MODULE: ./context/post.js
var post = __webpack_require__(6345);
// EXTERNAL MODULE: ./context/media.js
var media = __webpack_require__(6329);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/ToggleTheme.js




const ToggleTheme = ()=>{
    const { 0: theme , 1: setTheme  } = (0,external_react_.useContext)(context_theme/* ThemeContext */.N);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: `/css/${theme}.css`
                })
            }),
            theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: ()=>{
                    setTheme("dark");
                    localStorage.setItem("theme", "dark");
                },
                style: {
                    fontSize: "24px"
                },
                children: "\uD83C\uDF13"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: ()=>{
                    setTheme("light");
                    localStorage.setItem("theme", "light");
                },
                style: {
                    fontSize: "24px"
                },
                children: "\uD83C\uDF1E"
            })
        ]
    });
};
/* harmony default export */ const components_ToggleTheme = (ToggleTheme);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/TopNav.js








const { SubMenu  } = external_antd_.Menu;
const TopNav = ()=>{
    var ref2;
    // context
    const { 0: auth , 1: setAuth  } = (0,external_react_.useContext)(context_auth/* AuthContext */.V);
    // state
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)("mail");
    // hooks
    const router = (0,router_.useRouter)();
    const handleClick = (e)=>{
        console.log("click ", e);
        setCurrent(e.key);
    };
    const signOut = ()=>{
        // remove from local storage
        localStorage.removeItem("auth");
        // remove from context
        setAuth({
            user: null,
            token: ""
        });
        // redirect to login
        router.push("/signin");
    };
    const roleBasedLink = ()=>{
        var ref, ref1;
        if ((auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.role) === "Admin") {
            return "/admin";
        } else if ((auth === null || auth === void 0 ? void 0 : (ref1 = auth.user) === null || ref1 === void 0 ? void 0 : ref1.role) === "Author") {
            return "/author";
        } else {
            return "/subscriber";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        onClick: handleClick,
        selectedKeys: [
            current
        ],
        mode: "horizontal",
        theme: "dark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.AppstoreOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "CMS"
                    })
                })
            }, "mail"),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.DatabaseOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/posts",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Posts"
                    })
                })
            }, "posts"),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.MailOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Contact"
                    })
                })
            }, "contact"),
            (auth === null || auth === void 0 ? void 0 : auth.user) === null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                        style: {
                            marginLeft: "auto"
                        },
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.UserAddOutlined, {}),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/signup",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Signup"
                            })
                        })
                    }, "signup"),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.UserOutlined, {}),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/signin",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Signin"
                            })
                        })
                    }, "signin")
                ]
            }),
            (auth === null || auth === void 0 ? void 0 : auth.user) !== null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SubMenu, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.SettingOutlined, {}),
                        title: (auth === null || auth === void 0 ? void 0 : (ref2 = auth.user) === null || ref2 === void 0 ? void 0 : ref2.name) || "Dashboard",
                        style: {
                            marginLeft: "auto"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.ItemGroup, {
                            title: "Management",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: roleBasedLink(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Dashboard"
                                    })
                                })
                            }, "setting:2")
                        })
                    }, "SubMenu"),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                        onClick: ()=>signOut()
                        ,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.LogoutOutlined, {}),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Sign out"
                        })
                    }, "signout")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_ToggleTheme, {})
            })
        ]
    });
};
/* harmony default export */ const components_TopNav = (TopNav);

// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
;// CONCATENATED MODULE: ./pages/_app.js





// import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(context_theme/* ThemeProvider */.f, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(context_auth/* AuthProvider */.H, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(post/* PostProvider */.e, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(media/* MediaProvider */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_TopNav, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,4146], () => (__webpack_exec__(4587)));
module.exports = __webpack_exports__;

})();