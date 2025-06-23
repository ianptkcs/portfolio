import { A } from "@solidjs/router";
import { For, JSX, Show } from "solid-js";
import { Experience } from "~/db/schema";
import { Icon } from "~/enums/icons";
import { formatExpTime } from "~/utils/format";

export const TimelineList = ({ children }: { children: JSX.Element }) => {
  return (
    <div class="flex p-4 pt-8 justify-center">
      <ul class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical flex items-center">
        {children}
      </ul>
    </div>
  );
};

export const TimelineSkeleton = () => {
  return (
    <li class="flex xl:max-w-4/5 gap-4">
      <div class="timeline-middle flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path fill-rule="evenodd" d={Icon.check} clip-rule="evenodd" />
        </svg>
      </div>
      <div class="timeline-start lg:text-end">
        <div class="skeleton h-5"></div>
        <div class="skeleton h-5"></div>
        <div class="skeleton h-5"></div>
      </div>
      <div class="skeleton h-16 timeline-end mb-10"></div>
    </li>
  );
};

export const TimelineItem = ({ exp }: { exp: Experience }) => {
  return (
    <li class="flex xl:max-w-4/5 gap-4">
      <div class="timeline-middle flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path fill-rule="evenodd" d={Icon.check} clip-rule="evenodd" />
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
  );
};
