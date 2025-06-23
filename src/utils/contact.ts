import { contactsTable } from "~/db/schema";
import { db } from "../index";
import { query } from "@solidjs/router";

export const getAllContacts = query(async () => {
  return await db.select().from(contactsTable);
}, "contacts");
