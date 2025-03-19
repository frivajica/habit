import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { usersToSpaces } from "./usersSpaces";

export const spaces = pgTable("spaces", {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  made_by: integer('user_id').references(() => users.id),
	made_at: timestamp().defaultNow().notNull(),
	last_modified_at: timestamp(),
});

export const spaceRelations = relations(spaces, ({ one, many }) => ({
  users: one(users, {
    fields: [spaces.made_by],
    references: [users.id],
  }),
  usersToSpaces: many(usersToSpaces),
}));