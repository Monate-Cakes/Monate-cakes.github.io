require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Use better-sqlite3 for API endpoints to avoid Prisma client adapter issues in this environment
const dbPath = path.join(__dirname, 'dev.db');
console.log('Using DB at', dbPath);
const db = new Database(dbPath, { readonly: false });
try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('DB tables:', tables.map(t => t.name));
} catch (e) {
  console.error('Error listing DB tables:', e.message);
}
// keep Prisma client for tasks that can use it if desired, but we won't rely on it for endpoint queries
let prisma;
try {
  prisma = new PrismaClient();
} catch (e) {
  console.warn('PrismaClient not available or needs explicit options; continuing with direct SQLite access');
}

// Cloudinary config
cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET });

// Multer for uploads
const upload = multer({ storage: multer.memoryStorage() });

// Middleware for admin auth
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') throw new Error();
    req.user = decoded;
    next();
  } catch { res.status(401).json({ error: 'Invalid token' }); }
};

// GET /api/partners - Fetch partners with filters
app.get('/api/partners', async (req, res) => {
  try {
    const { province, city, category } = req.query;
    let sql = 'SELECT * FROM "Partner" WHERE approved = 1';
    const params = {};
    if (province) { sql += ' AND province = @province'; params.province = province; }
    if (city) { sql += ' AND city = @city'; params.city = city; }
    const stmt = db.prepare(sql);
    const rows = stmt.all(params);
    // parse JSON columns
    const partners = rows.map(r => ({
      ...r,
      specialties: JSON.parse(r.specialties),
      images: JSON.parse(r.images),
    }));
    res.json({ partners });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/apply-partner - Partner application
app.post('/api/apply-partner', upload.array('images'), async (req, res) => {
  try {
    const { name, email, whatsapp, province, city, website, specialties, bestSelling, customerRange, revenueRange, motivationalLetter } = req.body;
    const images = [];
    for (const file of req.files || []) {
      const dataUri = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
      const result = await cloudinary.uploader.upload(dataUri, { resource_type: 'image' });
      images.push(result.secure_url);
    }
    const stmt = db.prepare(`INSERT INTO "Partner" (name, email, whatsapp, province, city, website, specialties, bestSelling, customerRange, revenueRange, motivationalLetter, images, approved, createdAt) VALUES (@name,@email,@whatsapp,@province,@city,@website,@specialties,@bestSelling,@customerRange,@revenueRange,@motivationalLetter,@images,0,CURRENT_TIMESTAMP)`);
    stmt.run({
      name,
      email,
      whatsapp,
      province,
      city,
      website,
      specialties: JSON.stringify(JSON.parse(specialties || '[]')),
      bestSelling,
      customerRange,
      revenueRange,
      motivationalLetter,
      images: JSON.stringify(images),
    });
    res.json({ message: 'Application submitted' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/requests - Custom requests
app.post('/api/requests', upload.array('images'), async (req, res) => {
  try {
    const { description, email, whatsapp, province, city } = req.body;
    const images = [];
    for (const file of req.files || []) {
      const dataUri = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
      const result = await cloudinary.uploader.upload(dataUri, { resource_type: 'image' });
      images.push(result.secure_url);
    }
    const request = await prisma.customRequest.create({ data: { description, images, email, whatsapp, province, city } });

    // Route to partners (e.g., email matching partners)
    const partners = await prisma.partner.findMany({ where: { province, city, approved: true } });
    if (partners.length > 0 && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } });
      partners.forEach(p => {
        transporter.sendMail({ from: process.env.EMAIL_USER, to: p.email, subject: 'New Custom Request', text: `Description: ${description}\nContact: ${whatsapp}` }).catch(console.error);
      });
    }

    res.json({ message: 'Request submitted', request });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin endpoints (e.g., approve partners)
app.put('/api/partners/:id/approve', authenticateAdmin, async (req, res) => {
  try {
    await prisma.partner.update({ where: { id: parseInt(req.params.id) }, data: { approved: true } });
    res.json({ message: 'Approved' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

// basic health
app.get('/', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
