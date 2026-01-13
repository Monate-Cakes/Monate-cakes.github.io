# Backend

This folder contains a simple Express backend that integrates with Prisma.

Quick start:

1. Copy `.env.sample` → `.env` and fill values.
2. Install dependencies (already done here): `npm install`.
3. Generate Prisma client (if you change schema):
   `npx prisma generate --schema ../prisma/schema.prisma`
4. Start server: `npm start`

Available endpoints:
- GET /api/partners
- POST /api/apply-partner (multipart, field `images` files + body fields)
- POST /api/requests (multipart, field `images`)
- PUT /api/partners/:id/approve (requires Authorization: Bearer <JWT>)

Notes:
- Cloudinary, email sending and Twilio require corresponding env vars in `.env`.
- The server uses the generated Prisma Client — make sure you run `npx prisma generate` if you change the schema.
