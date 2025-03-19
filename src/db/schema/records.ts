import { boolean, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { questions } from "./questions";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const records = pgTable("records", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  question_id: integer('question_id').references(() => questions.id),
  recorded_by: integer('user_id').references(() => users.id),
  value: boolean().notNull(),
	made_at: timestamp().defaultNow().notNull(),
	last_modified_at: timestamp(),
});

export const recordRelations = relations(records, ({ one }) => ({
  question: one(questions, {
    fields: [records.question_id],
    references: [questions.id],
  }),
  recorded_by: one(users, {
    fields: [records.recorded_by],
    references: [users.id],
  }),
}));