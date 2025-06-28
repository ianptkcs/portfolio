import { JSX } from "solid-js";
import { Icon } from "~/enums/icons";

export function ThoughtCard({
  children,
  icon,
  right,
}: {
  children: JSX.Element;
  icon: Icon;
  right?: boolean;
}) {
  return (
    <div
      class={`timeline-box text-xl p-6 flex items-center gap-4 transition-transform
        ${right ? "md:translate-x-5" : "md:-translate-x-5"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-12 h-12 text-primary flex-shrink-0"
      >
        <path
          d={icon}
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="prose prose-sm text-justify">{children}</div>
    </div>
  );
}
