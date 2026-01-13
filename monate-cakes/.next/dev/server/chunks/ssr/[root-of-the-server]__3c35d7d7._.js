module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

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
"[project]/monate-cakes/pages/how-it-works.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
// pages/how-it-works.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [ssr] (ecmascript)");
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
function HowItWorks({ theme, setTheme }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('customers');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-bbaf51480073a19f",
                        children: "How It Works | Monate Cakes"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Learn how Monate Cakes connects you with talented local home bakers. Simple ordering for customers, seamless business growth for entrepreneurs.",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#1a1a2e",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet",
                        className: "jsx-bbaf51480073a19f"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-bbaf51480073a19f" + " " + `page-wrapper ${theme}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        theme: theme,
                        setTheme: setTheme
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "jsx-bbaf51480073a19f" + " " + "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-bbaf51480073a19f" + " " + "hero-bg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "gradient-orb orb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "gradient-orb orb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-bbaf51480073a19f" + " " + "container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "hero-content animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "jsx-bbaf51480073a19f" + " " + "hero-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "badge-icon",
                                                    children: "✨"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                "Simple & Seamless"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            className: "jsx-bbaf51480073a19f" + " " + "hero-title",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "jsx-bbaf51480073a19f" + " " + "hero-subtitle",
                                            children: "Whether you're craving artisan treats or building your baking empire, we've made the journey delightfully simple."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "tab-switcher",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('customers'),
                                                    className: "jsx-bbaf51480073a19f" + " " + `tab-btn ${activeTab === 'customers' ? 'active' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "tab-icon",
                                                            children: "👤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 69,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f",
                                                            children: "For Customers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 70,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('entrepreneurs'),
                                                    className: "jsx-bbaf51480073a19f" + " " + `tab-btn ${activeTab === 'entrepreneurs' ? 'active' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "tab-icon",
                                                            children: "🧁"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f",
                                                            children: "For Entrepreneurs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: activeTab === 'customers' ? 'block' : 'none'
                        },
                        className: "jsx-bbaf51480073a19f" + " " + "content-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-intro",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "intro-grid animate-on-scroll animate-fade-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-bbaf51480073a19f" + " " + "intro-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-tag",
                                                        children: "For Cake Lovers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-title",
                                                        children: "Discover & Order Artisan Treats"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-desc",
                                                        children: "Finding the perfect homemade cake shouldn't be hard. Monate Cakes connects you with verified local bakers who pour love into every creation. From birthday cakes to traditional koesisters, your next favorite treat is just a few taps away."
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "intro-features",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 100,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Verified local bakers"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 101,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 99,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 104,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Direct communication"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 105,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 103,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 108,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Custom orders welcome"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 109,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-bbaf51480073a19f" + " " + "intro-visual",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "visual-card",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Cake Whisper Sisters.jpeg",
                                                        alt: "Customer browsing cakes",
                                                        className: "jsx-bbaf51480073a19f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-steps",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-tag light",
                                                    children: "Step by Step"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-title light",
                                                    children: "Your Journey to Delicious"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "steps-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge",
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "🔍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Browse & Discover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Explore our curated network of talented home bakers in your area. Filter by specialty, location, or browse featured creators."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "View baker portfolios & specialties"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 139,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Read customer reviews & ratings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 140,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Check delivery areas & availability"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 141,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.1s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge",
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "💬"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Connect & Customize"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Found the perfect baker? Reach out directly via WhatsApp to discuss your vision, customize your order, and get a quote."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Direct WhatsApp communication"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 153,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Discuss custom requirements"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 154,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Get personalized quotes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 155,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.2s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge",
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "💳"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 162,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Confirm & Pay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Once you've agreed on the details, confirm your order with the baker. Payment terms are arranged directly with your chosen baker."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Flexible payment options"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 167,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Secure deposit arrangements"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 168,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Order confirmation receipt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 169,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.3s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge",
                                                            children: "04"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "❤️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Receive & Enjoy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Collect your order or have it delivered. Enjoy your freshly made artisan treats and share the love by leaving a review!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Pickup or delivery options"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 181,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Freshly made to order"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Share your experience"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 183,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-flow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-tag",
                                                    children: "Visual Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-title",
                                                    children: "Customer Journey Flow"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "flow-diagram animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-steps",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon start",
                                                                    children: "🚀"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 201,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Start"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 202,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 204,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "🔍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 206,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Browse Bakers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 207,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 205,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "👤"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 211,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "View Profile"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 212,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon highlight",
                                                                    children: "💬"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 216,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "WhatsApp Chat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 217,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 215,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-connector",
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-steps",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon success",
                                                                    children: "🎉"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 225,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Enjoy & Review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 226,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "←"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 228,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "🚚"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 230,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Pickup/Delivery"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 231,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "←"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "👨‍🍳"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 235,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Baker Prepares"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 236,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow",
                                                            children: "←"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 238,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "💳"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 240,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Pay & Confirm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 241,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 239,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-cta",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "cta-card animate-on-scroll animate-scale",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "cta-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "cta-title",
                                                    children: "Ready to Discover Amazing Bakers?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "cta-desc",
                                                    children: "Browse our network of talented home bakers and find your next favorite treat."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partners",
                                                    className: "btn-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f",
                                                            children: "Explore Bakers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 256,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "btn-arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: activeTab === 'entrepreneurs' ? 'block' : 'none'
                        },
                        className: "jsx-bbaf51480073a19f" + " " + "content-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-intro",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "intro-grid animate-on-scroll animate-fade-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-bbaf51480073a19f" + " " + "intro-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-tag entrepreneur-tag",
                                                        children: "For Home Bakers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-title",
                                                        children: "Grow Your Baking Business"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "section-desc",
                                                        children: "Turn your passion into profit. Monate Cakes provides the platform, visibility, and tools you need to reach more customers and scale your home baking business. Join our network of successful artisan bakers across South Africa."
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-bbaf51480073a19f" + " " + "intro-features",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check entrepreneur",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 281,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Professional profile page"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 282,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 280,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check entrepreneur",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 285,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Increased customer reach"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 286,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 284,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "feature-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f" + " " + "feature-check entrepreneur",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 289,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-bbaf51480073a19f",
                                                                        children: "Marketing support"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                        lineNumber: 290,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 288,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-bbaf51480073a19f" + " " + "intro-visual",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "visual-card",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: "/images/Queens-Scone-Kitchen.jpeg",
                                                        alt: "Successful home baker",
                                                        className: "jsx-bbaf51480073a19f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-steps",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-tag light entrepreneur-tag",
                                                    children: "Your Path to Success"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-title light",
                                                    children: "Join Our Baker Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "steps-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card entrepreneur-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge entrepreneur",
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper entrepreneur",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "📝"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 315,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Submit Application"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Complete our simple online application form. Share your baking story, specialties, and showcase your best creations."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Basic personal information"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 320,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Business & specialty details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 321,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Portfolio images or social links"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 322,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.1s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card entrepreneur-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge entrepreneur",
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper entrepreneur",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Verification Process"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Our team reviews your application and conducts a brief verification call to ensure quality and build trust with customers."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Application review (24-48 hrs)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 334,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Quick verification call"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 335,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Food safety discussion"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 336,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.2s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card entrepreneur-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge entrepreneur",
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper entrepreneur",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "🖼️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 342,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Profile Setup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 345,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Once approved, we help you create a stunning profile that showcases your unique style and attracts your ideal customers."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Professional profile page"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 348,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Portfolio gallery setup"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 349,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Pricing & menu configuration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 350,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.3s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "step-card entrepreneur-card animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-number-badge entrepreneur",
                                                            children: "04"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-icon-wrapper entrepreneur",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bbaf51480073a19f" + " " + "step-emoji",
                                                                children: "📈"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                lineNumber: 357,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 356,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-title",
                                                            children: "Go Live & Grow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-desc",
                                                            children: "Your profile goes live! Start receiving inquiries, fulfilling orders, and building your reputation in the community."
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "step-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Receive customer inquiries"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 362,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Build reviews & reputation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 363,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "Access marketing opportunities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 364,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 361,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-flow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-tag entrepreneur-tag",
                                                    children: "Visual Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-title",
                                                    children: "Entrepreneur Journey Flow"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "flow-diagram entrepreneur-flow animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-phase-label",
                                                    children: "Application Phase"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-steps",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon start",
                                                                    children: "🚀"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 383,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Start Here"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 384,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 382,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 386,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "📝"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 388,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Fill Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 389,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 391,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "📧"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 393,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Submit & Wait"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 394,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 392,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-connector ent",
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-phase-label",
                                                    children: "Verification Phase"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-steps",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon highlight ent",
                                                                    children: "📞"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 403,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Team Review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 404,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 402,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 406,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "🎯"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 408,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Verification Call"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 409,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 407,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 411,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "✅"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 413,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Approved!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 414,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 412,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-connector ent",
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-phase-label",
                                                    children: "Growth Phase"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 420,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-steps",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "🖼️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 423,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Setup Profile"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 424,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 422,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 426,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon",
                                                                    children: "👁️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 428,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Go Live"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 429,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 427,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-arrow ent",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 431,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "flow-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-icon success ent",
                                                                    children: "📈"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 433,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-step-label",
                                                                    children: "Grow Business"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 434,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 421,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "flow-cycle",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "cycle-label",
                                                            children: "Ongoing Success Cycle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 439,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "cycle-steps",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "💬 Get Orders"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 441,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "cycle-arrow",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 442,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "🧁 Bake & Deliver"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 443,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "cycle-arrow",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 444,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "⭐ Get Reviews"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 445,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f" + " " + "cycle-arrow",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 446,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-bbaf51480073a19f",
                                                                    children: "🔄 Repeat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                                    lineNumber: 447,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-benefits",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-tag light entrepreneur-tag",
                                                    children: "What You Get"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "section-title light",
                                                    children: "Partner Benefits"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "benefits-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "benefit-item animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-icon",
                                                            children: "🌐"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 464,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-title",
                                                            children: "Digital Presence"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 465,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-desc",
                                                            children: "Professional profile visible to thousands of potential customers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 466,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.1s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "benefit-item animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-icon",
                                                            children: "🛡️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 469,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-title",
                                                            children: "Verified Badge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 470,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-desc",
                                                            children: "Trust indicator that increases customer confidence"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 471,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.2s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "benefit-item animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-icon",
                                                            children: "👥"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 474,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-title",
                                                            children: "Community"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 475,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-desc",
                                                            children: "Network with fellow bakers, share tips, and grow together"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 476,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.3s'
                                                    },
                                                    className: "jsx-bbaf51480073a19f" + " " + "benefit-item animate-on-scroll animate-fade-up",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-icon",
                                                            children: "📣"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 479,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-title",
                                                            children: "Marketing Tools"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 480,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "benefit-desc",
                                                            children: "Featured listings, promotions, and social media exposure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 481,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "jsx-bbaf51480073a19f" + " " + "section section-cta",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-bbaf51480073a19f" + " " + "cta-card entrepreneur-cta animate-on-scroll animate-scale",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "cta-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "cta-title",
                                                    children: "Ready to Start Your Journey?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "cta-desc",
                                                    children: "Join our network of successful home bakers and grow your business today."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/careers",
                                                    className: "btn-primary entrepreneur-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f",
                                                            children: "Apply Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-bbaf51480073a19f" + " " + "btn-arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                            lineNumber: 496,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "jsx-bbaf51480073a19f" + " " + "section section-faq",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-bbaf51480073a19f" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "section-header animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-tag",
                                            children: "Common Questions"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 508,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "jsx-bbaf51480073a19f" + " " + "section-title",
                                            children: "Frequently Asked Questions"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-bbaf51480073a19f" + " " + "faq-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-bbaf51480073a19f" + " " + "faq-item animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-question",
                                                    children: "How do I contact a baker?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-answer",
                                                    children: 'Each baker profile has a direct WhatsApp link. Simply click the "Chat on WhatsApp" button to start a conversation about your order.'
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.1s'
                                            },
                                            className: "jsx-bbaf51480073a19f" + " " + "faq-item animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-question",
                                                    children: "Are all bakers verified?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-answer",
                                                    children: "Yes! Every baker on our platform goes through a verification process to ensure quality and reliability for our customers."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 519,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.2s'
                                            },
                                            className: "jsx-bbaf51480073a19f" + " " + "faq-item animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-question",
                                                    children: "How long does verification take?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 522,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-answer",
                                                    children: "Most applications are reviewed within 24-48 hours. The verification call is typically scheduled within a few days of approval."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.3s'
                                            },
                                            className: "jsx-bbaf51480073a19f" + " " + "faq-item animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-question",
                                                    children: "Is there a cost to join as a baker?"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-bbaf51480073a19f" + " " + "faq-answer",
                                                    children: "Contact our team for current partnership options. We offer flexible plans designed to help bakers of all sizes succeed."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                                    lineNumber: 527,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/how-it-works.js",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/how-it-works.js",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/how-it-works.js",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/how-it-works.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "bbaf51480073a19f",
                children: '.page-wrapper.jsx-bbaf51480073a19f{--bg-primary:#fdf8f3;--bg-secondary:#fffbf7;--bg-card:#fff;--text-primary:#1c1c1c;--text-secondary:#4a4a4a;--text-muted:#7a7a7a;--border-color:#00000014;--color-caramel:#c4956a;--color-caramel-light:#d4a574;--color-caramel-dark:#a67c52;--color-sage:#8b9a7d;--font-display:"Cormorant Garamond",Georgia,serif;--font-body:"Outfit",-apple-system,BlinkMacSystemFont,sans-serif}.page-wrapper.dark.jsx-bbaf51480073a19f{--bg-primary:#0f0f0f;--bg-secondary:#1a1a2e;--bg-card:#1e1e2e;--text-primary:#fff;--text-secondary:#e0e0e0;--text-muted:#a0a0a0;--border-color:#ffffff1a}.page-wrapper.jsx-bbaf51480073a19f{background:var(--bg-primary);min-height:100vh;transition:background .3s}.hero.jsx-bbaf51480073a19f{background:linear-gradient(165deg,#0f0f0f 0%,#1a1a2e 40%,#1f1f35 100%);align-items:center;min-height:60vh;padding:140px 0 80px;display:flex;position:relative;overflow:hidden}.hero-bg.jsx-bbaf51480073a19f{pointer-events:none;position:absolute;inset:0}.gradient-orb.jsx-bbaf51480073a19f{filter:blur(80px);border-radius:50%;position:absolute}.orb-1.jsx-bbaf51480073a19f{background:radial-gradient(circle,#c4956a26 0%,#0000 70%);width:350px;height:350px;top:20%;left:30%}.orb-2.jsx-bbaf51480073a19f{background:radial-gradient(circle,#8b9a7d1f 0%,#0000 70%);width:250px;height:250px;bottom:20%;right:20%}.container.jsx-bbaf51480073a19f{width:100%;max-width:1200px;margin:0 auto;padding:0 20px}@media (width>=768px){.container.jsx-bbaf51480073a19f{padding:0 40px}}.hero-content.jsx-bbaf51480073a19f{text-align:center;max-width:700px;margin:0 auto}.hero-badge.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--color-caramel-light);background:#c4956a26;border:1px solid #c4956a4d;border-radius:100px;align-items:center;gap:8px;margin-bottom:24px;padding:10px 20px;font-size:.9rem;font-weight:500;display:inline-flex}.badge-icon.jsx-bbaf51480073a19f{font-size:1rem}.hero-title.jsx-bbaf51480073a19f{font-family:var(--font-display);color:#fff;margin-bottom:20px;font-size:max(2.5rem,min(6vw,4rem));font-weight:600;line-height:1.15}.hero-subtitle.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#ffffffb3;max-width:600px;margin-bottom:40px;margin-left:auto;margin-right:auto;font-size:max(1rem,min(2vw,1.15rem));line-height:1.7}.tab-switcher.jsx-bbaf51480073a19f{background:#ffffff14;border:1px solid #ffffff26;border-radius:14px;gap:8px;padding:6px;display:inline-flex}.tab-btn.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#fff9;cursor:pointer;background:0 0;border:none;border-radius:10px;align-items:center;gap:10px;padding:14px 24px;font-size:.95rem;font-weight:500;transition:all .3s;display:flex}.tab-btn.jsx-bbaf51480073a19f:hover{color:#ffffffe6;background:#ffffff0d}.tab-btn.active.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);color:#fff;box-shadow:0 4px 15px #c4956a66}.tab-icon.jsx-bbaf51480073a19f{font-size:1.1rem}.content-section.jsx-bbaf51480073a19f{width:100%}.section.jsx-bbaf51480073a19f{width:100%;padding:80px 0}@media (width>=768px){.section.jsx-bbaf51480073a19f{padding:100px 0}}.section-intro.jsx-bbaf51480073a19f{background:var(--bg-primary)}.intro-grid.jsx-bbaf51480073a19f{grid-template-columns:1fr;align-items:center;gap:48px;display:grid}@media (width>=992px){.intro-grid.jsx-bbaf51480073a19f{grid-template-columns:1.1fr .9fr;gap:64px}}.section-tag.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--color-caramel);text-transform:uppercase;letter-spacing:.12em;margin-bottom:12px;font-size:.8rem;font-weight:600;display:inline-block}.section-tag.light.jsx-bbaf51480073a19f{color:var(--color-caramel-light)}.section-tag.entrepreneur-tag.jsx-bbaf51480073a19f{color:var(--color-sage)}.section-title.jsx-bbaf51480073a19f{font-family:var(--font-display);color:var(--text-primary);margin-bottom:16px;font-size:max(2rem,min(4vw,2.75rem));font-weight:600;line-height:1.2}.section-title.light.jsx-bbaf51480073a19f{color:#fff}.section-desc.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-secondary);margin-bottom:24px;font-size:1.05rem;line-height:1.7}.intro-features.jsx-bbaf51480073a19f{flex-direction:column;gap:14px;display:flex}.feature-item.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-secondary);align-items:center;gap:12px;font-size:1rem;display:flex}.feature-check.jsx-bbaf51480073a19f{background:var(--color-caramel);color:#fff;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:24px;height:24px;font-size:.75rem;font-weight:700;display:flex}.feature-check.entrepreneur.jsx-bbaf51480073a19f{background:var(--color-sage)}.intro-visual.jsx-bbaf51480073a19f{display:none}@media (width>=992px){.intro-visual.jsx-bbaf51480073a19f{display:block}}.visual-card.jsx-bbaf51480073a19f{border-radius:20px;overflow:hidden;box-shadow:0 20px 50px #00000026}.visual-card.jsx-bbaf51480073a19f img.jsx-bbaf51480073a19f{width:100%;height:auto;display:block}.section-steps.jsx-bbaf51480073a19f{background:linear-gradient(#0f0f0f 0%,#1a1a2e 100%)}.section-header.jsx-bbaf51480073a19f{text-align:center;margin-bottom:56px}.steps-grid.jsx-bbaf51480073a19f{grid-template-columns:1fr;gap:24px;display:grid}@media (width>=640px){.steps-grid.jsx-bbaf51480073a19f{grid-template-columns:repeat(2,1fr)}}@media (width>=992px){.steps-grid.jsx-bbaf51480073a19f{grid-template-columns:repeat(4,1fr)}}.step-card.jsx-bbaf51480073a19f{background:#ffffff0a;border:1px solid #ffffff1a;border-radius:20px;padding:32px 24px;transition:transform .3s,box-shadow .3s;position:relative}.step-card.jsx-bbaf51480073a19f:hover{transform:translateY(-4px);box-shadow:0 20px 40px #0000004d}.step-number-badge.jsx-bbaf51480073a19f{font-family:var(--font-display);color:#c4956a33;font-size:2.5rem;font-weight:700;line-height:1;position:absolute;top:16px;right:16px}.step-number-badge.entrepreneur.jsx-bbaf51480073a19f{color:#8b9a7d33}.step-icon-wrapper.jsx-bbaf51480073a19f{background:linear-gradient(135deg,#c4956a26 0%,#c4956a14 100%);border:1px solid #c4956a33;border-radius:16px;justify-content:center;align-items:center;width:64px;height:64px;margin-bottom:20px;display:flex}.step-icon-wrapper.entrepreneur.jsx-bbaf51480073a19f{background:linear-gradient(135deg,#8b9a7d26 0%,#8b9a7d14 100%);border-color:#8b9a7d33}.step-emoji.jsx-bbaf51480073a19f{font-size:1.75rem}.step-title.jsx-bbaf51480073a19f{font-family:var(--font-display);color:#fff;margin-bottom:12px;font-size:1.4rem;font-weight:600}.step-desc.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#ffffffb3;margin-bottom:20px;font-size:.95rem;line-height:1.6}.step-details.jsx-bbaf51480073a19f{border-top:1px solid #ffffff1a;margin:0;padding:16px 0 0;list-style:none}.step-details.jsx-bbaf51480073a19f li.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#fff9;padding:8px 0 8px 20px;font-size:.85rem;position:relative}.step-details.jsx-bbaf51480073a19f li.jsx-bbaf51480073a19f:before{content:"•";color:var(--color-caramel-light);font-weight:700;position:absolute;left:4px}.entrepreneur-card.jsx-bbaf51480073a19f .step-details.jsx-bbaf51480073a19f li.jsx-bbaf51480073a19f:before{color:var(--color-sage)}.section-flow.jsx-bbaf51480073a19f{background:var(--bg-primary)}.flow-diagram.jsx-bbaf51480073a19f{background:var(--bg-card);border:1px solid var(--border-color);border-radius:24px;padding:40px 24px;overflow-x:auto;box-shadow:0 10px 40px #0000000f}@media (width>=768px){.flow-diagram.jsx-bbaf51480073a19f{padding:48px}}.flow-phase-label.jsx-bbaf51480073a19f{text-align:center;font-family:var(--font-body);color:#fff;text-transform:uppercase;letter-spacing:.1em;background:var(--color-sage);border-radius:100px;margin-bottom:16px;margin-left:50%;padding:8px 20px;font-size:.75rem;font-weight:600;display:inline-block;transform:translate(-50%)}.flow-steps.jsx-bbaf51480073a19f{flex-wrap:wrap;justify-content:center;align-items:center;gap:8px;margin-bottom:8px;display:flex}@media (width>=768px){.flow-steps.jsx-bbaf51480073a19f{flex-wrap:nowrap;gap:16px}}.flow-step.jsx-bbaf51480073a19f{flex-direction:column;align-items:center;gap:10px;min-width:80px;display:flex}@media (width>=768px){.flow-step.jsx-bbaf51480073a19f{min-width:100px}}.flow-step-icon.jsx-bbaf51480073a19f{background:var(--bg-secondary);border:2px solid var(--border-color);border-radius:14px;justify-content:center;align-items:center;width:56px;height:56px;font-size:1.5rem;transition:all .3s;display:flex}@media (width>=768px){.flow-step-icon.jsx-bbaf51480073a19f{border-radius:16px;width:64px;height:64px}}.flow-step-icon.start.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);border-color:var(--color-caramel)}.flow-step-icon.highlight.jsx-bbaf51480073a19f{border-color:var(--color-caramel);background:#c4956a33;border-width:3px}.flow-step-icon.highlight.ent.jsx-bbaf51480073a19f{border-color:var(--color-sage);background:#8b9a7d33}.flow-step-icon.success.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-sage)0%,#6b7a5e 100%);border-color:var(--color-sage)}.flow-step-icon.success.ent.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-sage)0%,#6b7a5e 100%)}.flow-step-label.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-primary);text-align:center;font-size:.75rem;font-weight:600}@media (width>=768px){.flow-step-label.jsx-bbaf51480073a19f{font-size:.85rem}}.flow-arrow.jsx-bbaf51480073a19f{color:var(--color-caramel);font-size:1.25rem;font-weight:700}.flow-arrow.ent.jsx-bbaf51480073a19f{color:var(--color-sage)}.flow-connector.jsx-bbaf51480073a19f{text-align:center;color:var(--color-caramel);margin:16px 0;font-size:1.5rem}.flow-connector.ent.jsx-bbaf51480073a19f{color:var(--color-sage)}.flow-cycle.jsx-bbaf51480073a19f{text-align:center;border-top:2px dashed #8b9a7d4d;margin-top:32px;padding-top:24px}.cycle-label.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--color-sage);text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;font-size:.8rem;font-weight:600}.cycle-steps.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-secondary);flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;font-size:.9rem;display:flex}.cycle-arrow.jsx-bbaf51480073a19f{color:var(--color-sage);font-weight:700}.section-benefits.jsx-bbaf51480073a19f{background:linear-gradient(#0f0f0f 0%,#1a1a2e 100%)}.benefits-grid.jsx-bbaf51480073a19f{grid-template-columns:repeat(2,1fr);gap:24px;display:grid}@media (width>=768px){.benefits-grid.jsx-bbaf51480073a19f{grid-template-columns:repeat(4,1fr)}}.benefit-item.jsx-bbaf51480073a19f{text-align:center;background:#ffffff0a;border:1px solid #ffffff1a;border-radius:16px;padding:28px 20px;transition:transform .3s}.benefit-item.jsx-bbaf51480073a19f:hover{transform:translateY(-4px)}.benefit-icon.jsx-bbaf51480073a19f{margin-bottom:16px;font-size:2.5rem}.benefit-title.jsx-bbaf51480073a19f{font-family:var(--font-display);color:#fff;margin-bottom:8px;font-size:1.15rem;font-weight:600}.benefit-desc.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#ffffffb3;font-size:.9rem;line-height:1.5}.section-cta.jsx-bbaf51480073a19f{background:var(--bg-primary);padding:60px 0 80px}.cta-card.jsx-bbaf51480073a19f{text-align:center;background:linear-gradient(135deg,#1c1c1c 0%,#2a2a3e 100%);border-radius:24px;padding:48px 32px;position:relative;overflow:hidden}.cta-card.jsx-bbaf51480073a19f:before{content:"";pointer-events:none;background:radial-gradient(circle,#c4956a26 0%,#0000 70%);width:300px;height:300px;position:absolute;top:0;left:50%;transform:translate(-50%)}.entrepreneur-cta.jsx-bbaf51480073a19f{background:linear-gradient(135deg,#2d3a2d 0%,#1a2a1a 100%)}.entrepreneur-cta.jsx-bbaf51480073a19f:before{background:radial-gradient(circle,#8b9a7d26 0%,#0000 70%)}.cta-content.jsx-bbaf51480073a19f{z-index:1;position:relative}.cta-title.jsx-bbaf51480073a19f{font-family:var(--font-display);color:#fff;margin-bottom:12px;font-size:max(1.75rem,min(4vw,2.25rem));font-weight:600}.cta-desc.jsx-bbaf51480073a19f{font-family:var(--font-body);color:#ffffffb3;max-width:400px;margin-bottom:28px;margin-left:auto;margin-right:auto;font-size:1.05rem}.btn-primary.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-caramel)0%,var(--color-caramel-dark)100%);color:#fff;font-family:var(--font-body);border-radius:12px;align-items:center;gap:12px;padding:16px 32px;font-size:1rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-flex;box-shadow:0 4px 20px #c4956a66}.btn-primary.jsx-bbaf51480073a19f:hover{transform:translateY(-2px);box-shadow:0 8px 28px #c4956a80}.entrepreneur-btn.jsx-bbaf51480073a19f{background:linear-gradient(135deg,var(--color-sage)0%,#6b7a5e 100%);box-shadow:0 4px 20px #8b9a7d66}.entrepreneur-btn.jsx-bbaf51480073a19f:hover{box-shadow:0 8px 28px #8b9a7d80}.btn-arrow.jsx-bbaf51480073a19f{font-size:1.2rem;transition:transform .3s}.btn-primary.jsx-bbaf51480073a19f:hover .btn-arrow.jsx-bbaf51480073a19f{transform:translate(4px)}.section-faq.jsx-bbaf51480073a19f{background:var(--bg-secondary);padding-bottom:100px}.page-wrapper.dark.jsx-bbaf51480073a19f .section-faq.jsx-bbaf51480073a19f{background:#0f0f0f}.faq-grid.jsx-bbaf51480073a19f{grid-template-columns:1fr;gap:20px;max-width:900px;margin:0 auto;display:grid}@media (width>=768px){.faq-grid.jsx-bbaf51480073a19f{grid-template-columns:repeat(2,1fr)}}.faq-item.jsx-bbaf51480073a19f{background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;padding:28px;box-shadow:0 4px 20px #0000000a}.page-wrapper.dark.jsx-bbaf51480073a19f .faq-item.jsx-bbaf51480073a19f{background:#ffffff0a;border-color:#ffffff1a}.faq-question.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-primary);margin-bottom:12px;font-size:1.1rem;font-weight:600}.faq-answer.jsx-bbaf51480073a19f{font-family:var(--font-body);color:var(--text-muted);font-size:.95rem;line-height:1.6}.animate-on-scroll.jsx-bbaf51480073a19f{opacity:0;transition:opacity .6s,transform .6s cubic-bezier(.4,0,.2,1);transform:translateY(30px)}.animate-on-scroll.animate-scale.jsx-bbaf51480073a19f{transform:scale(.95)}.animate-on-scroll.animated.jsx-bbaf51480073a19f{opacity:1;transform:translateY(0)scale(1)}@media (width<=768px){.hero.jsx-bbaf51480073a19f{min-height:auto;padding:120px 0 60px}.tab-switcher.jsx-bbaf51480073a19f{flex-direction:column;width:100%;max-width:280px}.tab-btn.jsx-bbaf51480073a19f{justify-content:center;width:100%}.section.jsx-bbaf51480073a19f{padding:60px 0}.flow-diagram.jsx-bbaf51480073a19f{padding:24px 16px}}@media (hover:none){.btn-primary.jsx-bbaf51480073a19f:hover,.step-card.jsx-bbaf51480073a19f:hover,.benefit-item.jsx-bbaf51480073a19f:hover{transform:none}.btn-primary.jsx-bbaf51480073a19f:active{transform:scale(.98)}}@supports (padding:max(0px)){.hero.jsx-bbaf51480073a19f{padding-top:max(140px,env(safe-area-inset-top) + 120px)}}'
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

//# sourceMappingURL=%5Broot-of-the-server%5D__3c35d7d7._.js.map