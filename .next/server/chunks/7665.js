"use strict";
exports.id = 7665;
exports.ids = [7665];
exports.modules = {

/***/ 7665:
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
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6329);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__);








const { Dragger  } = antd__WEBPACK_IMPORTED_MODULE_2__.Upload;
const MediaLibrary = ({ page ="admin"  })=>{
    var ref2;
    // context
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_5__/* .MediaContext */ .Y);
    const { 0: showPreview , 1: setShowMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchMedia = async ()=>{
            try {
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("/media");
                setMedia((prev)=>({
                        ...prev,
                        images: data
                    })
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchMedia();
    }, []);
    const props = {
        name: "file",
        multiple: true,
        action: `${"http://localhost:8000/api"}/upload-image-file`,
        headers: {
            Authorization: `Bearer ${auth.token}`
        },
        onChange (info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success(`${info.file.name} file uploaded successfully`);
                // console.log("info.file on drag drop => ", info.file);
                setMedia({
                    images: [
                        ...media.images,
                        info.file.response
                    ],
                    selected: info.file.response,
                    showMediaModal: false
                });
            } else if (info.file.status === "error") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop (e) {
            console.log("Dropped files", e.dataTransfer.files);
        }
    };
    const handleImageDelete = async (imageId)=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default()["delete"](`/media/${imageId}`);
            if (data.ok) {
                setMedia({
                    ...media,
                    images: media.images.filter((image)=>image._id !== imageId
                    ),
                    selected: null
                });
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error("Image deleted successfully");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Dragger, {
                ...props,
                accept: "image/*",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "ant-upload-drag-icon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.InboxOutlined, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "ant-upload-text",
                        children: "Click or drag file to this area to upload"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    textAlign: "center"
                },
                children: media === null || media === void 0 ? void 0 : (ref2 = media.images) === null || ref2 === void 0 ? void 0 : ref2.map((image)=>{
                    var ref, ref1;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                onClick: ()=>setMedia({
                                        ...media,
                                        selected: image
                                    })
                                ,
                                preview: showPreview,
                                src: image.url,
                                style: {
                                    paddingTop: 5,
                                    paddingRight: 10,
                                    height: "100px",
                                    width: "100px",
                                    objectFit: "cover",
                                    cursor: "pointer"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            page === "author" && (image === null || image === void 0 ? void 0 : (ref = image.postedBy) === null || ref === void 0 ? void 0 : ref._id) == (auth === null || auth === void 0 ? void 0 : (ref1 = auth.user) === null || ref1 === void 0 ? void 0 : ref1._id) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseCircleOutlined, {
                                onClick: ()=>handleImageDelete(image._id)
                                ,
                                style: {
                                    marginTop: "5px",
                                    color: "#f5222d"
                                }
                            }) : page === "admin" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseCircleOutlined, {
                                onClick: ()=>handleImageDelete(image._id)
                                ,
                                style: {
                                    marginTop: "5px",
                                    color: "#f5222d"
                                }
                            }) : ""
                        ]
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaLibrary);


/***/ }),

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



/***/ })

};
;