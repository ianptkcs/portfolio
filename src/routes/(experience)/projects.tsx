import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import { ErrorBoundary, For, Suspense } from "solid-js";
import {
  TimelineItem,
  TimelineList,
  TimelineSkeleton,
} from "~/components/Experience";

const getAllExpProj = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.proj);
}, "expProj");

export const route = {
  preload: () => getAllExpProj(),
} satisfies RouteDefinition;

export default function Projects() {
  const expProj = createAsync(() => getAllExpProj());

  return (
    <TimelineList>
      <Suspense
        fallback={
          <For each={Array.from({ length: 3 })}>
            {() => <TimelineSkeleton />}
          </For>
        }
      >
        <ErrorBoundary
          fallback={(error, reset) => (
            <div>
              <span>{error.message}</span>
              <button onClick={reset}>Try Again</button>
            </div>
          )}
        >
          <For each={expProj()}>{(exp) => <TimelineItem exp={exp} />}</For>
        </ErrorBoundary>
      </Suspense>
    </TimelineList>
  );
}
