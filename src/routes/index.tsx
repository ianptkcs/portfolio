import { A, createAsync, query, RouteDefinition } from "@solidjs/router";
import { kSocialIcon, kSocialLabel } from "~/enums/social";
import { Icon } from "~/enums/icons";
import { ErrorBoundary, For, Suspense } from "solid-js";
import { getAllContacts } from "~/utils/contact";

const getAllSocials = query(async () => {
  "use server";
  return await getAllContacts();
}, "contacts");

export const route = {
  preload: () => {
    console.log('oi home')
    return getAllSocials();
  },
} satisfies RouteDefinition;

export default function Index() {
  const contacts = createAsync(() => getAllSocials());

  return (
    <div class="flex flex-col md:flex-row py-6 px-4 md:px-8 gap-4 justify-between items-center h-auto">
      <div class="flex flex-col gap-12 lg:gap-20 items-start justify-center">
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Hi, there!</h1>
          <p class="text-2xl md:text-3xl lg:text-4xl">
            I'm Ian Soares, a <span class="italic">self-taught</span>{" "}
            <b class="text-primary underline underline-offset-4">
              Fullstack Developer
            </b>{" "}
            and a <b class="text-primary underline underline-offset-4">Tutor</b>
          </p>
        </div>
        <div class="flex flex-col gap-6 lg:gap-12">
          <div class="flex flex-col gap-2 lg:gap-4">
            <span class="text-base lg:text-xl font-bold">Let's talk:</span>
            <ul class="flex flex-wrap gap-2 lg:gap-4">
              <Suspense
                fallback={
                  <For each={Array.from({ length: 5 })}>
                    {() => <div class="skeleton h-16"></div>}
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
                  <For each={contacts()}>
                    {(item) => (
                      <li>
                        <A
                          role="button"
                          class="btn btn-soft btn-md lg:btn-lg xl:btn-xl"
                          href={item.url}
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
                              d={kSocialIcon[item.name]}
                            />
                          </svg>
                          {kSocialLabel[item.name]}
                        </A>
                      </li>
                    )}
                  </For>
                </ErrorBoundary>
              </Suspense>
            </ul>
          </div>
          <div class="flex flex-col gap-4 max-w-60">
            <span class="text-base lg:text-xl font-bold">Download my CV:</span>
            <A
              role="button"
              class="btn btn-md lg:btn-lg xl:btn-xl"
              href="cv.pdf"
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
              Download CV
            </A>
          </div>
        </div>
      </div>
      <div class="card card-xl card-border bg-base-100 shadow-md max-w-[560px] h-auto w-full md:w-auto max-h-96 md:max-h-[560px] lg:max-h-[760px]">
        <img
          src="/preferida.jpg"
          alt="Shoes"
          class="size-full p-2 items-center object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
