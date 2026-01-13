const { execSync } = require('child_process');

async function trySeedWithPrismaClient() {
  let PrismaClient;
  try {
    PrismaClient = require('@prisma/client').PrismaClient;
  } catch (e) {
    console.warn('Could not require @prisma/client:', e.message);
    return false;
  }

  let prisma;
  try {
    // Try to construct without adapter first (works in some setups). If it fails,
    // let the outer code fall back to SQL seeding.
    prisma = new PrismaClient();
  } catch (err) {
    console.warn('PrismaClient construction failed:', err.message);
    return false;
  }

  try {
    console.log('Seeding database via Prisma Client...');

    // Seed products
    await prisma.product.createMany({
      data: [
        { name: 'scones', category: 'Everyday Bakes', description: 'Fresh scones daily' },
        { name: 'snowballs', category: 'Everyday Bakes', description: 'Sweet snowball treats' },
        { name: 'vetkoek', category: 'Everyday Bakes', description: 'Traditional vetkoek' },
        { name: 'koeksisters', category: 'Specialty', description: 'Syrupy koeksisters' },
        { name: 'malva pudding cakes', category: 'Specialty', description: 'Rich malva pudding cakes' },
        { name: 'milk tart cakes', category: 'Specialty', description: 'Creamy milk tart cakes' },
        { name: 'wedding cakes', category: 'Wedding Cakes', description: 'Custom wedding cakes' },
        { name: 'birthday cakes', category: 'Birthday Cakes', description: 'Fun birthday cakes' },
      ],
      skipDuplicates: true,
    });

    // Seed locations (SA provinces/cities)
    const locations = [
      { province: 'KwaZulu-Natal', city: 'Durban' },
      { province: 'Gauteng', city: 'Johannesburg' },
    ];

    for (const loc of locations) {
      const existing = await prisma.location.findFirst({ where: { province: loc.province, city: loc.city } });
      if (!existing) {
        await prisma.location.create({ data: loc });
      }
    }

    // Ensure a default admin user exists
    await prisma.user.createMany({ data: [{ email: 'admin@example.com', passwordHash: 'hashed-password', role: 'ADMIN' }], skipDuplicates: true });

    // Ensure partner exists and link products
    const partner = await prisma.partner.upsert({
      where: { email: 'partner@example.com' },
      update: {},
      create: {
        name: 'Partner One',
        email: 'partner@example.com',
        whatsapp: '1234567890',
        province: 'Province X',
        city: 'City Y',
        website: 'https://example.com',
        specialties: ['beauty', 'wellness'],
        bestSelling: 'scones',
        customerRange: '1-10',
        revenueRange: '0-1000',
        motivationalLetter: 'We love making things.',
        images: ['https://example.com/img1.jpg'],
        approved: true,
      },
    });

    // Link partner to a couple of products by name
    const products = await prisma.product.findMany({ where: { name: { in: ['scones', 'snowballs'] } } });
    const partnerProductData = products.map((p) => ({ partnerId: partner.id, productId: p.id }));
    if (partnerProductData.length > 0) {
      await prisma.partnerProduct.createMany({ data: partnerProductData, skipDuplicates: true });
    }

    console.log('Seeding via Prisma Client finished.');
    return true;
  } catch (e) {
    console.error('Seeding with PrismaClient failed:', e.message);
    return false;
  } finally {
    if (prisma) await prisma.$disconnect();
  }
}

async function main() {
  const ok = await trySeedWithPrismaClient();
  if (!ok) {
    console.log('Falling back to SQL seed...');
    try {
      execSync('npx prisma db execute --file prisma/seed.sql', { stdio: 'inherit' });
      console.log('SQL seed finished.');
    } catch (e) {
      console.error('SQL seed failed:', e.message);
      process.exit(1);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
