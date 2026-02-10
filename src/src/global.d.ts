// src/global.d.ts

// This extends globalThis so TS knows about your custom props
declare global {
  // optional: only in non-production (dev/hot-reload)
  var __db: ReturnType<typeof import('drizzle-orm/postgres-js').drizzle> | undefined;
  var __dbClient: ReturnType<typeof import('postgres').default> | undefined;
}

// Make it empty export so TS treats this as a module (not script)
export {};