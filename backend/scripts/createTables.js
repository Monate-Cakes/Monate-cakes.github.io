const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'dev.db');
const db = new Database(dbPath, { readonly: false });

// Find and read the migration SQL from the repo-level prisma/migrations
const migrationsDir = path.join(__dirname, '..', '..', 'prisma', 'migrations');
if (!fs.existsSync(migrationsDir)) throw new Error(`Migrations directory not found: ${migrationsDir}`);
const migrationDirs = fs.readdirSync(migrationsDir).filter(n => n !== 'migration_lock.toml');
if (migrationDirs.length === 0) throw new Error(`No migrations found in: ${migrationsDir}`);
const migrationPath = path.join(migrationsDir, migrationDirs[0], 'migration.sql');
if (!fs.existsSync(migrationPath)) throw new Error(`migration.sql not found at: ${migrationPath}`);
const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

// Execute the SQL
try {
  db.exec(migrationSQL);
  console.log('Tables created successfully');
} catch (e) {
  console.error('Failed to execute migration SQL:', e.message);
  throw e;
}

db.close();
