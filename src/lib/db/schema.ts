// src/lib/db/schema.ts
import { pgTable, serial, text, timestamp, boolean, integer, pgEnum } from 'drizzle-orm/pg-core';

// Optional: enum for attendance status if you want more than just true/false
export const attendanceStatusEnum = pgEnum('attendance_status', ['present', 'absent', 'late', 'excused']);

// Classes table (e.g. Math 101, English Grade 7)
export const classes = pgTable('classes', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),                    // "Math 101 - Grade 10"
  description: text('description'),
  teacherId: text('teacher_id').notNull(),         // Supabase user ID or custom teacher code
  room: text('room'),
  schedule: text('schedule'),                      // e.g. "Mon 08:00-09:30"
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
});

// Attendance records (one per student per class session)
export const attendance = pgTable('attendance', {
  id: serial('id').primaryKey(),
  classId: integer('class_id')
    .notNull()
    .references(() => classes.id, { onDelete: 'cascade' }),
  studentId: text('student_id').notNull(),         // student code or user ID
  date: timestamp('date').notNull(),               // date of the class/session
  status: attendanceStatusEnum('status').default('absent').notNull(),
  notedAt: timestamp('noted_at').defaultNow().notNull(),
  notes: text('notes'),
});