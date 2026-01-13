const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'dev.db');
const db = new Database(dbPath, { readonly: false });

// Read the migration SQL
const migrationSQL = fs.readFileSync(path.join(__dirname, '..', 'prisma', 'migrations', '20260108220801_init', 'migration.sql'), 'utf8');

// Execute the SQL
db.exec(migrationSQL);

console.log('Tables created successfully');

db.close();
