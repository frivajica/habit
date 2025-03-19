import { timestamp, pgTable, varchar, serial } from "drizzle-orm/pg-core";
import { spaces } from "./spaces";
import { questions } from "./questions";
import { records } from "./records";
import { relations } from "drizzle-orm";
import { usersToSpaces } from "./usersSpaces";

export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  avatar: varchar({ length: 1200 }),
	made_at: timestamp().defaultNow().notNull(),
	last_modified_at: timestamp(),
});

export const userRelations = relations(users, ({ many }) => ({
  spaces: many(spaces),
  questions: many(questions),
	records: many(records),
	usersToSpaces: many(usersToSpaces),
}));