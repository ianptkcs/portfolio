import { AccessorWithLatest } from "@solidjs/router";
import { ErrorBoundary, For, Resource, Suspense } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export default function QueryList<T>({
  fallbackLength,
  skeleton,
  data,
  children,
}: {
  fallbackLength: number;
  skeleton: JSX.Element;
  data: AccessorWithLatest<T[] | undefined>;
  children: (item: T) => JSX.Element;
}) {
  return (
    <Suspense
      fallback={
        <For each={Array.from({ length: fallbackLength })}>
          {() => skeleton}
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
        <For each={data()}>{(item) => children(item)}</For>
      </ErrorBoundary>
    </Suspense>
  );
}
