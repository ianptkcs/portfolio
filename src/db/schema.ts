import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { DbTables } from "~/enums/db-tables";
import { ExperienceType } from "~/enums/experience-type";
import { Skill } from "~/enums/skill";
import { Social } from "~/enums/social";

export const contactsTable = sqliteTable(DbTables.contacts, {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().$type<Social>().notNull(),
  url: text().notNull(),
  copy: text(),
});

export const experiencesTable = sqliteTable(DbTables.experiences, {
  id: int("id").primaryKey({ autoIncrement: true }),

  title: text().$type<string>().notNull(),
  institution: text().notNull(),
  img: text().notNull(),

  type: text().$type<ExperienceType>(),

  start: text(),
  end: text(),

  location: text().notNull(),
  description: text().notNull(),

  src: text(),

  skills: text().$type<Skill[]>().notNull(),
});

export type Contact = typeof contactsTable.$inferInsert;
export type Experience = typeof experiencesTable.$inferInsert;
