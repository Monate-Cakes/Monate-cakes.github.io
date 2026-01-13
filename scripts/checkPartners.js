const { PrismaClient } = require('@prisma/client');
(async function(){
  const prisma = new PrismaClient();
  try {
    const partners = await prisma.partner.findMany({ where: { approved: true } });
    console.log('partners count', partners.length);
  } catch (e) {
    console.error('error', e);
  } finally {
    await prisma.$disconnect();
  }
})();