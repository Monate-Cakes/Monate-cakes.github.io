module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/monate-cakes/components/Navbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
function Navbar({ theme, setTheme }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "promo-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: [
                        "🎉 New Year Special: Get 15% OFF on all custom cakes! Use code ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "promo-code",
                            children: "NEWYEAR15"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/components/Navbar.js",
                            lineNumber: 14,
                            columnNumber: 78
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/components/Navbar.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "navbar-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                        className: "bi bi-cake2"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    "Monate",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Cakes"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 22,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "nav-links d-none d-md-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#pricing",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/how-it-works",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 28,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/partners",
                                            children: "Bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 29,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "theme-toggle",
                                        onClick: toggleTheme,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                            className: `bi bi-${theme === 'dark' ? 'sun' : 'moon'}`
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        className: "btn-primary-custom d-none d-md-inline-flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "bi bi-search"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            "Find Bakers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "mobile-menu-btn d-md-none",
                                        onClick: ()=>setMobileMenuOpen(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                            className: "bi bi-list"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/components/Navbar.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `mobile-menu ${mobileMenuOpen ? 'active' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "mobile-menu-close",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                            className: "bi bi-x"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/components/Navbar.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#services",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#pricing",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Pricing"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/how-it-works",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "How It Works"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/partners",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Bakers"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/partners",
                        className: "btn-primary-custom",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                className: "bi bi-search"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            "Find Bakers"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/monate-cakes/components/Footer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "jsx-a2930d16c4cf75f8" + " " + "footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-a2930d16c4cf75f8" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "footer-logo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-cake2"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 11,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: [
                                                    "Monate",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-a2930d16c4cf75f8",
                                                        children: "Cakes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                                        lineNumber: 12,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 12,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 10,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-tagline",
                                        children: "The sweetest way to celebrate."
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-a2930d16c4cf75f8" + " " + "social-icons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Facebook",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                    className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-facebook"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 16,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 16,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Instagram",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                    className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 17,
                                                    columnNumber: 50
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 17,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Twitter",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                    className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-twitter-x"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 18,
                                                    columnNumber: 48
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 18,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "WhatsApp",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                    className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-whatsapp"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 19,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 19,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 9,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#services",
                                                    children: "Custom Cakes"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 27,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#services",
                                                    children: "Event Catering"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 28,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 28,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#services",
                                                    children: "Gift Boxes"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 29,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#pricing",
                                                    children: "Pricing"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 30,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partners",
                                                    children: "Our Bakers"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/careers",
                                                    children: "Careers"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    children: "Blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/27825550000",
                                                    className: "jsx-a2930d16c4cf75f8",
                                                    children: "WhatsApp Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    children: "Contact Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "mailto:hello@monatecakes.co.za",
                                                    className: "jsx-a2930d16c4cf75f8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                            className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-envelope"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/components/Footer.js",
                                                            lineNumber: 61,
                                                            columnNumber: 19
                                                        }, this),
                                                        " hello@monatecakes.co.za"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/27825550000",
                                                    className: "jsx-a2930d16c4cf75f8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                            className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-whatsapp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/components/Footer.js",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        " WhatsApp Us"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/components/Footer.js",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Footer.js",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-a2930d16c4cf75f8",
                                children: "© 2026 Monate Cakes. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-made",
                                children: [
                                    "Made with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                        style: {
                                            color: '#ef4444'
                                        },
                                        className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-heart-fill"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 77,
                                        columnNumber: 23
                                    }, this),
                                    " in South Africa"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Footer.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/components/Footer.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "https://wa.me/27825550000",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Contact on WhatsApp",
                className: "jsx-a2930d16c4cf75f8" + " " + "whatsapp-float",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                    className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-whatsapp"
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/components/Footer.js",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Footer.js",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "a2930d16c4cf75f8",
                children: ".footer.jsx-a2930d16c4cf75f8{background:linear-gradient(#0a0a0a 0%,#111 100%);border-top:1px solid #ffffff14;padding:60px 0 0;position:relative}.footer-grid.jsx-a2930d16c4cf75f8{border-bottom:1px solid #ffffff14;grid-template-columns:1.5fr repeat(4,1fr);gap:40px;padding-bottom:40px;display:grid}@media (width<=992px){.footer-grid.jsx-a2930d16c4cf75f8{grid-template-columns:repeat(3,1fr)}}@media (width<=768px){.footer-grid.jsx-a2930d16c4cf75f8{grid-template-columns:repeat(2,1fr)}}@media (width<=480px){.footer-grid.jsx-a2930d16c4cf75f8{text-align:center;grid-template-columns:1fr}}.footer-brand.jsx-a2930d16c4cf75f8{flex-direction:column;gap:16px;display:flex}.footer-logo.jsx-a2930d16c4cf75f8{color:#10b981;align-items:center;gap:10px;font-size:1.4rem;text-decoration:none;display:flex}.footer-logo.jsx-a2930d16c4cf75f8 i.jsx-a2930d16c4cf75f8{font-size:1.6rem}.footer-logo.jsx-a2930d16c4cf75f8 span.jsx-a2930d16c4cf75f8{color:#fff;font-weight:300}.footer-logo.jsx-a2930d16c4cf75f8 strong.jsx-a2930d16c4cf75f8{color:#10b981;font-weight:600}.footer-tagline.jsx-a2930d16c4cf75f8{color:#6b7280;margin:0;font-size:.95rem;line-height:1.5}.social-icons.jsx-a2930d16c4cf75f8{gap:12px;display:flex}@media (width<=480px){.social-icons.jsx-a2930d16c4cf75f8{justify-content:center}}.social-icons.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8{color:#9ca3af;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:50%;justify-content:center;align-items:center;width:36px;height:36px;font-size:1rem;transition:all .3s;display:flex}.social-icons.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8:hover{color:#fff;background:#10b981;border-color:#10b981;transform:translateY(-2px)}.footer-links.jsx-a2930d16c4cf75f8 h4.jsx-a2930d16c4cf75f8{color:#fff;text-transform:uppercase;letter-spacing:.5px;margin-bottom:20px;font-size:.9rem;font-weight:600}.footer-links.jsx-a2930d16c4cf75f8 ul.jsx-a2930d16c4cf75f8{flex-direction:column;gap:12px;margin:0;padding:0;list-style:none;display:flex}.footer-links.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8{color:#6b7280;align-items:center;gap:8px;font-size:.9rem;text-decoration:none;transition:color .2s;display:flex}@media (width<=480px){.footer-links.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8{justify-content:center}}.footer-links.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8:hover{color:#10b981}.footer-links.jsx-a2930d16c4cf75f8 a.jsx-a2930d16c4cf75f8 i.jsx-a2930d16c4cf75f8{font-size:.85rem}.footer-bottom.jsx-a2930d16c4cf75f8{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;padding:24px 0;display:flex}@media (width<=480px){.footer-bottom.jsx-a2930d16c4cf75f8{text-align:center;flex-direction:column}}.footer-bottom.jsx-a2930d16c4cf75f8 p.jsx-a2930d16c4cf75f8{color:#4b5563;margin:0;font-size:.85rem}.footer-made.jsx-a2930d16c4cf75f8{align-items:center;gap:6px;display:flex}.whatsapp-float.jsx-a2930d16c4cf75f8{color:#fff;z-index:1000;background:#25d366;border-radius:50%;justify-content:center;align-items:center;width:56px;height:56px;font-size:1.8rem;transition:all .3s;display:flex;position:fixed;bottom:24px;right:24px;box-shadow:0 4px 20px #25d36666}.whatsapp-float.jsx-a2930d16c4cf75f8:hover{transform:scale(1.1);box-shadow:0 6px 25px #25d36680}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/monate-cakes/components/Footer.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/monate-cakes/pages/careers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Careers
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
// pages/careers.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Footer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/head.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Careers({ theme, setTheme }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        specialty: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        document.querySelectorAll('.animate-on-scroll').forEach((el)=>{
            observer.observe(el);
        });
        return ()=>observer.disconnect();
    }, []);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleQuickApply = (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Store form data in sessionStorage for the entrepreneur page
        sessionStorage.setItem('bakerApplication', JSON.stringify(formData));
        // Redirect to entrepreneur sign-up page
        setTimeout(()=>{
            router.push('/entrepreneur-signup');
        }, 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-6360b935762a2f66",
                        children: "Join Our Baker Network | Monate Cakes"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Become part of South Africa's premier home baker network. Expand your reach, connect with local customers digitally, and grow your baking business with Monate Cakes.",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#1a1a2e",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet",
                        className: "jsx-6360b935762a2f66"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                theme: theme,
                setTheme: setTheme
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-6360b935762a2f66" + " " + "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-6360b935762a2f66" + " " + "hero-bg-elements",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-6360b935762a2f66" + " " + "hero-gradient-orb orb-1"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-6360b935762a2f66" + " " + "hero-gradient-orb orb-2"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-6360b935762a2f66" + " " + "hero-grain"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-6360b935762a2f66" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "hero-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-6360b935762a2f66" + " " + "hero-text animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "hero-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66" + " " + "badge-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Now Accepting Applications"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            className: "jsx-6360b935762a2f66" + " " + "hero-title",
                                            children: [
                                                "Elevate Your ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66" + " " + "title-accent",
                                                    children: "Baking Craft"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 86,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66" + " " + "hero-subtitle",
                                            children: "Partner with South Africa's most trusted artisan baker platform. Access new markets, build your brand, and transform your passion into prosperity."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "hero-metrics",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "metric",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-value",
                                                            children: "500+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-label",
                                                            children: "Partner Bakers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 95,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "metric",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-value",
                                                            children: "10K+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-label",
                                                            children: "Monthly Orders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "metric",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-value",
                                                            children: "R50K"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "metric-label",
                                                            children: "Avg. Earnings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "hero-cta-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "#apply",
                                                    className: "jsx-6360b935762a2f66" + " " + "btn-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66",
                                                            children: "Start Application"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 109,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-6360b935762a2f66",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-6360b935762a2f66"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                                lineNumber: 111,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partners",
                                                    className: "btn-ghost",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Meet Our Bakers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-6360b935762a2f66" + " " + "hero-visual animate-on-scroll animate-fade-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-6360b935762a2f66" + " " + "visual-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "card-image",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Cake Whisper Sisters.jpeg",
                                                        alt: "Professional home baker",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6360b935762a2f66" + " " + "card-overlay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "card-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
                                                            className: "jsx-6360b935762a2f66"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Verified Partner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-6360b935762a2f66" + " " + "section section-values",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-6360b935762a2f66" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "section-header animate-on-scroll animate-fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-tag",
                                    children: "Why Partner With Us"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-title",
                                    children: "Built for Baker Success"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "values-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Expanded Digital Reach"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Connect with customers across South Africa. Our platform brings orders to you from beyond your neighborhood."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.1s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M9 12l2 2 4-4",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Trust & Verification"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Our verified badge builds instant credibility. Customers trust our platform, meaning more orders for you."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.2s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                                                    className: "jsx-6360b935762a2f66"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Direct Communication"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Seamless WhatsApp integration for customer interactions. No complicated systems—just simple ordering."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.3s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M23 6l-9.5 9.5-5-5L1 18",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M17 6h6v6",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Revenue Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Our bakers report 3x increase in monthly orders. More visibility equals more business for you."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.4s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M3 9h18M9 21V9",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Marketing Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Professional profile, featured listings, and promotional opportunities to showcase your specialties."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.5s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "value-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "value-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Baker Community"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-6360b935762a2f66",
                                            children: "Join a network of passionate artisans. Share knowledge, collaborate, and grow together."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/pages/careers.js",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-6360b935762a2f66" + " " + "section section-process",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-6360b935762a2f66" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "section-header animate-on-scroll animate-fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-tag",
                                    children: "Simple Onboarding"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-title",
                                    children: "Three Steps to Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "process-timeline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-6360b935762a2f66" + " " + "process-step animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-indicator",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66" + " " + "step-number",
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "step-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Submit Application"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Complete our quick application form. Share your specialties, location, and portfolio of your best work."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.15s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "process-step animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-indicator",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66" + " " + "step-number",
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "step-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Verification Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "A brief call with our team to verify your credentials and discuss how we can best support your business."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.3s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "process-step animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-indicator",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-6360b935762a2f66" + " " + "step-number",
                                                children: "03"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "step-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Launch Your Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Go live on our platform and start receiving orders. Our team will help optimize your profile for success."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/pages/careers.js",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-6360b935762a2f66" + " " + "section section-testimonials",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-6360b935762a2f66" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "section-header animate-on-scroll animate-fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-tag",
                                    children: "Partner Stories"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-6360b935762a2f66" + " " + "section-title",
                                    children: "Voices From Our Network"
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-6360b935762a2f66" + " " + "testimonials-scroll",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-6360b935762a2f66" + " " + "testimonial-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-quote",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    opacity: "0.15",
                                                    className: "jsx-6360b935762a2f66",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: '"Joining Monate Cakes tripled my orders within the first month. Customers from all over Durban now discover my cakes online."'
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-author",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-avatar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Cake Whisper Sisters.jpeg",
                                                        alt: "Sarah M.",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-name",
                                                            children: "Sarah M."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 281,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-business",
                                                            children: "Sweet Delights Bakery, Durban"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 282,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.1s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "testimonial-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-quote",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    opacity: "0.15",
                                                    className: "jsx-6360b935762a2f66",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: '"My traditional koesisters are now famous across Johannesburg. The platform made connecting with customers effortless."'
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-author",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-avatar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Queens-Scone-Kitchen.jpeg",
                                                        alt: "Thabo K.",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-name",
                                                            children: "Thabo K."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-business",
                                                            children: "Heritage Bakes, Johannesburg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 300,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.2s'
                                    },
                                    className: "jsx-6360b935762a2f66" + " " + "testimonial-card animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-quote",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    opacity: "0.15",
                                                    className: "jsx-6360b935762a2f66",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: '"From home kitchen to professional wedding cake supplier. Monate Cakes gave me the tools to scale my entire business."'
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-6360b935762a2f66" + " " + "testimonial-author",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-avatar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Wisdom & Whisk Bakery.jpeg",
                                                        alt: "Lisa R.",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6360b935762a2f66" + " " + "author-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-name",
                                                            children: "Lisa R."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6360b935762a2f66" + " " + "author-business",
                                                            children: "Elegant Cakes, Cape Town"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/careers.js",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/careers.js",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/pages/careers.js",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "apply",
                className: "jsx-6360b935762a2f66" + " " + "section section-apply",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-6360b935762a2f66" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-6360b935762a2f66" + " " + "apply-wrapper animate-on-scroll animate-scale",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-6360b935762a2f66" + " " + "apply-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-6360b935762a2f66" + " " + "section-tag",
                                        children: "Begin Your Journey"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-6360b935762a2f66" + " " + "apply-title",
                                        children: "Ready to Grow Your Business?"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-6360b935762a2f66" + " " + "apply-description",
                                        children: "Complete this quick form and our team will guide you through the rest. Most applications are processed within 48 hours."
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: handleQuickApply,
                                className: "jsx-6360b935762a2f66" + " " + "apply-form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-6360b935762a2f66" + " " + "form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "fullName",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "fullName",
                                                        name: "fullName",
                                                        placeholder: "Enter your full name",
                                                        value: formData.fullName,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        placeholder: "your@email.com",
                                                        value: formData.email,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-6360b935762a2f66" + " " + "form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phone",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        id: "phone",
                                                        name: "phone",
                                                        placeholder: "+27 XX XXX XXXX",
                                                        value: formData.phone,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-6360b935762a2f66" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "city",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "City / Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "city",
                                                        name: "city",
                                                        placeholder: "e.g., Cape Town, Sandton",
                                                        value: formData.city,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-6360b935762a2f66" + " " + "form-group full-width",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                htmlFor: "specialty",
                                                className: "jsx-6360b935762a2f66",
                                                children: "Baking Specialty"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                id: "specialty",
                                                name: "specialty",
                                                value: formData.specialty,
                                                onChange: handleInputChange,
                                                required: true,
                                                className: "jsx-6360b935762a2f66",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Select your main specialty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "wedding-cakes",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Wedding & Celebration Cakes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "cupcakes",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Cupcakes & Small Treats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 404,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "traditional",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Traditional South African Bakes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 405,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "artisan-bread",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Artisan Breads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "pastries",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Pastries & Desserts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "custom",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Custom & Specialty Orders"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: "other",
                                                        className: "jsx-6360b935762a2f66",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "jsx-6360b935762a2f66" + " " + `btn-submit ${isSubmitting ? 'submitting' : ''}`,
                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66" + " " + "spinner"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Processing..."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 421,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6360b935762a2f66",
                                                    children: "Continue Application"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-6360b935762a2f66",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7",
                                                        className: "jsx-6360b935762a2f66"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                                        lineNumber: 427,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/careers.js",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-6360b935762a2f66" + " " + "form-note",
                                        children: [
                                            "By continuing, you agree to our ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/terms",
                                                className: "jsx-6360b935762a2f66",
                                                children: "Terms of Service"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 434,
                                                columnNumber: 49
                                            }, this),
                                            " and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/privacy",
                                                className: "jsx-6360b935762a2f66",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 434,
                                                columnNumber: 91
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/pages/careers.js",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-6360b935762a2f66" + " " + "section section-alt-cta",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-6360b935762a2f66" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-6360b935762a2f66" + " " + "alt-cta-content animate-on-scroll animate-fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "jsx-6360b935762a2f66",
                                children: "Prefer to talk first?"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-6360b935762a2f66",
                                children: "Schedule a call with our partnership team to discuss your baking business."
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "mailto:partners@monatecakes.co.za",
                                className: "jsx-6360b935762a2f66" + " " + "btn-secondary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "jsx-6360b935762a2f66",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                className: "jsx-6360b935762a2f66"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                                                points: "22,6 12,13 2,6",
                                                className: "jsx-6360b935762a2f66"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/careers.js",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-6360b935762a2f66",
                                        children: "partners@monatecakes.co.za"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/careers.js",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/careers.js",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/careers.js",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/pages/careers.js",
                    lineNumber: 443,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/monate-cakes/pages/careers.js",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "6360b935762a2f66",
                children: ".jsx-6360b935762a2f66:root{--color-cream:#fdf8f3;--color-warm-white:#fffbf7;--color-charcoal:#1c1c1c;--color-graphite:#2d2d2d;--color-caramel:#c4956a;--color-caramel-light:#d4a574;--color-caramel-dark:#a67c52;--color-sage:#8b9a7d;--color-text:#4a4a4a;--color-text-muted:#7a7a7a;--font-display:\"Cormorant Garamond\",Georgia,serif;--font-body:\"Outfit\",-apple-system,BlinkMacSystemFont,sans-serif}.hero.jsx-6360b935762a2f66{background:linear-gradient(165deg,#0f0f0f 0%,#1a1a2e 40%,#1f1f35 100%);align-items:center;min-height:100dvh;padding:100px 0 60px;display:flex;position:relative;overflow:hidden}.hero-bg-elements.jsx-6360b935762a2f66{pointer-events:none;position:absolute;inset:0}.hero-gradient-orb.jsx-6360b935762a2f66{filter:blur(80px);border-radius:50%;position:absolute}.orb-1.jsx-6360b935762a2f66{background:radial-gradient(circle,#c4956a33 0%,#0000 70%);width:400px;height:400px;top:10%;left:20%}.orb-2.jsx-6360b935762a2f66{background:radial-gradient(circle,#8b9a7d26 0%,#0000 70%);width:300px;height:300px;bottom:10%;right:10%}.hero-grain.jsx-6360b935762a2f66{opacity:.03;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\");position:absolute;inset:0}.hero-content.jsx-6360b935762a2f66{grid-template-columns:1fr;align-items:center;gap:48px;display:grid}@media (width>=992px){.hero-content.jsx-6360b935762a2f66{grid-template-columns:1.2fr .8fr;gap:64px}}.hero-badge.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-caramel-light);letter-spacing:.02em;background:#c4956a1a;border:1px solid #c4956a33;border-radius:100px;align-items:center;gap:10px;margin-bottom:24px;padding:10px 18px;font-size:.85rem;font-weight:500;display:inline-flex}.badge-dot.jsx-6360b935762a2f66{background:var(--color-caramel);border-radius:50%;width:8px;height:8px;animation:2s ease-in-out infinite pulse}@keyframes pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.9)}}.hero-title.jsx-6360b935762a2f66{font-family:var(--font-display);color:#fff;letter-spacing:-.02em;margin-bottom:24px;font-size:max(2.5rem,min(7vw,4.5rem));font-weight:500;line-height:1.1}.title-accent.jsx-6360b935762a2f66{background:linear-gradient(135deg,var(--color-caramel-light)0%,#e8c9a8 50%,var(--color-caramel)100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;display:block}.hero-subtitle.jsx-6360b935762a2f66{font-family:var(--font-body);color:#ffffffa6;max-width:520px;margin-bottom:32px;font-size:max(1rem,min(2vw,1.15rem));line-height:1.7}.hero-metrics.jsx-6360b935762a2f66{flex-wrap:wrap;gap:32px;margin-bottom:40px;display:flex}.metric.jsx-6360b935762a2f66{flex-direction:column;gap:4px;display:flex}.metric-value.jsx-6360b935762a2f66{font-family:var(--font-display);color:#fff;font-size:2rem;font-weight:600}.metric-label.jsx-6360b935762a2f66{font-family:var(--font-body);color:#ffffff73;text-transform:uppercase;letter-spacing:.1em;font-size:.8rem}.hero-cta-group.jsx-6360b935762a2f66{flex-wrap:wrap;gap:16px;display:flex}.btn-primary.jsx-6360b935762a2f66{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);color:#fff;font-family:var(--font-body);cursor:pointer;border:none;border-radius:12px;align-items:center;gap:12px;padding:16px 28px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s cubic-bezier(.4,0,.2,1);display:inline-flex;box-shadow:0 4px 24px #c4956a40}.btn-primary.jsx-6360b935762a2f66:hover{transform:translateY(-2px);box-shadow:0 8px 32px #c4956a59}.btn-primary.jsx-6360b935762a2f66:active{transform:translateY(0)}.btn-ghost.jsx-6360b935762a2f66{color:#ffffffd9;font-family:var(--font-body);background:0 0;border:1px solid #ffffff26;border-radius:12px;align-items:center;gap:8px;padding:16px 28px;font-size:.95rem;font-weight:500;text-decoration:none;transition:all .3s;display:inline-flex}.btn-ghost.jsx-6360b935762a2f66:hover{background:#ffffff0d;border-color:#ffffff40}.hero-visual.jsx-6360b935762a2f66{display:none}@media (width>=992px){.hero-visual.jsx-6360b935762a2f66{display:block}}.visual-card.jsx-6360b935762a2f66{border-radius:24px;position:relative;overflow:hidden;box-shadow:0 24px 64px #0006}.card-image.jsx-6360b935762a2f66{aspect-ratio:3/4;position:relative}.card-image.jsx-6360b935762a2f66 img.jsx-6360b935762a2f66{object-fit:cover;width:100%;height:100%}.card-overlay.jsx-6360b935762a2f66{background:linear-gradient(#0000 50%,#0009 100%);position:absolute;inset:0}.card-badge.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-charcoal);background:#fffffff2;border-radius:100px;align-items:center;gap:8px;padding:10px 16px;font-size:.8rem;font-weight:600;display:flex;position:absolute;bottom:20px;left:20px}.card-badge.jsx-6360b935762a2f66 svg.jsx-6360b935762a2f66{color:var(--color-caramel)}.section.jsx-6360b935762a2f66{padding:80px 0}@media (width>=768px){.section.jsx-6360b935762a2f66{padding:120px 0}}.container.jsx-6360b935762a2f66{max-width:1200px;margin:0 auto;padding:0 20px}@media (width>=768px){.container.jsx-6360b935762a2f66{padding:0 40px}}.section-header.jsx-6360b935762a2f66{text-align:center;margin-bottom:56px}.section-tag.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-caramel);text-transform:uppercase;letter-spacing:.15em;margin-bottom:16px;font-size:.75rem;font-weight:600;display:inline-block}.section-title.jsx-6360b935762a2f66{font-family:var(--font-display);color:var(--color-charcoal);letter-spacing:-.02em;font-size:max(2rem,min(5vw,3rem));font-weight:500}.section-values.jsx-6360b935762a2f66{background:var(--color-cream)}.values-grid.jsx-6360b935762a2f66{grid-template-columns:1fr;gap:24px;display:grid}@media (width>=640px){.values-grid.jsx-6360b935762a2f66{grid-template-columns:repeat(2,1fr)}}@media (width>=992px){.values-grid.jsx-6360b935762a2f66{grid-template-columns:repeat(3,1fr)}}.value-card.jsx-6360b935762a2f66{background:var(--color-warm-white);border:1px solid #0000000a;border-radius:20px;padding:32px 28px;transition:all .3s}.value-card.jsx-6360b935762a2f66:hover{transform:translateY(-4px);box-shadow:0 20px 40px #0000000f}.value-icon.jsx-6360b935762a2f66{width:56px;height:56px;color:var(--color-caramel);background:linear-gradient(135deg,#c4956a1a 0%,#c4956a0d 100%);border-radius:14px;justify-content:center;align-items:center;margin-bottom:20px;display:flex}.value-card.jsx-6360b935762a2f66 h3.jsx-6360b935762a2f66{font-family:var(--font-display);color:var(--color-charcoal);margin-bottom:12px;font-size:1.35rem;font-weight:600}.value-card.jsx-6360b935762a2f66 p.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-text-muted);font-size:.95rem;line-height:1.6}.section-process.jsx-6360b935762a2f66{background:var(--color-warm-white)}.process-timeline.jsx-6360b935762a2f66{max-width:700px;margin:0 auto}.process-step.jsx-6360b935762a2f66{gap:24px;display:flex}.step-indicator.jsx-6360b935762a2f66{flex-direction:column;flex-shrink:0;align-items:center;display:flex}.step-number.jsx-6360b935762a2f66{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);color:#fff;width:48px;height:48px;font-family:var(--font-body);border-radius:50%;justify-content:center;align-items:center;font-size:.9rem;font-weight:700;display:flex}.step-line.jsx-6360b935762a2f66{background:linear-gradient(180deg,var(--color-caramel)0%,#c4956a33 100%);flex:1;width:2px;min-height:60px;margin:12px 0}.step-content.jsx-6360b935762a2f66{padding-bottom:40px}.step-content.jsx-6360b935762a2f66 h4.jsx-6360b935762a2f66{font-family:var(--font-display);color:var(--color-charcoal);margin-bottom:8px;font-size:1.35rem;font-weight:600}.step-content.jsx-6360b935762a2f66 p.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-text-muted);font-size:.95rem;line-height:1.6}.section-testimonials.jsx-6360b935762a2f66{background:var(--color-cream)}.testimonials-scroll.jsx-6360b935762a2f66{grid-template-columns:1fr;gap:24px;display:grid}@media (width>=768px){.testimonials-scroll.jsx-6360b935762a2f66{grid-template-columns:repeat(3,1fr)}}.testimonial-card.jsx-6360b935762a2f66{background:var(--color-warm-white);border:1px solid #0000000a;border-radius:20px;padding:32px}.testimonial-quote.jsx-6360b935762a2f66{margin-bottom:24px;position:relative}.testimonial-quote.jsx-6360b935762a2f66 svg.jsx-6360b935762a2f66{color:var(--color-caramel);position:absolute;top:-8px;left:-8px}.testimonial-quote.jsx-6360b935762a2f66 p.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-text);font-size:1rem;font-style:italic;line-height:1.7}.testimonial-author.jsx-6360b935762a2f66{align-items:center;gap:14px;display:flex}.author-avatar.jsx-6360b935762a2f66{border:2px solid var(--color-caramel-light);border-radius:50%;width:48px;height:48px;overflow:hidden}.author-avatar.jsx-6360b935762a2f66 img.jsx-6360b935762a2f66{object-fit:cover;width:100%;height:100%}.author-info.jsx-6360b935762a2f66{flex-direction:column;display:flex}.author-name.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-charcoal);font-size:.95rem;font-weight:600}.author-business.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-text-muted);font-size:.8rem}.section-apply.jsx-6360b935762a2f66{background:linear-gradient(165deg,#0f0f0f 0%,#1a1a2e 50%,#1f1f35 100%);position:relative;overflow:hidden}.section-apply.jsx-6360b935762a2f66:before{content:\"\";pointer-events:none;background:radial-gradient(circle,#c4956a1a 0%,#0000 70%);width:600px;height:600px;position:absolute;top:0;left:50%;transform:translate(-50%)}.apply-wrapper.jsx-6360b935762a2f66{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#ffffff08;border:1px solid #ffffff14;border-radius:32px;grid-template-columns:1fr;gap:48px;padding:40px 24px;display:grid;position:relative}@media (width>=992px){.apply-wrapper.jsx-6360b935762a2f66{grid-template-columns:1fr 1.2fr;gap:64px;padding:64px 56px}}.apply-content.jsx-6360b935762a2f66 .section-tag.jsx-6360b935762a2f66{color:var(--color-caramel-light)}.apply-title.jsx-6360b935762a2f66{font-family:var(--font-display);color:#fff;margin-bottom:16px;font-size:max(1.75rem,min(4vw,2.5rem));font-weight:500}.apply-description.jsx-6360b935762a2f66{font-family:var(--font-body);color:#fff9;font-size:1rem;line-height:1.7}.apply-form.jsx-6360b935762a2f66{flex-direction:column;gap:20px;display:flex}.form-row.jsx-6360b935762a2f66{grid-template-columns:1fr;gap:20px;display:grid}@media (width>=640px){.form-row.jsx-6360b935762a2f66{grid-template-columns:repeat(2,1fr)}}.form-group.jsx-6360b935762a2f66{flex-direction:column;gap:8px;display:flex}.form-group.full-width.jsx-6360b935762a2f66{grid-column:1/-1}.form-group.jsx-6360b935762a2f66 label.jsx-6360b935762a2f66{font-family:var(--font-body);color:#ffffffb3;font-size:.85rem;font-weight:500}.form-group.jsx-6360b935762a2f66 input.jsx-6360b935762a2f66,.form-group.jsx-6360b935762a2f66 select.jsx-6360b935762a2f66{font-family:var(--font-body);color:#fff;appearance:none;background:#ffffff0f;border:1px solid #ffffff1a;border-radius:12px;padding:14px 18px;font-size:.95rem;transition:all .2s}.form-group.jsx-6360b935762a2f66 input.jsx-6360b935762a2f66::placeholder{color:#ffffff59}.form-group.jsx-6360b935762a2f66 input.jsx-6360b935762a2f66:focus,.form-group.jsx-6360b935762a2f66 select.jsx-6360b935762a2f66:focus{border-color:var(--color-caramel);background:#ffffff14;outline:none}.form-group.jsx-6360b935762a2f66 select.jsx-6360b935762a2f66{background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 18px center;background-repeat:no-repeat;padding-right:48px}.form-group.jsx-6360b935762a2f66 select.jsx-6360b935762a2f66 option.jsx-6360b935762a2f66{color:#fff;background:#1a1a2e}.btn-submit.jsx-6360b935762a2f66{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);color:#fff;font-family:var(--font-body);cursor:pointer;border:none;border-radius:12px;justify-content:center;align-items:center;gap:12px;margin-top:8px;padding:18px 32px;font-size:1rem;font-weight:600;transition:all .3s cubic-bezier(.4,0,.2,1);display:inline-flex;box-shadow:0 4px 24px #c4956a4d}.btn-submit.jsx-6360b935762a2f66:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 32px #c4956a66}.btn-submit.jsx-6360b935762a2f66:disabled{opacity:.7;cursor:not-allowed}.btn-submit.submitting.jsx-6360b935762a2f66{background:#c4956a80}.spinner.jsx-6360b935762a2f66{border:2px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:18px;height:18px;animation:.8s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.form-note.jsx-6360b935762a2f66{font-family:var(--font-body);color:#fff6;text-align:center;font-size:.8rem}.form-note.jsx-6360b935762a2f66 a.jsx-6360b935762a2f66{color:#fff9;text-underline-offset:2px;text-decoration:underline}.form-note.jsx-6360b935762a2f66 a.jsx-6360b935762a2f66:hover{color:var(--color-caramel-light)}.section-alt-cta.jsx-6360b935762a2f66{background:var(--color-cream);padding:60px 0}.alt-cta-content.jsx-6360b935762a2f66{text-align:center}.alt-cta-content.jsx-6360b935762a2f66 h3.jsx-6360b935762a2f66{font-family:var(--font-display);color:var(--color-charcoal);margin-bottom:8px;font-size:1.5rem;font-weight:500}.alt-cta-content.jsx-6360b935762a2f66 p.jsx-6360b935762a2f66{font-family:var(--font-body);color:var(--color-text-muted);margin-bottom:20px;font-size:.95rem}.btn-secondary.jsx-6360b935762a2f66{color:var(--color-charcoal);font-family:var(--font-body);background:0 0;border:1px solid #00000026;border-radius:10px;align-items:center;gap:10px;padding:14px 24px;font-size:.9rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex}.btn-secondary.jsx-6360b935762a2f66:hover{background:var(--color-charcoal);color:#fff;border-color:var(--color-charcoal)}.animate-on-scroll.jsx-6360b935762a2f66{opacity:0;transition:opacity .6s,transform .6s cubic-bezier(.4,0,.2,1);transform:translateY(30px)}.animate-on-scroll.animate-fade-left.jsx-6360b935762a2f66{transform:translate(30px)}.animate-on-scroll.animate-scale.jsx-6360b935762a2f66{transform:scale(.95)}.animate-on-scroll.animated.jsx-6360b935762a2f66{opacity:1;transform:translateY(0)translate(0)scale(1)}@media (width<=480px){.hero.jsx-6360b935762a2f66{padding:90px 0 50px}.hero-metrics.jsx-6360b935762a2f66{gap:20px}.metric-value.jsx-6360b935762a2f66{font-size:1.5rem}.hero-cta-group.jsx-6360b935762a2f66{flex-direction:column}.btn-primary.jsx-6360b935762a2f66,.btn-ghost.jsx-6360b935762a2f66{justify-content:center;width:100%}.section.jsx-6360b935762a2f66{padding:60px 0}.value-card.jsx-6360b935762a2f66{padding:24px 20px}.apply-wrapper.jsx-6360b935762a2f66{padding:32px 20px}}@media (hover:none){.btn-primary.jsx-6360b935762a2f66:hover,.btn-ghost.jsx-6360b935762a2f66:hover,.value-card.jsx-6360b935762a2f66:hover{transform:none}.btn-primary.jsx-6360b935762a2f66:active{transform:scale(.98)}}@supports (padding:max(0px)){.hero.jsx-6360b935762a2f66{padding-top:max(100px,env(safe-area-inset-top) + 80px)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca801591._.js.map