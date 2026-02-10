// src/lib/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Global cache for development hot-reload safety
declare global {
  var __db: ReturnType<typeof drizzle> | undefined;
  var __dbClient: ReturnType<typeof postgres> | undefined;
}

let client: ReturnType<typeof postgres> | undefined;
let dbInstance: ReturnType<typeof drizzle> | undefined;

if (process.env.NODE_ENV !== 'production') {
  if (!global.__dbClient) {
    client = postgres(process.env.DATABASE_URL!, {
      max: 1,
      ssl: 'require',
      prepare: false,
    });
    dbInstance = drizzle(client, { schema });

    global.__dbClient = client;
    global.__db = dbInstance;
  } else {
    client = global.__dbClient;
    dbInstance = global.__db;
  }
} else {
  // Production: fresh per request (serverless-friendly)
  client = postgres(process.env.DATABASE_URL!, {
    max: 1,
    ssl: 'require',
    prepare: false,
  });
  dbInstance = drizzle(client, { schema });
}

export const db = dbInstance!;