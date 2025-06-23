import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import ExperiencePage from "~/components/ExperiencePage";

const getAllExpTutor = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.tutor);
}, "expTutor");

export const route = {
  preload: () => getAllExpTutor(),
} satisfies RouteDefinition;

export default function Tutoring() {
  const expTutor = createAsync(() => getAllExpTutor());

  return <ExperiencePage data={expTutor} />;
}
