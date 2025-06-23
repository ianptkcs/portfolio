import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { ExperienceType } from "~/enums/experience-type";
import { getAllExpType } from "~/utils/experience";
import { ErrorBoundary, For, Suspense } from "solid-js";
import {
  TimelineItem,
  TimelineList,
  TimelineSkeleton,
} from "~/components/Experience";

const getAllExpTutor = query(async () => {
  "use server";
  return await getAllExpType(ExperienceType.tutor);
}, "expTutor");

export const route = {
  preload: () => getAllExpTutor(),
} satisfies RouteDefinition;

export default function Tutoring() {
  const expTutor = createAsync(() => getAllExpTutor());

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
          <For each={expTutor()}>{(exp) => <TimelineItem exp={exp} />}</For>
        </ErrorBoundary>
      </Suspense>
    </TimelineList>
  );
}
