// src/app/api/test-db/route.ts
import { db } from '@/lib/db';
import { sql } from 'drizzle-orm';
import { classes } from '@/lib/db/schema';

export async function GET() {
  try {
    // Optional: insert a test class (comment out after first run)
    // await db.insert(classes).values({
    //   name: 'Test Class - Math 101',
    //   teacherId: 'teacher-001',
    //   room: 'Room A-101',
    // });

    // Read all classes
    const allClasses = await db.select().from(classes);

    // Simple ping
    const timeResult = await db.execute(sql`SELECT NOW() as current_time`);

    return Response.json({
      success: true,
      serverTime: timeResult[0]?.current_time,
      classesCount: allClasses.length,
      sampleClasses: allClasses,
    });
  } catch (error: any) {
    console.error('Error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}