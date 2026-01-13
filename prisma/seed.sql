-- Seed users
INSERT OR IGNORE INTO "User" (email, passwordHash, role) VALUES ('admin@example.com', 'hashed-password', 'ADMIN');

-- Seed products
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('scones', 'Everyday Bakes', 'Fresh scones daily');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('snowballs', 'Everyday Bakes', 'Sweet snowball treats');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('vetkoek', 'Everyday Bakes', 'Traditional vetkoek');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('koeksisters', 'Specialty', 'Syrupy koeksisters');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('malva pudding cakes', 'Specialty', 'Rich malva pudding cakes');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('milk tart cakes', 'Specialty', 'Creamy milk tart cakes');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('wedding cakes', 'Wedding Cakes', 'Custom wedding cakes');
INSERT OR IGNORE INTO "Product" (name, category, description) VALUES ('birthday cakes', 'Birthday Cakes', 'Fun birthday cakes');

-- Seed locations
INSERT OR IGNORE INTO "Location" (province, city) VALUES ('KwaZulu-Natal', 'Durban');
INSERT OR IGNORE INTO "Location" (province, city) VALUES ('Gauteng', 'Johannesburg');

-- Seed partner (JSON fields stored as JSON text)
INSERT OR IGNORE INTO "Partner" (name, email, whatsapp, province, city, website, specialties, bestSelling, customerRange, revenueRange, motivationalLetter, images, approved)
VALUES (
  'Durban Delights Bakery',
  'partner@example.com',
  '0831234567',
  'KwaZulu-Natal',
  'Durban',
  'https://example.com',
  '["scones","snowballs","vetkoek"]',
  'scones',
  '11-50',
  '5000-10000',
  'We are passionate about bringing traditional South African bakes to our community. Our scones are made fresh daily with love and care.',
  '["https://example.com/img1.jpg"]',
  1
);

-- Link partner to products
INSERT OR IGNORE INTO "PartnerProduct" (partnerId, productId) VALUES (1, 1);
INSERT OR IGNORE INTO "PartnerProduct" (partnerId, productId) VALUES (1, 2);
