import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactsTable = sqliteTable("contacts_table", {
  id: int().primaryKey({ autoIncrement: true }),
  icon: text().notNull(),
  name: text().notNull(),
  url: text().notNull(),
  copy: text(),
});
