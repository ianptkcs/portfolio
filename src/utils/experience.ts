// import { db } from "..";
// import { experiencesTable } from "~/db/schema";
// import { eq } from "drizzle-orm";
// import { toTime } from "./format";
import { ExperienceType } from "~/enums/experience-type";
import { experiences } from "~/db/data/experiences";

export const getAllExpType = async (type: ExperienceType) => {
  // const array = (
  //   await db
  //     .select()
  //     .from(experiencesTable)
  //     .where(eq(experiencesTable.type, type))
  // ).map((e) => ({
  //   ...e,
  //   description: JSON.parse(e.description as unknown as string),
  // }));
  // array.sort((b, a) => toTime(b.start) - toTime(a.start));
  // return array;

  return experiences.filter(exp => exp.type === type);
};
