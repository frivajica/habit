import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { spaces } from "./spaces";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const usersToSpaces = pgTable(
  "users_to_spaces",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    spaceId: integer("space_id")
      .notNull()
      .references(() => spaces.id),
  },
  (t) => [primaryKey({ columns: [t.userId, t.spaceId] })]
);

export const usersToGroupsRelations = relations(usersToSpaces, ({ one }) => ({
  group: one(spaces, {
    fields: [usersToSpaces.spaceId],
    references: [spaces.id],
  }),
  user: one(users, {
    fields: [usersToSpaces.userId],
    references: [users.id],
  }),
}));
