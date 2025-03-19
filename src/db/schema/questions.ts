import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { spaces } from "./spaces";
import { records } from "./records";
import { users } from "./users";

export const questions = pgTable("questions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  space_id: integer('space_id').references(() => spaces.id),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 400 }),
  made_by: integer('user_id').references(() => users.id),
	made_at: timestamp().defaultNow().notNull(),
	last_modified_at: timestamp(),
});

export const questionRelations = relations(questions, ({ one, many }) => ({
  space: one(spaces, {
    fields: [questions.space_id],
    references: [spaces.id],
  }),
  user: one(users, {
    fields: [questions.made_by],
    references: [users.id],
  }),
  records: many(records),
}));