import { boolean, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { questions } from "./questions";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const records = pgTable("records", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  questionId: integer('question_id').references(() => questions.id),
  recordedBy: integer('user_id').references(() => users.id),
  value: boolean().notNull(),
	madeAt: timestamp().defaultNow().notNull(),
	lastModifiedAt: timestamp(),
});

export const recordRelations = relations(records, ({ one }) => ({
  question: one(questions, {
    fields: [records.questionId],
    references: [questions.id],
  }),
  recordedBy: one(users, {
    fields: [records.recordedBy],
    references: [users.id],
  }),
}));