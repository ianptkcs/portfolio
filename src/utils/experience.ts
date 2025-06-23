import { db } from "..";
import { experiencesTable } from "~/db/schema";
import { ExperienceType } from "~/enums/experience-type";
import { eq } from "drizzle-orm";

export const formatExpTime = (time: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [m, y] = time.split("/").map(Number);
  return `${months[m - 1]} ${y}`;
};

export const toTime = (time: string) => {
  const [m, y] = time.split("/").map(Number);
  return new Date(y, m - 1, 1).getTime();
};

export const getAllExpType = async (type: ExperienceType) => {
  const array = (
    await db
      .select()
      .from(experiencesTable)
      .where(eq(experiencesTable.type, type))
  ).map((e) => ({
    ...e,
    description: JSON.parse(e.description as unknown as string),
  }));
  array.sort((b, a) => toTime(b.start) - toTime(a.start));
  return array;
};
