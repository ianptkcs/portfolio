import { A, createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { formatExpTime, getAllExpType, toTime } from "~/utils/experience";
import ExperiencePage from "~/components/ExperiencePage";
import { For, Show, Suspense } from "solid-js";
import { db } from "~/index";
import { experiencesTable } from "~/db/schema";
import { eq } from "drizzle-orm";
import QueryList from "~/components/QueryList";
import { Icon } from "~/enums/icons";

const getAllExpEdu = query(async () => {
  "use server";
  const array = (
    await db
      .select()
      .from(experiencesTable)
      .where(eq(experiencesTable.type, ExperienceType.edu))
  ).map((e) => ({
    ...e,
    description: JSON.parse(e.description as unknown as string),
  }));
  array.sort((b, a) => toTime(b.start) - toTime(a.start));
  return array;
}, "education");

export const route = {
  preload: () => getAllExpEdu(),
} satisfies RouteDefinition;

export default function Education() {
  const expEdu = createAsync(() => getAllExpEdu());

  return (
    <div class="flex p-4 pt-8">
      <ul class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical flex items-center">
        <QueryList
          fallbackLength={3}
          skeleton={
            <li>
              <div class="skeleton timeline-middle">
                <div class="skeleton size-5"></div>
              </div>
              <div class="timeline-start mb-10 md:text-end">
                <time class="skeleton h-6"></time>
                <div class="skeleton text-lg font-black"></div>
                <div class="skeleton h-32"></div>
              </div>
              <hr />
            </li>
          }
          data={expEdu}
        >
          {(exp) => (
            <li class="flex xl:max-w-4/5 gap-4">
              <div class="timeline-middle flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d={Icon.check}
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start lg:text-end">
                <time class="font-mono italic">
                  {exp.start
                    ? formatExpTime(exp.start) +
                      " - " +
                      (exp.end ? formatExpTime(exp.end) : "Now")
                    : ""}
                </time>
                <div class="text-lg font-black">{exp.title}</div>
                <div class="text-base italic">{exp.institution}</div>
              </div>
              <div class="timeline-end timeline-box text-lg mb-10">
                <ul class="list-disc px-4 py-2">
                  <For each={exp.description}>
                    {(desc) => (
                      <li>
                        <span>{desc}</span>
                      </li>
                    )}
                  </For>
                  <Show when={exp.src}>
                    <li>
                      <A
                        role="button"
                        class="btn btn-link btn-md lg:btn-lg xl:btn-xl"
                        href={exp.src!}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          class="size-4 md:size-6 xl:size-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d={Icon.file}
                          />
                        </svg>
                        Certificate
                      </A>
                    </li>
                  </Show>
                </ul>
              </div>
              <hr />
            </li>
          )}
        </QueryList>
      </ul>
    </div>
  );
}
