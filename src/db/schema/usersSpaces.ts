import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { spaces } from "./spaces";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const usersToSpaces = pgTable(
  "users_to_spaces",
  {
    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),
    space_id: integer("space_id")
      .notNull()
      .references(() => spaces.id),
  },
  (t) => [primaryKey({ columns: [t.user_id, t.space_id] })]
);

export const usersToGroupsRelations = relations(usersToSpaces, ({ one }) => ({
  group: one(spaces, {
    fields: [usersToSpaces.space_id],
    references: [spaces.id],
  }),
  user: one(users, {
    fields: [usersToSpaces.user_id],
    references: [users.id],
  }),
}));
