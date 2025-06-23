import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import ExperiencePage from "~/components/ExperiencePage";

const getAllExpDev = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.dev);
}, "expDev");

export const route = {
  preload: () => getAllExpDev(),
} satisfies RouteDefinition;

export default function Programming() {
  const expDev = createAsync(() => getAllExpDev());

  return <ExperiencePage data={expDev} />;
}
