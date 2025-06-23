import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import ExperiencePage from "~/components/ExperiencePage";

const getAllExpProj = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.proj);
}, "expProj");

export const route = {
  preload: () => getAllExpProj(),
} satisfies RouteDefinition;

export default function Projects() {
  const expProj = createAsync(() => getAllExpProj());

  return <ExperiencePage data={expProj} />;
}
