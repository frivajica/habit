import { timestamp, pgTable, varchar, serial } from "drizzle-orm/pg-core";
import { spaces } from "./spaces";
import { questions } from "./questions";
import { records } from "./records";
import { relations } from "drizzle-orm";
import { usersToSpaces } from "./usersSpaces";

export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  avatar: varchar({ length: 1200 }),
	madeAt: timestamp().defaultNow().notNull(),
	lastModifiedAt: timestamp().defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
  spaces: many(spaces),
  questions: many(questions),
	records: many(records),
	usersToSpaces: many(usersToSpaces),
}));