import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import { ErrorBoundary, For, Suspense } from "solid-js";
import {
  TimelineItem,
  TimelineList,
  TimelineSkeleton,
} from "~/components/Experience";

const getAllExpDev = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.dev);
}, "expDev");

export const route = {
  preload: () => getAllExpDev(),
} satisfies RouteDefinition;

export default function Programming() {
  const expDev = createAsync(() => getAllExpDev());

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
          <For each={expDev()}>{(exp) => <TimelineItem exp={exp} />}</For>
        </ErrorBoundary>
      </Suspense>
    </TimelineList>
  );
}
