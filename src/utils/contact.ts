// import { contactsTable } from "~/db/schema";
// import { db } from "../index";
import { query } from "@solidjs/router";
import { contacts } from "~/db/data/contacts";

export const getAllContacts = query(async () => {
  return contacts;
  // return await db.select().from(contactsTable);
}, "contacts");
