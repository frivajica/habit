import { drizzle } from 'drizzle-orm/node-postgres';
drizzle({ connection: process.env.DATABASE_URL!, casing: 'snake_case' });
