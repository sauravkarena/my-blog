"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[slug]/page",{

/***/ "(app-pages-browser)/./app/blog/[slug]/page.tsx":
/*!**********************************!*\
  !*** ./app/blog/[slug]/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Fetch blog post from the API\nconst fetchBlogPost = async (slug)=>{\n    try {\n        const res = await fetch(\"https://briskbraintech.com/api/blogs/\".concat(slug));\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch blog post\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        console.error(error);\n        return {\n            id: 0,\n            name: \"Not Found\",\n            description: \"\",\n            slug: \"\",\n            image: \"\",\n            meta_title: \"\",\n            meta_description: \"\",\n            meta_keywords: \"\"\n        };\n    }\n};\n// Function to extract sections from description\nconst extractSections = (description)=>{\n    const sections = [];\n    // Assuming description contains h2 tags as section titles\n    const parser = new DOMParser();\n    const doc = parser.parseFromString(description, \"text/html\");\n    const headings = doc.querySelectorAll(\"h2\");\n    headings.forEach((heading, index)=>{\n        const id = \"section-\".concat(index);\n        heading.id = id;\n        sections.push({\n            id,\n            title: heading.textContent || \"\"\n        });\n    });\n    return sections;\n};\nfunction BlogPostPage(param) {\n    let { params } = param;\n    _s();\n    const [blogPost, setBlogPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [sections, setSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadPost = async ()=>{\n            const post = await fetchBlogPost(slug);\n            if (post.id === 0) {\n                router.push(\"/404\"); // Redirect to 404 page if post not found\n            } else {\n                setBlogPost(post);\n                setSections(extractSections(post.description));\n            }\n        };\n        loadPost();\n    }, [\n        slug,\n        router\n    ]);\n    const handleScroll = (id)=>{\n        var _document_getElementById;\n        (_document_getElementById = document.getElementById(id)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({\n            behavior: \"smooth\"\n        });\n        console.log(\"Clicked section:\", id);\n    };\n    if (!blogPost) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n            lineNumber: 83,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 p-4 bg-gray-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: \"Table of Contents\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: sections.map((section)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleScroll(section.id),\n                                    className: \"text-blue-500 hover:underline\",\n                                    children: section.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            }, section.id, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-4\",\n                        children: blogPost.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: blogPost.image,\n                        alt: blogPost.name,\n                        className: \"w-full h-64 object-cover mb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prose\",\n                        dangerouslySetInnerHTML: {\n                            __html: blogPost.description\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: [\n                                    \"Meta Title: \",\n                                    blogPost.meta_title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: [\n                                    \"Meta Description: \",\n                                    blogPost.meta_description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: [\n                                    \"Meta Keywords: \",\n                                    blogPost.meta_keywords\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\blog-project\\\\app\\\\blog\\\\[slug]\\\\page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogPostPage, \"xgqeaX21W8G2ZSJ+107NnZa726k=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BlogPostPage;\nvar _c;\n$RefreshReg$(_c, \"BlogPostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9nL1tzbHVnXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTRDO0FBQ0E7QUFhNUMsK0JBQStCO0FBQy9CLE1BQU1HLGdCQUFnQixPQUFPQztJQUMzQixJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHdDQUE2QyxPQUFMRjtRQUNoRSxJQUFJLENBQUNDLElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQixPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsT0FBTztZQUNMRSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtZQUNiWCxNQUFNO1lBQ05ZLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxrQkFBa0I7WUFDbEJDLGVBQWU7UUFDakI7SUFDRjtBQUNGO0FBRUEsZ0RBQWdEO0FBQ2hELE1BQU1DLGtCQUFrQixDQUFDTDtJQUN2QixNQUFNTSxXQUE0QyxFQUFFO0lBQ3BELDBEQUEwRDtJQUMxRCxNQUFNQyxTQUFTLElBQUlDO0lBQ25CLE1BQU1DLE1BQU1GLE9BQU9HLGVBQWUsQ0FBQ1YsYUFBYTtJQUNoRCxNQUFNVyxXQUFXRixJQUFJRyxnQkFBZ0IsQ0FBQztJQUV0Q0QsU0FBU0UsT0FBTyxDQUFDLENBQUNDLFNBQVNDO1FBQ3pCLE1BQU1qQixLQUFLLFdBQWlCLE9BQU5pQjtRQUN0QkQsUUFBUWhCLEVBQUUsR0FBR0E7UUFDYlEsU0FBU1UsSUFBSSxDQUFDO1lBQUVsQjtZQUFJbUIsT0FBT0gsUUFBUUksV0FBVyxJQUFJO1FBQUc7SUFDdkQ7SUFFQSxPQUFPWjtBQUNUO0FBRWUsU0FBU2EsYUFBYSxLQUF3QztRQUF4QyxFQUFFQyxNQUFNLEVBQWdDLEdBQXhDOztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3JDLCtDQUFRQSxDQUFrQjtJQUMxRCxNQUFNLENBQUNxQixVQUFVaUIsWUFBWSxHQUFHdEMsK0NBQVFBLENBQWtDLEVBQUU7SUFDNUUsTUFBTXVDLFNBQVNyQywwREFBU0E7SUFDeEIsTUFBTSxFQUFFRSxJQUFJLEVBQUUsR0FBRytCO0lBRWpCbEMsZ0RBQVNBLENBQUM7UUFDUixNQUFNdUMsV0FBVztZQUNmLE1BQU1DLE9BQU8sTUFBTXRDLGNBQWNDO1lBQ2pDLElBQUlxQyxLQUFLNUIsRUFBRSxLQUFLLEdBQUc7Z0JBQ2pCMEIsT0FBT1IsSUFBSSxDQUFDLFNBQVMseUNBQXlDO1lBQ2hFLE9BQU87Z0JBQ0xNLFlBQVlJO2dCQUNaSCxZQUFZbEIsZ0JBQWdCcUIsS0FBSzFCLFdBQVc7WUFDOUM7UUFDRjtRQUNBeUI7SUFDRixHQUFHO1FBQUNwQztRQUFNbUM7S0FBTztJQUVqQixNQUFNRyxlQUFlLENBQUM3QjtZQUNwQjhCO1NBQUFBLDJCQUFBQSxTQUFTQyxjQUFjLENBQUMvQixpQkFBeEI4QiwrQ0FBQUEseUJBQTZCRSxjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO1FBQ2pFbEMsUUFBUW1DLEdBQUcsQ0FBQyxvQkFBb0JsQztJQUNsQztJQUVBLElBQUksQ0FBQ3VCLFVBQVU7UUFDYixxQkFBTyw4REFBQ1k7c0JBQUU7Ozs7OztJQUNaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ0U7a0NBQ0UvQixTQUFTZ0MsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDQzswQ0FDQyw0RUFBQ0M7b0NBQ0NDLFNBQVMsSUFBTWYsYUFBYVksUUFBUXpDLEVBQUU7b0NBQ3RDcUMsV0FBVTs4Q0FFVEksUUFBUXRCLEtBQUs7Ozs7OzsrQkFMVHNCLFFBQVF6QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWF6Qiw4REFBQ29DO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQUdSLFdBQVU7a0NBQTJCZCxTQUFTdEIsSUFBSTs7Ozs7O2tDQUN0RCw4REFBQzZDO3dCQUFJQyxLQUFLeEIsU0FBU3BCLEtBQUs7d0JBQUU2QyxLQUFLekIsU0FBU3RCLElBQUk7d0JBQUVvQyxXQUFVOzs7Ozs7a0NBQ3hELDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVlkseUJBQXlCOzRCQUFFQyxRQUFRM0IsU0FBU3JCLFdBQVc7d0JBQUM7Ozs7OztrQ0FFMUQsOERBQUNrQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNGO2dDQUFFRSxXQUFVOztvQ0FBd0I7b0NBQWFkLFNBQVNuQixVQUFVOzs7Ozs7OzBDQUNyRSw4REFBQytCO2dDQUFFRSxXQUFVOztvQ0FBd0I7b0NBQW1CZCxTQUFTbEIsZ0JBQWdCOzs7Ozs7OzBDQUNqRiw4REFBQzhCO2dDQUFFRSxXQUFVOztvQ0FBd0I7b0NBQWdCZCxTQUFTakIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRjtHQS9Ed0JlOztRQUdQaEMsc0RBQVNBOzs7S0FIRmdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9nL1tzbHVnXS9wYWdlLnRzeD9kYTJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmludGVyZmFjZSBCbG9nUG9zdCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBtZXRhX3RpdGxlOiBzdHJpbmc7XHJcbiAgbWV0YV9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG1ldGFfa2V5d29yZHM6IHN0cmluZztcclxufVxyXG5cclxuLy8gRmV0Y2ggYmxvZyBwb3N0IGZyb20gdGhlIEFQSVxyXG5jb25zdCBmZXRjaEJsb2dQb3N0ID0gYXN5bmMgKHNsdWc6IHN0cmluZyk6IFByb21pc2U8QmxvZ1Bvc3Q+ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYnJpc2ticmFpbnRlY2guY29tL2FwaS9ibG9ncy8ke3NsdWd9YCk7XHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBibG9nIHBvc3QnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIG5hbWU6ICdOb3QgRm91bmQnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHNsdWc6ICcnLFxyXG4gICAgICBpbWFnZTogJycsXHJcbiAgICAgIG1ldGFfdGl0bGU6ICcnLFxyXG4gICAgICBtZXRhX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgbWV0YV9rZXl3b3JkczogJycsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGV4dHJhY3Qgc2VjdGlvbnMgZnJvbSBkZXNjcmlwdGlvblxyXG5jb25zdCBleHRyYWN0U2VjdGlvbnMgPSAoZGVzY3JpcHRpb246IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb25zOiB7IGlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVtdID0gW107XHJcbiAgLy8gQXNzdW1pbmcgZGVzY3JpcHRpb24gY29udGFpbnMgaDIgdGFncyBhcyBzZWN0aW9uIHRpdGxlc1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRlc2NyaXB0aW9uLCAndGV4dC9odG1sJyk7XHJcbiAgY29uc3QgaGVhZGluZ3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnaDInKTtcclxuXHJcbiAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gYHNlY3Rpb24tJHtpbmRleH1gO1xyXG4gICAgaGVhZGluZy5pZCA9IGlkO1xyXG4gICAgc2VjdGlvbnMucHVzaCh7IGlkLCB0aXRsZTogaGVhZGluZy50ZXh0Q29udGVudCB8fCAnJyB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3RQYWdlKHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IHNsdWc6IHN0cmluZyB9IH0pIHtcclxuICBjb25zdCBbYmxvZ1Bvc3QsIHNldEJsb2dQb3N0XSA9IHVzZVN0YXRlPEJsb2dQb3N0IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZTx7IGlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVtdPihbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IGZldGNoQmxvZ1Bvc3Qoc2x1Zyk7XHJcbiAgICAgIGlmIChwb3N0LmlkID09PSAwKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy80MDQnKTsgLy8gUmVkaXJlY3QgdG8gNDA0IHBhZ2UgaWYgcG9zdCBub3QgZm91bmRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRCbG9nUG9zdChwb3N0KTtcclxuICAgICAgICBzZXRTZWN0aW9ucyhleHRyYWN0U2VjdGlvbnMocG9zdC5kZXNjcmlwdGlvbikpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbG9hZFBvc3QoKTtcclxuICB9LCBbc2x1Zywgcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQgc2VjdGlvbjonLCBpZCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFibG9nUG9zdCkge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICB7LyogU2lkZWJhciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBwLTQgYmctZ3JheS0xMDBcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPlRhYmxlIG9mIENvbnRlbnRzPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3NlY3Rpb24uaWR9PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNjcm9sbChzZWN0aW9uLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIENvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgcC00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+e2Jsb2dQb3N0Lm5hbWV9PC9oMT5cclxuICAgICAgICA8aW1nIHNyYz17YmxvZ1Bvc3QuaW1hZ2V9IGFsdD17YmxvZ1Bvc3QubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIG1iLTRcIiAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3NlXCJcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvZ1Bvc3QuZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+TWV0YSBUaXRsZToge2Jsb2dQb3N0Lm1ldGFfdGl0bGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+TWV0YSBEZXNjcmlwdGlvbjoge2Jsb2dQb3N0Lm1ldGFfZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+TWV0YSBLZXl3b3Jkczoge2Jsb2dQb3N0Lm1ldGFfa2V5d29yZHN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaEJsb2dQb3N0Iiwic2x1ZyIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwibWV0YV9rZXl3b3JkcyIsImV4dHJhY3RTZWN0aW9ucyIsInNlY3Rpb25zIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiaGVhZGluZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImhlYWRpbmciLCJpbmRleCIsInB1c2giLCJ0aXRsZSIsInRleHRDb250ZW50IiwiQmxvZ1Bvc3RQYWdlIiwicGFyYW1zIiwiYmxvZ1Bvc3QiLCJzZXRCbG9nUG9zdCIsInNldFNlY3Rpb25zIiwicm91dGVyIiwibG9hZFBvc3QiLCJwb3N0IiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJsb2ciLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsInNlY3Rpb24iLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsImltZyIsInNyYyIsImFsdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blog/[slug]/page.tsx\n"));

/***/ })

});