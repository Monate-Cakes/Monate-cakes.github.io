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
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Navbar({ theme, setTheme }) {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "promo-banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "🎉 New Year Special: Get 15% OFF on all custom cakes! Use code ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "navbar-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "nav-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-cake2"
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/components/Navbar.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    "Monate",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "nav-links d-none d-md-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "theme-toggle",
                                        onClick: toggleTheme,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        className: "btn-primary-custom d-none d-md-inline-flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mobile-menu-btn d-md-none",
                                        onClick: ()=>setMobileMenuOpen(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu ${mobileMenuOpen ? 'active' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mobile-menu-close",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#services",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#pricing",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Pricing"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/how-it-works",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "How It Works"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/partners",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Bakers"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/components/Navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/partners",
                        className: "btn-primary-custom",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
_s(Navbar, "d7gXMF6mPDUhHBNUSEb8mLK4AII=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
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
"[project]/monate-cakes/pages/entrepreneur-signup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntrepreneurSignup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/styled-jsx/style.js [client] (ecmascript)");
// pages/entrepreneur-signup.js
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Navbar.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/components/Footer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/monate-cakes/node_modules/next/head.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function EntrepreneurSignup({ theme, setTheme }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitSuccess, setSubmitSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        // Personal Information
        fullName: '',
        email: '',
        phone: '',
        idNumber: '',
        // Business Information
        businessName: '',
        yearsExperience: '',
        specialty: '',
        otherSpecialty: '',
        weeklyCapacity: '',
        // Location
        province: '',
        city: '',
        suburb: '',
        deliveryRadius: '',
        // Portfolio & Social
        portfolioImages: [],
        instagramHandle: '',
        facebookPage: '',
        websiteUrl: '',
        // Additional Details
        certificationsTraining: '',
        whyJoin: '',
        hearAboutUs: '',
        agreedToTerms: false
    });
    // Prefill data from careers page
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntrepreneurSignup.useEffect": ()=>{
            const savedData = sessionStorage.getItem('bakerApplication');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                setFormData({
                    "EntrepreneurSignup.useEffect": (prev)=>({
                            ...prev,
                            fullName: parsed.fullName || '',
                            email: parsed.email || '',
                            phone: parsed.phone || '',
                            city: parsed.city || '',
                            specialty: parsed.specialty || ''
                        })
                }["EntrepreneurSignup.useEffect"]);
                sessionStorage.removeItem('bakerApplication');
            }
        }
    }["EntrepreneurSignup.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntrepreneurSignup.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "EntrepreneurSignup.useEffect": (entries)=>{
                    entries.forEach({
                        "EntrepreneurSignup.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('animated');
                            }
                        }
                    }["EntrepreneurSignup.useEffect"]);
                }
            }["EntrepreneurSignup.useEffect"], {
                threshold: 0.1
            });
            document.querySelectorAll('.animate-on-scroll').forEach({
                "EntrepreneurSignup.useEffect": (el)=>{
                    observer.observe(el);
                }
            }["EntrepreneurSignup.useEffect"]);
            return ({
                "EntrepreneurSignup.useEffect": ()=>observer.disconnect()
            })["EntrepreneurSignup.useEffect"];
        }
    }["EntrepreneurSignup.useEffect"], []);
    const handleInputChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
    };
    const nextStep = ()=>{
        if (currentStep < 4) {
            setCurrentStep((prev)=>prev + 1);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };
    const prevStep = ()=>{
        if (currentStep > 1) {
            setCurrentStep((prev)=>prev - 1);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setSubmitSuccess(true);
    };
    const stepTitles = [
        'Personal Details',
        'Business Information',
        'Location & Delivery',
        'Portfolio & Submit'
    ];
    if (submitSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            className: "jsx-afe1b409654c8c64",
                            children: "Application Submitted | Monate Cakes"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                            className: "jsx-afe1b409654c8c64"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com",
                            className: "jsx-afe1b409654c8c64"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: "anonymous",
                            className: "jsx-afe1b409654c8c64"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                            rel: "stylesheet",
                            className: "jsx-afe1b409654c8c64"
                        }, void 0, false, {
                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    theme: theme,
                    setTheme: setTheme
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "jsx-afe1b409654c8c64" + " " + "success-section",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-afe1b409654c8c64" + " " + "success-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-afe1b409654c8c64" + " " + "success-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "64",
                                    height: "64",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    className: "jsx-afe1b409654c8c64",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                            className: "jsx-afe1b409654c8c64"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "22 4 12 14.01 9 11.01",
                                            className: "jsx-afe1b409654c8c64"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-afe1b409654c8c64",
                                children: "Application Submitted!"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-afe1b409654c8c64",
                                children: "Thank you for applying to join the Monate Cakes baker network. Our team will review your application and contact you within 48 hours."
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-afe1b409654c8c64" + " " + "success-details",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afe1b409654c8c64" + " " + "detail-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-afe1b409654c8c64" + " " + "detail-icon",
                                                children: "📧"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-afe1b409654c8c64",
                                                children: [
                                                    "Confirmation email sent to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-afe1b409654c8c64",
                                                        children: formData.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 149,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afe1b409654c8c64" + " " + "detail-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-afe1b409654c8c64" + " " + "detail-icon",
                                                children: "📱"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-afe1b409654c8c64",
                                                children: [
                                                    "We'll call you at ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-afe1b409654c8c64",
                                                        children: formData.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 153,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-afe1b409654c8c64" + " " + "success-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "btn-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-afe1b409654c8c64",
                                            children: "Back to Home"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        className: "btn-ghost",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-afe1b409654c8c64",
                                            children: "Explore Our Bakers"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "afe1b409654c8c64",
                    children: ".success-section.jsx-afe1b409654c8c64{background:linear-gradient(165deg,#0f0f0f 0%,#1a1a2e 50%,#1f1f35 100%);justify-content:center;align-items:center;min-height:100vh;padding:120px 20px 80px;display:flex}.success-container.jsx-afe1b409654c8c64{text-align:center;max-width:520px;animation:.6s fadeUp}@keyframes fadeUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.success-icon.jsx-afe1b409654c8c64{color:#8b9a7d;background:linear-gradient(135deg,#8b9a7d33 0%,#8b9a7d1a 100%);border-radius:50%;justify-content:center;align-items:center;width:100px;height:100px;margin:0 auto 32px;display:flex}h1.jsx-afe1b409654c8c64{color:#fff;margin-bottom:16px;font-family:Cormorant Garamond,serif;font-size:2.5rem;font-weight:500}p.jsx-afe1b409654c8c64{color:#ffffffa6;margin-bottom:32px;font-family:Outfit,sans-serif;font-size:1.05rem;line-height:1.7}.success-details.jsx-afe1b409654c8c64{background:#ffffff0a;border:1px solid #ffffff14;border-radius:16px;margin-bottom:32px;padding:24px}.detail-item.jsx-afe1b409654c8c64{color:#ffffffb3;align-items:center;gap:12px;padding:8px 0;font-family:Outfit,sans-serif;font-size:.9rem;display:flex}.detail-item.jsx-afe1b409654c8c64 strong.jsx-afe1b409654c8c64{color:#fff}.success-actions.jsx-afe1b409654c8c64{flex-wrap:wrap;justify-content:center;gap:16px;display:flex}.btn-primary.jsx-afe1b409654c8c64{color:#fff;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border-radius:12px;align-items:center;padding:14px 28px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-flex}.btn-primary.jsx-afe1b409654c8c64:hover{transform:translateY(-2px);box-shadow:0 8px 24px #c4956a4d}.btn-ghost.jsx-afe1b409654c8c64{color:#fffc;background:0 0;border:1px solid #ffffff26;border-radius:12px;align-items:center;padding:14px 28px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;text-decoration:none;transition:all .3s;display:inline-flex}.btn-ghost.jsx-afe1b409654c8c64:hover{background:#ffffff0d}@media (width<=480px){.success-actions.jsx-afe1b409654c8c64{flex-direction:column}.btn-primary.jsx-afe1b409654c8c64,.btn-ghost.jsx-afe1b409654c8c64{justify-content:center;width:100%}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-c1ce523aa8960530",
                        children: "Baker Application | Monate Cakes"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Complete your application to join South Africa's premier home baker network.",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#1a1a2e",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet",
                        className: "jsx-c1ce523aa8960530"
                    }, void 0, false, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                theme: theme,
                setTheme: setTheme
            }, void 0, false, {
                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-c1ce523aa8960530" + " " + "signup-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1ce523aa8960530" + " " + "signup-bg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1ce523aa8960530" + " " + "bg-gradient"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1ce523aa8960530" + " " + "bg-grain"
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1ce523aa8960530" + " " + "container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1ce523aa8960530" + " " + "progress-header animate-on-scroll animate-fade-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/careers",
                                        className: "back-link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "jsx-c1ce523aa8960530",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5M12 19l-7-7 7-7",
                                                    className: "jsx-c1ce523aa8960530"
                                                }, void 0, false, {
                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c1ce523aa8960530",
                                                children: "Back to Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1ce523aa8960530" + " " + "progress-tracker",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + `progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "step-dot",
                                                        children: currentStep > step ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "3",
                                                            className: "jsx-c1ce523aa8960530",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "20 6 9 17 4 12",
                                                                className: "jsx-c1ce523aa8960530"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 342,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                            lineNumber: 341,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c1ce523aa8960530",
                                                            children: step
                                                        }, void 0, false, {
                                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                            lineNumber: 345,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "step-label",
                                                        children: stepTitles[step - 1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1ce523aa8960530" + " " + "form-container animate-on-scroll animate-fade-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1ce523aa8960530" + " " + "form-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-step-indicator",
                                                children: [
                                                    "Step ",
                                                    currentStep,
                                                    " of 4"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-c1ce523aa8960530",
                                                children: stepTitles[currentStep - 1]
                                            }, void 0, false, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "jsx-c1ce523aa8960530",
                                        children: [
                                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-step",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "fullName",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Full Name ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 367,
                                                                                columnNumber: 59
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 367,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "fullName",
                                                                        name: "fullName",
                                                                        placeholder: "Your full legal name",
                                                                        value: formData.fullName,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 368,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "email",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Email Address ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 379,
                                                                                columnNumber: 60
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 379,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        id: "email",
                                                                        name: "email",
                                                                        placeholder: "your@email.com",
                                                                        value: formData.email,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 380,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 378,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "phone",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Phone Number ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 394,
                                                                                columnNumber: 59
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 394,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        id: "phone",
                                                                        name: "phone",
                                                                        placeholder: "+27 XX XXX XXXX",
                                                                        value: formData.phone,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 395,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 393,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "idNumber",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "ID Number ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "optional",
                                                                                children: "(Optional)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 406,
                                                                                columnNumber: 59
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 406,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "idNumber",
                                                                        name: "idNumber",
                                                                        placeholder: "For verification purposes",
                                                                        value: formData.idNumber,
                                                                        onChange: handleInputChange,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 407,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "field-hint",
                                                                        children: "Required only for payment processing setup"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 415,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 405,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-step",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "businessName",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Business / Brand Name ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 426,
                                                                                columnNumber: 75
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 426,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "businessName",
                                                                        name: "businessName",
                                                                        placeholder: "e.g., Sweet Delights Bakery",
                                                                        value: formData.businessName,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 427,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 425,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "yearsExperience",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Years of Experience ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 438,
                                                                                columnNumber: 76
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 438,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "yearsExperience",
                                                                        name: "yearsExperience",
                                                                        value: formData.yearsExperience,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Select experience"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 446,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "less-1",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Less than 1 year"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 447,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1-2",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "1-2 years"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 448,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "3-5",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "3-5 years"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 449,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "5-10",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "5-10 years"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 450,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "10+",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "10+ years"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 451,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 439,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 437,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "specialty",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Primary Specialty ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 458,
                                                                                columnNumber: 68
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 458,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "specialty",
                                                                        name: "specialty",
                                                                        value: formData.specialty,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Select your specialty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 466,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "wedding-cakes",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Wedding & Celebration Cakes"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 467,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "cupcakes",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Cupcakes & Small Treats"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 468,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "traditional",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Traditional South African Bakes"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 469,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "artisan-bread",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Artisan Breads"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 470,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "pastries",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Pastries & Desserts"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 471,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "custom",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Custom & Specialty Orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 472,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "vegan-gluten",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Vegan & Gluten-Free"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 473,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "other",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Other"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 474,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 459,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 457,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "weeklyCapacity",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Weekly Order Capacity ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 478,
                                                                                columnNumber: 77
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 478,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "weeklyCapacity",
                                                                        name: "weeklyCapacity",
                                                                        value: formData.weeklyCapacity,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Select capacity"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 486,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1-5",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "1-5 orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 487,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "6-10",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "6-10 orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 488,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "11-20",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "11-20 orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 489,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "21-50",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "21-50 orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 490,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "50+",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "50+ orders"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 491,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 479,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 477,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this),
                                                    formData.specialty === 'other' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "otherSpecialty",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: "Please describe your specialty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 498,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "otherSpecialty",
                                                                name: "otherSpecialty",
                                                                placeholder: "Describe your baking specialty",
                                                                value: formData.otherSpecialty,
                                                                onChange: handleInputChange,
                                                                className: "jsx-c1ce523aa8960530"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 499,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 497,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "certificationsTraining",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    "Certifications & Training ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "optional",
                                                                        children: "(Optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 511,
                                                                        columnNumber: 87
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 511,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                id: "certificationsTraining",
                                                                name: "certificationsTraining",
                                                                placeholder: "List any food safety certifications, culinary training, or relevant qualifications...",
                                                                value: formData.certificationsTraining,
                                                                onChange: handleInputChange,
                                                                rows: 3,
                                                                className: "jsx-c1ce523aa8960530"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 512,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this),
                                            currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-step",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "province",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Province ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 529,
                                                                                columnNumber: 58
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 529,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "province",
                                                                        name: "province",
                                                                        value: formData.province,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Select province"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 537,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "gauteng",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Gauteng"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 538,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "western-cape",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Western Cape"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 539,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "kwazulu-natal",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "KwaZulu-Natal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 540,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "eastern-cape",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Eastern Cape"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 541,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "free-state",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Free State"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 542,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "limpopo",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Limpopo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 543,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "mpumalanga",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Mpumalanga"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 544,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "north-west",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "North West"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 545,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "northern-cape",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Northern Cape"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 546,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 530,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 528,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "city",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "City / Town ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 550,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 550,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "city",
                                                                        name: "city",
                                                                        placeholder: "e.g., Johannesburg, Cape Town",
                                                                        value: formData.city,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 551,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 549,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 527,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "suburb",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Suburb / Area ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 565,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 565,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "suburb",
                                                                        name: "suburb",
                                                                        placeholder: "e.g., Sandton, Gardens",
                                                                        value: formData.suburb,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 566,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 564,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "deliveryRadius",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            "Delivery Radius ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 577,
                                                                                columnNumber: 71
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 577,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "deliveryRadius",
                                                                        name: "deliveryRadius",
                                                                        value: formData.deliveryRadius,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Select delivery radius"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 585,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "pickup-only",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Pickup Only"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 586,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "5km",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Within 5km"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 587,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "10km",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Within 10km"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 588,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "20km",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Within 20km"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 589,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "30km",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Within 30km"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 590,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "citywide",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Citywide"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 591,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "nationwide",
                                                                                className: "jsx-c1ce523aa8960530",
                                                                                children: "Nationwide Shipping"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 592,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 578,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 576,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 563,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "info-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 599,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "16",
                                                                        x2: "12",
                                                                        y2: "12",
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 600,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "8",
                                                                        x2: "12.01",
                                                                        y2: "8",
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 601,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 598,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: "Your location helps us connect you with nearby customers. You can update your delivery areas at any time after joining."
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 603,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 597,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this),
                                            currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-step",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    "Social Media & Portfolio Links ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "optional",
                                                                        children: "(At least one recommended)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 612,
                                                                        columnNumber: 59
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 612,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1ce523aa8960530" + " " + "social-inputs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "social-input",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "social-icon",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "18",
                                                                                    height: "18",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "currentColor",
                                                                                    className: "jsx-c1ce523aa8960530",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                                                                        className: "jsx-c1ce523aa8960530"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                        lineNumber: 617,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                    lineNumber: 616,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 615,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                name: "instagramHandle",
                                                                                placeholder: "Instagram username",
                                                                                value: formData.instagramHandle,
                                                                                onChange: handleInputChange,
                                                                                className: "jsx-c1ce523aa8960530"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 620,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 614,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "social-input",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "social-icon",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "18",
                                                                                    height: "18",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "currentColor",
                                                                                    className: "jsx-c1ce523aa8960530",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                                                                                        className: "jsx-c1ce523aa8960530"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                        lineNumber: 631,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 629,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                name: "facebookPage",
                                                                                placeholder: "Facebook page URL",
                                                                                value: formData.facebookPage,
                                                                                onChange: handleInputChange,
                                                                                className: "jsx-c1ce523aa8960530"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 634,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 628,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "social-input",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c1ce523aa8960530" + " " + "social-icon",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "18",
                                                                                    height: "18",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    className: "jsx-c1ce523aa8960530",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                            cx: "12",
                                                                                            cy: "12",
                                                                                            r: "10",
                                                                                            className: "jsx-c1ce523aa8960530"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                            lineNumber: 645,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                            x1: "2",
                                                                                            y1: "12",
                                                                                            x2: "22",
                                                                                            y2: "12",
                                                                                            className: "jsx-c1ce523aa8960530"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                            lineNumber: 646,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
                                                                                            className: "jsx-c1ce523aa8960530"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                            lineNumber: 647,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                    lineNumber: 644,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 643,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "url",
                                                                                name: "websiteUrl",
                                                                                placeholder: "Website URL (if any)",
                                                                                value: formData.websiteUrl,
                                                                                onChange: handleInputChange,
                                                                                className: "jsx-c1ce523aa8960530"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                                lineNumber: 650,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 642,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 613,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 611,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "whyJoin",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    "Why do you want to join Monate Cakes? ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c1ce523aa8960530" + " " + "required",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 662,
                                                                        columnNumber: 84
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 662,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                id: "whyJoin",
                                                                name: "whyJoin",
                                                                placeholder: "Tell us about your baking journey and what you hope to achieve with us...",
                                                                value: formData.whyJoin,
                                                                onChange: handleInputChange,
                                                                rows: 4,
                                                                required: true,
                                                                className: "jsx-c1ce523aa8960530"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 663,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 661,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "hearAboutUs",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: "How did you hear about us?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 675,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "hearAboutUs",
                                                                name: "hearAboutUs",
                                                                value: formData.hearAboutUs,
                                                                onChange: handleInputChange,
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Select an option"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 682,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "social-media",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Social Media"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 683,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "friend",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Friend or Family"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 684,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "google",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Google Search"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 685,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "existing-baker",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Existing Monate Baker"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 686,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "advertisement",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Advertisement"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 687,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "other",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Other"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 688,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 676,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 674,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1ce523aa8960530" + " " + "terms-checkbox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                id: "agreedToTerms",
                                                                name: "agreedToTerms",
                                                                checked: formData.agreedToTerms,
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                className: "jsx-c1ce523aa8960530"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 693,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "agreedToTerms",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: [
                                                                    "I agree to the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/terms",
                                                                        target: "_blank",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Terms of Service"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 702,
                                                                        columnNumber: 38
                                                                    }, this),
                                                                    " and ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/privacy",
                                                                        target: "_blank",
                                                                        className: "jsx-c1ce523aa8960530",
                                                                        children: "Privacy Policy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 702,
                                                                        columnNumber: 96
                                                                    }, this),
                                                                    ", and confirm that all information provided is accurate."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 701,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 692,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1ce523aa8960530" + " " + "form-navigation",
                                                children: [
                                                    currentStep > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: prevStep,
                                                        className: "jsx-c1ce523aa8960530" + " " + "btn-back",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M19 12H5M12 19l-7-7 7-7",
                                                                    className: "jsx-c1ce523aa8960530"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 713,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 712,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: "Previous"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 715,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this),
                                                    currentStep < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: nextStep,
                                                        className: "jsx-c1ce523aa8960530" + " " + "btn-next",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 721,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "jsx-c1ce523aa8960530",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M5 12h14M12 5l7 7-7 7",
                                                                    className: "jsx-c1ce523aa8960530"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 723,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                lineNumber: 722,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 720,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isSubmitting || !formData.agreedToTerms,
                                                        className: "jsx-c1ce523aa8960530" + " " + `btn-submit ${isSubmitting ? 'submitting' : ''}`,
                                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c1ce523aa8960530" + " " + "spinner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 734,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c1ce523aa8960530",
                                                                    children: "Submitting..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 735,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c1ce523aa8960530",
                                                                    children: "Submit Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 739,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-c1ce523aa8960530",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "20 6 9 17 4 12",
                                                                        className: "jsx-c1ce523aa8960530"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                        lineNumber: 741,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                                    lineNumber: 740,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                        lineNumber: 727,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                                lineNumber: 709,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1ce523aa8960530" + " " + "support-info animate-on-scroll animate-fade-up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c1ce523aa8960530",
                                    children: [
                                        "Need help? Contact us at ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:support@monatecakes.co.za",
                                            className: "jsx-c1ce523aa8960530",
                                            children: "support@monatecakes.co.za"
                                        }, void 0, false, {
                                            fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                            lineNumber: 753,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                    lineNumber: 753,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$components$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/monate-cakes/pages/entrepreneur-signup.js",
                lineNumber: 758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c1ce523aa8960530",
                children: ".signup-section.jsx-c1ce523aa8960530{background:#0f0f0f;min-height:100vh;padding:100px 0 60px;position:relative}.signup-bg.jsx-c1ce523aa8960530{pointer-events:none;position:absolute;inset:0}.bg-gradient.jsx-c1ce523aa8960530{background:linear-gradient(165deg,#0f0f0f 0%,#1a1a2e 40%,#1f1f35 100%);position:absolute;inset:0}.bg-grain.jsx-c1ce523aa8960530{opacity:.03;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\");position:absolute;inset:0}.container.jsx-c1ce523aa8960530{max-width:800px;margin:0 auto;padding:0 20px;position:relative}.progress-header.jsx-c1ce523aa8960530{margin-bottom:40px}.back-link.jsx-c1ce523aa8960530{color:#ffffff80;align-items:center;gap:8px;margin-bottom:32px;font-family:Outfit,sans-serif;font-size:.9rem;text-decoration:none;transition:color .2s;display:inline-flex}.back-link.jsx-c1ce523aa8960530:hover{color:#fffc}.progress-tracker.jsx-c1ce523aa8960530{justify-content:space-between;display:flex;position:relative}.progress-tracker.jsx-c1ce523aa8960530:before{content:\"\";background:#ffffff1a;height:2px;position:absolute;top:16px;left:24px;right:24px}.progress-step.jsx-c1ce523aa8960530{z-index:1;flex-direction:column;align-items:center;gap:12px;display:flex}.step-dot.jsx-c1ce523aa8960530{color:#fff6;background:#ffffff14;border:2px solid #ffffff26;border-radius:50%;justify-content:center;align-items:center;width:32px;height:32px;font-family:Outfit,sans-serif;font-size:.8rem;font-weight:600;transition:all .3s;display:flex}.progress-step.active.jsx-c1ce523aa8960530 .step-dot.jsx-c1ce523aa8960530{color:#c4956a;background:#c4956a33;border-color:#c4956a}.progress-step.current.jsx-c1ce523aa8960530 .step-dot.jsx-c1ce523aa8960530{color:#fff;background:#c4956a;border-color:#c4956a;box-shadow:0 0 20px #c4956a66}.step-label.jsx-c1ce523aa8960530{color:#fff6;text-align:center;font-family:Outfit,sans-serif;font-size:.75rem;display:none}@media (width>=640px){.step-label.jsx-c1ce523aa8960530{display:block}}.progress-step.active.jsx-c1ce523aa8960530 .step-label.jsx-c1ce523aa8960530{color:#ffffffb3}.form-container.jsx-c1ce523aa8960530{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#ffffff08;border:1px solid #ffffff14;border-radius:24px;padding:32px 24px}@media (width>=640px){.form-container.jsx-c1ce523aa8960530{padding:48px 40px}}.form-header.jsx-c1ce523aa8960530{margin-bottom:32px}.form-step-indicator.jsx-c1ce523aa8960530{color:#c4956a;text-transform:uppercase;letter-spacing:.1em;font-family:Outfit,sans-serif;font-size:.8rem;font-weight:500}.form-header.jsx-c1ce523aa8960530 h1.jsx-c1ce523aa8960530{color:#fff;margin-top:8px;font-family:Cormorant Garamond,serif;font-size:1.75rem;font-weight:500}.form-step.jsx-c1ce523aa8960530{flex-direction:column;gap:24px;display:flex}.form-row.jsx-c1ce523aa8960530{grid-template-columns:1fr;gap:24px;display:grid}@media (width>=640px){.form-row.jsx-c1ce523aa8960530{grid-template-columns:repeat(2,1fr)}}.form-group.jsx-c1ce523aa8960530{flex-direction:column;gap:8px;display:flex}.form-group.jsx-c1ce523aa8960530 label.jsx-c1ce523aa8960530{color:#fffc;font-family:Outfit,sans-serif;font-size:.9rem;font-weight:500}.required.jsx-c1ce523aa8960530{color:#e57373}.optional.jsx-c1ce523aa8960530{color:#fff6;font-size:.85rem;font-weight:400}.form-group.jsx-c1ce523aa8960530 input.jsx-c1ce523aa8960530,.form-group.jsx-c1ce523aa8960530 select.jsx-c1ce523aa8960530,.form-group.jsx-c1ce523aa8960530 textarea.jsx-c1ce523aa8960530{color:#fff;appearance:none;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:12px;padding:14px 18px;font-family:Outfit,sans-serif;font-size:.95rem;transition:all .2s}.form-group.jsx-c1ce523aa8960530 input.jsx-c1ce523aa8960530::placeholder,.form-group.jsx-c1ce523aa8960530 textarea.jsx-c1ce523aa8960530::placeholder{color:#ffffff4d}.form-group.jsx-c1ce523aa8960530 input.jsx-c1ce523aa8960530:focus,.form-group.jsx-c1ce523aa8960530 select.jsx-c1ce523aa8960530:focus,.form-group.jsx-c1ce523aa8960530 textarea.jsx-c1ce523aa8960530:focus{background:#ffffff14;border-color:#c4956a;outline:none}.form-group.jsx-c1ce523aa8960530 select.jsx-c1ce523aa8960530{background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 18px center;background-repeat:no-repeat;padding-right:48px}.form-group.jsx-c1ce523aa8960530 select.jsx-c1ce523aa8960530 option.jsx-c1ce523aa8960530{color:#fff;background:#1a1a2e}.form-group.jsx-c1ce523aa8960530 textarea.jsx-c1ce523aa8960530{resize:vertical;min-height:100px}.field-hint.jsx-c1ce523aa8960530{color:#fff6;font-family:Outfit,sans-serif;font-size:.8rem}.social-inputs.jsx-c1ce523aa8960530{flex-direction:column;gap:12px;display:flex}.social-input.jsx-c1ce523aa8960530{background:#ffffff0d;border:1px solid #ffffff1a;border-radius:12px;align-items:center;transition:all .2s;display:flex;overflow:hidden}.social-input.jsx-c1ce523aa8960530:focus-within{background:#ffffff14;border-color:#c4956a}.social-icon.jsx-c1ce523aa8960530{color:#ffffff80;flex-shrink:0;justify-content:center;align-items:center;width:48px;height:48px;display:flex}.social-input.jsx-c1ce523aa8960530 input.jsx-c1ce523aa8960530{color:#fff;background:0 0;border:none;flex:1;padding:14px 16px 14px 0;font-family:Outfit,sans-serif;font-size:.95rem}.social-input.jsx-c1ce523aa8960530 input.jsx-c1ce523aa8960530:focus{outline:none}.info-card.jsx-c1ce523aa8960530{color:#8b9a7d;background:#8b9a7d1a;border:1px solid #8b9a7d33;border-radius:12px;gap:14px;padding:16px 20px;display:flex}.info-card.jsx-c1ce523aa8960530 svg.jsx-c1ce523aa8960530{flex-shrink:0;margin-top:2px}.info-card.jsx-c1ce523aa8960530 p.jsx-c1ce523aa8960530{margin:0;font-family:Outfit,sans-serif;font-size:.9rem;line-height:1.6}.terms-checkbox.jsx-c1ce523aa8960530{background:#ffffff08;border:1px solid #ffffff14;border-radius:12px;gap:14px;margin-top:8px;padding:20px;display:flex}.terms-checkbox.jsx-c1ce523aa8960530 input[type=checkbox].jsx-c1ce523aa8960530{accent-color:#c4956a;cursor:pointer;flex-shrink:0;width:20px;height:20px;margin-top:2px}.terms-checkbox.jsx-c1ce523aa8960530 label.jsx-c1ce523aa8960530{color:#ffffffb3;cursor:pointer;font-family:Outfit,sans-serif;font-size:.9rem;line-height:1.6}.terms-checkbox.jsx-c1ce523aa8960530 label.jsx-c1ce523aa8960530 a.jsx-c1ce523aa8960530{color:#c4956a;text-underline-offset:2px;text-decoration:underline}.form-navigation.jsx-c1ce523aa8960530{border-top:1px solid #ffffff14;justify-content:space-between;gap:16px;margin-top:32px;padding-top:24px;display:flex}.btn-back.jsx-c1ce523aa8960530{color:#ffffffb3;cursor:pointer;background:0 0;border:1px solid #ffffff26;border-radius:12px;align-items:center;gap:8px;padding:14px 24px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:500;transition:all .2s;display:inline-flex}.btn-back.jsx-c1ce523aa8960530:hover{color:#fff;background:#ffffff0d}.btn-next.jsx-c1ce523aa8960530,.btn-submit.jsx-c1ce523aa8960530{color:#fff;cursor:pointer;background:linear-gradient(135deg,#c4956a 0%,#a67c52 100%);border:none;border-radius:12px;align-items:center;gap:10px;margin-left:auto;padding:14px 28px;font-family:Outfit,sans-serif;font-size:.95rem;font-weight:600;transition:all .3s;display:inline-flex;box-shadow:0 4px 20px #c4956a40}.btn-next.jsx-c1ce523aa8960530:hover,.btn-submit.jsx-c1ce523aa8960530:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 28px #c4956a59}.btn-submit.jsx-c1ce523aa8960530:disabled{opacity:.5;cursor:not-allowed}.btn-submit.submitting.jsx-c1ce523aa8960530{background:#c4956a99}.spinner.jsx-c1ce523aa8960530{border:2px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:18px;height:18px;animation:.8s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.support-info.jsx-c1ce523aa8960530{text-align:center;margin-top:32px}.support-info.jsx-c1ce523aa8960530 p.jsx-c1ce523aa8960530{color:#fff6;font-family:Outfit,sans-serif;font-size:.9rem}.support-info.jsx-c1ce523aa8960530 a.jsx-c1ce523aa8960530{color:#c4956a;text-decoration:none}.support-info.jsx-c1ce523aa8960530 a.jsx-c1ce523aa8960530:hover{text-decoration:underline}.animate-on-scroll.jsx-c1ce523aa8960530{opacity:0;transition:opacity .5s,transform .5s;transform:translateY(20px)}.animate-on-scroll.animated.jsx-c1ce523aa8960530{opacity:1;transform:translateY(0)}@media (width<=480px){.signup-section.jsx-c1ce523aa8960530{padding:90px 0 40px}.form-container.jsx-c1ce523aa8960530{border-radius:20px;padding:24px 20px}.form-navigation.jsx-c1ce523aa8960530{flex-direction:column-reverse}.btn-back.jsx-c1ce523aa8960530,.btn-next.jsx-c1ce523aa8960530,.btn-submit.jsx-c1ce523aa8960530{justify-content:center;width:100%}.btn-next.jsx-c1ce523aa8960530,.btn-submit.jsx-c1ce523aa8960530{margin-left:0}.progress-tracker.jsx-c1ce523aa8960530:before{left:16px;right:16px}}@media (hover:none){.btn-next.jsx-c1ce523aa8960530:hover,.btn-submit.jsx-c1ce523aa8960530:hover:not(:disabled),.btn-back.jsx-c1ce523aa8960530:hover{transform:none}.btn-next.jsx-c1ce523aa8960530:active,.btn-submit.jsx-c1ce523aa8960530:active:not(:disabled){transform:scale(.98)}}@supports (padding:max(0px)){.signup-section.jsx-c1ce523aa8960530{padding-top:max(100px,env(safe-area-inset-top) + 80px);padding-bottom:max(60px,env(safe-area-inset-bottom) + 40px)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(EntrepreneurSignup, "PMX+DHdUU43V3GNjC/BXnC2ZgxM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$monate$2d$cakes$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EntrepreneurSignup;
var _c;
__turbopack_context__.k.register(_c, "EntrepreneurSignup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/monate-cakes/pages/entrepreneur-signup.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/entrepreneur-signup";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/monate-cakes/pages/entrepreneur-signup.js [client] (ecmascript)");
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
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/monate-cakes/pages/entrepreneur-signup\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/monate-cakes/pages/entrepreneur-signup.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d2be3ffb._.js.map