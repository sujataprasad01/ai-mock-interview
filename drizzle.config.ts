import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  out: "./drizzle",
  dbCredentials: {
        url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL || 'postgresql://neondb_owner:npg_8QDA2YbRFkNc@ep-holy-grass-a8n2qltk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
});