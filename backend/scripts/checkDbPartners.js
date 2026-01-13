const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'dev.db'); // backend/dev.db
if (!require('fs').existsSync(dbPath)) console.error('DB not found at', dbPath);
const db = new Database(dbPath, { readonly: true });
const sql = 'SELECT * FROM "Partner" WHERE approved = 1';
try {
  const rows = db.prepare(sql).all();
  console.log('rows:', rows);
  rows.forEach(r => {
    try {
      console.log('parsed specialties:', JSON.parse(r.specialties));
    } catch (e) {
      console.error('specialties parse error for row', r.id, e.message);
    }
    try {
      console.log('parsed images:', JSON.parse(r.images));
    } catch (e) {
      console.error('images parse error for row', r.id, e.message);
    }
  });
} catch (e) {
  console.error('Query error', e);
}