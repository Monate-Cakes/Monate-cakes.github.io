(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/monate-cakes/components/Navbar.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/styled-jsx/style.js [client] (ecmascript)");
// components/Navbar.js
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Navbar({ theme, setTheme }) {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        // Also update localStorage for persistence
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('theme', newTheme);
        }
    };
    // Close mobile menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-311b7aba5dec32bb" + " " + "promo-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "jsx-311b7aba5dec32bb",
                    children: [
                        "🎉 New Year Special: Get 15% OFF on all custom cakes! Use code ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-311b7aba5dec32bb" + " " + `navbar-custom ${scrolled ? 'scrolled' : ''} ${theme}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-311b7aba5dec32bb" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "navbar-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-icon",
                                        children: "🎂"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-text",
                                        children: [
                                            "Monate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-311b7aba5dec32bb" + " " + "nav-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-311b7aba5dec32bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-311b7aba5dec32bb" + " " + "nav-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
                                        className: "jsx-311b7aba5dec32bb" + " " + "theme-toggle",
                                        children: theme === 'dark' ? '☀️' : '🌙'
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        className: "btn-primary-nav",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "btn-icon",
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMenuOpen(true),
                                        "aria-label": "Open menu",
                                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-btn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "hamburger-line"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-311b7aba5dec32bb" + " " + "hamburger-line"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Navbar.js",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setMobileMenuOpen(false),
                className: "jsx-311b7aba5dec32bb" + " " + `mobile-overlay ${mobileMenuOpen ? 'active' : ''}`
            }, void 0, false, {
                fileName: "[project]/monate-cakes/components/Navbar.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-311b7aba5dec32bb" + " " + `mobile-menu ${mobileMenuOpen ? 'active' : ''} ${theme}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-icon",
                                        children: "🎂"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-311b7aba5dec32bb" + " " + "brand-text",
                                        children: [
                                            "Monate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#services",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#pricing",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/how-it-works",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/partners",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/careers",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-311b7aba5dec32bb" + " " + "mobile-menu-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/partners",
                                className: "btn-primary-mobile",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "311b7aba5dec32bb",
                children: ".promo-banner.jsx-311b7aba5dec32bb{color:#fff;text-align:center;background:linear-gradient(90deg,#c4956a 0%,#a67c52 100%);padding:10px 20px;font-family:Outfit,sans-serif;font-size:.85rem;font-weight:500}.promo-code.jsx-311b7aba5dec32bb{background:#fff3;border-radius:4px;margin-left:4px;padding:2px 8px;font-weight:700}.navbar-custom.jsx-311b7aba5dec32bb{z-index:1000;background:0 0;padding:16px 0;transition:all .3s;position:fixed;top:40px;left:0;right:0}.navbar-custom.scrolled.jsx-311b7aba5dec32bb{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#0f0f0ff2;padding:12px 0;box-shadow:0 4px 20px #0000004d}.navbar-custom.light.scrolled.jsx-311b7aba5dec32bb{background:#fffffff2;box-shadow:0 4px 20px #0000001a}.container.jsx-311b7aba5dec32bb{max-width:1200px;margin:0 auto;padding:0 20px}.navbar-inner.jsx-311b7aba5dec32bb{justify-content:space-between;align-items:center;display:flex}.nav-brand.jsx-311b7aba5dec32bb{color:#fff;align-items:center;gap:10px;font-family:Cormorant Garamond,serif;font-size:1.5rem;font-weight:600;text-decoration:none;display:flex}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{color:#1c1c1c}.brand-icon.jsx-311b7aba5dec32bb{font-size:1.5rem}.brand-accent.jsx-311b7aba5dec32bb{color:#c4956a}.nav-links.jsx-311b7aba5dec32bb{gap:32px;margin:0;padding:0;list-style:none;display:none}@media (width>=768px){.nav-links.jsx-311b7aba5dec32bb{display:flex}}.nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#fffc;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;text-decoration:none;transition:color .2s}.nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#000000b3}.navbar-custom.light.jsx-311b7aba5dec32bb .nav-links.jsx-311b7aba5dec32bb li.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a}.nav-actions.jsx-311b7aba5dec32bb{align-items:center;gap:12px;display:flex}.theme-toggle.jsx-311b7aba5dec32bb{cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;justify-content:center;align-items:center;width:44px;height:44px;font-size:1.2rem;transition:all .2s;display:flex}.theme-toggle.jsx-311b7aba5dec32bb:hover{background:#ffffff26;transform:scale(1.05)}.navbar-custom.light.jsx-311b7aba5dec32bb .theme-toggle.jsx-311b7aba5dec32bb{background:#0000000d;border-color:#0000001a}.navbar-custom.light.jsx-311b7aba5dec32bb .theme-toggle.jsx-311b7aba5dec32bb:hover{background:#0000001a}.btn-primary-nav.jsx-311b7aba5dec32bb{color:#fff;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border-radius:12px;align-items:center;gap:8px;padding:12px 20px;font-family:Outfit,sans-serif;font-size:.9rem;font-weight:600;text-decoration:none;transition:all .3s;display:none;box-shadow:0 4px 15px #c4956a4d}@media (width>=768px){.btn-primary-nav.jsx-311b7aba5dec32bb{display:flex}}.btn-primary-nav.jsx-311b7aba5dec32bb:hover{transform:translateY(-2px);box-shadow:0 6px 20px #c4956a66}.btn-icon.jsx-311b7aba5dec32bb{font-size:1rem}.mobile-menu-btn.jsx-311b7aba5dec32bb{cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;flex-direction:column;justify-content:center;gap:5px;width:44px;height:44px;padding:12px;display:flex}@media (width>=768px){.mobile-menu-btn.jsx-311b7aba5dec32bb{display:none}}.navbar-custom.light.jsx-311b7aba5dec32bb .mobile-menu-btn.jsx-311b7aba5dec32bb{background:#0000000d;border-color:#0000001a}.hamburger-line.jsx-311b7aba5dec32bb{background:#fff;border-radius:2px;width:100%;height:2px;transition:all .3s}.navbar-custom.light.jsx-311b7aba5dec32bb .hamburger-line.jsx-311b7aba5dec32bb{background:#1c1c1c}.mobile-overlay.jsx-311b7aba5dec32bb{z-index:1001;opacity:0;visibility:hidden;background:#00000080;transition:all .3s;position:fixed;inset:0}.mobile-overlay.active.jsx-311b7aba5dec32bb{opacity:1;visibility:visible}.mobile-menu.jsx-311b7aba5dec32bb{z-index:1002;background:#0f0f0f;flex-direction:column;width:85%;max-width:320px;padding:24px;transition:transform .3s cubic-bezier(.4,0,.2,1);display:flex;position:fixed;top:0;bottom:0;right:0;transform:translate(100%)}.mobile-menu.light.jsx-311b7aba5dec32bb{background:#fff}.mobile-menu.active.jsx-311b7aba5dec32bb{transform:translate(0)}.mobile-menu-header.jsx-311b7aba5dec32bb{border-bottom:1px solid #ffffff1a;justify-content:space-between;align-items:center;margin-bottom:24px;padding-bottom:24px;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-header.jsx-311b7aba5dec32bb{border-color:#0000001a}.mobile-menu.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{font-size:1.3rem}.mobile-menu.light.jsx-311b7aba5dec32bb .nav-brand.jsx-311b7aba5dec32bb{color:#1c1c1c}.mobile-menu-close.jsx-311b7aba5dec32bb{color:#fff;cursor:pointer;background:#ffffff1a;border:none;border-radius:10px;justify-content:center;align-items:center;width:40px;height:40px;font-size:1.2rem;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-close.jsx-311b7aba5dec32bb{color:#1c1c1c;background:#0000000d}.mobile-menu-links.jsx-311b7aba5dec32bb{flex-direction:column;flex:1;gap:8px;display:flex}.mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#ffffffe6;border-radius:12px;align-items:center;gap:14px;padding:16px;font-family:Outfit,sans-serif;font-size:1.05rem;font-weight:500;text-decoration:none;transition:all .2s;display:flex}.mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{color:#c4956a;background:#ffffff0d}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb{color:#1c1c1c}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-links.jsx-311b7aba5dec32bb a.jsx-311b7aba5dec32bb:hover{background:#0000000d}.menu-icon.jsx-311b7aba5dec32bb{font-size:1.2rem}.mobile-menu-footer.jsx-311b7aba5dec32bb{border-top:1px solid #ffffff1a;flex-direction:column;gap:12px;padding-top:24px;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .mobile-menu-footer.jsx-311b7aba5dec32bb{border-color:#0000001a}.btn-primary-mobile.jsx-311b7aba5dec32bb{color:#fff;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border-radius:12px;justify-content:center;align-items:center;gap:10px;padding:16px;font-family:Outfit,sans-serif;font-size:1rem;font-weight:600;text-decoration:none;display:flex}.theme-toggle-mobile.jsx-311b7aba5dec32bb{color:#ffffffe6;cursor:pointer;background:#ffffff1a;border:1px solid #ffffff26;border-radius:12px;justify-content:center;align-items:center;gap:10px;padding:14px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;display:flex}.mobile-menu.light.jsx-311b7aba5dec32bb .theme-toggle-mobile.jsx-311b7aba5dec32bb{color:#1c1c1c;background:#0000000d;border-color:#0000001a}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Navbar, "wcSKKbtVeFBGbf4+At4+128hOUA=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/monate-cakes/components/LocationSelector.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const provinces = [
    'KwaZulu-Natal',
    'Gauteng' /* Add all */ 
];
const cities = {
    'KwaZulu-Natal': [
        'Durban',
        'Pietermaritzburg'
    ],
    'Gauteng': [
        'Johannesburg',
        'Pretoria'
    ]
};
function LocationSelector({ onChange }) {
    _s();
    const [province, setProvince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(provinces[0]);
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(cities[provinces[0]][0]);
    const handleProvinceChange = (e)=>{
        const p = e.target.value;
        setProvince(p);
        setCity(cities[p][0]);
        onChange?.({
            province: p,
            city: cities[p][0]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-81859269b92d637c" + " " + "location-selector-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-81859269b92d637c" + " " + "location-input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "province-select",
                                className: "jsx-81859269b92d637c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "jsx-81859269b92d637c" + " " + "bi bi-map"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    "Province"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "province-select",
                                value: province,
                                onChange: handleProvinceChange,
                                className: "jsx-81859269b92d637c",
                                children: provinces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p,
                                        className: "jsx-81859269b92d637c",
                                        children: p
                                    }, p, false, {
                                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-81859269b92d637c" + " " + "location-input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "city-select",
                                className: "jsx-81859269b92d637c",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "jsx-81859269b92d637c" + " " + "bi bi-geo-alt"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    "City"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "city-select",
                                value: city,
                                onChange: (e)=>{
                                    setCity(e.target.value);
                                    onChange?.({
                                        province,
                                        city: e.target.value
                                    });
                                },
                                className: "jsx-81859269b92d637c",
                                children: cities[province].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c,
                                        className: "jsx-81859269b92d637c",
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/components/LocationSelector.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "81859269b92d637c",
                children: ".location-selector-container.jsx-81859269b92d637c{gap:16px;width:100%;max-width:700px;margin:0 auto;display:flex}.location-input-group.jsx-81859269b92d637c{flex-direction:column;flex:1;gap:8px;display:flex}.location-input-group.jsx-81859269b92d637c label.jsx-81859269b92d637c{color:#ffffffb3;text-transform:uppercase;letter-spacing:.5px;align-items:center;gap:8px;font-size:.9rem;font-weight:500;display:flex}.location-input-group.jsx-81859269b92d637c label.jsx-81859269b92d637c i.jsx-81859269b92d637c{color:#d4a574;font-size:1rem}.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c{color:#fff;cursor:pointer;appearance:none;background:#ffffff0d url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D4A574' d='M6 9L1 4h10z'/%3E%3C/svg%3E\") right 16px center no-repeat;border:1px solid #ffffff26;border-radius:12px;width:100%;padding:14px 44px 14px 16px;font-size:1rem;font-weight:500;transition:all .3s}.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c:hover{background:#ffffff14;border-color:#d4a5744d}.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c:focus{border-color:#d4a574;outline:none;box-shadow:0 0 0 3px #d4a5741a}.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c option.jsx-81859269b92d637c{color:#fff;background:#1a1a1a;padding:12px}@media (width<=640px){.location-selector-container.jsx-81859269b92d637c{flex-direction:column;gap:12px}.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c{border-radius:14px;padding:16px;font-size:1.05rem}.location-input-group.jsx-81859269b92d637c label.jsx-81859269b92d637c{font-size:.85rem}}@media (width<=480px){.location-input-group.jsx-81859269b92d637c select.jsx-81859269b92d637c{-webkit-appearance:none;-moz-appearance:none;padding:18px 16px;font-size:16px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(LocationSelector, "+Ujhj3Pux6s0xBpfudOF/1IH93A=");
_c = LocationSelector;
var _c;
__turbopack_context__.k.register(_c, "LocationSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/monate-cakes/components/Footer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [client] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "jsx-a2930d16c4cf75f8" + " " + "footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a2930d16c4cf75f8" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "footer-logo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "jsx-a2930d16c4cf75f8" + " " + "bi bi-cake2"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/components/Footer.js",
                                                lineNumber: 11,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: [
                                                    "Monate",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-tagline",
                                        children: "The sweetest way to celebrate."
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a2930d16c4cf75f8" + " " + "social-icons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Facebook",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Instagram",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "Twitter",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": "WhatsApp",
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Footer.js",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-a2930d16c4cf75f8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:hello@monatecakes.co.za",
                                                    className: "jsx-a2930d16c4cf75f8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-a2930d16c4cf75f8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/27825550000",
                                                    className: "jsx-a2930d16c4cf75f8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2930d16c4cf75f8" + " " + "footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a2930d16c4cf75f8",
                                children: "© 2026 Monate Cakes. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/components/Footer.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a2930d16c4cf75f8" + " " + "footer-made",
                                children: [
                                    "Made with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/27825550000",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Contact on WhatsApp",
                className: "jsx-a2930d16c4cf75f8" + " " + "whatsapp-float",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/monate-cakes/data/partnersData.js [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/monate-cakes/pages/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/styled-jsx/style.js [client] (ecmascript)");
// pages/index.js
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Navbar.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$LocationSelector$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/LocationSelector.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Footer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$data$2f$partnersData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/data/partnersData.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function Home({ theme, setTheme }) {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        province: 'KwaZulu-Natal',
        city: 'Durban'
    });
    const [partners, setPartners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchPartners = ({ province, city })=>{
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$data$2f$partnersData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["partnersData"].filter((p)=>p.province === province && p.city === city);
        setPartners(filtered);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchPartners(selected);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    entries.forEach({
                        "Home.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('animated');
                            }
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"], {
                threshold: 0.1
            });
            document.querySelectorAll('.animate-on-scroll').forEach({
                "Home.useEffect": (el)=>{
                    observer.observe(el);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        partners
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-7f2afa2da432efe2",
                        children: "Monate Cakes | Find Local Bakers in South Africa"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        className: "jsx-7f2afa2da432efe2"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: theme === 'dark' ? '#0F0F0F' : '#FDF8F3',
                        className: "jsx-7f2afa2da432efe2"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-7f2afa2da432efe2"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous",
                        className: "jsx-7f2afa2da432efe2"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet",
                        className: "jsx-7f2afa2da432efe2"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/index.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7f2afa2da432efe2" + " " + `page-wrapper ${theme}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        theme: theme,
                        setTheme: setTheme
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-7f2afa2da432efe2" + " " + "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7f2afa2da432efe2" + " " + "hero-overlay"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/index.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7f2afa2da432efe2" + " " + "hero-pattern"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/index.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7f2afa2da432efe2" + " " + "container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "hero-text animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-badge",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "badge-icon",
                                                            children: "🍰"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "South Africa's Home Baker Network"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 67,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-title",
                                                    children: [
                                                        "Discover ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "text-gradient",
                                                            children: "Homemade"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 70,
                                                            columnNumber: 28
                                                        }, this),
                                                        " Goodness from Local Bakers"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-subtitle",
                                                    children: "From traditional koesisters to modern wedding cakes — connect with passionate home bakers in your neighbourhood who pour love into every creation."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-stats",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "stat-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-number",
                                                                    children: "50+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 77,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-label",
                                                                    children: "Local Bakers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 78,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "stat-divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "stat-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-number",
                                                                    children: "4.8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 82,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-label",
                                                                    children: "Average Rating"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 83,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "stat-divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "stat-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-number",
                                                                    children: "1000+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 87,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "stat-label",
                                                                    children: "Happy Customers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 88,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "hero-buttons",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#partners",
                                                            className: "jsx-7f2afa2da432efe2" + " " + "btn-primary",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2",
                                                                    children: "🔍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 93,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2",
                                                                    children: "Find Your Baker"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 94,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/partners",
                                                            className: "btn-outline",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "Browse All Bakers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 97,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 96,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "hero-visual",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7f2afa2da432efe2" + " " + "hero-image-stack",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7f2afa2da432efe2" + " " + "hero-img hero-img-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/Cake Whisper Sisters.jpeg",
                                                            alt: "Wedding cake",
                                                            className: "jsx-7f2afa2da432efe2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7f2afa2da432efe2" + " " + "hero-img hero-img-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/Durban Delights Bakery.jpeg",
                                                            alt: "Cupcakes",
                                                            className: "jsx-7f2afa2da432efe2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7f2afa2da432efe2" + " " + "hero-img hero-img-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/Wisdom & Whisk Bakery.jpeg",
                                                            alt: "Traditional baking",
                                                            className: "jsx-7f2afa2da432efe2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7f2afa2da432efe2" + " " + "floating-badge",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 113,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "Verified Bakers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/index.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-7f2afa2da432efe2" + " " + "trust-banner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7f2afa2da432efe2" + " " + "trust-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7f2afa2da432efe2" + " " + "trust-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2" + " " + "trust-icon",
                                                children: "🛡️"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "Quality Guaranteed"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7f2afa2da432efe2" + " " + "trust-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2" + " " + "trust-icon",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "Local Delivery"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7f2afa2da432efe2" + " " + "trust-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2" + " " + "trust-icon",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "Direct WhatsApp Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7f2afa2da432efe2" + " " + "trust-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2" + " " + "trust-icon",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "Verified Reviews"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/index.js",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "partners",
                        className: "jsx-7f2afa2da432efe2" + " " + "section section-bakers",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "section-header animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-tag",
                                            children: "Meet Our Bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-title",
                                            children: "Local Bakers in Your Area"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-subtitle",
                                            children: "Talented home bakers ready to make your celebrations special"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "location-selector-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$LocationSelector$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        onChange: (val)=>{
                                            setSelected(val);
                                            fetchPartners(val);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "bakers-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "bakers-location",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7f2afa2da432efe2",
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                "Bakers in ",
                                                selected.city,
                                                ", ",
                                                selected.province
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/partners",
                                            className: "view-all-link",
                                            children: "View all bakers →"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                partners.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "no-results animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "no-results-icon",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-7f2afa2da432efe2",
                                            children: "No bakers found in this area yet"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2",
                                            children: "We're expanding! Check back soon or try a nearby city."
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "bakers-grid animate-on-scroll animate-fade-up",
                                    children: partners.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/partners?baker=${p.slug}`,
                                            className: "baker-card",
                                            style: {
                                                animationDelay: `${idx * 0.1}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "baker-image",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: p.image,
                                                            alt: p.name,
                                                            className: "jsx-7f2afa2da432efe2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-rating",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2",
                                                                    children: "⭐"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2",
                                                                    children: p.rating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 183,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "baker-content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-name",
                                                            children: p.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 187,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-location-text",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2",
                                                                    children: "📍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 189,
                                                                    columnNumber: 25
                                                                }, this),
                                                                p.suburb,
                                                                ", ",
                                                                p.city
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-desc",
                                                            children: p.shortDesc
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-specialties",
                                                            children: p.specialties.slice(0, 3).map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "specialty-tag",
                                                                    children: spec
                                                                }, idx, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 195,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7f2afa2da432efe2" + " " + "baker-footer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "baker-price",
                                                                    children: p.priceRange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 199,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7f2afa2da432efe2" + " " + "baker-reviews",
                                                                    children: [
                                                                        p.reviewCount,
                                                                        " reviews"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 198,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "baker-hover-action",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "View Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "services",
                        className: "jsx-7f2afa2da432efe2" + " " + "section section-services",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "section-header animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-tag",
                                            children: "What We Offer"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-title",
                                            children: "Baking Services"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-subtitle",
                                            children: "From intimate celebrations to grand events"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "services-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "service-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-icon",
                                                    children: "🎂"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-title",
                                                    children: "Custom Cakes"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-desc",
                                                    children: "Personalised cakes for birthdays, weddings, and every special moment in between."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-list",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Wedding & Engagement Cakes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 228,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Birthday & Celebration Cakes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Custom Designs & Themes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-price-tag",
                                                    children: "From R250"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.1s'
                                            },
                                            className: "jsx-7f2afa2da432efe2" + " " + "service-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-icon",
                                                    children: "☕"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-title",
                                                    children: "Traditional Treats"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-desc",
                                                    children: "Authentic South African bakes made with recipes passed down through generations."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-list",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Koesisters & Vetkoek"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 239,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Scones & Rusks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 240,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Magwinya & Snowballs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-price-tag",
                                                    children: "From R60"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.2s'
                                            },
                                            className: "jsx-7f2afa2da432efe2" + " " + "service-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-icon",
                                                    children: "🎁"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-title",
                                                    children: "Gift Boxes"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-desc",
                                                    children: "Beautifully packaged assortments perfect for gifting and corporate events."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-list",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Curated Treat Boxes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Corporate Gifting"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 251,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "High Tea Packages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 252,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "service-price-tag",
                                                    children: "From R150"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "how-it-works",
                        className: "jsx-7f2afa2da432efe2" + " " + "section section-how",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "section-header animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-tag light",
                                            children: "Simple Process"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-title light",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-subtitle light",
                                            children: "Get your perfect bake in three easy steps"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "steps-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "step-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-number",
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-title",
                                                    children: "Discover"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-desc",
                                                    children: "Browse verified home bakers in your area. View their specialties, prices, and customer reviews."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "step-connector"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.1s'
                                            },
                                            className: "jsx-7f2afa2da432efe2" + " " + "step-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-number",
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-title",
                                                    children: "Connect"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-desc",
                                                    children: "Chat directly with your chosen baker via WhatsApp. Discuss your requirements and get a quote."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "step-connector"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: '0.2s'
                                            },
                                            className: "jsx-7f2afa2da432efe2" + " " + "step-card animate-on-scroll animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-number",
                                                    children: "03"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-title",
                                                    children: "Enjoy"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7f2afa2da432efe2" + " " + "step-desc",
                                                    children: "Receive your freshly baked treats! Collect or have them delivered right to your door."
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: '0.3s'
                                    },
                                    className: "jsx-7f2afa2da432efe2" + " " + "how-cta animate-on-scroll animate-fade-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/how-it-works",
                                        className: "btn-secondary-outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "Learn More About Our Process"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pricing",
                        className: "jsx-7f2afa2da432efe2" + " " + "section section-pricing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "section-header animate-on-scroll animate-fade-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-tag",
                                            children: "Transparent Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-title",
                                            children: "Price Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "section-subtitle",
                                            children: "Typical price ranges from our verified bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "pricing-table-wrapper animate-on-scroll animate-scale",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-7f2afa2da432efe2" + " " + "pricing-table",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-7f2afa2da432efe2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Size / Quantity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Price Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Lead Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-7f2afa2da432efe2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🎂"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 316,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Custom Cake"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: '6" (Small)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 317,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R250 - R400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "2-3 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🎂"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 322,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Custom Cake"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 322,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: '8" (Medium)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 323,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R400 - R650"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "2-3 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🎂"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 328,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Custom Cake"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 328,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: '10" (Large)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R650 - R1,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "3-5 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 331,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "💒"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 334,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Wedding Cake"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 334,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "3-Tier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 335,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R1,800 - R3,500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "7-14 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🧁"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 340,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Cupcakes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 340,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "Dozen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 341,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R120 - R200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "1-2 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🥐"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 346,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Scones / Rusks"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "6-12 pieces"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 347,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R80 - R120"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 348,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "Same day"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 349,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🍩"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 352,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Traditional Treats"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 352,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "6 pieces"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 353,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R60 - R100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "1-2 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 355,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7f2afa2da432efe2" + " " + "table-icon",
                                                                        children: "🎁"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                                        lineNumber: 358,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Gift Box"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 358,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "Assorted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 359,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2" + " " + "price-highlight",
                                                                children: "R150 - R400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-7f2afa2da432efe2",
                                                                children: "1-3 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/index.js",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/index.js",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "pricing-note",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7f2afa2da432efe2",
                                            children: "ℹ️"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        "Prices vary by baker and complexity. Contact bakers directly for accurate quotes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-7f2afa2da432efe2" + " " + "section section-cta",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7f2afa2da432efe2" + " " + "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7f2afa2da432efe2" + " " + "cta-card animate-on-scroll animate-scale",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7f2afa2da432efe2" + " " + "cta-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "cta-title",
                                            children: "Ready to Find Your Perfect Baker?"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "cta-desc",
                                            children: "Join thousands of happy customers who've discovered amazing local talent"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7f2afa2da432efe2" + " " + "cta-buttons",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#partners",
                                                    className: "jsx-7f2afa2da432efe2" + " " + "btn-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "🔍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 382,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7f2afa2da432efe2",
                                                            children: "Start Searching"
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/index.js",
                                                            lineNumber: 383,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partners",
                                                    className: "btn-outline",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-7f2afa2da432efe2",
                                                        children: "Browse All Bakers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/index.js",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/index.js",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/monate-cakes/pages/index.js",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/index.js",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/index.js",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/index.js",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/index.js",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/index.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7f2afa2da432efe2",
                children: ".page-wrapper.jsx-7f2afa2da432efe2{--bg-primary:#fdf8f3;--bg-secondary:#fffbf7;--bg-card:#fff;--text-primary:#1c1c1c;--text-secondary:#4a4a4a;--text-muted:#7a7a7a;--border-color:#00000014;--color-caramel:#c4956a;--color-caramel-light:#d4a574;--color-caramel-dark:#a67c52;--font-display:\"Cormorant Garamond\",Georgia,serif;--font-body:\"Outfit\",-apple-system,BlinkMacSystemFont,sans-serif}.page-wrapper.dark.jsx-7f2afa2da432efe2{--bg-primary:#0f0f0f;--bg-secondary:#1a1a2e;--bg-card:#1e1e2e;--text-primary:#fff;--text-secondary:#e0e0e0;--text-muted:#a0a0a0;--border-color:#ffffff1a}.page-wrapper.jsx-7f2afa2da432efe2{background:var(--bg-primary);min-height:100vh;transition:background .3s}.container.jsx-7f2afa2da432efe2{max-width:1200px;margin:0 auto;padding:0 20px}@media (width>=768px){.container.jsx-7f2afa2da432efe2{padding:0 40px}}.hero.jsx-7f2afa2da432efe2{background:linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 50%,#16213e 100%);align-items:center;min-height:100vh;padding:120px 0 80px;display:flex;position:relative;overflow:hidden}.hero-overlay.jsx-7f2afa2da432efe2{background:radial-gradient(at 30% 20%,#d4a57426 0%,#0000 50%),radial-gradient(at 70% 80%,#3b82f61a 0%,#0000 50%);position:absolute;inset:0}.hero-pattern.jsx-7f2afa2da432efe2{background-image:url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");position:absolute;inset:0}.hero-grid.jsx-7f2afa2da432efe2{grid-template-columns:1fr;align-items:center;gap:48px;display:grid;position:relative}@media (width>=992px){.hero-grid.jsx-7f2afa2da432efe2{grid-template-columns:1.2fr .8fr}}.hero-badge.jsx-7f2afa2da432efe2{color:#ffffffe6;font-size:.9rem;font-family:var(--font-body);background:#ffffff14;border:1px solid #ffffff1f;border-radius:50px;align-items:center;gap:10px;margin-bottom:24px;padding:10px 20px;display:inline-flex}.badge-icon.jsx-7f2afa2da432efe2{font-size:1.2rem}.hero-title.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:#fff;margin-bottom:24px;font-size:max(2.5rem,min(5vw,4rem));font-weight:600;line-height:1.15}.text-gradient.jsx-7f2afa2da432efe2{background:linear-gradient(135deg,var(--color-caramel-light)0%,#c19a6b 50%,#e8d5c4 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text}.hero-subtitle.jsx-7f2afa2da432efe2{font-family:var(--font-body);color:#ffffffb3;max-width:540px;margin-bottom:32px;font-size:1.15rem;line-height:1.7}.hero-stats.jsx-7f2afa2da432efe2{flex-wrap:wrap;align-items:center;gap:24px;margin-bottom:40px;display:flex}.stat-item.jsx-7f2afa2da432efe2{flex-direction:column;display:flex}.stat-number.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:var(--color-caramel-light);font-size:2rem;font-weight:600}.stat-label.jsx-7f2afa2da432efe2{color:#ffffff80;text-transform:uppercase;letter-spacing:.5px;font-size:.85rem;font-family:var(--font-body)}.stat-divider.jsx-7f2afa2da432efe2{background:#ffffff26;width:1px;height:40px}.hero-buttons.jsx-7f2afa2da432efe2{flex-wrap:wrap;gap:16px;display:flex}.btn-primary.jsx-7f2afa2da432efe2{background:linear-gradient(135deg,var(--color-caramel-light)0%,var(--color-caramel-dark)100%);color:#fff;font-size:1rem;font-weight:600;font-family:var(--font-body);border-radius:12px;align-items:center;gap:10px;padding:16px 32px;text-decoration:none;transition:all .3s;display:inline-flex;box-shadow:0 4px 20px #d4a5744d}.btn-primary.jsx-7f2afa2da432efe2:hover{transform:translateY(-2px);box-shadow:0 8px 30px #d4a57466}.btn-outline.jsx-7f2afa2da432efe2{color:#ffffffe6;font-size:1rem;font-weight:600;font-family:var(--font-body);background:0 0;border:1px solid #fff3;border-radius:12px;align-items:center;gap:10px;padding:16px 32px;text-decoration:none;transition:all .3s;display:inline-flex}.btn-outline.jsx-7f2afa2da432efe2:hover{background:#ffffff14;border-color:#ffffff4d}.hero-visual.jsx-7f2afa2da432efe2{display:none}@media (width>=992px){.hero-visual.jsx-7f2afa2da432efe2{display:block}}.hero-image-stack.jsx-7f2afa2da432efe2{height:500px;position:relative}.hero-img.jsx-7f2afa2da432efe2{border-radius:20px;transition:transform .4s;position:absolute;overflow:hidden;box-shadow:0 25px 50px #0006}.hero-img.jsx-7f2afa2da432efe2 img.jsx-7f2afa2da432efe2{object-fit:cover;width:100%;height:100%}.hero-img-1.jsx-7f2afa2da432efe2{z-index:3;width:280px;height:340px;top:0;right:0}.hero-img-2.jsx-7f2afa2da432efe2{z-index:2;width:200px;height:250px;top:60px;right:260px}.hero-img-3.jsx-7f2afa2da432efe2{z-index:1;width:180px;height:220px;bottom:20px;right:80px}.floating-badge.jsx-7f2afa2da432efe2{color:#fff;font-size:.9rem;font-weight:600;font-family:var(--font-body);background:#d4a574f2;border-radius:50px;align-items:center;gap:8px;padding:12px 20px;animation:3s ease-in-out infinite float;display:flex;position:absolute;bottom:80px;left:20px;box-shadow:0 10px 30px #d4a57466}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.trust-banner.jsx-7f2afa2da432efe2{background:var(--bg-secondary);border-bottom:1px solid var(--border-color);padding:20px 0}.page-wrapper.dark.jsx-7f2afa2da432efe2 .trust-banner.jsx-7f2afa2da432efe2{background:#111}.trust-content.jsx-7f2afa2da432efe2{flex-wrap:wrap;justify-content:center;gap:40px;display:flex}.trust-item.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:.9rem;font-family:var(--font-body);align-items:center;gap:10px;display:flex}.trust-icon.jsx-7f2afa2da432efe2{font-size:1.1rem}.section.jsx-7f2afa2da432efe2{padding:80px 0}@media (width>=768px){.section.jsx-7f2afa2da432efe2{padding:100px 0}}.section-bakers.jsx-7f2afa2da432efe2{background:var(--bg-primary)}.section-services.jsx-7f2afa2da432efe2{background:var(--bg-secondary)}.page-wrapper.dark.jsx-7f2afa2da432efe2 .section-services.jsx-7f2afa2da432efe2{background:#111}.section-how.jsx-7f2afa2da432efe2{background:linear-gradient(#0f0f0f 0%,#1a1a2e 100%)}.section-pricing.jsx-7f2afa2da432efe2{background:var(--bg-primary)}.section-header.jsx-7f2afa2da432efe2{text-align:center;margin-bottom:48px}.section-tag.jsx-7f2afa2da432efe2{text-transform:uppercase;letter-spacing:2px;color:var(--color-caramel);font-size:.85rem;font-weight:600;font-family:var(--font-body);margin-bottom:16px;display:inline-block}.section-tag.light.jsx-7f2afa2da432efe2{color:var(--color-caramel-light)}.section-title.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:var(--text-primary);margin-bottom:16px;font-size:max(2rem,min(4vw,2.75rem));font-weight:600}.section-title.light.jsx-7f2afa2da432efe2{color:#fff}.section-subtitle.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:1.1rem;line-height:1.6;font-family:var(--font-body)}.section-subtitle.light.jsx-7f2afa2da432efe2{color:#fff9}.location-selector-wrapper.jsx-7f2afa2da432efe2{max-width:600px;margin:0 auto 40px}.bakers-header.jsx-7f2afa2da432efe2{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;margin-bottom:32px;display:flex}.bakers-location.jsx-7f2afa2da432efe2{font-family:var(--font-body);color:var(--text-primary);align-items:center;gap:10px;font-size:1.25rem;font-weight:500;display:flex}.view-all-link.jsx-7f2afa2da432efe2{color:var(--color-caramel);font-weight:500;font-family:var(--font-body);text-decoration:none;transition:color .3s}.view-all-link.jsx-7f2afa2da432efe2:hover{color:var(--color-caramel-dark)}.bakers-grid.jsx-7f2afa2da432efe2{grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:24px;display:grid}.baker-card.jsx-7f2afa2da432efe2{background:var(--bg-card);border:1px solid var(--border-color);border-radius:20px;text-decoration:none;transition:all .4s;position:relative;overflow:hidden}.baker-card.jsx-7f2afa2da432efe2:hover{border-color:#d4a5744d;transform:translateY(-8px);box-shadow:0 20px 40px #00000026}.page-wrapper.dark.jsx-7f2afa2da432efe2 .baker-card.jsx-7f2afa2da432efe2:hover{box-shadow:0 20px 40px #0006}.baker-image.jsx-7f2afa2da432efe2{background:var(--bg-secondary);justify-content:center;align-items:center;height:220px;display:flex;position:relative;overflow:hidden}.baker-image.jsx-7f2afa2da432efe2 img.jsx-7f2afa2da432efe2{object-fit:contain;width:100%;height:100%;transition:transform .4s}.baker-card.jsx-7f2afa2da432efe2:hover .baker-image.jsx-7f2afa2da432efe2 img.jsx-7f2afa2da432efe2{transform:scale(1.05)}.baker-rating.jsx-7f2afa2da432efe2{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;background:#000000b3;border-radius:50px;align-items:center;gap:6px;padding:8px 14px;font-size:.9rem;font-weight:600;display:flex;position:absolute;top:16px;right:16px}.baker-content.jsx-7f2afa2da432efe2{padding:24px}.baker-name.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:var(--text-primary);margin-bottom:6px;font-size:1.35rem;font-weight:600}.baker-location-text.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:.9rem;font-family:var(--font-body);align-items:center;gap:6px;margin-bottom:12px;display:flex}.baker-desc.jsx-7f2afa2da432efe2{color:var(--text-secondary);font-size:.95rem;line-height:1.5;font-family:var(--font-body);margin-bottom:16px}.baker-specialties.jsx-7f2afa2da432efe2{flex-wrap:wrap;gap:8px;margin-bottom:16px;display:flex}.specialty-tag.jsx-7f2afa2da432efe2{color:var(--color-caramel);font-size:.8rem;font-family:var(--font-body);background:#d4a5741a;border:1px solid #d4a57433;border-radius:50px;padding:6px 14px}.baker-footer.jsx-7f2afa2da432efe2{border-top:1px solid var(--border-color);justify-content:space-between;align-items:center;padding-top:16px;display:flex}.baker-price.jsx-7f2afa2da432efe2{color:var(--text-primary);font-weight:600;font-family:var(--font-body)}.baker-reviews.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:.9rem;font-family:var(--font-body)}.baker-hover-action.jsx-7f2afa2da432efe2{background:linear-gradient(135deg,var(--color-caramel-light)0%,var(--color-caramel-dark)100%);color:#fff;font-weight:600;font-family:var(--font-body);justify-content:center;align-items:center;gap:10px;padding:16px 24px;transition:transform .3s;display:flex;position:absolute;bottom:0;left:0;right:0;transform:translateY(100%)}.baker-card.jsx-7f2afa2da432efe2:hover .baker-hover-action.jsx-7f2afa2da432efe2{transform:translateY(0)}.no-results.jsx-7f2afa2da432efe2{text-align:center;background:var(--bg-card);border:1px dashed var(--border-color);border-radius:20px;padding:80px 40px}.no-results-icon.jsx-7f2afa2da432efe2{opacity:.5;margin-bottom:24px;font-size:3rem}.no-results.jsx-7f2afa2da432efe2 h4.jsx-7f2afa2da432efe2{color:var(--text-primary);font-family:var(--font-display);margin-bottom:8px}.no-results.jsx-7f2afa2da432efe2 p.jsx-7f2afa2da432efe2{color:var(--text-muted);font-family:var(--font-body)}.services-grid.jsx-7f2afa2da432efe2{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;display:grid}.service-card.jsx-7f2afa2da432efe2{background:var(--bg-card);border:1px solid var(--border-color);border-radius:20px;padding:32px;transition:all .3s}.service-card.jsx-7f2afa2da432efe2:hover{border-color:#d4a5744d;transform:translateY(-5px)}.service-icon.jsx-7f2afa2da432efe2{margin-bottom:24px;font-size:2.5rem}.service-title.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:var(--text-primary);margin-bottom:12px;font-size:1.4rem;font-weight:600}.service-desc.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:.95rem;line-height:1.6;font-family:var(--font-body);margin-bottom:20px}.service-list.jsx-7f2afa2da432efe2{margin:0 0 24px;padding:0;list-style:none}.service-list.jsx-7f2afa2da432efe2 li.jsx-7f2afa2da432efe2{color:var(--text-secondary);border-bottom:1px solid var(--border-color);font-size:.9rem;font-family:var(--font-body);padding:8px 0}.service-list.jsx-7f2afa2da432efe2 li.jsx-7f2afa2da432efe2:last-child{border-bottom:none}.service-price-tag.jsx-7f2afa2da432efe2{color:var(--color-caramel);font-size:.9rem;font-weight:600;font-family:var(--font-body);background:#d4a5741a;border:1px solid #d4a57433;border-radius:50px;padding:10px 20px;display:inline-block}.steps-container.jsx-7f2afa2da432efe2{flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:0;display:flex}.step-card.jsx-7f2afa2da432efe2{text-align:center;flex:1;min-width:280px;max-width:340px;padding:40px 30px}.step-number.jsx-7f2afa2da432efe2{font-family:var(--font-display);background:linear-gradient(135deg,var(--color-caramel-light)0%,var(--color-caramel-dark)100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;margin-bottom:20px;font-size:3.5rem;font-weight:700;line-height:1}.step-title.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:#fff;margin-bottom:12px;font-size:1.5rem;font-weight:600}.step-desc.jsx-7f2afa2da432efe2{color:#fff9;font-size:.95rem;line-height:1.6;font-family:var(--font-body)}.step-connector.jsx-7f2afa2da432efe2{background:linear-gradient(90deg,#d4a5744d,#d4a5741a);width:60px;height:2px;margin-top:80px}@media (width<=992px){.step-connector.jsx-7f2afa2da432efe2{display:none}}.how-cta.jsx-7f2afa2da432efe2{text-align:center;margin-top:48px}.btn-secondary-outline.jsx-7f2afa2da432efe2{color:var(--color-caramel-light);border:1.5px solid var(--color-caramel);font-size:.95rem;font-weight:600;font-family:var(--font-body);background:0 0;border-radius:12px;align-items:center;gap:10px;padding:14px 28px;text-decoration:none;transition:all .3s;display:inline-flex}.btn-secondary-outline.jsx-7f2afa2da432efe2:hover{background:var(--color-caramel);color:#fff;transform:translateY(-2px);box-shadow:0 8px 20px #c4956a4d}.pricing-table-wrapper.jsx-7f2afa2da432efe2{border:1px solid var(--border-color);border-radius:20px;overflow-x:auto}.pricing-table.jsx-7f2afa2da432efe2{border-collapse:collapse;background:var(--bg-card);width:100%}.pricing-table.jsx-7f2afa2da432efe2 th.jsx-7f2afa2da432efe2{text-align:left;color:var(--text-primary);background:var(--bg-secondary);text-transform:uppercase;letter-spacing:.5px;font-size:.9rem;font-weight:600;font-family:var(--font-body);padding:20px 24px}.page-wrapper.dark.jsx-7f2afa2da432efe2 .pricing-table.jsx-7f2afa2da432efe2 th.jsx-7f2afa2da432efe2{background:#ffffff0d}.pricing-table.jsx-7f2afa2da432efe2 td.jsx-7f2afa2da432efe2{color:var(--text-secondary);border-top:1px solid var(--border-color);font-size:.95rem;font-family:var(--font-body);padding:20px 24px}.table-icon.jsx-7f2afa2da432efe2{margin-right:10px}.price-highlight.jsx-7f2afa2da432efe2{font-weight:600;color:var(--color-caramel)!important}.pricing-note.jsx-7f2afa2da432efe2{text-align:center;color:var(--text-muted);font-size:.9rem;font-family:var(--font-body);justify-content:center;align-items:center;gap:8px;margin-top:24px;display:flex}.section-cta.jsx-7f2afa2da432efe2{background:var(--bg-secondary);padding:60px 0 100px}.page-wrapper.dark.jsx-7f2afa2da432efe2 .section-cta.jsx-7f2afa2da432efe2{background:linear-gradient(#0a0a0a 0%,#111 100%)}.cta-card.jsx-7f2afa2da432efe2{text-align:center;background:linear-gradient(135deg,#d4a57426 0%,#d4a5740d 100%);border:1px solid #d4a57433;border-radius:24px;padding:60px;position:relative;overflow:hidden}.cta-title.jsx-7f2afa2da432efe2{font-family:var(--font-display);color:var(--text-primary);margin-bottom:16px;font-size:max(1.75rem,min(3vw,2.25rem));font-weight:600}.cta-desc.jsx-7f2afa2da432efe2{color:var(--text-muted);font-size:1.1rem;font-family:var(--font-body);margin-bottom:32px}.cta-buttons.jsx-7f2afa2da432efe2{flex-wrap:wrap;justify-content:center;gap:16px;display:flex}.animate-on-scroll.jsx-7f2afa2da432efe2{opacity:0;transition:all .8s cubic-bezier(.4,0,.2,1);transform:translateY(30px)}.animate-on-scroll.animated.jsx-7f2afa2da432efe2{opacity:1;transform:translateY(0)}.animate-fade-up.animated.jsx-7f2afa2da432efe2{transform:translateY(0)}.animate-scale.jsx-7f2afa2da432efe2{transform:scale(.95)}.animate-scale.animated.jsx-7f2afa2da432efe2{transform:scale(1)}@media (width<=768px){.hero.jsx-7f2afa2da432efe2{min-height:auto;padding:120px 0 60px}.hero-title.jsx-7f2afa2da432efe2{font-size:2.5rem}.hero-stats.jsx-7f2afa2da432efe2{gap:16px}.stat-number.jsx-7f2afa2da432efe2{font-size:1.5rem}.hero-buttons.jsx-7f2afa2da432efe2{flex-direction:column;width:100%}.btn-primary.jsx-7f2afa2da432efe2,.btn-outline.jsx-7f2afa2da432efe2{justify-content:center;width:100%}.trust-content.jsx-7f2afa2da432efe2{gap:20px}.section.jsx-7f2afa2da432efe2{padding:60px 0}.bakers-grid.jsx-7f2afa2da432efe2,.services-grid.jsx-7f2afa2da432efe2{grid-template-columns:1fr}.cta-card.jsx-7f2afa2da432efe2{padding:40px 24px}}@media (hover:none){.btn-primary.jsx-7f2afa2da432efe2:hover,.btn-outline.jsx-7f2afa2da432efe2:hover,.baker-card.jsx-7f2afa2da432efe2:hover,.service-card.jsx-7f2afa2da432efe2:hover{transform:none}.btn-primary.jsx-7f2afa2da432efe2:active{transform:scale(.98)}}@supports (padding:max(0px)){.hero.jsx-7f2afa2da432efe2{padding-top:max(120px,env(safe-area-inset-top) + 100px)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Home, "qV0NzLPPNbrDpCMgwNeGg0Shu7o=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/monate-cakes/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/monate-cakes/pages/index.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/monate-cakes/pages/index\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/monate-cakes/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d1ba7d53._.js.map