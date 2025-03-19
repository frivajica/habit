import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { spaces } from "./spaces";
import { records } from "./records";
import { users } from "./users";

export const questions = pgTable("questions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  spaceId: integer('space_id').references(() => spaces.id),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 400 }),
  madeBy: integer('user_id').references(() => users.id),
	madeAt: timestamp().defaultNow().notNull(),
	lastModifiedAt: timestamp(),
});

export const questionRelations = relations(questions, ({ one, many }) => ({
  space: one(spaces, {
    fields: [questions.spaceId],
    references: [spaces.id],
  }),
  user: one(users, {
    fields: [questions.madeBy],
    references: [users.id],
  }),
  records: many(records),
}));