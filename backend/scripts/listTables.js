const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'dev.db'); // backend/dev.db
if (!require('fs').existsSync(dbPath)) console.error('Warning: DB not found at', dbPath);
const db = new Database(dbPath, { readonly: true });
const rows = db.prepare("SELECT name, type FROM sqlite_master WHERE type IN ('table','view')").all();
console.log(rows);