// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/bun-sqlite';
// import { Database } from 'bun:sqlite';
// import { contactsTable, experiencesTable } from './db/schema';
// import { contacts } from './db/data/contacts';
// import { experiences } from './db/data/experiences';
// import { Skill } from './enums/skill';
// import * as schema from "./db/schema";
// import { reset } from 'drizzle-seed';
// import { createClient } from '@libsql/client';
//
// const sqlite = new Database(process.env.DB_FILE_NAME!);
// const db = drizzle({ client: sqlite });
//
// async function seed() {
//   await reset(db, schema);
//   await db.insert(contactsTable).values(contacts);
//   await db.insert(experiencesTable).values(experiences.map(e => ({
//     ...e,
//     skills: JSON.stringify(e.skills) as unknown as Skill[],
//     description: JSON.stringify(e.description) as unknown as string[],
//   })));
// }
//
// seed()
