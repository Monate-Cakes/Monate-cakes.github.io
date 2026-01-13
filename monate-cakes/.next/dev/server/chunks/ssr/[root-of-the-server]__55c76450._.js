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
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
// components/Navbar.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
;
function Navbar({ theme, setTheme }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        // Also update localStorage for persistence
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Close mobile menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-311b7aba5dec32bb" + " " + "promo-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "jsx-311b7aba5dec32bb",
                    children: [
                        "🎉 New Year Special: Get 15% OFF on all custom cakes! Use code ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "jsx-311b7aba5dec32bb" + " " + "promo-code",
                            children: "NEWYEAR15"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/components/Navbar.js",
                            lineNumber: 41,
                            columnNumber: 78
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/components/Navbar.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "jsx-311b7aba5dec32bb" + " " + `navbar-custom ${scrolled ? 'scrolled' : ''} ${theme}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-311b7aba5dec32bb" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "navbar-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-icon",
                                        children: "🎂"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-text",
                                        children: [
                                            "Monate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "brand-accent",
                                                children: "Cakes"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 49,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "jsx-311b7aba5dec32bb" + " " + "nav-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#pricing",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/how-it-works",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/partners",
                                            children: "Bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/components/Navbar.js",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-311b7aba5dec32bb" + " " + "nav-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
                                        className: "jsx-311b7aba5dec32bb" + " " + "theme-toggle",
                                        children: theme === 'dark' ? '☀️' : '🌙'
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        className: "btn-primary-nav",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "btn-icon",
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb",
                                                children: "Find Bakers"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMenuOpen(true),
                                        "aria-label": "Open menu",
                                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-btn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "hamburger-line"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "hamburger-line"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "hamburger-line"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/components/Navbar.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onClick: ()=>setMobileMenuOpen(false),
                className: "jsx-311b7aba5dec32bb" + " " + `mobile-overlay ${mobileMenuOpen ? 'active' : ''}`
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-311b7aba5dec32bb" + " " + `mobile-menu ${mobileMenuOpen ? 'active' : ''} ${theme}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-icon",
                                        children: "🎂"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-text",
                                        children: [
                                            "Monate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "brand-accent",
                                                children: "Cakes"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 96,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(false),
                                "aria-label": "Close menu",
                                className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-close",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#services",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "menu-icon",
                                        children: "🍰"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    "Services"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#pricing",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "menu-icon",
                                        children: "💰"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    "Pricing"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/how-it-works",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "menu-icon",
                                        children: "📋"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    "How It Works"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/partners",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "menu-icon",
                                        children: "👨‍🍳"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    "Bakers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/careers",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "menu-icon",
                                        children: "🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    "Join as Baker"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/partners",
                                className: "btn-primary-mobile",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    "Find Bakers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "jsx-311b7aba5dec32bb" + " " + "theme-toggle-mobile",
                                children: theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "311b7aba5dec32bb",
                children: ".promo-banner.jsx-311b7aba5dec32bb{color:#fff;text-align:center;background:linear-gradient(90deg,#c4956a 0%,#a67c52 100%);padding:10px 20px;font-family:Outfit,sans-serif;font-size:.85rem;font-weight:500}.promo-code.jsx-311b7aba5dec32bb{background:#fff3;border-radius:4px;margin-left:4px;padding:2px 8px;font-weight:700}.navbar-custom.jsx-311b7aba5dec32bb{z-index:1000;background:0 0;padding:16px 0;transition:all .3s;position:fixed;top:40px;left:0;right:0}.navbar-custom.scrolled.jsx-311b7aba5dec32bb{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#0f0f0ff2;padding:12px 0;box-shadow:0 4px 20px #0000004d}.navbar-custom.light.scrolled.jsx-311b7aba5dec32bb{background:#fffffff2;box-shadow:0 4px 20px #0000001a}.container.jsx-311b7aba5dec32bb{max-width:1200px;margin:0 auto;padding:0 20px}.navbar-inner.jsx-311b7aba5dec32bb{justify-content:space-between;align-items:center;display:flex}.nav-brand.jsx-311b7aba5dec32bb{color:#fff;align-items:center;gap:10px;font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:600;text-decoration:none;display:flex}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{color:#1c1c1c}.brand-icon.jsx-311b7aba5dec32bb{font-size:1.5rem}.brand-accent.jsx-311b7aba5dec32bb{color:#c4956a}.nav-links.jsx-311b7aba5dec32bb{gap:32px;margin:0;padding:0;list-style:none;display:none}@media (width>=768px){.nav-links.jsx-311b7aba5dec32bb{display:flex}}.nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#fffc;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;text-decoration:none;transition:color .2s}.nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#000000b3}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a}.nav-actions.jsx-311b7aba5dec32bb{align-items:center;gap:12px;display:flex}.theme-toggle.jsx-311b7aba5dec32bb{cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;justify-content:center;align-items:center;width:44px;height:44px;font-size:1.2rem;transition:all .2s;display:flex}.theme-toggle.jsx-311b7aba5dec32bb:hover{background:#ffffff26;transform:scale(1.05)}.navbar-custom.light.jsx-311b7aba5dec32bb .theme-toggle.jsx-311b7aba5dec32bb{background:#0000000d;border-color:#0000001a}.navbar-custom.light.jsx-311b7aba5dec32bb .theme-toggle.jsx-311b7aba5dec32bb:hover{background:#0000001a}.btn-primary-nav.jsx-311b7aba5dec32bb{color:#fff;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border-radius:12px;align-items:center;gap:8px;padding:12px 20px;font-family:Outfit,sans-serif;font-size:.9rem;font-weight:600;text-decoration:none;transition:all .3s;display:none;box-shadow:0 4px 15px #c4956a4d}@media (width>=768px){.btn-primary-nav.jsx-311b7aba5dec32bb{display:flex}}.btn-primary-nav.jsx-311b7aba5dec32bb:hover{transform:translateY(-2px);box-shadow:0 6px 20px #c4956a66}.btn-icon.jsx-311b7aba5dec32bb{font-size:1rem}.mobile-menu-btn.jsx-311b7aba5dec32bb{cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;flex-direction:column;justify-content:center;gap:5px;width:44px;height:44px;padding:12px;display:flex}@media (width>=768px){.mobile-menu-btn.jsx-311b7aba5dec32bb{display:none}}.navbar-custom.light.jsx-311b7aba5dec32bb .mobile-menu-btn.jsx-311b7aba5dec32bb{background:#0000000d;border-color:#0000001a}.hamburger-line.jsx-311b7aba5dec32bb{background:#fff;border-radius:2px;width:100%;height:2px;transition:all .3s}.navbar-custom.light.jsx-311b7aba5dec32bb .hamburger-line.jsx-311b7aba5dec32bb{background:#1c1c1c}.mobile-overlay.jsx-311b7aba5dec32bb{z-index:1001;opacity:0;visibility:hidden;background:#00000080;transition:all .3s;position:fixed;inset:0}.mobile-overlay.active.jsx-311b7aba5dec32bb{opacity:1;visibility:visible}.mobile-menu.jsx-311b7aba5dec32bb{z-index:1002;background:#0f0f0f;flex-direction:column;width:85%;max-width:320px;padding:24px;transition:transform .3s cubic-bezier(.4,0,.2,1);display:flex;position:fixed;top:0;bottom:0;right:0;transform:translate(100%)}.mobile-menu.light.jsx-311b7aba5dec32bb{background:#fff}.mobile-menu.active.jsx-311b7aba5dec32bb{transform:translate(0)}.mobile-menu-header.jsx-311b7aba5dec32bb{border-bottom:1px solid #ffffff1a;justify-content:space-between;align-items:center;margin-bottom:24px;padding-bottom:24px;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-header.jsx-311b7aba5dec32bb{border-color:#0000001a}.mobile-menu.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{font-size:1.3rem}.mobile-menu.light.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{color:#1c1c1c}.mobile-menu-close.jsx-311b7aba5dec32bb{color:#fff;cursor:pointer;background:#ffffff1a;border:none;border-radius:10px;justify-content:center;align-items:center;width:40px;height:40px;font-size:1.2rem;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-close.jsx-311b7aba5dec32bb{color:#1c1c1c;background:#0000000d}.mobile-menu-links.jsx-311b7aba5dec32bb{flex-direction:column;flex:1;gap:8px;display:flex}.mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#ffffffe6;border-radius:12px;align-items:center;gap:14px;padding:16px;font-family:Outfit,sans-serif;font-size:1.05rem;font-weight:500;text-decoration:none;transition:all .2s;display:flex}.mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a;background:#ffffff0d}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#1c1c1c}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{background:#0000000d}.menu-icon.jsx-311b7aba5dec32bb{font-size:1.2rem}.mobile-menu-footer.jsx-311b7aba5dec32bb{border-top:1px solid #ffffff1a;flex-direction:column;gap:12px;padding-top:24px;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-footer.jsx-311b7aba5dec32bb{border-color:#0000001a}.btn-primary-mobile.jsx-311b7aba5dec32bb{color:#fff;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border-radius:12px;justify-content:center;align-items:center;gap:10px;padding:16px;font-family:Outfit,sans-serif;font-size:1rem;font-weight:600;text-decoration:none;display:flex}.theme-toggle-mobile.jsx-311b7aba5dec32bb{color:#ffffffe6;cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;justify-content:center;align-items:center;gap:10px;padding:14px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .theme-toggle-mobile.jsx-311b7aba5dec32bb{color:#1c1c1c;background:#0000000d;border-color:#0000001a}"
            }, void 0, false, void 0, this)
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
"[project]/monate-cakes/data/partnersData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPartnerBySlug",
    ()=>getPartnerBySlug,
    "getPartnersByCity",
    ()=>getPartnersByCity,
    "partnersData",
    ()=>partnersData
]);
const partnersData = [
    {
        id: 1,
        name: "Cake Whisper Sisters",
        slug: "cake-whisper-sisters",
        image: "/images/Cake Whisper Sisters.jpeg",
        description: "Twin sisters Sarah & Emma have been creating stunning wedding cakes and celebration pieces for over 8 years. Their signature buttercream roses are known throughout Durban.",
        shortDesc: "Award-winning wedding cake specialists",
        suburb: "Umhlanga",
        city: "Durban",
        province: "KwaZulu-Natal",
        phone: "825551234",
        email: "hello@cakewhispersisters.co.za",
        rating: 4.9,
        reviewCount: 127,
        specialties: [
            "Wedding Cakes",
            "Buttercream Art",
            "Custom Toppers"
        ],
        priceRange: "R450 - R2500",
        deliveryTime: "3-7 days",
        about: "We believe every celebration deserves a cake that tells a story. From intimate weddings to grand celebrations, we pour our hearts into every creation. Our buttercream techniques have been passed down through generations, and we've added our own modern flair to make each cake truly unique.",
        offerings: [
            {
                name: "Signature Wedding Cake (3-tier)",
                price: "R2,200",
                description: "Our classic 3-tier beauty feeds 80-100 guests"
            },
            {
                name: "Engagement Cake",
                price: "R850",
                description: "Elegant single-tier cake with custom topper"
            },
            {
                name: "Celebration Cake (8\")",
                price: "R650",
                description: "Perfect for birthdays and anniversaries"
            },
            {
                name: "Cupcake Tower (24pc)",
                price: "R480",
                description: "Beautifully decorated cupcakes"
            },
            {
                name: "Consultation Session",
                price: "Free",
                description: "30-minute tasting and design consultation"
            }
        ],
        gallery: [
            "/images/Cake Whisper Sisters.jpeg"
        ],
        reviews: [
            {
                author: "Thandi M.",
                rating: 5,
                date: "2025-12-15",
                text: "Our wedding cake was absolutely stunning! Everyone kept asking where we got it. The sisters were so patient with our changes and delivered exactly what we dreamed of."
            },
            {
                author: "Michael R.",
                rating: 5,
                date: "2025-11-28",
                text: "Best cake I've ever tasted. The red velvet was incredible. Will definitely order again for our anniversary."
            },
            {
                author: "Priya K.",
                rating: 4,
                date: "2025-10-20",
                text: "Beautiful work and delicious! Only small note - delivery was 30 mins late, but they communicated throughout."
            }
        ],
        hours: {
            monday: "8:00 - 17:00",
            tuesday: "8:00 - 17:00",
            wednesday: "8:00 - 17:00",
            thursday: "8:00 - 17:00",
            friday: "8:00 - 17:00",
            saturday: "9:00 - 14:00",
            sunday: "Closed"
        },
        socials: {
            instagram: "@cakewhispersisters",
            facebook: "CakeWhisperSisters"
        }
    },
    {
        id: 2,
        name: "Desi Delight Cupcakes",
        slug: "desi-delight-cupcakes",
        image: "/images/Durban Delights Bakery.jpeg",
        description: "Priya and Anjali blend traditional Indian flavours with modern cupcake artistry. From cardamom-infused buttercream to saffron swirls, each cupcake is a celebration of heritage.",
        shortDesc: "Fusion cupcakes with Indian flair",
        suburb: "Chatsworth",
        city: "Durban",
        province: "KwaZulu-Natal",
        phone: "825552345",
        email: "info@desidelightcupcakes.co.za",
        rating: 4.8,
        reviewCount: 89,
        specialties: [
            "Fusion Cupcakes",
            "Indian Sweets",
            "Diwali Specials"
        ],
        priceRange: "R120 - R800",
        deliveryTime: "1-3 days",
        about: "Growing up in Chatsworth, we were surrounded by the most incredible flavours - from our grandmother's gulab jamun to street-corner jalebis. We started Desi Delight to share these beloved tastes with a modern twist. Every cupcake tells a story of our heritage.",
        offerings: [
            {
                name: "Masala Chai Cupcakes (6pc)",
                price: "R180",
                description: "Spiced tea flavour with cardamom buttercream"
            },
            {
                name: "Mango Lassi Cupcakes (6pc)",
                price: "R180",
                description: "Creamy mango with yogurt frosting"
            },
            {
                name: "Gulab Jamun Cupcakes (6pc)",
                price: "R200",
                description: "Rose-scented with milk cake centre"
            },
            {
                name: "Saffron Pistachio (6pc)",
                price: "R220",
                description: "Premium saffron with pistachio crumble"
            },
            {
                name: "Diwali Box (12pc assorted)",
                price: "R400",
                description: "Festival favourite mix"
            },
            {
                name: "Custom Mehndi Cupcakes (24pc)",
                price: "R800",
                description: "Hand-piped henna designs"
            }
        ],
        gallery: [
            "/images/Durban Delights Bakery.jpeg"
        ],
        reviews: [
            {
                author: "Rashid A.",
                rating: 5,
                date: "2025-12-10",
                text: "The masala chai cupcakes transported me straight to my nani's kitchen. Absolutely incredible flavours!"
            },
            {
                author: "Sarah L.",
                rating: 5,
                date: "2025-11-15",
                text: "Ordered for my colleague's farewell - she's Indian and was in tears. Such authentic, beautiful flavours."
            },
            {
                author: "Kavitha N.",
                rating: 5,
                date: "2025-10-30",
                text: "Finally someone who does Indian fusion properly! The gulab jamun cupcakes are addictive."
            }
        ],
        hours: {
            monday: "9:00 - 18:00",
            tuesday: "9:00 - 18:00",
            wednesday: "9:00 - 18:00",
            thursday: "9:00 - 18:00",
            friday: "9:00 - 18:00",
            saturday: "10:00 - 16:00",
            sunday: "10:00 - 14:00"
        },
        socials: {
            instagram: "@desidelightcupcakes",
            facebook: "DesiDelightCupcakes"
        }
    },
    {
        id: 3,
        name: "Queen's Scone Kitchen",
        slug: "queens-scone-kitchen",
        image: "/images/Queens-Scone-Kitchen.jpeg",
        description: "Nokuthula learned to bake from her grandmother in rural KZN. Her traditional scones, vetkoek, and magwinya have become legendary in Durban's foodie community.",
        shortDesc: "Traditional SA bakes with soul",
        suburb: "Berea",
        city: "Durban",
        province: "KwaZulu-Natal",
        phone: "825553456",
        email: "orders@queensconekitchen.co.za",
        rating: 4.9,
        reviewCount: 203,
        specialties: [
            "Scones",
            "Vetkoek",
            "Magwinya"
        ],
        priceRange: "R50 - R350",
        deliveryTime: "Same day - 2 days",
        about: "I started baking from my flat in Berea with just my grandmother's recipes and a dream. Today, Queen's Scone Kitchen serves hundreds of customers who crave that authentic homemade taste. Every batch is made with love, using recipes that have been in my family for generations.",
        offerings: [
            {
                name: "Classic Scones (6pc)",
                price: "R90",
                description: "Served with jam and cream"
            },
            {
                name: "Cheese & Herb Scones (6pc)",
                price: "R110",
                description: "Savoury perfection"
            },
            {
                name: "Vetkoek (6pc)",
                price: "R80",
                description: "Traditional fat cakes"
            },
            {
                name: "Vetkoek with Mince (6pc)",
                price: "R150",
                description: "Filled with spiced beef mince"
            },
            {
                name: "Magwinya (12pc)",
                price: "R100",
                description: "Light, fluffy and addictive"
            },
            {
                name: "High Tea Box",
                price: "R350",
                description: "Assorted scones, treats & preserves for 4"
            }
        ],
        gallery: [
            "/images/Queens-Scone-Kitchen.jpeg"
        ],
        reviews: [
            {
                author: "David M.",
                rating: 5,
                date: "2025-12-18",
                text: "These scones remind me of my mother's baking. Absolutely divine. The vetkoek with mince is a must-try!"
            },
            {
                author: "Lindiwe Z.",
                rating: 5,
                date: "2025-12-01",
                text: "Finally, someone who makes magwinya properly! Soft, fluffy, and delicious. I'm a regular now."
            },
            {
                author: "James O.",
                rating: 5,
                date: "2025-11-10",
                text: "Ordered the high tea box for my wife's birthday. She said it was the best gift ever. Thank you Nokuthula!"
            },
            {
                author: "Thembi K.",
                rating: 4,
                date: "2025-10-25",
                text: "Great taste and value. Only wish they had more variety of fillings for vetkoek."
            }
        ],
        hours: {
            monday: "6:00 - 15:00",
            tuesday: "6:00 - 15:00",
            wednesday: "6:00 - 15:00",
            thursday: "6:00 - 15:00",
            friday: "6:00 - 15:00",
            saturday: "7:00 - 13:00",
            sunday: "Closed"
        },
        socials: {
            instagram: "@queensconekitchen",
            facebook: "QueensSconeKitchen"
        }
    },
    {
        id: 4,
        name: "Wisdom & Whisk Bakery",
        slug: "wisdom-whisk-bakery",
        image: "/images/Wisdom & Whisk Bakery.jpeg",
        description: "Agnes and Margaret, best friends since 1965, started baking together in retirement. Their old-fashioned cookies, rusks, and classic cakes bring comfort to hundreds of families.",
        shortDesc: "Old-fashioned bakes made with love",
        suburb: "Glenwood",
        city: "Durban",
        province: "KwaZulu-Natal",
        phone: "825554567",
        email: "bakery@wisdomandwhisk.co.za",
        rating: 4.9,
        reviewCount: 156,
        specialties: [
            "Rusks",
            "Cookies",
            "Classic Cakes"
        ],
        priceRange: "R80 - R450",
        deliveryTime: "2-4 days",
        about: "We always said we'd open a bakery together when we retired. Now in our 70s, we're living our dream! Everything is made the old-fashioned way - no shortcuts, no preservatives. Just honest baking like your grandmother used to make.",
        offerings: [
            {
                name: "Buttermilk Rusks (500g)",
                price: "R95",
                description: "Perfect for dunking in tea or coffee"
            },
            {
                name: "All Bran Rusks (500g)",
                price: "R95",
                description: "Healthy and hearty"
            },
            {
                name: "Ginger Crunchies (24pc)",
                price: "R80",
                description: "Crispy and spicy"
            },
            {
                name: "Ouma's Cookies (12pc)",
                price: "R70",
                description: "Assorted classic cookies"
            },
            {
                name: "Victoria Sponge",
                price: "R280",
                description: "Light sponge with jam and cream"
            },
            {
                name: "Carrot Cake (8\")",
                price: "R350",
                description: "Moist with cream cheese frosting"
            },
            {
                name: "Traditional Milk Tart",
                price: "R180",
                description: "Creamy cinnamon custard"
            }
        ],
        gallery: [
            "/images/Wisdom & Whisk Bakery.jpeg"
        ],
        reviews: [
            {
                author: "Emma B.",
                rating: 5,
                date: "2025-12-12",
                text: "The buttermilk rusks are incredible - exactly like my late grandmother used to make. I'm emotional!"
            },
            {
                author: "Peter V.",
                rating: 5,
                date: "2025-11-20",
                text: "Best milk tart in Durban, hands down. Agnes and Margaret are treasures."
            },
            {
                author: "Susan T.",
                rating: 5,
                date: "2025-10-15",
                text: "Ordered the Victoria Sponge for my book club. Everyone wanted the recipe. I'm keeping it secret!"
            },
            {
                author: "Mark J.",
                rating: 4,
                date: "2025-09-30",
                text: "Delicious rusks and lovely service. Would be 5 stars if they did delivery to Hillcrest."
            }
        ],
        hours: {
            monday: "8:00 - 14:00",
            tuesday: "8:00 - 14:00",
            wednesday: "8:00 - 14:00",
            thursday: "8:00 - 14:00",
            friday: "8:00 - 14:00",
            saturday: "8:00 - 12:00",
            sunday: "Closed"
        },
        socials: {
            instagram: "@wisdomandwhisk",
            facebook: "WisdomAndWhiskBakery"
        }
    }
];
const getPartnerBySlug = (slug)=>{
    return partnersData.find((p)=>p.slug === slug);
};
const getPartnersByCity = (city)=>{
    return partnersData.filter((p)=>p.city.toLowerCase() === city.toLowerCase());
};
}),
"[project]/monate-cakes/pages/partners.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Partners
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
// pages/partners.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Footer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$data$2f$partnersData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/data/partnersData.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Star Rating Component
const StarRating = ({ rating, interactive = false, onChange })=>{
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const stars = [
        1,
        2,
        3,
        4,
        5
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
            [
                "a3c7adfcdd191aec",
                [
                    interactive ? 'pointer' : 'default'
                ]
            ]
        ]) + " " + "star-rating",
        children: [
            stars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>interactive && onChange && onChange(star),
                    onMouseEnter: ()=>interactive && setHover(star),
                    onMouseLeave: ()=>interactive && setHover(0),
                    disabled: !interactive,
                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                        [
                            "a3c7adfcdd191aec",
                            [
                                interactive ? 'pointer' : 'default'
                            ]
                        ]
                    ]) + " " + `star ${star <= (hover || rating) ? 'filled' : ''}`,
                    children: star <= (hover || rating) ? '★' : '☆'
                }, star, false, {
                    fileName: "[project]/monate-cakes/pages/partners.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "a3c7adfcdd191aec",
                dynamic: [
                    interactive ? 'pointer' : 'default'
                ],
                children: `.star-rating.__jsx-style-dynamic-selector{gap:4px;display:flex}.star.__jsx-style-dynamic-selector{cursor:${interactive ? 'pointer' : 'default'};color:#374151;background:0 0;border:none;padding:0;font-size:1.2rem;transition:transform .2s}.star.filled.__jsx-style-dynamic-selector{color:#fbbf24}.star.__jsx-style-dynamic-selector:hover:not(:disabled){transform:scale(1.2)}`
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/monate-cakes/pages/partners.js",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Partner Modal Component
const PartnerModal = ({ partner, onClose, reviews, onAddReview, theme })=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('about');
    const [showReviewForm, setShowReviewForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [reviewData, setReviewData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        rating: 0,
        author: '',
        text: ''
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleEscape = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [
        onClose
    ]);
    if (!partner) return null;
    const allReviews = [
        ...partner.reviews || [],
        ...reviews
    ];
    const handleReviewSubmit = (e)=>{
        e.preventDefault();
        if (reviewData.rating === 0 || !reviewData.author.trim() || !reviewData.text.trim()) return;
        onAddReview(partner.id, {
            ...reviewData,
            date: new Date().toISOString().split('T')[0]
        });
        setReviewData({
            rating: 0,
            author: '',
            text: ''
        });
        setShowReviewForm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        onClick: onClose,
        className: "jsx-3e894c2fcd89dc0" + " " + `modal-overlay ${theme}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onClick: (e)=>e.stopPropagation(),
                className: "jsx-3e894c2fcd89dc0" + " " + "modal-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-close",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: partner.image,
                                alt: partner.name,
                                className: "jsx-3e894c2fcd89dc0"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "modal-hero-overlay"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "modal-hero-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-rating",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: partner.rating
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "review-count",
                                                children: [
                                                    "(",
                                                    allReviews.length,
                                                    " reviews)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-3e894c2fcd89dc0",
                                        children: partner.name
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-location",
                                        children: [
                                            "📍 ",
                                            partner.suburb,
                                            ", ",
                                            partner.city
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-tabs",
                        children: [
                            'about',
                            'menu',
                            'reviews',
                            'contact'
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: "jsx-3e894c2fcd89dc0" + " " + `tab ${activeTab === tab ? 'active' : ''}`,
                                children: tab === 'reviews' ? `Reviews (${allReviews.length})` : tab.charAt(0).toUpperCase() + tab.slice(1)
                            }, tab, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-3e894c2fcd89dc0" + " " + "modal-body",
                        children: [
                            activeTab === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "tab-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "about-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "Our Story"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: partner.about
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "specialties-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "Specialties"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "specialty-tags",
                                                children: partner.specialties.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "specialty-tag",
                                                        children: spec
                                                    }, idx, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "info-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "info-icon",
                                                        children: "🕐"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-label",
                                                                children: "Delivery Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-value",
                                                                children: partner.deliveryTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "info-icon",
                                                        children: "💰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-label",
                                                                children: "Price Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 136,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "info-value",
                                                                children: partner.priceRange
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 137,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'menu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "tab-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "jsx-3e894c2fcd89dc0",
                                        children: "Our Offerings"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "offerings-list",
                                        children: partner.offerings.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "offering-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "offering-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-3e894c2fcd89dc0",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-3e894c2fcd89dc0",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 152,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "offering-price",
                                                        children: item.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "menu-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "ℹ️"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Contact us for custom orders and special requests"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'reviews' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "tab-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "reviews-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "Customer Reviews"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !showReviewForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowReviewForm(true),
                                                className: "jsx-3e894c2fcd89dc0" + " " + "btn-write-review",
                                                children: "✏️ Write a Review"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showReviewForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleReviewSubmit,
                                        className: "jsx-3e894c2fcd89dc0" + " " + "review-form",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "Write a Review"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: "Your Rating"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StarRating, {
                                                        rating: reviewData.rating,
                                                        interactive: true,
                                                        onChange: (r)=>setReviewData((prev)=>({
                                                                    ...prev,
                                                                    rating: r
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "author",
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: "Your Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "author",
                                                        value: reviewData.author,
                                                        onChange: (e)=>setReviewData((prev)=>({
                                                                    ...prev,
                                                                    author: e.target.value
                                                                })),
                                                        placeholder: "Enter your name",
                                                        required: true,
                                                        className: "jsx-3e894c2fcd89dc0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "form-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "review",
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: "Your Review"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                        id: "review",
                                                        value: reviewData.text,
                                                        onChange: (e)=>setReviewData((prev)=>({
                                                                    ...prev,
                                                                    text: e.target.value
                                                                })),
                                                        placeholder: "Share your experience...",
                                                        rows: 4,
                                                        required: true,
                                                        className: "jsx-3e894c2fcd89dc0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "form-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowReviewForm(false),
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "btn-cancel",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: reviewData.rating === 0,
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "btn-submit-review",
                                                        children: "Submit Review"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "reviews-list",
                                        children: allReviews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-3e894c2fcd89dc0" + " " + "no-reviews",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3e894c2fcd89dc0" + " " + "no-reviews-icon",
                                                    children: "💬"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-3e894c2fcd89dc0",
                                                    children: "No reviews yet. Be the first to review!"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : allReviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "review-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "review-header",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "reviewer-info",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3e894c2fcd89dc0" + " " + "reviewer-avatar",
                                                                        children: review.author.charAt(0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                                        lineNumber: 226,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3e894c2fcd89dc0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-3e894c2fcd89dc0" + " " + "reviewer-name",
                                                                                children: review.author
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                                lineNumber: 228,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-3e894c2fcd89dc0" + " " + "review-date",
                                                                                children: review.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                                lineNumber: 229,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                                        lineNumber: 227,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StarRating, {
                                                                rating: review.rating
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "review-text",
                                                        children: review.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-3e894c2fcd89dc0" + " " + "tab-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "jsx-3e894c2fcd89dc0",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "contact-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "contact-icon",
                                                        children: "📧"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "contact-label",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: `mailto:${partner.email}`,
                                                                className: "jsx-3e894c2fcd89dc0",
                                                                children: partner.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "contact-icon",
                                                        children: "📱"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "contact-label",
                                                                children: "WhatsApp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: `https://wa.me/27${partner.phone}`,
                                                                className: "jsx-3e894c2fcd89dc0",
                                                                children: [
                                                                    "+27 ",
                                                                    partner.phone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-3e894c2fcd89dc0" + " " + "hours-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                className: "jsx-3e894c2fcd89dc0",
                                                children: "Business Hours"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-3e894c2fcd89dc0" + " " + "hours-grid",
                                                children: Object.entries(partner.hours).map(([day, hours])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3e894c2fcd89dc0" + " " + "hours-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + "day",
                                                                children: day.charAt(0).toUpperCase() + day.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3e894c2fcd89dc0" + " " + `hours ${hours === 'Closed' ? 'closed' : ''}`,
                                                                children: hours
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                                lineNumber: 268,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, day, true, {
                                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/partners.js",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/27${partner.phone}?text=Hi! I found you on Monate Cakes and would like to enquire about your baking services.`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-3e894c2fcd89dc0" + " " + "btn-whatsapp-large",
                                        children: "💬 Contact on WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 243,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/partners.js",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "3e894c2fcd89dc0",
                children: '.modal-overlay.jsx-3e894c2fcd89dc0{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:1000;background:#000000d9;justify-content:center;align-items:center;padding:20px;display:flex;position:fixed;inset:0;overflow-y:auto}.modal-content.jsx-3e894c2fcd89dc0{background:var(--bg-card,#111);border:1px solid var(--border-color,#ffffff1a);border-radius:24px;width:100%;max-width:700px;max-height:90vh;position:relative;overflow-y:auto}.modal-overlay.light.jsx-3e894c2fcd89dc0 .modal-content.jsx-3e894c2fcd89dc0{background:#fff;border-color:#0000001a}.modal-close.jsx-3e894c2fcd89dc0{color:#fff;cursor:pointer;z-index:10;background:#0009;border:1px solid #fff3;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;font-size:1rem;display:flex;position:absolute;top:20px;right:20px}.modal-hero.jsx-3e894c2fcd89dc0{background:#1a1a1a;border-radius:24px 24px 0 0;height:280px;position:relative;overflow:hidden}.modal-hero.jsx-3e894c2fcd89dc0 img.jsx-3e894c2fcd89dc0{object-fit:contain;width:100%;height:100%}.modal-hero-overlay.jsx-3e894c2fcd89dc0{background:linear-gradient(#0000 0%,#000c 100%);position:absolute;inset:0}.modal-hero-content.jsx-3e894c2fcd89dc0{position:absolute;bottom:24px;left:24px;right:24px}.modal-rating.jsx-3e894c2fcd89dc0{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;background:#0009;border-radius:50px;align-items:center;gap:6px;margin-bottom:12px;padding:8px 14px;font-size:.9rem;font-weight:600;display:inline-flex}.review-count.jsx-3e894c2fcd89dc0{color:#fff9;font-weight:400}.modal-hero-content.jsx-3e894c2fcd89dc0 h2.jsx-3e894c2fcd89dc0{color:#fff;margin-bottom:8px;font-family:Cormorant Garamond,serif;font-size:2rem;font-weight:600}.modal-location.jsx-3e894c2fcd89dc0{color:#fffc;font-size:1rem}.modal-tabs.jsx-3e894c2fcd89dc0{border-bottom:1px solid var(--border-color,#ffffff1a);background:var(--bg-secondary,#0a0a0a);padding:0 24px;display:flex;overflow-x:auto}.modal-overlay.light.jsx-3e894c2fcd89dc0 .modal-tabs.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#0000001a}.tab.jsx-3e894c2fcd89dc0{color:var(--text-muted,#ffffff80);cursor:pointer;white-space:nowrap;background:0 0;border:none;padding:16px 20px;font-size:.95rem;font-weight:500;position:relative}.modal-overlay.light.jsx-3e894c2fcd89dc0 .tab.jsx-3e894c2fcd89dc0{color:#7a7a7a}.tab.active.jsx-3e894c2fcd89dc0{color:#d4a574}.tab.active.jsx-3e894c2fcd89dc0:after{content:"";background:#d4a574;height:2px;position:absolute;bottom:0;left:0;right:0}.modal-body.jsx-3e894c2fcd89dc0{padding:24px}.tab-content.jsx-3e894c2fcd89dc0 h3.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);margin-bottom:20px;font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:600}.modal-overlay.light.jsx-3e894c2fcd89dc0 .tab-content.jsx-3e894c2fcd89dc0 h3.jsx-3e894c2fcd89dc0{color:#1c1c1c}.about-section.jsx-3e894c2fcd89dc0{margin-bottom:32px}.about-section.jsx-3e894c2fcd89dc0 p.jsx-3e894c2fcd89dc0{color:var(--text-secondary,#ffffffb3);line-height:1.8}.modal-overlay.light.jsx-3e894c2fcd89dc0 .about-section.jsx-3e894c2fcd89dc0 p.jsx-3e894c2fcd89dc0{color:#4a4a4a}.specialty-tags.jsx-3e894c2fcd89dc0{flex-wrap:wrap;gap:10px;margin-bottom:32px;display:flex}.specialty-tag.jsx-3e894c2fcd89dc0{color:#d4a574;background:#d4a5741a;border:1px solid #d4a57433;border-radius:50px;padding:10px 20px;font-size:.9rem;font-weight:500}.info-grid.jsx-3e894c2fcd89dc0{grid-template-columns:repeat(2,1fr);gap:16px;display:grid}.info-item.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff08);border:1px solid var(--border-color,#ffffff14);border-radius:12px;align-items:center;gap:16px;padding:20px;display:flex}.modal-overlay.light.jsx-3e894c2fcd89dc0 .info-item.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#00000014}.info-icon.jsx-3e894c2fcd89dc0{font-size:1.5rem}.info-label.jsx-3e894c2fcd89dc0{color:var(--text-muted,#ffffff80);margin-bottom:4px;font-size:.85rem;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .info-label.jsx-3e894c2fcd89dc0{color:#7a7a7a}.info-value.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);font-weight:600;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .info-value.jsx-3e894c2fcd89dc0{color:#1c1c1c}.offerings-list.jsx-3e894c2fcd89dc0{flex-direction:column;gap:16px;display:flex}.offering-item.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff08);border:1px solid var(--border-color,#ffffff14);border-radius:12px;justify-content:space-between;align-items:flex-start;padding:20px;display:flex}.modal-overlay.light.jsx-3e894c2fcd89dc0 .offering-item.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#00000014}.offering-info.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);margin-bottom:6px;font-size:1rem;font-weight:600}.modal-overlay.light.jsx-3e894c2fcd89dc0 .offering-info.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:#1c1c1c}.offering-info.jsx-3e894c2fcd89dc0 p.jsx-3e894c2fcd89dc0{color:var(--text-muted,#ffffff80);font-size:.9rem}.modal-overlay.light.jsx-3e894c2fcd89dc0 .offering-info.jsx-3e894c2fcd89dc0 p.jsx-3e894c2fcd89dc0{color:#7a7a7a}.offering-price.jsx-3e894c2fcd89dc0{color:#d4a574;font-size:1rem;font-weight:700}.menu-note.jsx-3e894c2fcd89dc0{color:var(--text-secondary,#ffffffb3);background:#d4a5741a;border-radius:10px;align-items:center;gap:10px;margin-top:24px;padding:16px;font-size:.9rem;display:flex}.modal-overlay.light.jsx-3e894c2fcd89dc0 .menu-note.jsx-3e894c2fcd89dc0{color:#4a4a4a}.reviews-header.jsx-3e894c2fcd89dc0{justify-content:space-between;align-items:center;margin-bottom:24px;display:flex}.btn-write-review.jsx-3e894c2fcd89dc0{color:#d4a574;cursor:pointer;background:#d4a5741a;border:1px solid #d4a5744d;border-radius:10px;align-items:center;gap:8px;padding:12px 20px;font-weight:500;display:flex}.review-form.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff0d);border:1px solid var(--border-color,#ffffff1a);border-radius:16px;margin-bottom:24px;padding:24px}.modal-overlay.light.jsx-3e894c2fcd89dc0 .review-form.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#0000001a}.review-form.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);margin-bottom:20px;font-family:Cormorant Garamond,serif}.modal-overlay.light.jsx-3e894c2fcd89dc0 .review-form.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:#1c1c1c}.form-group.jsx-3e894c2fcd89dc0{margin-bottom:20px}.form-group.jsx-3e894c2fcd89dc0 label.jsx-3e894c2fcd89dc0{color:var(--text-secondary,#ffffffb3);margin-bottom:8px;font-size:.9rem;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .form-group.jsx-3e894c2fcd89dc0 label.jsx-3e894c2fcd89dc0{color:#4a4a4a}.form-group.jsx-3e894c2fcd89dc0 input.jsx-3e894c2fcd89dc0,.form-group.jsx-3e894c2fcd89dc0 textarea.jsx-3e894c2fcd89dc0{background:var(--bg-card,#0000004d);border:1px solid var(--border-color,#ffffff1a);width:100%;color:var(--text-primary,white);border-radius:10px;padding:12px 16px;font-family:inherit;font-size:1rem}.modal-overlay.light.jsx-3e894c2fcd89dc0 .form-group.jsx-3e894c2fcd89dc0 input.jsx-3e894c2fcd89dc0,.modal-overlay.light.jsx-3e894c2fcd89dc0 .form-group.jsx-3e894c2fcd89dc0 textarea.jsx-3e894c2fcd89dc0{color:#1c1c1c;background:#fff;border-color:#0000001a}.form-group.jsx-3e894c2fcd89dc0 input.jsx-3e894c2fcd89dc0:focus,.form-group.jsx-3e894c2fcd89dc0 textarea.jsx-3e894c2fcd89dc0:focus{border-color:#d4a574;outline:none}.form-actions.jsx-3e894c2fcd89dc0{justify-content:flex-end;gap:12px;display:flex}.btn-cancel.jsx-3e894c2fcd89dc0{border:1px solid var(--border-color,#fff3);color:var(--text-secondary,#ffffffb3);cursor:pointer;background:0 0;border-radius:10px;padding:12px 24px;font-weight:500}.modal-overlay.light.jsx-3e894c2fcd89dc0 .btn-cancel.jsx-3e894c2fcd89dc0{color:#4a4a4a;border-color:#0003}.btn-submit-review.jsx-3e894c2fcd89dc0{color:#fff;cursor:pointer;background:linear-gradient(135deg,#d4a574 0%,#a67c52 100%);border:none;border-radius:10px;padding:12px 24px;font-weight:600}.btn-submit-review.jsx-3e894c2fcd89dc0:disabled{opacity:.5;cursor:not-allowed}.reviews-list.jsx-3e894c2fcd89dc0{flex-direction:column;gap:16px;display:flex}.review-item.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff08);border:1px solid var(--border-color,#ffffff14);border-radius:12px;padding:20px}.modal-overlay.light.jsx-3e894c2fcd89dc0 .review-item.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#00000014}.review-header.jsx-3e894c2fcd89dc0{justify-content:space-between;align-items:flex-start;margin-bottom:12px;display:flex}.reviewer-info.jsx-3e894c2fcd89dc0{align-items:center;gap:12px;display:flex}.reviewer-avatar.jsx-3e894c2fcd89dc0{color:#fff;background:linear-gradient(135deg,#d4a574 0%,#a67c52 100%);border-radius:50%;justify-content:center;align-items:center;width:44px;height:44px;font-size:1.1rem;font-weight:600;display:flex}.reviewer-name.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);font-weight:600;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .reviewer-name.jsx-3e894c2fcd89dc0{color:#1c1c1c}.review-date.jsx-3e894c2fcd89dc0{color:var(--text-muted,#fff6);font-size:.85rem;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .review-date.jsx-3e894c2fcd89dc0{color:#7a7a7a}.review-text.jsx-3e894c2fcd89dc0{color:var(--text-secondary,#ffffffb3);font-size:.95rem;line-height:1.6}.modal-overlay.light.jsx-3e894c2fcd89dc0 .review-text.jsx-3e894c2fcd89dc0{color:#4a4a4a}.no-reviews.jsx-3e894c2fcd89dc0{text-align:center;color:var(--text-muted,#ffffff80);padding:40px}.modal-overlay.light.jsx-3e894c2fcd89dc0 .no-reviews.jsx-3e894c2fcd89dc0{color:#7a7a7a}.no-reviews-icon.jsx-3e894c2fcd89dc0{margin-bottom:16px;font-size:3rem;display:block}.contact-grid.jsx-3e894c2fcd89dc0{grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:32px;display:grid}.contact-item.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff08);border:1px solid var(--border-color,#ffffff14);border-radius:12px;align-items:center;gap:16px;padding:20px;display:flex}.modal-overlay.light.jsx-3e894c2fcd89dc0 .contact-item.jsx-3e894c2fcd89dc0{background:#f9f9f9;border-color:#00000014}.contact-icon.jsx-3e894c2fcd89dc0{font-size:1.5rem}.contact-label.jsx-3e894c2fcd89dc0{color:var(--text-muted,#ffffff80);margin-bottom:4px;font-size:.85rem;display:block}.modal-overlay.light.jsx-3e894c2fcd89dc0 .contact-label.jsx-3e894c2fcd89dc0{color:#7a7a7a}.contact-item.jsx-3e894c2fcd89dc0 a.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);font-weight:500;text-decoration:none}.modal-overlay.light.jsx-3e894c2fcd89dc0 .contact-item.jsx-3e894c2fcd89dc0 a.jsx-3e894c2fcd89dc0{color:#1c1c1c}.hours-section.jsx-3e894c2fcd89dc0{margin-bottom:32px}.hours-section.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);margin-bottom:16px;font-size:1.1rem}.modal-overlay.light.jsx-3e894c2fcd89dc0 .hours-section.jsx-3e894c2fcd89dc0 h4.jsx-3e894c2fcd89dc0{color:#1c1c1c}.hours-grid.jsx-3e894c2fcd89dc0{flex-direction:column;gap:8px;display:flex}.hours-row.jsx-3e894c2fcd89dc0{background:var(--bg-secondary,#ffffff05);border-radius:8px;justify-content:space-between;padding:12px 16px;display:flex}.modal-overlay.light.jsx-3e894c2fcd89dc0 .hours-row.jsx-3e894c2fcd89dc0{background:#f9f9f9}.day.jsx-3e894c2fcd89dc0{color:var(--text-secondary,#ffffffb3)}.modal-overlay.light.jsx-3e894c2fcd89dc0 .day.jsx-3e894c2fcd89dc0{color:#4a4a4a}.hours.jsx-3e894c2fcd89dc0{color:var(--text-primary,white);font-weight:500}.modal-overlay.light.jsx-3e894c2fcd89dc0 .hours.jsx-3e894c2fcd89dc0{color:#1c1c1c}.hours.closed.jsx-3e894c2fcd89dc0{color:#ef4444}.btn-whatsapp-large.jsx-3e894c2fcd89dc0{color:#fff;background:#25d366;border-radius:12px;justify-content:center;align-items:center;gap:12px;width:100%;padding:18px;font-size:1.1rem;font-weight:600;text-decoration:none;display:flex}@media (width<=640px){.modal-hero.jsx-3e894c2fcd89dc0{height:220px}.modal-hero-content.jsx-3e894c2fcd89dc0 h2.jsx-3e894c2fcd89dc0{font-size:1.5rem}.info-grid.jsx-3e894c2fcd89dc0,.contact-grid.jsx-3e894c2fcd89dc0{grid-template-columns:1fr}.review-header.jsx-3e894c2fcd89dc0{flex-direction:column;gap:12px}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/monate-cakes/pages/partners.js",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Partner Card Component
const PartnerCard = ({ partner, onClick, theme })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "jsx-a3f2ef5bea08c17e" + " " + `partner-card ${theme}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-a3f2ef5bea08c17e" + " " + "partner-image",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: partner.image,
                        alt: partner.name,
                        className: "jsx-a3f2ef5bea08c17e"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 932,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-rating",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-a3f2ef5bea08c17e",
                                children: "⭐"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 934,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-a3f2ef5bea08c17e",
                                children: partner.rating
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 935,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 933,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "jsx-a3f2ef5bea08c17e" + " " + "view-text",
                            children: "View Profile"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/partners.js",
                            lineNumber: 938,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 937,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/partners.js",
                lineNumber: 931,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-a3f2ef5bea08c17e" + " " + "partner-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "jsx-a3f2ef5bea08c17e",
                        children: partner.name
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 942,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-location",
                        children: [
                            "📍 ",
                            partner.suburb,
                            ", ",
                            partner.city
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 943,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-desc",
                        children: partner.shortDesc
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 944,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-tags",
                        children: partner.specialties.slice(0, 3).map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-a3f2ef5bea08c17e" + " " + "tag",
                                children: spec
                            }, idx, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 947,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 945,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-a3f2ef5bea08c17e" + " " + "partner-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-a3f2ef5bea08c17e" + " " + "price",
                                children: partner.priceRange
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 951,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-a3f2ef5bea08c17e" + " " + "reviews",
                                children: [
                                    partner.reviewCount,
                                    " reviews"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/partners.js",
                                lineNumber: 952,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 950,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/partners.js",
                lineNumber: 941,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "a3f2ef5bea08c17e",
                children: ".partner-card.jsx-a3f2ef5bea08c17e{background:var(--bg-card,#ffffff08);border:1px solid var(--border-color,#ffffff14);cursor:pointer;border-radius:20px;transition:all .4s;overflow:hidden}.partner-card.light.jsx-a3f2ef5bea08c17e{background:#fff;border-color:#00000014}.partner-card.jsx-a3f2ef5bea08c17e:hover{border-color:#d4a5744d;transform:translateY(-8px);box-shadow:0 20px 40px #0000004d}.partner-card.light.jsx-a3f2ef5bea08c17e:hover{box-shadow:0 20px 40px #0000001a}.partner-image.jsx-a3f2ef5bea08c17e{background:#1a1a1a;height:220px;position:relative;overflow:hidden}.partner-image.jsx-a3f2ef5bea08c17e img.jsx-a3f2ef5bea08c17e{object-fit:contain;width:100%;height:100%;transition:transform .4s}.partner-card.jsx-a3f2ef5bea08c17e:hover .partner-image.jsx-a3f2ef5bea08c17e img.jsx-a3f2ef5bea08c17e{transform:scale(1.05)}.partner-rating.jsx-a3f2ef5bea08c17e{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;z-index:2;background:#000000b3;border-radius:50px;align-items:center;gap:6px;padding:8px 14px;font-size:.9rem;font-weight:600;display:flex;position:absolute;top:16px;right:16px}.partner-overlay.jsx-a3f2ef5bea08c17e{opacity:0;background:#d4a574e6;justify-content:center;align-items:center;transition:opacity .3s;display:flex;position:absolute;inset:0}.partner-card.jsx-a3f2ef5bea08c17e:hover .partner-overlay.jsx-a3f2ef5bea08c17e{opacity:1}.view-text.jsx-a3f2ef5bea08c17e{color:#fff;font-size:1.1rem;font-weight:600}.partner-content.jsx-a3f2ef5bea08c17e{padding:24px}.partner-content.jsx-a3f2ef5bea08c17e h3.jsx-a3f2ef5bea08c17e{color:var(--text-primary,#fff);margin-bottom:8px;font-family:Cormorant Garamond,serif;font-size:1.35rem;font-weight:600}.partner-card.light.jsx-a3f2ef5bea08c17e .partner-content.jsx-a3f2ef5bea08c17e h3.jsx-a3f2ef5bea08c17e{color:#1c1c1c}.partner-location.jsx-a3f2ef5bea08c17e{color:var(--text-muted,#ffffff80);margin-bottom:12px;font-size:.9rem}.partner-card.light.jsx-a3f2ef5bea08c17e .partner-location.jsx-a3f2ef5bea08c17e{color:#7a7a7a}.partner-desc.jsx-a3f2ef5bea08c17e{color:var(--text-secondary,#ffffffb3);margin-bottom:16px;font-size:.95rem;line-height:1.5}.partner-card.light.jsx-a3f2ef5bea08c17e .partner-desc.jsx-a3f2ef5bea08c17e{color:#4a4a4a}.partner-tags.jsx-a3f2ef5bea08c17e{flex-wrap:wrap;gap:8px;margin-bottom:16px;display:flex}.tag.jsx-a3f2ef5bea08c17e{color:#d4a574;background:#d4a5741a;border:1px solid #d4a57433;border-radius:50px;padding:6px 14px;font-size:.8rem}.partner-meta.jsx-a3f2ef5bea08c17e{border-top:1px solid var(--border-color,#ffffff14);justify-content:space-between;align-items:center;padding-top:16px;display:flex}.partner-card.light.jsx-a3f2ef5bea08c17e .partner-meta.jsx-a3f2ef5bea08c17e{border-color:#00000014}.price.jsx-a3f2ef5bea08c17e{color:var(--text-primary,#fff);font-weight:600}.partner-card.light.jsx-a3f2ef5bea08c17e .price.jsx-a3f2ef5bea08c17e{color:#1c1c1c}.reviews.jsx-a3f2ef5bea08c17e{color:var(--text-muted,#ffffff80);font-size:.9rem}.partner-card.light.jsx-a3f2ef5bea08c17e .reviews.jsx-a3f2ef5bea08c17e{color:#7a7a7a}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/monate-cakes/pages/partners.js",
        lineNumber: 930,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Partners({ theme, setTheme }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedPartner, setSelectedPartner] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [userReviews, setUserReviews] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (router.query.baker) {
            const partner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$data$2f$partnersData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPartnerBySlug"])(router.query.baker);
            if (partner) setSelectedPartner(partner);
        }
    }, [
        router.query.baker
    ]);
    const handleAddReview = (partnerId, review)=>{
        setUserReviews((prev)=>({
                ...prev,
                [partnerId]: [
                    ...prev[partnerId] || [],
                    review
                ]
            }));
    };
    const filteredPartners = __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$data$2f$partnersData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["partnersData"].filter((partner)=>{
        const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || partner.specialties.some((s)=>s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesFilter = filter === 'all' || partner.specialties.some((s)=>s.toLowerCase().includes(filter.toLowerCase()));
        return matchesSearch && matchesFilter;
    });
    const specialtyFilters = [
        'all',
        'cakes',
        'cupcakes',
        'scones',
        'traditional',
        'wedding'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-a63917c0e4fdd01d",
                        children: "Our Bakers | Monate Cakes"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        className: "jsx-a63917c0e4fdd01d"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: theme === 'dark' ? '#0F0F0F' : '#FDF8F3',
                        className: "jsx-a63917c0e4fdd01d"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-a63917c0e4fdd01d"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous",
                        className: "jsx-a63917c0e4fdd01d"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet",
                        className: "jsx-a63917c0e4fdd01d"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/partners.js",
                lineNumber: 1157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-a63917c0e4fdd01d" + " " + `page-wrapper ${theme}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        theme: theme,
                        setTheme: setTheme
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "jsx-a63917c0e4fdd01d" + " " + "partners-page",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-a63917c0e4fdd01d" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-a63917c0e4fdd01d" + " " + "page-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "back-link",
                                            children: "← Back to Home"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            className: "jsx-a63917c0e4fdd01d",
                                            children: "Our Bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-a63917c0e4fdd01d",
                                            children: "Discover talented home bakers ready to make your celebrations special"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                    lineNumber: 1171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-a63917c0e4fdd01d" + " " + "filter-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-a63917c0e4fdd01d" + " " + "search-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a63917c0e4fdd01d" + " " + "search-icon",
                                                    children: "🔍"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                                    lineNumber: 1179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search bakers or specialties...",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    className: "jsx-a63917c0e4fdd01d"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                                    lineNumber: 1180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-a63917c0e4fdd01d" + " " + "filter-tags",
                                            children: specialtyFilters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFilter(f),
                                                    className: "jsx-a63917c0e4fdd01d" + " " + `filter-tag ${filter === f ? 'active' : ''}`,
                                                    children: f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)
                                                }, f, false, {
                                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                                    lineNumber: 1189,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                    lineNumber: 1177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-a63917c0e4fdd01d" + " " + "results-info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-a63917c0e4fdd01d",
                                        children: [
                                            filteredPartners.length,
                                            " baker",
                                            filteredPartners.length !== 1 ? 's' : '',
                                            " found"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/partners.js",
                                        lineNumber: 1201,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                    lineNumber: 1200,
                                    columnNumber: 13
                                }, this),
                                filteredPartners.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-a63917c0e4fdd01d" + " " + "no-results",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "jsx-a63917c0e4fdd01d" + " " + "no-results-icon",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "jsx-a63917c0e4fdd01d",
                                            children: "No bakers found"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-a63917c0e4fdd01d",
                                            children: "Try adjusting your search or filters"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSearchTerm('');
                                                setFilter('all');
                                            },
                                            className: "jsx-a63917c0e4fdd01d",
                                            children: "Clear filters"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1209,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                    lineNumber: 1205,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-a63917c0e4fdd01d" + " " + "partners-grid",
                                    children: filteredPartners.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PartnerCard, {
                                            partner: partner,
                                            theme: theme,
                                            onClick: ()=>setSelectedPartner(partner)
                                        }, partner.id, false, {
                                            fileName: "[project]/monate-cakes/pages/partners.js",
                                            lineNumber: 1216,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/partners.js",
                                    lineNumber: 1214,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/partners.js",
                            lineNumber: 1170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1169,
                        columnNumber: 9
                    }, this),
                    selectedPartner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PartnerModal, {
                        partner: selectedPartner,
                        reviews: userReviews[selectedPartner.id] || [],
                        theme: theme,
                        onClose: ()=>{
                            setSelectedPartner(null);
                            if (router.query.baker) {
                                router.push('/partners', undefined, {
                                    shallow: true
                                });
                            }
                        },
                        onAddReview: handleAddReview
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/partners.js",
                        lineNumber: 1243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/partners.js",
                lineNumber: 1166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "a63917c0e4fdd01d",
                children: '.page-wrapper.jsx-a63917c0e4fdd01d{--bg-primary:#fdf8f3;--bg-secondary:#fffbf7;--bg-card:#fff;--text-primary:#1c1c1c;--text-secondary:#4a4a4a;--text-muted:#7a7a7a;--border-color:#00000014;--color-caramel:#c4956a;--font-display:"Cormorant Garamond",Georgia,serif;--font-body:"Outfit",sans-serif}.page-wrapper.dark.jsx-a63917c0e4fdd01d{--bg-primary:#0f0f0f;--bg-secondary:#1a1a2e;--bg-card:#1e1e2e;--text-primary:#fff;--text-secondary:#e0e0e0;--text-muted:#a0a0a0;--border-color:#ffffff1a}.page-wrapper.jsx-a63917c0e4fdd01d{background:var(--bg-primary);min-height:100vh;transition:background .3s}.partners-page.jsx-a63917c0e4fdd01d{padding:120px 0 80px}.container.jsx-a63917c0e4fdd01d{max-width:1200px;margin:0 auto;padding:0 20px}.page-header.jsx-a63917c0e4fdd01d{text-align:center;margin-bottom:48px}.back-link.jsx-a63917c0e4fdd01d{color:var(--text-muted);font-size:.9rem;font-family:var(--font-body);align-items:center;gap:8px;margin-bottom:24px;text-decoration:none;display:inline-flex}.back-link.jsx-a63917c0e4fdd01d:hover{color:var(--color-caramel)}.page-header.jsx-a63917c0e4fdd01d h1.jsx-a63917c0e4fdd01d{font-family:var(--font-display);color:var(--text-primary);margin-bottom:16px;font-size:max(2.5rem,min(5vw,3.5rem));font-weight:600}.page-header.jsx-a63917c0e4fdd01d p.jsx-a63917c0e4fdd01d{color:var(--text-muted);font-size:1.1rem;font-family:var(--font-body)}.filter-bar.jsx-a63917c0e4fdd01d{flex-direction:column;gap:16px;margin-bottom:32px;display:flex}.search-wrapper.jsx-a63917c0e4fdd01d{width:100%;max-width:500px;margin:0 auto;position:relative}.search-icon.jsx-a63917c0e4fdd01d{font-size:1.1rem;position:absolute;top:50%;left:20px;transform:translateY(-50%)}.search-wrapper.jsx-a63917c0e4fdd01d input.jsx-a63917c0e4fdd01d{background:var(--bg-card);border:1px solid var(--border-color);width:100%;color:var(--text-primary);font-size:1rem;font-family:var(--font-body);border-radius:50px;padding:16px 20px 16px 50px}.search-wrapper.jsx-a63917c0e4fdd01d input.jsx-a63917c0e4fdd01d:focus{border-color:var(--color-caramel);outline:none}.search-wrapper.jsx-a63917c0e4fdd01d input.jsx-a63917c0e4fdd01d::placeholder{color:var(--text-muted)}.filter-tags.jsx-a63917c0e4fdd01d{flex-wrap:wrap;justify-content:center;gap:10px;display:flex}.filter-tag.jsx-a63917c0e4fdd01d{background:var(--bg-card);border:1px solid var(--border-color);color:var(--text-secondary);cursor:pointer;font-size:.9rem;font-family:var(--font-body);border-radius:50px;padding:10px 20px;transition:all .3s}.filter-tag.jsx-a63917c0e4fdd01d:hover{border-color:var(--color-caramel)}.filter-tag.active.jsx-a63917c0e4fdd01d{border-color:var(--color-caramel);color:var(--color-caramel);background:#d4a57433}.results-info.jsx-a63917c0e4fdd01d{color:var(--text-muted);font-size:.95rem;font-family:var(--font-body);margin-bottom:24px}.partners-grid.jsx-a63917c0e4fdd01d{grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:24px;display:grid}.no-results.jsx-a63917c0e4fdd01d{text-align:center;background:var(--bg-card);border:1px dashed var(--border-color);border-radius:20px;padding:80px 40px}.no-results-icon.jsx-a63917c0e4fdd01d{margin-bottom:24px;font-size:3rem;display:block}.no-results.jsx-a63917c0e4fdd01d h3.jsx-a63917c0e4fdd01d{color:var(--text-primary);font-family:var(--font-display);margin-bottom:8px}.no-results.jsx-a63917c0e4fdd01d p.jsx-a63917c0e4fdd01d{color:var(--text-muted);font-family:var(--font-body);margin-bottom:24px}.no-results.jsx-a63917c0e4fdd01d button.jsx-a63917c0e4fdd01d{color:var(--color-caramel);cursor:pointer;font-weight:500;font-family:var(--font-body);background:#d4a5741a;border:1px solid #d4a5744d;border-radius:10px;padding:12px 24px}@media (width<=768px){.partners-page.jsx-a63917c0e4fdd01d{padding:120px 0 60px}.partners-grid.jsx-a63917c0e4fdd01d{grid-template-columns:1fr}}'
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

//# sourceMappingURL=%5Broot-of-the-server%5D__55c76450._.js.map