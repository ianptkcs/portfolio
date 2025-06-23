import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { contactsTable, experiencesTable } from './db/schema';
import { contacts } from './db/data/contacts';
import { experiences } from './db/data/experiences';
import { Skill } from './enums/skill';
import * as schema from "./db/schema";
import { reset } from 'drizzle-seed';

export const db = drizzle(process.env.DB_FILE_NAME!);

async function seed() {
  await reset(db, schema);
  await db.insert(contactsTable).values(contacts);
  await db.insert(experiencesTable).values(experiences.map(e => ({
    ...e,
    skills: JSON.stringify(e.skills) as unknown as Skill[],
    description: JSON.stringify(e.description) as unknown as string[],
  })));
}

seed()
